/**
 * Database helpers for schedule persistence.
 * All queries run through Supabase RLS — the server enforces
 * that each user can only read/write their own rows.
 */
import { supabase } from './supabase';
import type { Schedule, Course } from '../types';

export type SaveResult = { ok: true; id: string } | { ok: false; error: string };

export interface LoadedData {
  schedule: Schedule;
  customCourses: Course[];
  major_id: string;
  minor_id: string;
  id: string;
}

/** Parse schedule_data which may be legacy (Schedule only) or new ({ schedule, customCourses }). */
function parseScheduleData(raw: unknown): { schedule: Schedule; customCourses: Course[] } {
  if (raw && typeof raw === 'object' && !Array.isArray(raw) && 'schedule' in raw) {
    const typed = raw as { schedule: Schedule; customCourses?: Course[] };
    return { schedule: typed.schedule, customCourses: typed.customCourses ?? [] };
  }
  return { schedule: raw as Schedule, customCourses: [] };
}

/** Upsert the user's primary schedule (one per user for now). */
export async function saveSchedule(
  userId: string,
  schedule: Schedule,
  customCourses: Course[],
  majorId: string,
  minorId: string,
  existingId?: string,
): Promise<SaveResult> {
  const payload = {
    user_id: userId,
    name: 'My Schedule',
    schedule_data: { schedule, customCourses },
    major_id: majorId,
    minor_id: minorId,
    updated_at: new Date().toISOString(),
  };

  if (existingId) {
    const { data, error } = await supabase
      .from('schedules')
      .update(payload)
      .eq('id', existingId)
      .eq('user_id', userId)
      .select('id')
      .single();

    if (error) return { ok: false, error: error.message };
    return { ok: true, id: data.id };
  }

  const { data, error } = await supabase
    .from('schedules')
    .insert(payload)
    .select('id')
    .single();

  if (error) return { ok: false, error: error.message };
  return { ok: true, id: data.id };
}

/** Load the user's most-recent schedule. */
export async function loadSchedule(userId: string): Promise<{ ok: true; data: LoadedData | null } | { ok: false; error: string }> {
  const { data, error } = await supabase
    .from('schedules')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return { ok: false, error: error.message };
  if (!data) return { ok: true, data: null };

  const { schedule, customCourses } = parseScheduleData(data.schedule_data);
  return {
    ok: true,
    data: { schedule, customCourses, major_id: data.major_id, minor_id: data.minor_id, id: data.id },
  };
}
