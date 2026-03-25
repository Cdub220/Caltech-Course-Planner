import { useState } from 'react';
import type { Term, Schedule, Course } from '../types';
import type { DragPayload } from '../App';

interface Props {
  schedule: Schedule;
  onRemoveCourse: (year: string, term: Term, courseId: string) => void;
  onDrop: (toYear: string, toTerm: Term, payload: DragPayload) => void;
  highlightedCourses?: Set<string>;
  dragPayload: DragPayload | null;
  onDragStart: (payload: DragPayload) => void;
  onDragEnd: () => void;
  allCourses: Course[];
}

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'] as const;
const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };
const TERM_COLORS: Record<Term, string> = {
  FA: '#b45309',
  WI: '#1d4ed8',
  SP: '#15803d',
};

function termUnits(courseIds: string[], allCourses: Course[]): number {
  return courseIds.reduce((sum, id) => {
    const c = allCourses.find(x => x.id === id);
    return sum + (c?.units ?? 0);
  }, 0);
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

interface TermCellProps {
  year: string;
  term: Term;
  courseIds: string[];
  onRemove: (id: string) => void;
  onDrop: (payload: DragPayload) => void;
  highlightedCourses?: Set<string>;
  isDragging: boolean;
  onDragStart: (payload: DragPayload) => void;
  onDragEnd: () => void;
  allCourses: Course[];
}

function TermCell({
  year, term, courseIds, onRemove, onDrop,
  highlightedCourses, isDragging, onDragStart, onDragEnd, allCourses,
}: TermCellProps) {
  const [isOver, setIsOver] = useState(false);
  const units = termUnits(courseIds, allCourses);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsOver(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);
    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain')) as DragPayload;
      onDrop(data);
    } catch {}
  };

  const renderCourseChip = (id: string) => {
    const course = allCourses.find(c => c.id === id);
    if (!course) return null;
    const highlighted = highlightedCourses?.has(id);
    const deptColor = DEPT_COLORS[course.department] ?? '#64748b';
    return (
      <div
        key={id}
        className={`scheduled-course ${highlighted ? 'highlighted' : ''}`}
        draggable
        onDragStart={e => {
          e.stopPropagation();
          e.dataTransfer.effectAllowed = 'move';
          const payload: DragPayload = { courseId: id, fromYear: year, fromTerm: term };
          e.dataTransfer.setData('text/plain', JSON.stringify(payload));
          onDragStart(payload);
        }}
        onDragEnd={onDragEnd}
        title={course.name}
      >
        <span className="sc-dept-dot" style={{ background: deptColor }} />
        <span className="sc-number">{course.number}</span>
        <span className="sc-units">{course.units}u</span>
        <button className="remove-btn" title="Remove" onClick={() => onRemove(id)}>×</button>
      </div>
    );
  };

  return (
    <div
      className={`term-cell ${isOver && isDragging ? 'drop-active' : ''} ${isDragging ? 'drop-zone' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
    >
      <div className="term-courses">
        {courseIds.length === 0 && isDragging && (
          <div className={`drop-placeholder ${isOver ? 'over' : ''}`}>Drop here</div>
        )}
        {courseIds.map(id => renderCourseChip(id))}
        {courseIds.length > 0 && isDragging && (
          <div className={`drop-placeholder ${isOver ? 'over' : ''}`}>Drop here</div>
        )}
      </div>

      {units > 0 && (
        <div className="term-units-row">
          <span className="term-units-badge">{units} units</span>
        </div>
      )}
    </div>
  );
}

export default function ScheduleGrid({
  schedule, onRemoveCourse, onDrop,
  highlightedCourses, dragPayload, onDragStart, onDragEnd, allCourses,
}: Props) {
  const totalUnits = Object.values(schedule).reduce(
    (sum, terms) => sum + Object.values(terms).reduce((s, ids) => s + termUnits(ids, allCourses), 0),
    0
  );
  const pct = Math.min((totalUnits / 486) * 100, 100);
  const isDragging = dragPayload !== null;

  return (
    <div className="schedule-wrapper">
      <div className="schedule-summary">
        <div className="summary-left">
          <span className="summary-label">Total Units</span>
          <span className="summary-units">
            <strong>{totalUnits}</strong>
            <span className="summary-denom"> / 486</span>
          </span>
        </div>
        <div className="summary-bar-area">
          <div className="summary-bar-track">
            <div className="summary-bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="summary-pct">{Math.round(pct)}%</span>
        </div>
      </div>

      <div className="schedule-grid">
        <div className="grid-corner" />
        {TERMS.map(term => (
          <div key={term} className="term-header" style={{ borderBottomColor: TERM_COLORS[term] }}>
            <span className="term-header-label">{TERM_LABELS[term]}</span>
          </div>
        ))}

        {YEARS.map((year, yi) => (
          <div key={year} className="year-row" style={{ ['--row-index' as string]: yi }}>
            <div className="year-label">
              <span className="year-number">{yi + 1}</span>
              <span className="year-name">{year}</span>
            </div>
            {TERMS.map(term => {
              const ids = schedule[year]?.[term] ?? [];
              return (
                <TermCell
                  key={`${year}-${term}`}
                  year={year}
                  term={term}
                  courseIds={ids}
                  onRemove={id => onRemoveCourse(year, term, id)}
                  onDrop={payload => onDrop(year, term, payload)}
                  highlightedCourses={highlightedCourses}
                  isDragging={isDragging}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  allCourses={allCourses}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
