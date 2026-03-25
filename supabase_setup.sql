-- ================================================================
-- Caltech Course Planner – Supabase Database Setup
-- ================================================================
-- Run this in your Supabase project:
--   Dashboard → SQL Editor → New Query → paste & run
-- ================================================================

-- ── schedules table ─────────────────────────────────────────────
create table if not exists public.schedules (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  name         text not null default 'My Schedule',
  schedule_data jsonb not null default '{}',
  major_id     text not null default '',
  minor_id     text not null default '',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Index for fast per-user lookups
create index if not exists schedules_user_id_idx
  on public.schedules (user_id);

-- ── Auto-update updated_at on every change ───────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace trigger schedules_updated_at
  before update on public.schedules
  for each row execute procedure public.set_updated_at();

-- ── Row Level Security ───────────────────────────────────────────
-- CRITICAL: ensures users can only ever see and modify their own rows.
-- The anon key is safe to ship in the frontend because RLS enforces
-- server-side that auth.uid() must match user_id on every query.

alter table public.schedules enable row level security;

-- Users can read their own schedules
drop policy if exists "select_own_schedules" on public.schedules;
create policy "select_own_schedules"
  on public.schedules for select
  using (auth.uid() = user_id);

-- Users can insert rows for themselves only
drop policy if exists "insert_own_schedules" on public.schedules;
create policy "insert_own_schedules"
  on public.schedules for insert
  with check (auth.uid() = user_id);

-- Users can update their own rows only
drop policy if exists "update_own_schedules" on public.schedules;
create policy "update_own_schedules"
  on public.schedules for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Users can delete their own rows only
drop policy if exists "delete_own_schedules" on public.schedules;
create policy "delete_own_schedules"
  on public.schedules for delete
  using (auth.uid() = user_id);

-- ── courses table ────────────────────────────────────────────────
-- Populated by the sync-courses Edge Function (supabase/functions/sync-courses/).
-- Publicly readable; only the service role (Edge Function) can write.
create table if not exists public.courses (
  id          text primary key,           -- derived: number.replace(/[\s/]/g, '')
  number      text not null,              -- e.g. "CS 1", "Ae/APh/CE/ME 101a"
  name        text not null,
  units       integer not null default 0,
  terms       text[] not null default '{}', -- ['FA'], ['WI','SP'], etc.
  department  text not null default '',   -- first dept prefix, e.g. "Ae", "CS"
  synced_at   timestamptz not null default now()
);

create index if not exists courses_department_idx on public.courses (department);
create index if not exists courses_number_idx     on public.courses (number);

alter table public.courses enable row level security;

-- Anyone (including unauthenticated visitors) can read the course catalog
drop policy if exists "courses_public_read" on public.courses;
create policy "courses_public_read"
  on public.courses for select
  to anon, authenticated
  using (true);

-- Only the service role can insert/update/delete (used by the Edge Function)
-- No explicit policy needed — service role bypasses RLS by default.

-- ── Course sync schedule (pg_cron + pg_net) ───────────────────────
-- Run the sync Edge Function ~2 weeks before each Caltech term ends:
--   Feb 25  (Winter term ends ~Mar 13)
--   May 25  (Spring term ends ~Jun 7)
--   Nov 25  (Fall term ends ~Dec 10)
--
-- Prerequisites: enable pg_cron and pg_net extensions in the Supabase dashboard
--   Dashboard → Database → Extensions → search "cron" and "http"
--
-- Replace YOUR_PROJECT_REF and YOUR_SERVICE_ROLE_KEY before running:
--
-- select cron.schedule(
--   'sync-courses-term',
--   '0 6 25 2,5,11 *',
--   $$
--   select net.http_post(
--     url     := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/sync-courses',
--     headers := jsonb_build_object(
--       'Content-Type',  'application/json',
--       'Authorization', 'Bearer YOUR_SERVICE_ROLE_KEY'
--     ),
--     body    := '{}'::jsonb
--   );
--   $$
-- );
--
-- Or trigger a one-time manual sync from your terminal:
--   supabase functions invoke sync-courses --project-ref YOUR_PROJECT_REF

-- ── Email confirmation (optional) ───────────────────────────────
-- To require email confirmation before login, go to:
--   Supabase Dashboard → Authentication → Providers → Email
--   and enable "Confirm email".
-- ================================================================
