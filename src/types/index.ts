export type Term = 'FA' | 'WI' | 'SP';
export type Year = 'Freshman' | 'Sophomore' | 'Junior' | 'Senior';

export interface Course {
  id: string;
  number: string;
  name: string;
  units: number;
  terms: Term[];
  department: string;
  description?: string;
  prerequisites?: string[];
  isCustom?: boolean;
}

export interface ScheduledCourse {
  courseId: string;
  year: Year;
  term: Term;
}

export interface Schedule {
  [year: string]: {
    [term: string]: string[]; // course IDs
  };
}

// Per-slot unit overrides for variable-unit courses (research, thesis,
// independent study). Key path: year → term → courseId → units the user chose.
export interface UnitOverrides {
  [year: string]: {
    [term: string]: {
      [courseId: string]: number;
    };
  };
}

export interface RequirementStatus {
  satisfied: boolean;
  courses: string[]; // course IDs that satisfy this
  needed?: string;
}

/**
 * A "slot" represents one position in a requirement that must be filled by
 * at least one course from `options`. Used to express AND-of-OR semantics:
 * e.g. "CS 1 or CS 1x; CS 2; CS 3x" → three slots, each with its own options.
 */
export interface RequirementSlot {
  name?: string;
  options: string[];   // course IDs — student needs at least one of these
  minUnits?: number;   // optional unit floor for this slot
}

export interface Requirement {
  id: string;
  name: string;
  description: string;
  units?: number;
  /** Flat list of course IDs that can satisfy this — counted by minCourses or minUnits. */
  courses?: string[];
  minCourses?: number;
  minUnits?: number;
  /** Departments that satisfy this requirement (e.g. "30 units in Ma/ACM/CS"). */
  departments?: string[];
  /** AND-of-OR: requirement is satisfied when EVERY slot has at least one match. */
  slots?: RequirementSlot[];
  /** OR-of-paths: requirement is satisfied when ANY one sub-requirement is satisfied. */
  subRequirements?: Requirement[];
  satisfied?: boolean;
}

export interface Major {
  id: string;
  name: string;
  abbreviation: string;
  requirements: Requirement[];
  totalUnits?: number;
}

export interface CoreRequirementGroup {
  id: string;
  name: string;
  description?: string;
  /** Unit floor for this requirement. */
  minUnits?: number;
  /** Course-count floor (e.g. "3 writing-intensive courses"). */
  minCourses?: number;
  /** Explicit course IDs that satisfy this requirement. */
  courses?: string[];
  /** AND-of-OR groups of course IDs, mirroring the legacy schema. */
  options?: string[][];
  /** Department prefixes accepted (e.g. ['En','H','HPS'] for humanities). Matches
   *  cross-listed prefixes too — "En/H 99" counts under En and H. */
  departments?: string[];
  /** Course-number floor (e.g. 90 for "advanced humanities"). The number part
   *  is the leading integer of the course number, e.g. 99 in "En 99a". */
  minNumber?: number;
  /** Course-number ceiling (e.g. 60 for "freshman humanities"). */
  maxNumber?: number;
  /** Course IDs that should NEVER count, even if other filters match. */
  excludeCourses?: string[];
  subGroups?: CoreRequirementGroup[];
}
