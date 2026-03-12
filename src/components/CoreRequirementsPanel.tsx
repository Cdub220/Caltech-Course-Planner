import type { CoreRequirementGroup, Schedule } from '../types';
import { CORE_REQUIREMENTS, TOTAL_UNITS_REQUIRED } from '../data/coreRequirements';
import { getCourseById } from '../data/courses';

interface Props {
  schedule: Schedule;
  onClose: () => void;
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

function getTotalUnits(schedule: Schedule): number {
  return getAllScheduledIds(schedule).reduce((sum, id) => {
    const c = getCourseById(id);
    return sum + (c?.units ?? 0);
  }, 0);
}

function checkGroup(group: CoreRequirementGroup, scheduledIds: string[]): {
  earned: number;
  required: number;
  pct: number;
  subResults?: ReturnType<typeof checkGroup>[];
} {
  if (group.subGroups) {
    const subResults = group.subGroups.map(sg => checkGroup(sg, scheduledIds));
    const earned = subResults.reduce((s, r) => s + r.earned, 0);
    const required = group.minUnits ?? subResults.reduce((s, r) => s + r.required, 0);
    return { earned, required, pct: Math.min(earned / required, 1), subResults };
  }

  const matchingIds = (group.courses ?? []).filter(id => scheduledIds.includes(id));
  const earned = matchingIds.reduce((sum, id) => {
    const c = getCourseById(id);
    return sum + (c?.units ?? 0);
  }, 0);
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
    <div className="req-bar-wrap">
      <div
        className={`req-bar-fill ${done ? 'complete' : ''}`}
        style={{ width: `${Math.min(pct * 100, 100)}%` }}
      />
      <span className="req-bar-label">
        {earned}/{required} units
      </span>
    </div>
  );
}

export default function CoreRequirementsPanel({ schedule, onClose }: Props) {
  const scheduledIds = getAllScheduledIds(schedule);
  const totalUnits = getTotalUnits(schedule);
  const totalPct = totalUnits / TOTAL_UNITS_REQUIRED;

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel" onClick={e => e.stopPropagation()}>
        <div className="panel-header">
          <h2>Core Requirements</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
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
            const result = checkGroup(group, scheduledIds);
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
