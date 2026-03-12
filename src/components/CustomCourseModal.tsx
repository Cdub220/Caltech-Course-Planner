import { useState } from 'react';
import type { Course, Term, MeetingTime } from '../types';
import { DEPARTMENTS } from '../data/courses';

interface Props {
  onClose: () => void;
  onAdd: (course: Course) => void;
}

const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };

const DAY_OPTIONS = [
  { value: '', label: 'No scheduled time' },
  { value: 'MWF', label: 'Mon / Wed / Fri' },
  { value: 'TTh', label: 'Tue / Thu' },
  { value: 'MW', label: 'Mon / Wed' },
  { value: 'F', label: 'Friday only' },
  { value: 'Daily', label: 'Daily (M–F)' },
];

const TIME_OPTIONS = [
  '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
];

// Auto-compute end time based on days and start (MWF ≈ 55min, TTh ≈ 85min)
function defaultEnd(days: string, start: string): string {
  if (!start) return '';
  const [h, m] = start.split(':').map(Number);
  const dur = days === 'TTh' ? 85 : 55;
  const total = h * 60 + m + dur;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

export default function CustomCourseModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [units, setUnits] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedTerms, setSelectedTerms] = useState<Set<Term>>(new Set(['FA', 'WI', 'SP']));
  const [days, setDays] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');

  const toggleTerm = (t: Term) => {
    setSelectedTerms(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  };

  const handleDaysChange = (val: string) => {
    setDays(val);
    if (val && startTime) setEndTime(defaultEnd(val, startTime));
    else if (!val) setEndTime('');
  };

  const handleStartChange = (val: string) => {
    setStartTime(val);
    if (days && val) setEndTime(defaultEnd(days, val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Course name is required.');
    const u = Number(units);
    if (!units || isNaN(u) || u <= 0) return setError('Units must be a positive number.');
    if (selectedTerms.size === 0) return setError('Select at least one term.');

    let meetingTime: MeetingTime | undefined;
    if (days && startTime) {
      meetingTime = { days, start: startTime, end: endTime || defaultEnd(days, startTime) };
    }

    const course: Course = {
      id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      number: number.trim() || name.trim().slice(0, 12),
      name: name.trim(),
      units: u,
      terms: [...selectedTerms] as Term[],
      department: department || 'Custom',
      meetingTime,
      isCustom: true,
    };

    onAdd(course);
    onClose();
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal custom-course-modal" onClick={e => e.stopPropagation()}>
        <div className="auth-header">
          <h2 className="auth-title" style={{ marginTop: 8 }}>Add Custom Course</h2>
          <p className="auth-subtitle">Create a course not in the catalog</p>
          <button className="auth-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="auth-alert auth-alert-error" role="alert">
              <span>!</span> {error}
            </div>
          )}

          <div className="custom-course-row">
            <div className="auth-field" style={{ flex: 2 }}>
              <label className="auth-label">Course Name *</label>
              <input
                className="auth-input"
                type="text"
                placeholder="e.g. Advanced Topics in ML"
                value={name}
                onChange={e => { setName(e.target.value); setError(''); }}
              />
            </div>
            <div className="auth-field" style={{ flex: 1 }}>
              <label className="auth-label">Course # (optional)</label>
              <input
                className="auth-input"
                type="text"
                placeholder="e.g. CS 199"
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="custom-course-row">
            <div className="auth-field" style={{ flex: 1 }}>
              <label className="auth-label">Units *</label>
              <input
                className="auth-input"
                type="number"
                min="1"
                max="36"
                placeholder="9"
                value={units}
                onChange={e => { setUnits(e.target.value); setError(''); }}
              />
            </div>
            <div className="auth-field" style={{ flex: 2 }}>
              <label className="auth-label">Department (optional)</label>
              <select
                className="auth-input"
                value={department}
                onChange={e => setDepartment(e.target.value)}
              >
                <option value="">— Custom / Other —</option>
                {Object.entries(DEPARTMENTS).map(([code, dname]) => (
                  <option key={code} value={code}>{code} – {dname}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label">Terms Offered</label>
            <div className="term-toggle-row">
              {TERMS.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`term-toggle-btn ${selectedTerms.has(t) ? 'active' : ''}`}
                  onClick={() => { toggleTerm(t); setError(''); }}
                >
                  {TERM_LABELS[t]}
                </button>
              ))}
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label">Meeting Time (optional)</label>
            <div className="custom-course-row">
              <select
                className="auth-input"
                value={days}
                onChange={e => handleDaysChange(e.target.value)}
                style={{ flex: 1 }}
              >
                {DAY_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {days && (
                <>
                  <select
                    className="auth-input"
                    value={startTime}
                    onChange={e => handleStartChange(e.target.value)}
                    style={{ flex: 1 }}
                  >
                    <option value="">Start time</option>
                    {TIME_OPTIONS.map(t => (
                      <option key={t} value={t}>{t} {Number(t.split(':')[0]) < 12 ? 'AM' : 'PM'}</option>
                    ))}
                  </select>
                  <input
                    className="auth-input"
                    type="text"
                    placeholder="End (auto)"
                    value={endTime}
                    onChange={e => setEndTime(e.target.value)}
                    style={{ flex: 1 }}
                  />
                </>
              )}
            </div>
            {days && startTime && endTime && (
              <p className="auth-field-hint" style={{ marginTop: 4 }}>
                {days} {startTime}–{endTime}
              </p>
            )}
          </div>

          <button className="auth-submit" type="submit">Add to Catalog</button>
        </form>

        <p className="auth-footer">
          Custom courses are saved with your schedule and only visible to you.
        </p>
      </div>
    </div>
  );
}
