import { useState, useMemo } from 'react';
import type { Course, Term } from '../types';
import { COURSES, DEPARTMENTS } from '../data/courses';

interface Props {
  onAddCourse: (course: Course, year: string, term: Term) => void;
  scheduledCourseIds: Set<string>;
}

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'] as const;
const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };

export default function CourseSearch({ onAddCourse, scheduledCourseIds }: Props) {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [addTarget, setAddTarget] = useState<{ year: string; term: Term }>({
    year: 'Freshman',
    term: 'FA',
  });

  const filtered = useMemo(() => {
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
      <h2 className="search-title">Course Catalog</h2>

      <div className="search-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="dept-select"
          value={deptFilter}
          onChange={e => setDeptFilter(e.target.value)}
        >
          <option value="">All Departments</option>
          {depts.map(d => (
            <option key={d} value={d}>
              {d} – {DEPARTMENTS[d] ?? d}
            </option>
          ))}
        </select>
      </div>

      <div className="add-target">
        <span className="add-target-label">Add to:</span>
        <select
          value={addTarget.year}
          onChange={e => setAddTarget(t => ({ ...t, year: e.target.value }))}
          className="add-target-select"
        >
          {YEARS.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select
          value={addTarget.term}
          onChange={e => setAddTarget(t => ({ ...t, term: e.target.value as Term }))}
          className="add-target-select"
        >
          {TERMS.map(t => (
            <option key={t} value={t}>{TERM_LABELS[t]}</option>
          ))}
        </select>
      </div>

      <div className="course-list">
        {filtered.length === 0 && (
          <p className="no-results">No courses found.</p>
        )}
        {filtered.map(course => {
          const scheduled = scheduledCourseIds.has(course.id);
          return (
            <div key={course.id} className={`course-card ${scheduled ? 'scheduled' : ''}`}>
              <div className="course-card-header">
                <span className="course-number">{course.number}</span>
                <span className="course-units">{course.units}u</span>
              </div>
              <div className="course-card-name">{course.name}</div>
              <div className="course-card-footer">
                <span className="course-dept-badge">{course.department}</span>
                <span className="course-terms-badge">
                  {course.terms.join(' · ')}
                </span>
                <button
                  className={`add-btn ${scheduled ? 'added' : ''}`}
                  title={scheduled ? 'Already scheduled' : `Add to ${addTarget.year} ${TERM_LABELS[addTarget.term]}`}
                  onClick={() => onAddCourse(course, addTarget.year, addTarget.term)}
                >
                  {scheduled ? '✓' : '+'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
