/**
 * Database helpers for schedule persistence.
 * All queries run through Supabase RLS — the server enforces
 * that each user can only read/write their own rows.
 */
import { supabase, type DbSchedule } from './supabase';
import type { Schedule } from '../types';

export type SaveResult = { ok: true; id: string } | { ok: false; error: string };
export type LoadResult = { ok: true; data: DbSchedule | null } | { ok: false; error: string };

/** Upsert the user's primary schedule (one per user for now). */
export async function saveSchedule(
  userId: string,
  schedule: Schedule,
  majorId: string,
  minorId: string,
  existingId?: string,
): Promise<SaveResult> {
  const payload = {
    user_id: userId,
    name: 'My Schedule',
    schedule_data: schedule,
    major_id: majorId,
    minor_id: minorId,
    updated_at: new Date().toISOString(),
  };

  if (existingId) {
    const { data, error } = await supabase
      .from('schedules')
      .update(payload)
      .eq('id', existingId)
      .eq('user_id', userId) // belt-and-suspenders: RLS already enforces this
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
export async function loadSchedule(userId: string): Promise<LoadResult> {
  const { data, error } = await supabase
    .from('schedules')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return { ok: false, error: error.message };
  return { ok: true, data };
}
