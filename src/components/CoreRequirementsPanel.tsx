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

  const matchingIds = (group.courses ?? []).filter(id => scheduledIds.has(id));
  const earned = matchingIds.reduce(
    (sum, id) => sum + totalEffectiveUnitsForCourse(id, schedule, allCourses, overrides),
    0,
  );
  const required = group.minUnits ?? 9;
  return { earned, required, pct: Math.min(earned / required, 1) };
}

interface BarProps {
  pct: number;
  earned: number;
  required: number;
}
function ProgressBar({ pct, earned, required }: BarProps) {
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
        {earned} / {required} units
      </span>
    </div>
  );
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
                <ProgressBar
                  pct={result.pct}
                  earned={result.earned}
                  required={result.required}
                />

                {result.subResults && group.subGroups && (
                  <div className="req-subgroups">
                    {group.subGroups.map((sg, i) => {
                      const sr = result.subResults![i];
                      return (
                        <div key={sg.id} className="req-subgroup">
                          <div className="req-subname">• {sg.name}</div>
                          <ProgressBar
                            pct={sr.pct}
                            earned={sr.earned}
                            required={sr.required}
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
