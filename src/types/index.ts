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

export interface RequirementStatus {
  satisfied: boolean;
  courses: string[]; // course IDs that satisfy this
  needed?: string;
}

export interface Requirement {
  id: string;
  name: string;
  description: string;
  units?: number;
  courses?: string[]; // course IDs that can satisfy this
  minCourses?: number;
  minUnits?: number;
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
  minUnits?: number;
  courses?: string[];
  options?: string[][];
  subGroups?: CoreRequirementGroup[];
}
