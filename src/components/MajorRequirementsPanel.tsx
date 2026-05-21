import type { Major, Schedule, Requirement, RequirementSlot, Course, UnitOverrides } from '../types';
import { scheduledInstances, totalEffectiveUnitsForCourse } from '../lib/units';

interface Props {
  major: Major;
  schedule: Schedule;
  allCourses: Course[];
  unitOverrides: UnitOverrides;
  onClose: () => void;
  onHighlightCourses: (ids: Set<string>) => void;
}

interface SlotResult {
  slot: RequirementSlot;
  matchedCourseId: string | null;
}

interface ReqResult {
  satisfied: boolean;
  earnedUnits: number;
  requiredUnits: number;
  matchedCourses: string[];
  slotResults?: SlotResult[];
  subResults?: ReqResult[];
  satisfiedSubIndex?: number;
}

function checkRequirement(
  req: Requirement,
  scheduledIds: Set<string>,
  schedule: Schedule,
  allCourses: Course[],
  overrides: UnitOverrides,
): ReqResult {
  // OR-of-paths: requirement passes when ANY sub-requirement passes.
  if (req.subRequirements && req.subRequirements.length > 0) {
    const subResults = req.subRequirements.map(sr =>
      checkRequirement(sr, scheduledIds, schedule, allCourses, overrides),
    );
    const satisfiedSubIndex = subResults.findIndex(r => r.satisfied);
    const satisfied = satisfiedSubIndex >= 0;
    // Surface the winning sub's totals (or the one with most progress if none satisfied).
    const surfaced =
      satisfiedSubIndex >= 0
        ? subResults[satisfiedSubIndex]
        : subResults.reduce((best, r) => (r.earnedUnits > best.earnedUnits ? r : best), subResults[0]);
    return {
      satisfied,
      earnedUnits: surfaced.earnedUnits,
      requiredUnits: surfaced.requiredUnits,
      matchedCourses: surfaced.matchedCourses,
      subResults,
      satisfiedSubIndex,
    };
  }

  // AND-of-OR: every slot must have at least one match.
  // Same course can't fill two slots — greedy assignment, more-restrictive
  // (fewer options) slots first so they grab their unique course before
  // a wider slot does.
  if (req.slots && req.slots.length > 0) {
    const order = req.slots
      .map((slot, i) => ({ slot, i, size: slot.options.length }))
      .sort((a, b) => a.size - b.size);
    const used = new Set<string>();
    const tempResults: { i: number; result: SlotResult }[] = order.map(({ slot, i }) => {
      const match = slot.options.find(id => scheduledIds.has(id) && !used.has(id)) ?? null;
      if (match) used.add(match);
      return { i, result: { slot, matchedCourseId: match } };
    });
    const slotResults: SlotResult[] = tempResults
      .sort((a, b) => a.i - b.i)
      .map(t => t.result);
    const matchedCourses = slotResults
      .map(s => s.matchedCourseId)
      .filter((id): id is string => id !== null);
    const allSlotsFilled = slotResults.every(s => s.matchedCourseId !== null);
    const earnedUnits = matchedCourses.reduce(
      (sum, id) => sum + totalEffectiveUnitsForCourse(id, schedule, allCourses, overrides),
      0,
    );
    const enoughUnits = earnedUnits >= (req.minUnits ?? 0);
    const requiredUnits = req.minUnits ?? slotResults.length * 9;
    return {
      satisfied: allSlotsFilled && enoughUnits,
      earnedUnits,
      requiredUnits,
      matchedCourses,
      slotResults,
    };
  }

  // Department pool: e.g. "30 units in Ma/ACM/CS".
  if (req.departments && req.departments.length > 0) {
    const matchedIdSet = new Set<string>();
    for (const inst of scheduledInstances(schedule)) {
      const c = allCourses.find(x => x.id === inst.courseId);
      if (!c) continue;
      const numPrefixes = c.number.split(/[\s/]/);
      const ok = req.departments.some(d => c.department === d || numPrefixes.includes(d));
      if (ok) matchedIdSet.add(c.id);
    }
    const matchedCourses = [...matchedIdSet];
    const earnedUnits = matchedCourses.reduce(
      (sum, id) => sum + totalEffectiveUnitsForCourse(id, schedule, allCourses, overrides),
      0,
    );
    const requiredUnits = req.minUnits ?? 9;
    return {
      satisfied: earnedUnits >= requiredUnits,
      earnedUnits,
      requiredUnits,
      matchedCourses,
    };
  }

  // Default: flat course list + minCourses/minUnits.
  const matchedCourses = (req.courses ?? []).filter(id => scheduledIds.has(id));
  const earnedUnits = matchedCourses.reduce(
    (sum, id) => sum + totalEffectiveUnitsForCourse(id, schedule, allCourses, overrides),
    0,
  );
  const requiredUnits = req.minUnits ?? (req.minCourses ?? 1) * 9;
  const enoughUnits = earnedUnits >= (req.minUnits ?? 0);
  const enoughCourses = req.minCourses ? matchedCourses.length >= req.minCourses : true;
  return { satisfied: enoughUnits && enoughCourses, earnedUnits, requiredUnits, matchedCourses };
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

function courseLabel(id: string, allCourses: Course[]): string {
  return allCourses.find(c => c.id === id)?.number ?? id;
}

interface ReqGroupProps {
  req: Requirement;
  result: ReqResult;
  allCourses: Course[];
  scheduledIds: Set<string>;
  onHover: (ids: string[]) => void;
  onLeave: () => void;
  nested?: boolean;
}

function ReqGroup({ req, result, allCourses, scheduledIds, onHover, onLeave, nested }: ReqGroupProps) {
  const usesSlots = !!req.slots?.length;
  const usesSubs = !!req.subRequirements?.length;

  // For the progress bar denominator, prefer minUnits, else slot count, else minCourses.
  const pct = req.minUnits
    ? result.earnedUnits / req.minUnits
    : usesSlots
      ? result.matchedCourses.length / (req.slots!.length)
      : result.matchedCourses.length / (req.minCourses ?? 1);

  return (
    <div
      className={`req-group ${result.satisfied ? 'req-done' : 'req-pending'} ${nested ? 'req-nested' : ''}`}
      onMouseEnter={() => onHover(result.matchedCourses)}
      onMouseLeave={onLeave}
    >
      <div className="req-row">
        <span className={`req-check ${result.satisfied ? 'done' : ''}`}>
          {result.satisfied ? '✓' : '○'}
        </span>
        <span className="req-name">{req.name}</span>
        <span className="req-units-badge">
          {req.minUnits
            ? `${result.earnedUnits}/${req.minUnits}u`
            : usesSlots
              ? `${result.matchedCourses.length}/${req.slots!.length} slots`
              : req.minCourses
                ? `${result.matchedCourses.length}/${req.minCourses} courses`
                : `${result.earnedUnits}u`}
        </span>
      </div>
      <p className="req-desc">{req.description}</p>
      <Bar pct={pct} done={result.satisfied} />

      {/* Per-slot status (AND-of-OR) */}
      {usesSlots && result.slotResults && (
        <ul className="req-slots">
          {result.slotResults.map((sr, i) => {
            const filled = sr.matchedCourseId !== null;
            const label = sr.slot.name
              || sr.slot.options.map(o => courseLabel(o, allCourses)).join(' or ');
            return (
              <li key={i} className={`req-slot ${filled ? 'filled' : ''}`}>
                <span className={`req-slot-check ${filled ? 'done' : ''}`}>
                  {filled ? '✓' : '○'}
                </span>
                <span className="req-slot-name">{label}</span>
                {filled && sr.matchedCourseId && (
                  <span className="req-matched-course">{courseLabel(sr.matchedCourseId, allCourses)}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Sub-requirement options (OR-of-paths) */}
      {usesSubs && result.subResults && req.subRequirements && (
        <div className="req-subs">
          <div className="req-subs-label">
            {result.satisfied
              ? `Satisfied by: ${req.subRequirements[result.satisfiedSubIndex!].name}`
              : 'Complete any one of:'}
          </div>
          {req.subRequirements.map((sub, i) => (
            <ReqGroup
              key={sub.id}
              req={sub}
              result={result.subResults![i]}
              allCourses={allCourses}
              scheduledIds={scheduledIds}
              onHover={onHover}
              onLeave={onLeave}
              nested
            />
          ))}
        </div>
      )}

      {/* Flat-list matched chips (only when not using slots/subs) */}
      {!usesSlots && !usesSubs && result.matchedCourses.length > 0 && (
        <div className="req-matched">
          {result.matchedCourses.map(id => (
            <span key={id} className="req-matched-course">{courseLabel(id, allCourses)}</span>
          ))}
        </div>
      )}

      {/* Hint of what else could satisfy (flat lists only) */}
      {!usesSlots && !usesSubs && !result.satisfied && (req.courses?.length ?? 0) > 0 && (
        <div className="req-needed">
          <span className="req-needed-label">Could satisfy with: </span>
          {(req.courses ?? [])
            .filter(id => !scheduledIds.has(id))
            .slice(0, 5)
            .map(id => (
              <span key={id} className="req-suggestion">{courseLabel(id, allCourses)}</span>
            ))}
        </div>
      )}
    </div>
  );
}

export default function MajorRequirementsPanel({ major, schedule, allCourses, unitOverrides, onClose, onHighlightCourses }: Props) {
  const scheduledIds = new Set(scheduledInstances(schedule).map(i => i.courseId));

  const results = major.requirements.map(req => ({
    req,
    result: checkRequirement(req, scheduledIds, schedule, allCourses, unitOverrides),
  }));

  const completedCount = results.filter(r => r.result.satisfied).length;
  const totalCount = results.length;

  const handleHighlight = (courseIds: string[]) => {
    onHighlightCourses(new Set(courseIds.filter(id => scheduledIds.has(id))));
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
            <ReqGroup
              key={req.id}
              req={req}
              result={result}
              allCourses={allCourses}
              scheduledIds={scheduledIds}
              onHover={handleHighlight}
              onLeave={clearHighlight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
