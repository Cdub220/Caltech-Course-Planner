// Supabase Edge Function: sync-courses
// Fetches the Caltech course catalog from donut.caltech.edu and upserts
// into the public.courses table. Called on a cron schedule (see supabase_setup.sql).
//
// Deploy: supabase functions deploy sync-courses
// Manual trigger: supabase functions invoke sync-courses

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const API_URL = 'https://donut.caltech.edu/1/planner/courses';

const TERM_MAP: Record<number, string> = { 1: 'FA', 2: 'WI', 3: 'SP' };

// Derive a stable, collision-free ID from a course number.
// Strategy: remove all spaces and forward slashes.
// Examples:
//   "CS 1"              → "CS1"
//   "Ma 1a"             → "Ma1a"
//   "Ae/APh/CE/ME 101a" → "AeAPhCEME101a"
//   "NB/Bi/CNS 150"     → "NBBiCNS150"
function deriveId(number: string): string {
  return number.replace(/[\s/]/g, '');
}

// Extract the primary department from a course number.
// For cross-listed courses, uses the first listed department.
// Examples: "CS 1" → "CS", "Ae/APh/CE/ME 101a" → "Ae"
function deriveDepartment(number: string): string {
  return number.split(' ')[0].split('/')[0];
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

  // Fetch from Caltech API
  let apiData: Record<string, unknown>;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    apiData = await res.json();
  } catch (err) {
    return new Response(
      JSON.stringify({ error: `Failed to fetch API: ${err}` }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Transform API data into DB rows
  const courses = Object.values(apiData)
    .filter((c): c is Record<string, unknown> => typeof c === 'object' && c !== null)
    .map(c => {
      const number = c.number as string;
      const unitsArr = (c.units as number[]) ?? [0, 0, 0];
      const termsArr = (c.terms as number[]) ?? [];

      return {
        id: deriveId(number),
        number,
        name: c.name as string,
        units: unitsArr.reduce((a, b) => a + b, 0),
        terms: termsArr.map(t => TERM_MAP[t]).filter(Boolean),
        department: deriveDepartment(number),
        synced_at: new Date().toISOString(),
      };
    })
    // Skip courses with zero units or empty terms (usually admin/placeholder entries)
    .filter(c => c.units > 0 && c.terms.length > 0);

  // Upsert all courses (insert or update on id conflict)
  const { error } = await supabase
    .from('courses')
    .upsert(courses, { onConflict: 'id' });

  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(
    JSON.stringify({ ok: true, synced: courses.length, timestamp: new Date().toISOString() }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
});
