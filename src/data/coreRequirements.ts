import type { CoreRequirementGroup } from '../types';

/**
 * Caltech Undergraduate Core Curriculum Requirements (2024-25)
 * Total: 486 units for graduation (core is ~219 units)
 */
export const CORE_REQUIREMENTS: CoreRequirementGroup[] = [
  {
    id: 'math',
    name: 'Ma 1abc',
    description: 'First-Year Mathematics – Calculus of One and Several Variables and Linear Algebra',
    minUnits: 27,
    courses: ['Ma1a', 'Ma1b', 'Ma1c'],
  },
  {
    id: 'physics',
    name: 'Ph 1abc',
    description: 'First-Year Physics – Classical Mechanics and Electromagnetism',
    minUnits: 27,
    courses: ['Ph1a', 'Ph1b', 'Ph1c'],
  },
  {
    id: 'chemistry',
    name: 'Ch 1ab',
    description: 'First-Year Chemistry – General Chemistry',
    minUnits: 15,
    courses: ['Ch1a', 'Ch1b'],
  },
  {
    id: 'biology',
    name: 'Bi 1 or 1x',
    description: 'First-Year Biology – any Bi 1 course, or both Bi 8 and Bi 9',
    minUnits: 9,
    courses: ['Bi1', 'Bi1x', 'Bi8', 'Bi9'],
  },
  {
    id: 'menu',
    name: 'Menu class',
    description: 'Menu Class – one of Ay 1, EE 1, ESE 1, Ge 1, or IST 4',
    minUnits: 9,
    courses: ['Ay1', 'EE1', 'ESE1', 'Ge1'],
  },
  {
    id: 'cs',
    name: 'CS 1 or 1x',
    description: 'Introduction to Computer Programming',
    minUnits: 6,
    courses: ['CS1', 'CS1x'],
  },
  {
    id: 'ch3a',
    name: 'Ch 3a or 3x',
    description: 'First-Year Chemistry Lab – Fundamental Techniques of Experimental Chemistry',
    minUnits: 6,
    courses: ['Ch3a', 'Ch3x'],
  },
  {
    id: 'addlab',
    name: 'Additional introductory lab',
    description: 'Additional introductory lab – 6+ units from APh/EE 9, Bi 10, Ph 3, Ph 5, or approved labs',
    minUnits: 6,
    courses: ['APh9', 'Bi10', 'Ph3', 'Ph5'],
  },
  {
    id: 'hss',
    name: 'Humanities and social sciences',
    description: 'Humanities and Social Sciences – 108 total units across multiple sub-requirements',
    minUnits: 108,
    subGroups: [
      {
        id: 'frosh-hum',
        name: 'Freshman humanities',
        description: 'Two freshman humanities courses (numbered 60 or below), 18 units',
        minUnits: 18,
        courses: ['En1', 'H1', 'Pl10', 'Pl40', 'HumH13'],
      },
      {
        id: 'adv-hum',
        name: 'Advanced humanities',
        description: 'Advanced humanities (numbered 90+), taken for grades, 18 units',
        minUnits: 18,
        courses: ['En100', 'En84', 'H1', 'HPS185'],
      },
      {
        id: 'intro-ss',
        name: 'Introductory social sciences',
        description: 'Introductory social science – one of Ec 11, PS 12, or Psy 13, 18 units',
        minUnits: 18,
        courses: ['Ec11', 'PS12', 'Psy13', 'An1'],
      },
      {
        id: 'adv-ss',
        name: 'Advanced social sciences',
        description: 'Advanced social science (numbered 100+), taken for grades, 9 units',
        minUnits: 9,
        courses: ['Ec105', 'Ec106', 'Ec110', 'Ec121a', 'Ec122'],
      },
      {
        id: 'writing',
        name: 'Writing intensives',
        description: 'Writing-intensive courses – additional HSS including writing intensives, 36 units',
        minUnits: 36,
        courses: ['En1', 'En84', 'En100', 'HumPI45', 'HumH13', 'HPS185', 'SEC10', 'SEC11', 'SEC12'],
      },
    ],
  },
  {
    id: 'pe',
    name: 'PE',
    description: 'Physical Education – 9 units total (three terms)',
    minUnits: 9,
    courses: ['PE91', 'PE92'],
  },
];

export const TOTAL_UNITS_REQUIRED = 486;
