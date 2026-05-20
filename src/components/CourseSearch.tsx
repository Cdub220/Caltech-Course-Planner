import { useState, useMemo } from 'react';
import type { Course, Term } from '../types';
import { DEPARTMENTS } from '../data/courses';
import type { DragPayload } from '../App';

interface Props {
  onAddCourse: (course: Course, year: string, term: Term) => void;
  scheduledCourseIds: Set<string>;
  onDragStart: (payload: DragPayload) => void;
  onDragEnd: () => void;
  allCourses: Course[];
  onOpenCustomModal: () => void;
  onRemoveCustomCourse: (id: string) => void;
  coursesLoading?: boolean;
}

const DEPT_COLORS: Record<string, string> = {
  Ma: '#7b5ea7', Ph: '#2563eb', Ch: '#059669', CS: '#d97706',
  EE: '#dc2626', ME: '#0891b2', Bi: '#16a34a', BE: '#65a30d',
  Ay: '#7c3aed', Ge: '#92400e', Ec: '#b45309', BEM: '#c2410c',
  ACM: '#6d28d9', En: '#be185d', H: '#9f1239', Pl: '#7e22ce',
  PS: '#1d4ed8', Psy: '#0e7490', SS: '#4338ca', SEC: '#475569',
  PE: '#15803d', APh: '#1e40af', ESE: '#047857', ChE: '#b91c1c',
  MS: '#6b7280', CNS: '#8b5cf6', IDS: '#0369a1', Custom: '#64748b',
  Ae: '#0369a1', CDS: '#ea580c', NB: '#db2777',
};

// Parse course number ("CS 1", "Ma 1a", "Ae/APh/CE/ME 101a") into a
// numeric part + letter suffix so we can sort 1, 2, 11 in proper order
// (not lexically as "1", "11", "2").
function parseCourseNumber(number: string): { num: number; suffix: string } {
  const lastPart = number.split(' ').pop() ?? '';
  const match = lastPart.match(/^(\d+)([a-z]*)$/i);
  if (!match) return { num: Number.MAX_SAFE_INTEGER, suffix: lastPart };
  return { num: parseInt(match[1], 10), suffix: match[2].toLowerCase() };
}

export default function CourseSearch({
  onAddCourse: _onAddCourse, scheduledCourseIds, onDragStart, onDragEnd,
  allCourses, onOpenCustomModal, onRemoveCustomCourse, coursesLoading,
}: Props) {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');

  const filtered = useMemo(() => {
    if (!search && !deptFilter) return [];
    const q = search.toLowerCase().trim();
    const qNoSpace = q.replace(/\s+/g, '');

    const matched = allCourses.filter(c => {
      const numLower = c.number.toLowerCase();
      const numNoSpace = numLower.replace(/\s+/g, '');
      const matchesSearch =
        !q ||
        numNoSpace.includes(qNoSpace) ||
        numLower.includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.department.toLowerCase().includes(q);
      const numPrefixes = c.number.split(/[\s/]/).map(s => s.toUpperCase());
      const matchesDept = !deptFilter || c.department === deptFilter || numPrefixes.includes(deptFilter.toUpperCase());
      return matchesSearch && matchesDept;
    });

    // Rank: 0 = number starts with query (e.g. "CS" → "CS 1"),
    //       1 = department matches query, 2 = anything else (name hit).
    const rank = (c: Course): number => {
      if (!q) return 0;
      const numNoSpace = c.number.toLowerCase().replace(/\s+/g, '');
      if (numNoSpace.startsWith(qNoSpace)) return 0;
      const prefixes = c.number.split(/[\s/]/).map(s => s.toLowerCase());
      if (prefixes.includes(q)) return 1;
      return 2;
    };

    return matched.sort((a, b) => {
      const r = rank(a) - rank(b);
      if (r !== 0) return r;
      if (a.department !== b.department) return a.department.localeCompare(b.department);
      const ap = parseCourseNumber(a.number);
      const bp = parseCourseNumber(b.number);
      if (ap.num !== bp.num) return ap.num - bp.num;
      return ap.suffix.localeCompare(bp.suffix);
    });
  }, [search, deptFilter, allCourses]);

  const handleSearchChange = (val: string) => { setSearch(val); };
  const handleDeptChange = (val: string) => { setDeptFilter(val); };

  const depts = useMemo(
    () => [...new Set(allCourses.filter(c => !c.isCustom).map(c => c.department))].sort(),
    [allCourses]
  );

  return (
    <aside className="course-search">
      <div className="search-header">
        <h2 className="search-title">Course Catalog</h2>
        <span className="search-count">
          {coursesLoading
            ? 'Loading…'
            : search || deptFilter
              ? `${filtered.length} found`
              : `${allCourses.length} total`}
        </span>
      </div>

      <div className="search-controls">
        <div className="search-input-wrap">
          <span className="search-icon">&#128269;</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => handleSearchChange(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => handleSearchChange('')}>×</button>
          )}
        </div>
        <select
          className="dept-select"
          value={deptFilter}
          onChange={e => handleDeptChange(e.target.value)}
        >
          <option value="">All Departments</option>
          {depts.map(d => (
            <option key={d} value={d}>{d} – {DEPARTMENTS[d] ?? d}</option>
          ))}
        </select>
      </div>

      <div className="drag-hint">
        <span>Drag cards onto the schedule</span>
      </div>

      <button className="add-custom-course-btn" onClick={onOpenCustomModal}>
        + Create Custom Course
      </button>

      <div className="course-list">
        {coursesLoading && (
          <div className="no-results"><p>Loading course catalog…</p></div>
        )}
        {!coursesLoading && !search && !deptFilter && (
          <div className="no-results">
            <p>Search or filter by department to browse courses</p>
          </div>
        )}
        {!coursesLoading && (search || deptFilter) && filtered.length === 0 && (
          <div className="no-results">
            <p>No courses found</p>
          </div>
        )}
        {filtered.map(course => {
          const scheduled = scheduledCourseIds.has(course.id);
          const deptColor = DEPT_COLORS[course.department] ?? '#64748b';
          return (
            <div
              key={course.id}
              className={`course-card ${scheduled ? 'scheduled' : ''} ${course.isCustom ? 'custom-course-card' : ''}`}
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
                  <span className="course-units-pill">
                    {course.units === 0 ? 'Var' : `${course.units}u`}
                  </span>
                  {course.isCustom && (
                    <button
                      className="remove-custom-btn"
                      title="Delete custom course"
                      onClick={e => { e.stopPropagation(); onRemoveCustomCourse(course.id); }}
                    >
                      ×
                    </button>
                  )}
                </div>
                <div className="course-card-name" title={course.name}>{course.name}</div>
                <div className="course-card-footer">
                  <span className="course-terms-small">{course.terms.join(' · ')}</span>
                  {scheduled && <span className="scheduled-badge">✓ Scheduled</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </aside>
  );
}
