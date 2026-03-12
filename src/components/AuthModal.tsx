import { useState, useRef, useEffect } from 'react';
import type { AuthActions } from '../hooks/useAuth';

type Mode = 'login' | 'signup' | 'reset';

interface Props {
  onClose: () => void;
  actions: AuthActions;
}

// Password must be ≥8 chars, have a letter and a number
function validatePassword(pw: string): string | null {
  if (pw.length < 8) return 'At least 8 characters required.';
  if (!/[A-Za-z]/.test(pw)) return 'Must contain at least one letter.';
  if (!/[0-9]/.test(pw)) return 'Must contain at least one number.';
  return null;
}

function passwordStrength(pw: string): { label: string; level: 0 | 1 | 2 | 3 } {
  if (!pw) return { label: '', level: 0 };
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ['', 'Weak', 'Fair', 'Strong'] as const;
  return { label: labels[score] ?? 'Strong', level: score as 0 | 1 | 2 | 3 };
}

export default function AuthModal({ onClose, actions }: Props) {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => { emailRef.current?.focus(); }, [mode]);

  const pwStrength = passwordStrength(password);
  const strengthColors = ['', '#ef4444', '#f97316', '#22c55e'];

  const reset = () => { setError(''); setSuccess(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();

    if (mode === 'reset') {
      if (!email) return setError('Enter your email address.');
      setLoading(true);
      const err = await actions.resetPassword(email);
      setLoading(false);
      if (err) return setError(err.message);
      setSuccess('Check your email for a password reset link.');
      return;
    }

    if (!email || !password) return setError('Email and password are required.');

    if (mode === 'signup') {
      const pwError = validatePassword(password);
      if (pwError) return setError(pwError);
      if (password !== confirmPw) return setError('Passwords do not match.');
    }

    setLoading(true);
    const err = mode === 'signup'
      ? await actions.signUp(email, password)
      : await actions.signIn(email, password);
    setLoading(false);

    if (err) {
      // Normalize Supabase error messages to avoid leaking internals
      const msg = err.message.includes('Invalid login')
        ? 'Incorrect email or password.'
        : err.message.includes('already registered')
        ? 'An account with this email already exists.'
        : err.message;
      return setError(msg);
    }

    if (mode === 'signup') {
      setSuccess('Account created! Check your email to confirm, then log in.');
      setMode('login');
      setPassword('');
      setConfirmPw('');
    } else {
      onClose();
    }
  };

  const switchMode = (m: Mode) => { setMode(m); reset(); setPassword(''); setConfirmPw(''); };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">🧪</div>
          <h2 className="auth-title">
            {mode === 'login' ? 'Welcome back' : mode === 'signup' ? 'Create account' : 'Reset password'}
          </h2>
          <p className="auth-subtitle">Caltech Course Planner</p>
          <button className="auth-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Tabs */}
        {mode !== 'reset' && (
          <div className="auth-tabs">
            <button
              className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => switchMode('login')}
            >
              Log In
            </button>
            <button
              className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => switchMode('signup')}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {/* Feedback */}
          {error && (
            <div className="auth-alert auth-alert-error" role="alert">
              <span>⚠</span> {error}
            </div>
          )}
          {success && (
            <div className="auth-alert auth-alert-success" role="status">
              <span>✓</span> {success}
            </div>
          )}

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-email">Email address</label>
            <input
              ref={emailRef}
              id="auth-email"
              className="auth-input"
              type="email"
              autoComplete="email"
              value={email}
              onChange={e => { setEmail(e.target.value); reset(); }}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          {mode !== 'reset' && (
            <div className="auth-field">
              <label className="auth-label" htmlFor="auth-password">Password</label>
              <div className="auth-pw-wrap">
                <input
                  id="auth-password"
                  className="auth-input"
                  type={showPw ? 'text' : 'password'}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); reset(); }}
                  placeholder={mode === 'signup' ? 'Min 8 chars, letter + number' : '••••••••'}
                  required
                />
                <button
                  type="button"
                  className="auth-pw-toggle"
                  onClick={() => setShowPw(s => !s)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? '🙈' : '👁'}
                </button>
              </div>

              {/* Strength meter – only on signup */}
              {mode === 'signup' && password && (
                <div className="auth-strength">
                  <div className="auth-strength-bars">
                    {[1, 2, 3].map(n => (
                      <div
                        key={n}
                        className="auth-strength-bar"
                        style={{ background: pwStrength.level >= n ? strengthColors[pwStrength.level] : '#e5e7eb' }}
                      />
                    ))}
                  </div>
                  <span className="auth-strength-label" style={{ color: strengthColors[pwStrength.level] }}>
                    {pwStrength.label}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Confirm password */}
          {mode === 'signup' && (
            <div className="auth-field">
              <label className="auth-label" htmlFor="auth-confirm">Confirm password</label>
              <input
                id="auth-confirm"
                className="auth-input"
                type={showPw ? 'text' : 'password'}
                autoComplete="new-password"
                value={confirmPw}
                onChange={e => { setConfirmPw(e.target.value); reset(); }}
                placeholder="Re-enter password"
                required
              />
              {confirmPw && password !== confirmPw && (
                <p className="auth-field-hint error">Passwords don't match.</p>
              )}
            </div>
          )}

          {/* Forgot password link */}
          {mode === 'login' && (
            <button type="button" className="auth-forgot" onClick={() => switchMode('reset')}>
              Forgot password?
            </button>
          )}

          {/* Submit */}
          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? (
              <span className="auth-spinner" />
            ) : mode === 'login' ? 'Log In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
          </button>

          {/* Back link for reset mode */}
          {mode === 'reset' && (
            <button type="button" className="auth-back" onClick={() => switchMode('login')}>
              ← Back to login
            </button>
          )}
        </form>

        <p className="auth-footer">
          Your schedule is encrypted in transit and stored securely.
        </p>
      </div>
    </div>
  );
}
