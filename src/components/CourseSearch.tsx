import { useState, useMemo } from 'react';
import type { Course, Term } from '../types';
import { COURSES, DEPARTMENTS } from '../data/courses';
import type { DragPayload } from '../App';

interface Props {
  onAddCourse: (course: Course, year: string, term: Term) => void;
  scheduledCourseIds: Set<string>;
  onDragStart: (payload: DragPayload) => void;
  onDragEnd: () => void;
}

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'] as const;
const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };

const DEPT_COLORS: Record<string, string> = {
  Ma: '#7b5ea7', Ph: '#2563eb', Ch: '#059669', CS: '#d97706',
  EE: '#dc2626', ME: '#0891b2', Bi: '#16a34a', BE: '#65a30d',
  Ay: '#7c3aed', Ge: '#92400e', Ec: '#b45309', BEM: '#c2410c',
  ACM: '#6d28d9', En: '#be185d', H: '#9f1239', Pl: '#7e22ce',
  PS: '#1d4ed8', Psy: '#0e7490', SS: '#4338ca', SEC: '#475569',
  PE: '#15803d', APh: '#1e40af', ESE: '#047857', ChE: '#b91c1c',
  MS: '#6b7280', CNS: '#8b5cf6', IDS: '#0369a1',
};

export default function CourseSearch({ onAddCourse, scheduledCourseIds, onDragStart, onDragEnd }: Props) {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [addTarget, setAddTarget] = useState<{ year: string; term: Term }>({
    year: 'Freshman',
    term: 'FA',
  });

  const filtered = useMemo(() => {
    if (!search && !deptFilter) return [];
    const q = search.toLowerCase();
    return COURSES.filter(c => {
      const matchesSearch =
        !q ||
        c.number.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q);
      const matchesDept = !deptFilter || c.department === deptFilter;
      return matchesSearch && matchesDept;
    });
  }, [search, deptFilter]);

  const depts = useMemo(
    () => [...new Set(COURSES.map(c => c.department))].sort(),
    []
  );

  return (
    <aside className="course-search">
      <div className="search-header">
        <h2 className="search-title">Course Catalog</h2>
        <span className="search-count">
          {search || deptFilter ? `${filtered.length} found` : `${COURSES.length} total`}
        </span>
      </div>

      <div className="search-controls">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>×</button>
          )}
        </div>
        <select
          className="dept-select"
          value={deptFilter}
          onChange={e => setDeptFilter(e.target.value)}
        >
          <option value="">All Departments</option>
          {depts.map(d => (
            <option key={d} value={d}>{d} – {DEPARTMENTS[d] ?? d}</option>
          ))}
        </select>
      </div>

      <div className="add-target-bar">
        <span className="add-target-label">Quick add →</span>
        <select
          value={addTarget.year}
          onChange={e => setAddTarget(t => ({ ...t, year: e.target.value }))}
          className="add-target-select"
        >
          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select
          value={addTarget.term}
          onChange={e => setAddTarget(t => ({ ...t, term: e.target.value as Term }))}
          className="add-target-select"
        >
          {TERMS.map(t => <option key={t} value={t}>{TERM_LABELS[t]}</option>)}
        </select>
      </div>

      <div className="drag-hint">
        <span>⇄ Drag cards onto the schedule</span>
      </div>

      <div className="course-list">
        {!search && !deptFilter && (
          <div className="no-results">
            <span className="no-results-icon">🔍</span>
            <p>Search or filter by department to browse courses</p>
          </div>
        )}
        {(search || deptFilter) && filtered.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">🔭</span>
            <p>No courses found</p>
          </div>
        )}
        {filtered.map(course => {
          const scheduled = scheduledCourseIds.has(course.id);
          const deptColor = DEPT_COLORS[course.department] ?? '#64748b';
          return (
            <div
              key={course.id}
              className={`course-card ${scheduled ? 'scheduled' : ''}`}
              draggable
              onDragStart={e => {
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('text/plain', JSON.stringify({ courseId: course.id }));
                onDragStart({ courseId: course.id });
              }}
              onDragEnd={onDragEnd}
            >
              <div className="course-card-stripe" style={{ background: deptColor }} />
              <div className="course-card-body">
                <div className="course-card-top">
                  <span className="course-number" style={{ color: deptColor }}>{course.number}</span>
                  <span className="course-units-pill">{course.units}u</span>
                </div>
                <div className="course-card-name" title={course.name}>{course.name}</div>
                <div className="course-card-footer">
                  <span className="course-terms-small">{course.terms.join(' · ')}</span>
                  <button
                    className={`add-btn ${scheduled ? 'added' : ''}`}
                    title={`Add to ${addTarget.year} ${TERM_LABELS[addTarget.term]}`}
                    onClick={() => onAddCourse(course, addTarget.year, addTarget.term)}
                  >
                    {scheduled ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
