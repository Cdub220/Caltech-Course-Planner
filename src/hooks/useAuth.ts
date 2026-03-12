import { useEffect, useState } from 'react';
import type { Session, User, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type AuthStatus = 'loading' | 'authed' | 'anon';

export interface AuthState {
  status: AuthStatus;
  user: User | null;
  session: Session | null;
}

export interface AuthActions {
  signUp: (email: string, password: string) => Promise<AuthError | null>;
  signIn: (email: string, password: string) => Promise<AuthError | null>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<AuthError | null>;
}

export function useAuth(): AuthState & AuthActions {
  const [state, setState] = useState<AuthState>({
    status: 'loading',
    user: null,
    session: null,
  });

  useEffect(() => {
    // Hydrate from existing session immediately
    supabase.auth.getSession().then(({ data }) => {
      setState({
        status: data.session ? 'authed' : 'anon',
        user: data.session?.user ?? null,
        session: data.session,
      });
    });

    // Subscribe to auth changes (login, logout, token refresh)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({
        status: session ? 'authed' : 'anon',
        user: session?.user ?? null,
        session,
      });
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string): Promise<AuthError | null> => {
    const { error } = await supabase.auth.signUp({ email, password });
    return error;
  };

  const signIn = async (email: string, password: string): Promise<AuthError | null> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string): Promise<AuthError | null> => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    return error;
  };

  return { ...state, signUp, signIn, signOut, resetPassword };
}
