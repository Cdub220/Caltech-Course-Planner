import type { CoreRequirementGroup, Schedule, Course, UnitOverrides } from '../types';
import { CORE_REQUIREMENTS, TOTAL_UNITS_REQUIRED } from '../data/coreRequirements';
import { scheduledInstances, getEffectiveUnits, totalEffectiveUnitsForCourse } from '../lib/units';

interface Props {
  schedule: Schedule;
  allCourses: Course[];
  unitOverrides: UnitOverrides;
  onClose: () => void;
}

function getTotalUnits(schedule: Schedule, allCourses: Course[], overrides: UnitOverrides): number {
  return scheduledInstances(schedule).reduce((sum, inst) => {
    const c = allCourses.find(x => x.id === inst.courseId);
    return sum + (c ? getEffectiveUnits(c, inst.year, inst.term, overrides) : 0);
  }, 0);
}

/** Parse the leading integer portion of a course number, e.g.
 *  "En 99a" → 99, "Ma 1abc" → 1, "Hum/H 13" → 13, "CMS/ACM 117" → 117. */
function courseNumberPart(c: Course): number {
  const lastPart = c.number.split(' ').pop() ?? '';
  const m = lastPart.match(/^(\d+)/);
  return m ? parseInt(m[1], 10) : NaN;
}

/** Split a course's prefix list — "En/H/HPS 99a" → ['En','H','HPS']. */
function coursePrefixes(c: Course): string[] {
  const dept = c.number.split(' ')[0];
  return dept.split('/');
}

/** Does a scheduled course satisfy this requirement group?
 *  When the group has both an explicit `courses` list AND a `departments`
 *  filter, either path qualifies (OR). This lets us express e.g. the
 *  writing-intensive requirement: explicit catalog set + any advanced
 *  humanities course. `excludeCourses` always wins. */
function courseMatchesGroup(c: Course, group: CoreRequirementGroup): boolean {
  if (group.excludeCourses?.includes(c.id)) return false;

  const hasCourseList = !!group.courses?.length;
  const hasDeptFilter = !!group.departments?.length;

  if (hasCourseList && group.courses!.includes(c.id)) return true;

  if (hasDeptFilter) {
    const prefixes = coursePrefixes(c);
    if (group.departments!.some(d => prefixes.includes(d))) {
      const num = courseNumberPart(c);
      const minOk = group.minNumber === undefined || (!Number.isNaN(num) && num >= group.minNumber);
      const maxOk = group.maxNumber === undefined || (!Number.isNaN(num) && num <= group.maxNumber);
      if (minOk && maxOk) return true;
    }
  }

  return false;
}

function checkGroup(
  group: CoreRequirementGroup,
  scheduledIds: Set<string>,
  schedule: Schedule,
  allCourses: Course[],
  overrides: UnitOverrides,
): {
  earned: number;
  required: number;
  pct: number;
  subResults?: ReturnType<typeof checkGroup>[];
} {
  if (group.subGroups) {
    const subResults = group.subGroups.map(sg => checkGroup(sg, scheduledIds, schedule, allCourses, overrides));
    const earned = subResults.reduce((s, r) => s + r.earned, 0);
    const required = group.minUnits ?? subResults.reduce((s, r) => s + r.required, 0);
    return { earned, required, pct: Math.min(earned / required, 1), subResults };
  }

  // Collect unique scheduled courses (deduplicated by id) that satisfy this group.
  const matched: Course[] = [];
  const matchedIds = new Set<string>();
  for (const id of scheduledIds) {
    const c = allCourses.find(x => x.id === id);
    if (!c) continue;
    if (!courseMatchesGroup(c, group)) continue;
    matched.push(c);
    matchedIds.add(id);
  }

  // Earn units across all scheduled instances of matched courses (respects overrides).
  const earnedUnits = [...matchedIds].reduce(
    (sum, id) => sum + totalEffectiveUnitsForCourse(id, schedule, allCourses, overrides),
    0,
  );

  // Count-based requirements (e.g. "3 writing-intensive courses") use minCourses,
  // so the progress bar measures courses; everything else uses units.
  if (group.minCourses !== undefined && group.minUnits === undefined) {
    const earnedCourses = matched.length;
    return {
      earned: earnedCourses,
      required: group.minCourses,
      pct: Math.min(earnedCourses / group.minCourses, 1),
    };
  }

  const required = group.minUnits ?? 9;
  return { earned: earnedUnits, required, pct: Math.min(earnedUnits / required, 1) };
}

interface BarProps {
  pct: number;
  earned: number;
  required: number;
  label?: string;
}
function ProgressBar({ pct, earned, required, label = 'units' }: BarProps) {
  const done = pct >= 1;
  return (
    <div>
      <div className="req-bar-wrap">
        <div
          className={`req-bar-fill ${done ? 'complete' : ''}`}
          style={{ width: `${Math.min(pct * 100, 100)}%` }}
        />
      </div>
      <span className="req-bar-units-text">
        {earned} / {required} {label}
      </span>
    </div>
  );
}

function unitLabel(group: CoreRequirementGroup): string {
  return group.minCourses !== undefined && group.minUnits === undefined ? 'courses' : 'units';
}

export default function CoreRequirementsPanel({ schedule, allCourses, unitOverrides, onClose }: Props) {
  const scheduledIds = new Set(scheduledInstances(schedule).map(i => i.courseId));
  const totalUnits = getTotalUnits(schedule, allCourses, unitOverrides);
  const totalPct = totalUnits / TOTAL_UNITS_REQUIRED;

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel" onClick={e => e.stopPropagation()}>
        <div className="panel-header">
          <h2>Core Requirements</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="panel-body">
          {/* Overall units */}
          <div className="req-group">
            <div className="req-name">
              <strong>{TOTAL_UNITS_REQUIRED} units</strong>
            </div>
            <ProgressBar pct={totalPct} earned={totalUnits} required={TOTAL_UNITS_REQUIRED} />
          </div>

          {CORE_REQUIREMENTS.map(group => {
            const result = checkGroup(group, scheduledIds, schedule, allCourses, unitOverrides);
            return (
              <div key={group.id} className="req-group">
                <div className="req-name">{group.name}</div>
                {group.description && <div className="req-desc">{group.description}</div>}
                <ProgressBar
                  pct={result.pct}
                  earned={result.earned}
                  required={result.required}
                  label={unitLabel(group)}
                />

                {result.subResults && group.subGroups && (
                  <div className="req-subgroups">
                    {group.subGroups.map((sg, i) => {
                      const sr = result.subResults![i];
                      return (
                        <div key={sg.id} className="req-subgroup">
                          <div className="req-subname">• {sg.name}</div>
                          {sg.description && <div className="req-desc">{sg.description}</div>}
                          <ProgressBar
                            pct={sr.pct}
                            earned={sr.earned}
                            required={sr.required}
                            label={unitLabel(sg)}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
