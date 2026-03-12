import type { Major, Schedule, Requirement } from '../types';
import { getCourseById } from '../data/courses';

interface Props {
  major: Major;
  schedule: Schedule;
  onClose: () => void;
  onHighlightCourses: (ids: Set<string>) => void;
}

function getAllScheduledIds(schedule: Schedule): string[] {
  const ids: string[] = [];
  for (const terms of Object.values(schedule)) {
    for (const courseIds of Object.values(terms)) {
      ids.push(...courseIds);
    }
  }
  return ids;
}

interface ReqResult {
  satisfied: boolean;
  earnedUnits: number;
  requiredUnits: number;
  matchedCourses: string[];
}

function checkRequirement(req: Requirement, scheduledIds: string[]): ReqResult {
  const matchedCourses = (req.courses ?? []).filter(id => scheduledIds.includes(id));
  const earnedUnits = matchedCourses.reduce((sum, id) => {
    const c = getCourseById(id);
    return sum + (c?.units ?? 0);
  }, 0);

  const requiredUnits = req.minUnits ?? (req.minCourses ?? 1) * 9;
  const enoughUnits = earnedUnits >= (req.minUnits ?? 0);
  const enoughCourses = req.minCourses ? matchedCourses.length >= req.minCourses : true;
  const satisfied = enoughUnits && enoughCourses;

  return { satisfied, earnedUnits, requiredUnits, matchedCourses };
}

interface BarProps {
  pct: number;
  done: boolean;
}
function Bar({ pct, done }: BarProps) {
  return (
    <div className="req-bar-wrap">
      <div
        className={`req-bar-fill ${done ? 'complete' : ''}`}
        style={{ width: `${Math.min(pct * 100, 100)}%` }}
      />
    </div>
  );
}

export default function MajorRequirementsPanel({ major, schedule, onClose, onHighlightCourses }: Props) {
  const scheduledIds = getAllScheduledIds(schedule);

  const results = major.requirements.map(req => ({
    req,
    result: checkRequirement(req, scheduledIds),
  }));

  const completedCount = results.filter(r => r.result.satisfied).length;
  const totalCount = results.length;

  const handleHighlight = (courseIds: string[]) => {
    onHighlightCourses(new Set(courseIds.filter(id => scheduledIds.includes(id))));
  };

  const clearHighlight = () => onHighlightCourses(new Set());

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel panel-major" onClick={e => e.stopPropagation()}>
        <div className="panel-header">
          <h2>{major.name} Requirements</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="major-summary">
          <span className="major-progress-text">
            {completedCount}/{totalCount} requirement groups satisfied
          </span>
          <div className="req-bar-wrap">
            <div
              className={`req-bar-fill ${completedCount === totalCount ? 'complete' : ''}`}
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        <div className="panel-body">
          {results.map(({ req, result }) => (
            <div
              key={req.id}
              className={`req-group ${result.satisfied ? 'req-done' : 'req-pending'}`}
              onMouseEnter={() => handleHighlight(result.matchedCourses)}
              onMouseLeave={clearHighlight}
            >
              <div className="req-row">
                <span className={`req-check ${result.satisfied ? 'done' : ''}`}>
                  {result.satisfied ? '✓' : '○'}
                </span>
                <span className="req-name">{req.name}</span>
                <span className="req-units-badge">
                  {result.earnedUnits}
                  {req.minUnits ? `/${req.minUnits}u` : ''}
                  {req.minCourses ? ` (${result.matchedCourses.length}/${req.minCourses} courses)` : ''}
                </span>
              </div>
              <p className="req-desc">{req.description}</p>
              <Bar pct={req.minUnits ? result.earnedUnits / req.minUnits : result.matchedCourses.length / (req.minCourses ?? 1)} done={result.satisfied} />

              {result.matchedCourses.length > 0 && (
                <div className="req-matched">
                  {result.matchedCourses.map(id => {
                    const c = getCourseById(id);
                    return c ? (
                      <span key={id} className="req-matched-course">
                        {c.number}
                      </span>
                    ) : null;
                  })}
                </div>
              )}

              {/* Show what's still needed */}
              {!result.satisfied && (
                <div className="req-needed">
                  <span className="req-needed-label">Could satisfy with: </span>
                  {(req.courses ?? [])
                    .filter(id => !scheduledIds.includes(id))
                    .slice(0, 5)
                    .map(id => {
                      const c = getCourseById(id);
                      return c ? (
                        <span key={id} className="req-suggestion">{c.number}</span>
                      ) : null;
                    })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
