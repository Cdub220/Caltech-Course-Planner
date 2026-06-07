import type { CoreRequirementGroup } from '../types';

/**
 * Caltech Institute Core Curriculum Requirements (2025-26)
 * source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/core-institute-requirements-all-options/
 * verified: 2026-06-07
 *
 * Total: 486 units for graduation.
 *
 * Modeling limits (carried into descriptions):
 * - We don't enforce "must be taken on grades" — the planner has no grade data.
 * - We don't enforce "two first-year humanities in different disciplines" —
 *   the checker just counts qualifying units.
 * - The Integrated Core alternative path is NOT modeled here; students on IC
 *   should rely on the major panel and their adviser.
 * - The "advanced social science must match an intro you took" coupling
 *   (Ec 11 → BEM/Ec advanced; PS 12 → PS advanced; Psy 13 → Psy advanced)
 *   is described but not enforced.
 */
export const CORE_REQUIREMENTS: CoreRequirementGroup[] = [
  {
    id: 'math',
    name: 'Ma 1abc — First-Year Mathematics',
    description: 'Calculus of One and Several Variables and Linear Algebra.',
    minUnits: 27,
    courses: ['Ma1a', 'Ma1b', 'Ma1c'],
  },
  {
    id: 'physics',
    name: 'Ph 1abc — First-Year Physics',
    description: 'Classical Mechanics and Electromagnetism.',
    minUnits: 27,
    courses: ['Ph1a', 'Ph1b', 'Ph1c'],
  },
  {
    id: 'chemistry',
    name: 'Ch 1ab — First-Year Chemistry',
    description: 'General Chemistry.',
    minUnits: 15,
    courses: ['Ch1a', 'Ch1b'],
  },
  {
    id: 'biology',
    name: 'First-Year Biology',
    description: 'Any Bi 1 course (9u). Alternatively, both Bi 8 and Bi 9 — one must be taken for grades.',
    minUnits: 9,
    courses: ['Bi1', 'Bi1x', 'Bi8', 'Bi9'],
  },
  {
    id: 'menu',
    name: 'Menu Class',
    description: 'One of Ay 1, EE 1, ESE 1, Ge 1, or IST 4. Must be in a subject the student has not already studied or that is not their option. Complete by end of sophomore year.',
    minUnits: 9,
    courses: ['Ay1', 'EE1', 'ESE1', 'Ge1', 'IST4'],
  },
  {
    id: 'cs',
    name: 'Introduction to Programming (CS 1 or CS 1x)',
    description: 'CS 1 (9u) or CS 1x. Can be taken in first or second year as P/F.',
    minUnits: 6,
    courses: ['CS1', 'CS1x'],
  },
  {
    id: 'ch3a',
    name: 'First-Year Chemistry Laboratory',
    description: 'Ch 3a or Ch 3x. This requirement can also be met by Ch 4a, Ch 8, or Ch/ChE 9.',
    minUnits: 6,
    courses: ['Ch3a', 'Ch3x', 'Ch4a', 'Ch8', 'ChChE9'],
  },
  {
    id: 'addlab',
    name: 'Additional Introductory Laboratory',
    description: 'At least 6 units from: APh/EE 9, APh/EE 24, Bi 1x (if not used for biology), Bi 10, Ch 4ab, Ch 8, Ch/ChE 9, EE/ME 7, Ge 116, ME 8, ME 50ab, Ph 3, Ph 5, or Ph 8bc. Computational lab courses do NOT count.',
    minUnits: 6,
    courses: [
      'APhEE9', 'APhEE24',
      'Bi1x', 'Bi10',
      'Ch4a', 'Ch4b', 'Ch8', 'ChChE9',
      'EEME7',
      'Ge116',
      'ME8', 'ME50a', 'ME50b',
      'Ph3', 'Ph5', 'Ph8b', 'Ph8c',
    ],
  },
  {
    id: 'sci-writing',
    name: 'Scientific Writing (option-specific)',
    description: 'Each option specifies its own scientific writing course. Any one of these satisfies the Institute requirement: SEC 10-13, Ay 30/31, Ph 70, Ch 90/91, Ch/ChE 91, ChE 126, En/Wr 83/84, Bi/BE 24, Ma 10/11, or ESE/Ge 21. Must be on grades.',
    minCourses: 1,
    courses: [
      'SEC10', 'SEC11', 'SEC12', 'SEC13',
      'Ay30', 'Ay31',
      'Ph70',
      'Ch90', 'Ch91', 'ChChE91',
      'ChE126',
      'EnWr83', 'EnWr84',
      'BiBE24',
      'Ma10', 'Ma11',
      'ESEGe21',
    ],
  },
  {
    id: 'humanities',
    name: 'Humanities (99u total HSS includes this)',
    description:
      'Two first-year humanities (≤60-level, two different disciplines) plus 18u of advanced humanities (90+, graded). Recognized humanities subjects: English, History, History & Philosophy of Science, Humanities, Music, Philosophy, Visual Culture.',
    minUnits: 36,
    subGroups: [
      {
        id: 'frosh-hum',
        name: 'First-year humanities (2 courses, ≤60-level)',
        description: 'Two first-year humanities courses in different disciplines from: English, History, Philosophy, Visual Culture. In general, no more than 18u of first-year humanities count toward the 99u HSS total.',
        minUnits: 18,
        departments: ['En', 'H', 'Pl', 'VC', 'Hum'],
        maxNumber: 60,
      },
      {
        id: 'adv-hum',
        name: 'Advanced humanities (90+ level, graded)',
        description: 'At least 18 units of humanities numbered 90+ in: English, History, History & Philosophy of Science, Humanities, Music, Philosophy, Visual Culture. Language courses do not count unless cross-listed.',
        minUnits: 18,
        departments: ['En', 'H', 'HPS', 'Hum', 'Mu', 'Pl', 'VC'],
        minNumber: 90,
      },
    ],
  },
  {
    id: 'social-sciences',
    name: 'Social Sciences (27u total)',
    description:
      'Two introductory social science courses (Ec 11, PS 12, or Psy 13) plus 18u of advanced social science (100+, graded) in a field following at least one intro: Ec → advanced econ or BEM (not BEM 102); PS → advanced PS; Psy → advanced Psy.',
    minUnits: 27,
    subGroups: [
      {
        id: 'intro-ss',
        name: 'Introductory social sciences (2 courses)',
        description: 'Two introductory social science courses from Ec 11, PS 12, Psy 13.',
        minCourses: 2,
        courses: ['Ec11', 'PS12', 'Psy13'],
      },
      {
        id: 'adv-ss',
        name: 'Advanced social sciences (≥18u, 100+, graded)',
        description:
          'Eighteen units of advanced (100+) social science in a field matching one of your intro courses: anthropology, BEM (not BEM 102), economics, law, political science, psychology, social science.',
        minUnits: 18,
        departments: ['An', 'BEM', 'Ec', 'Law', 'PS', 'Psy', 'SS'],
        minNumber: 100,
        excludeCourses: ['BEM102'],
      },
    ],
  },
  {
    id: 'addhss',
    name: 'Additional Humanities & Social Sciences (36u)',
    description:
      'An additional 36 units drawn from humanities and social sciences (including HSS tutorial courses and up to 9u of Wr 1 or Wr 2). May NOT include BEM 102.',
    minUnits: 36,
    departments: ['An', 'BEM', 'Ec', 'En', 'H', 'HPS', 'Hum', 'Law', 'Mu', 'Pl', 'PS', 'Psy', 'SS', 'VC', 'Wr'],
    excludeCourses: ['BEM102'],
  },
  {
    id: 'writing-intensive',
    name: 'Writing-Intensive Courses (3)',
    description:
      'Three writing-intensive courses, taken on grades. Counts: graded advanced humanities (90+ in En/H/HPS/Hum/Mu/Pl/VC) plus named social-science writing courses (An/PS 127, BEM 109, Ec 105, Ec 130, Ec 140, PS 120, PS 123, PS 141). Should be spread across sophomore, junior, senior years (not enforced).',
    minCourses: 3,
    // Either path qualifies — the matcher ORs the explicit list with the
    // advanced-humanities department filter.
    courses: [
      'AnPS127',
      'BEM109',
      'Ec105', 'Ec130', 'Ec140',
      'PS120', 'PS123', 'PS141',
    ],
    departments: ['En', 'H', 'HPS', 'Hum', 'Mu', 'Pl', 'VC'],
    minNumber: 90,
  },
  {
    id: 'pe',
    name: 'Physical Education',
    description: '9 units total (typically three terms). Pass/fail. May be satisfied by intercollegiate athletics participation. Max 6 units/term, max 36 total counted toward graduation.',
    minUnits: 9,
    departments: ['PE'],
  },
];

export const TOTAL_UNITS_REQUIRED = 486;
