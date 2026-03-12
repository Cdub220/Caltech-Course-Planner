import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables.\n' +
    'Copy .env.example → .env.local and fill in your project values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Persist session in localStorage (safe — only stores the JWT, never the password)
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// ── Types mirroring the DB schema ────────────────────────────────
export interface DbSchedule {
  id: string;
  user_id: string;
  name: string;
  schedule_data: unknown; // may be Schedule directly (legacy) or { schedule, customCourses }
  major_id: string;
  minor_id: string;
  updated_at: string;
  created_at: string;
}
