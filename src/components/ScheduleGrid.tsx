import type { Term, Schedule, Course } from '../types';
import { getCourseById } from '../data/courses';

interface Props {
  schedule: Schedule;
  onRemoveCourse: (year: string, term: Term, courseId: string) => void;
  highlightedCourses?: Set<string>;
}

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'] as const;
const TERMS: Term[] = ['FA', 'WI', 'SP'];
const TERM_LABELS: Record<Term, string> = { FA: 'Fall', WI: 'Winter', SP: 'Spring' };

function termUnits(courseIds: string[]): number {
  return courseIds.reduce((sum, id) => {
    const c = getCourseById(id);
    return sum + (c?.units ?? 0);
  }, 0);
}

export default function ScheduleGrid({ schedule, onRemoveCourse, highlightedCourses }: Props) {
  const totalUnits = Object.values(schedule).reduce((sum, terms) =>
    sum + Object.values(terms).reduce((s, ids) => s + termUnits(ids), 0), 0
  );

  return (
    <div className="schedule-wrapper">
      <div className="schedule-summary">
        <span className="total-units">
          <strong>{totalUnits}</strong> / 486 units scheduled
        </span>
        <div className="units-bar-wrap">
          <div
            className="units-bar-fill"
            style={{ width: `${Math.min((totalUnits / 486) * 100, 100)}%` }}
          />
        </div>
      </div>

      <div className="schedule-grid">
        {/* Header row */}
        <div className="grid-header-cell year-header" />
        {TERMS.map(term => (
          <div key={term} className="grid-header-cell term-header">
            {TERM_LABELS[term]}
          </div>
        ))}

        {/* Year rows */}
        {YEARS.map(year => (
          <>
            <div key={`${year}-label`} className="year-label">
              {year}
            </div>
            {TERMS.map(term => {
              const ids = schedule[year]?.[term] ?? [];
              const units = termUnits(ids);
              return (
                <div key={`${year}-${term}`} className="term-cell">
                  <div className="term-courses">
                    {ids.map(id => {
                      const course: Course | undefined = getCourseById(id);
                      if (!course) return null;
                      const highlighted = highlightedCourses?.has(id);
                      return (
                        <div
                          key={id}
                          className={`scheduled-course ${highlighted ? 'highlighted' : ''}`}
                        >
                          <span className="sc-number">{course.number}</span>
                          <span className="sc-units">({course.units}u)</span>
                          <button
                            className="remove-btn"
                            title="Remove course"
                            onClick={() => onRemoveCourse(year, term, id)}
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {ids.length > 0 && (
                    <div className="term-units">{units} units</div>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}
