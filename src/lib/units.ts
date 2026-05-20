import type { Course, Schedule, Term, UnitOverrides } from '../types';

// Variable-unit courses (research, thesis, independent study) default to this
// when the user hasn't set an override yet.
export const DEFAULT_VARIABLE_UNITS = 9;

export interface ScheduleInstance {
  courseId: string;
  year: string;
  term: Term;
}

/** Flatten the schedule into a list of (courseId, year, term) tuples. */
export function scheduledInstances(schedule: Schedule): ScheduleInstance[] {
  const out: ScheduleInstance[] = [];
  for (const [year, terms] of Object.entries(schedule)) {
    for (const [term, ids] of Object.entries(terms)) {
      for (const id of ids) out.push({ courseId: id, year, term: term as Term });
    }
  }
  return out;
}

/** Units this course contributes in a specific slot, honoring overrides. */
export function getEffectiveUnits(
  course: Course,
  year: string,
  term: Term,
  overrides: UnitOverrides,
): number {
  const override = overrides[year]?.[term]?.[course.id];
  if (override !== undefined) return override;
  if (course.units === 0) return DEFAULT_VARIABLE_UNITS;
  return course.units;
}

/** Sum effective units across every slot where this course is scheduled. */
export function totalEffectiveUnitsForCourse(
  courseId: string,
  schedule: Schedule,
  allCourses: Course[],
  overrides: UnitOverrides,
): number {
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return 0;
  let sum = 0;
  for (const inst of scheduledInstances(schedule)) {
    if (inst.courseId === courseId) {
      sum += getEffectiveUnits(course, inst.year, inst.term, overrides);
    }
  }
  return sum;
}
