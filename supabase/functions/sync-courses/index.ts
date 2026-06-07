// Supabase Edge Function: sync-courses
// Fetches the Caltech course catalog by scraping schedules.caltech.edu
// across the last 4 academic years × 3 terms (12 HTML pages) and upserts
// into the public.courses table. Each page is the schedule for ONE term;
// we merge by course-ID so each course's `terms` is the union of every
// term it has appeared in.
//
// Renamed courses are preserved automatically: if "CS 137" appears in
// older terms and "CS 138" appears in newer terms, both end up as
// separate rows in the DB (since they have distinct IDs).
//
// Deploy: supabase functions deploy sync-courses
// Manual trigger: supabase functions invoke sync-courses

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Last 4 academic years. Newest first so older terms can't overwrite
// the title/units of a still-offered course.
const ACADEMIC_YEARS = ['2026-27', '2025-26', '2024-25', '2023-24'];
const TERMS = ['FA', 'WI', 'SP'] as const;

interface CourseRow {
  id: string;
  number: string;
  name: string;
  units: number;
  terms: string[];
  department: string;
  synced_at: string;
}

// Normalize the course number returned by schedules.caltech.edu into the
// convention used across the rest of the app (matches donut.caltech.edu
// and our majorRequirements data):
//   "CS 001"            → "CS 1"
//   "CS 080A"           → "CS 80a"
//   "CS/CNS/EE  156A"   → "CS/CNS/EE 156a"   (collapse double spaces)
//   "ACM190"            → "ACM 190"          (insert missing space)
//   "Ae 103A"           → "Ae 103a"          (lowercase trailing letter)
function normalizeNumber(num: string): string {
  // 1. Collapse internal whitespace
  num = num.replace(/\s+/g, ' ').trim();
  // 2. Insert missing space between department letters and digits
  num = num.replace(/([A-Za-z])(\d)/g, '$1 $2');
  // 3. Strip leading zeros from the numeric portion
  num = num.replace(/\s0+(\d)/g, ' $1');
  // 4. Lowercase trailing letter suffix
  num = num.replace(/(\d+)([A-Z]+)/g, (_, d, suf) => d + suf.toLowerCase());
  return num;
}

function deriveId(number: string): string {
  return number.replace(/[\s/]/g, '');
}

function deriveDepartment(number: string): string {
  return number.split(' ')[0].split('/')[0];
}

// Decode the most common HTML entities the schedules page uses.
function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();
}

// Match each course block: a <a href="…catalog.caltech.edu/current/…">
// anchor holds the course number, followed by a units string and a title,
// each in their own <font face="verdana">. The units field is one of:
//   • "3-0-9"     — lecture-lab-study integer triple
//   • "1.5-0-1.5" — decimal triple (graduate proseminars use 0.5-unit increments)
//   • "+"         — variable (research / thesis / independent study)
// Allowing all three is critical: skipping any variant causes the regex
// to slide past that course and steal the next course's units + title,
// silently dropping fundamentals like SEC 10 (sits after a decimal-unit
// Psy course) or CS 2 (sits after a variable-unit CNS course).
const COURSE_BLOCK_RE = new RegExp(
  String.raw`<a href="http://catalog\.caltech\.edu/current/[^"]*"[^>]*>\s*` +
    String.raw`<font[^>]*>([^<]+)</font>\s*</a>` +
    String.raw`[\s\S]*?` +
    String.raw`<font[^>]*>([\d.]+-[\d.]+-[\d.]+|\+)</font>` +
    String.raw`[\s\S]*?` +
    String.raw`<font[^>]*>([^<]{4,200})</font>`,
  'g',
);

interface ParsedCourse {
  number: string;
  units: number;
  name: string;
}

function parseSchedule(html: string): ParsedCourse[] {
  const out: ParsedCourse[] = [];
  const seen = new Set<string>(); // dedupe within one term page
  let m: RegExpExecArray | null;
  while ((m = COURSE_BLOCK_RE.exec(html)) !== null) {
    const rawNum = decodeEntities(m[1]);
    const unitsStr = m[2];
    const name = decodeEntities(m[3]);
    if (!rawNum || !name) continue;
    const number = normalizeNumber(rawNum);
    if (seen.has(number)) continue;
    seen.add(number);
    // "+" is the schedules-page notation for variable units — represent as 0
    // so the existing variable-units UI handling kicks in.
    // Fractional parts (e.g. "1.5-0-1.5") get rounded after summing so the
    // DB integer column stays accurate to the nearest whole unit.
    const units = unitsStr === '+'
      ? 0
      : Math.round(unitsStr.split('-').map(p => parseFloat(p) || 0).reduce((a, b) => a + b, 0));
    out.push({ number, units, name });
  }
  return out;
}

async function fetchTerm(year: string, term: string): Promise<ParsedCourse[]> {
  const url = `https://schedules.caltech.edu/${term}${year}.html`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    // Schedules pages are latin-1 encoded; decode accordingly so accented
    // names and the &nbsp; escapes survive.
    const buf = await res.arrayBuffer();
    const html = new TextDecoder('iso-8859-1').decode(buf);
    return parseSchedule(html);
  } catch {
    return [];
  }
}

Deno.serve(async () => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !serviceKey) {
    return new Response(
      JSON.stringify({ error: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  // Merge across all term pages. Newest term seen first wins for title/units;
  // terms array accumulates every term in which the course appeared.
  const merged = new Map<string, CourseRow>();
  const pageResults: { url: string; count: number; ok: boolean }[] = [];
  const now = new Date().toISOString();

  for (const year of ACADEMIC_YEARS) {
    for (const term of TERMS) {
      const url = `${term}${year}`;
      const parsed = await fetchTerm(year, term);
      pageResults.push({ url, count: parsed.length, ok: parsed.length > 0 });

      for (const c of parsed) {
        const id = deriveId(c.number);
        const existing = merged.get(id);
        if (existing) {
          if (!existing.terms.includes(term)) existing.terms.push(term);
        } else {
          merged.set(id, {
            id,
            number: c.number,
            name: c.name,
            units: c.units,
            terms: [term],
            department: deriveDepartment(c.number),
            synced_at: now,
          });
        }
      }
    }
  }

  const courses = [...merged.values()];
  if (courses.length === 0) {
    return new Response(
      JSON.stringify({ error: 'No courses parsed from any term page', pageResults }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Supabase upsert payloads have a practical row-count ceiling; chunk to
  // keep each request small and avoid any single-batch limits.
  const CHUNK = 500;
  for (let i = 0; i < courses.length; i += CHUNK) {
    const chunk = courses.slice(i, i + CHUNK);
    const { error } = await supabase.from('courses').upsert(chunk, { onConflict: 'id' });
    if (error) {
      return new Response(
        JSON.stringify({ error: error.message, processedBeforeError: i }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }
  }

  return new Response(
    JSON.stringify({
      ok: true,
      synced: courses.length,
      pageResults,
      timestamp: now,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
});
