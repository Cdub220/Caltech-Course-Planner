import { useState } from 'react';
import type { Course, Term } from '../types';
import { DEPARTMENTS } from '../data/courses';

interface Props {
  onClose: () => void;
  onAdd: (course: Course) => void;
}

const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };


export default function CustomCourseModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [units, setUnits] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedTerms, setSelectedTerms] = useState<Set<Term>>(new Set(['FA', 'WI', 'SP']));
  const [error, setError] = useState('');

  const toggleTerm = (t: Term) => {
    setSelectedTerms(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Course name is required.');
    const u = Number(units);
    if (!units || isNaN(u) || u <= 0) return setError('Units must be a positive number.');
    if (selectedTerms.size === 0) return setError('Select at least one term.');

    const course: Course = {
      id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      number: number.trim() || name.trim().slice(0, 12),
      name: name.trim(),
      units: u,
      terms: [...selectedTerms] as Term[],
      department: department || 'Custom',
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

          <button className="auth-submit" type="submit">Add to Catalog</button>
        </form>

        <p className="auth-footer">
          Custom courses are saved with your schedule and only visible to you.
        </p>
      </div>
    </div>
  );
}
