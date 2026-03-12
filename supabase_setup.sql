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
create policy "select_own_schedules"
  on public.schedules for select
  using (auth.uid() = user_id);

-- Users can insert rows for themselves only
create policy "insert_own_schedules"
  on public.schedules for insert
  with check (auth.uid() = user_id);

-- Users can update their own rows only
create policy "update_own_schedules"
  on public.schedules for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Users can delete their own rows only
create policy "delete_own_schedules"
  on public.schedules for delete
  using (auth.uid() = user_id);

-- ── Email confirmation (optional) ───────────────────────────────
-- To require email confirmation before login, go to:
--   Supabase Dashboard → Authentication → Providers → Email
--   and enable "Confirm email".
-- ================================================================
