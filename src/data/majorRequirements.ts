import type { Major } from '../types';

export const MAJORS: Major[] = [
  // ─────────────────────────────────────────────────────────────────
  // COMPUTER SCIENCE
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/computer-science-option-and-minor-cs/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'cs',
    name: 'Computer Science',
    abbreviation: 'CS',
    totalUnits: 486,
    requirements: [
      {
        id: 'cs-fund',
        name: 'CS Fundamentals',
        description: 'CS 1 or CS 1X; CS 2; CS 3x; CS 18; CS 4.',
        slots: [
          { name: 'CS 1 or CS 1X', options: ['CS1', 'CS1x'] },
          { name: 'CS 2', options: ['CS2'] },
          { name: 'CS 3x', options: ['CS3x', 'CS3'] },
          { name: 'CS 18', options: ['CS18'] },
          { name: 'CS 4', options: ['CS4'] },
        ],
      },
      {
        id: 'cs-inter',
        name: 'Intermediate CS',
        description: 'CS 21; CS 24; CS 38.',
        slots: [
          { name: 'CS 21', options: ['CS21'] },
          { name: 'CS 24', options: ['CS24'] },
          { name: 'CS 38', options: ['CS38'] },
        ],
      },
      {
        id: 'cs-math',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2/102; Ma 3/103; (CS 13 or Ma/CS 6a or Ma 121a).',
        slots: [
          { name: 'Ma 2 (or 102)', options: ['Ma2', 'Ma102'] },
          { name: 'Ma 3 (or 103)', options: ['Ma3', 'Ma103'] },
          { name: 'CS 13 / Ma/CS 6a / Ma 121a', options: ['CS13', 'MaCS6a', 'Ma121a'] },
        ],
      },
      {
        id: 'cs-comm',
        name: 'Communication Fundamentals',
        description: 'SEC 10 and one of SEC 11-13.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11, 12 or 13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'cs-sci',
        name: 'Scientific Core Electives',
        description: '18 units from BE/Bi 25, Bi 8, Bi 9, Ch 21abc, Ch 41abc, Ph 2abc, or Ph 12abc.',
        courses: [
          'BEBi25', 'Bi8', 'Bi9',
          'Ch21a', 'Ch21b', 'Ch21c',
          'Ch41a', 'Ch41b', 'Ch41c',
          'Ph2a', 'Ph2b', 'Ph2c',
          'Ph12a', 'Ph12b', 'Ph12c',
        ],
        minUnits: 18,
      },
      {
        id: 'cs-project',
        name: 'CS Project Sequence',
        description: 'Complete any one of: undergraduate thesis (CS 80abc), an 18-unit CS 81/82 project, or a three-quarter track in Graphics, Learning & Vision, Networks & Communication, Quantum & Molecular Computing, Robotics, or Programming Languages.',
        subRequirements: [
          {
            id: 'cs-proj-thesis',
            name: 'Undergraduate thesis (CS 80abc)',
            description: 'Three-quarter senior thesis supervised by a CS faculty member.',
            slots: [
              { name: 'CS 80a', options: ['CS80a'] },
              { name: 'CS 80b', options: ['CS80b'] },
              { name: 'CS 80c', options: ['CS80c'] },
            ],
          },
          {
            id: 'cs-proj-project',
            name: '18 units of CS 81 or CS 82 project',
            description: 'A two-or-more-quarter project mentored by a faculty member, totaling at least 18 units.',
            courses: ['CS81a', 'CS81b', 'CS81c', 'CS82'],
            minUnits: 18,
          },
          {
            id: 'cs-proj-graphics',
            name: 'Graphics track',
            description: 'CS/CNS 171 plus two other CS 17x courses.',
            slots: [
              { name: 'CS/CNS 171', options: ['CSCNS171'] },
              { name: 'CS 17x #1', options: ['CS172', 'CS173', 'CS174', 'CS175', 'CS176', 'CS177', 'CS179'] },
              { name: 'CS 17x #2', options: ['CS172', 'CS173', 'CS174', 'CS175', 'CS176', 'CS177', 'CS179'] },
            ],
          },
          {
            id: 'cs-proj-learning',
            name: 'Learning & Vision track',
            description: 'At least 3 courses from EE/CNS/CS 148, CMS/CS/CNS/EE/IDS 155, CS/CNS/EE 156ab, IDS/ACM/CS 157, ACM/CS/EE/IDS 158, CS/CNS/EE/IDS 159, CNS/Bi/EE/CS/NB 186, CNS/Bi/Ph/CS/NB 187, Ec/ACM/CS 112 — including at least one of 148, 156b, 159, or 186.',
            slots: [
              {
                name: 'At least one of: 148 / 156b / 159 / 186',
                options: ['EECNSCS148', 'CSCNSEE156b', 'CSCNSEEIDS159', 'CNSBiEECSNB186'],
              },
              {
                name: 'Course #2 in Learning & Vision',
                options: [
                  'EECNSCS148', 'CMSCSCNSEEIDS155',
                  'CSCNSEE156a', 'CSCNSEE156b',
                  'IDSACMCS157', 'ACMCSEEIDS158',
                  'CSCNSEEIDS159',
                  'CNSBiEECSNB186', 'CNSBiPhCSNB187',
                  'EcACMCS112',
                ],
              },
              {
                name: 'Course #3 in Learning & Vision',
                options: [
                  'EECNSCS148', 'CMSCSCNSEEIDS155',
                  'CSCNSEE156a', 'CSCNSEE156b',
                  'IDSACMCS157', 'ACMCSEEIDS158',
                  'CSCNSEEIDS159',
                  'CNSBiEECSNB186', 'CNSBiPhCSNB187',
                  'EcACMCS112',
                ],
              },
            ],
          },
          {
            id: 'cs-proj-networks',
            name: 'Networks & Communication track',
            description: 'Three courses from CS 141, CS/EE/IDS 143, CMS/CS/EE/IDS 144, CS/EE 145, CS/EE 146, EE/Ma/CS 126ab, EE 127, EE/CS/EST 135, EE 160, or EE 161.',
            slots: [
              { name: 'Networks course #1', options: ['CS141', 'CSEEIDS143', 'CMSCSEEIDS144', 'CSEE145', 'CSEE146', 'EEMaCS126a', 'EEMaCS126b', 'EE127', 'EECSEST135', 'EE160', 'EE161'] },
              { name: 'Networks course #2', options: ['CS141', 'CSEEIDS143', 'CMSCSEEIDS144', 'CSEE145', 'CSEE146', 'EEMaCS126a', 'EEMaCS126b', 'EE127', 'EECSEST135', 'EE160', 'EE161'] },
              { name: 'Networks course #3', options: ['CS141', 'CSEEIDS143', 'CMSCSEEIDS144', 'CSEE145', 'CSEE146', 'EEMaCS126a', 'EEMaCS126b', 'EE127', 'EECSEST135', 'EE160', 'EE161'] },
            ],
          },
          {
            id: 'cs-proj-quantum',
            name: 'Quantum & Molecular Computing track',
            description: 'At least 3 courses from BE/CS/CNS/Bi 191ab, BE/CS 196ab, ChE 130, or Ph/CS 219abc.',
            slots: [
              { name: 'QMC course #1', options: ['BECSCNSBi191a', 'BECSCNSBi191b', 'BECS196a', 'BECS196b', 'ChE130', 'PhCS219a', 'PhCS219b', 'PhCS219c'] },
              { name: 'QMC course #2', options: ['BECSCNSBi191a', 'BECSCNSBi191b', 'BECS196a', 'BECS196b', 'ChE130', 'PhCS219a', 'PhCS219b', 'PhCS219c'] },
              { name: 'QMC course #3', options: ['BECSCNSBi191a', 'BECSCNSBi191b', 'BECS196a', 'BECS196b', 'ChE130', 'PhCS219a', 'PhCS219b', 'PhCS219c'] },
            ],
          },
          {
            id: 'cs-proj-robotics',
            name: 'Robotics track',
            description: 'At least 3 courses from ME/CS/EE 133ab, ME/CS/EE 134, ME/CS/EE 169, ME/CDS/EE 234ab, or ME/CDS/EE 235ab.',
            slots: [
              { name: 'Robotics course #1', options: ['MECSEE133a', 'MECSEE133b', 'MECSEE134', 'MECSEE169', 'MECDSEE234a', 'MECDSEE234b', 'MECDSEE235a', 'MECDSEE235b'] },
              { name: 'Robotics course #2', options: ['MECSEE133a', 'MECSEE133b', 'MECSEE134', 'MECSEE169', 'MECDSEE234a', 'MECDSEE234b', 'MECDSEE235a', 'MECDSEE235b'] },
              { name: 'Robotics course #3', options: ['MECSEE133a', 'MECSEE133b', 'MECSEE134', 'MECSEE169', 'MECDSEE234a', 'MECDSEE234b', 'MECDSEE235a', 'MECDSEE235b'] },
            ],
          },
          {
            id: 'cs-proj-plang',
            name: 'Programming Languages track',
            description: 'At least 3 of CS 115, CS 128, CS 131, CS 164.',
            slots: [
              { name: 'PL course #1', options: ['CS115', 'CS128', 'CS131', 'CS164'] },
              { name: 'PL course #2', options: ['CS115', 'CS128', 'CS131', 'CS164'] },
              { name: 'PL course #3', options: ['CS115', 'CS128', 'CS131', 'CS164'] },
            ],
          },
        ],
      },
      {
        id: 'cs-adv',
        name: 'Advanced CS (72 units)',
        description: '72 units of CS 114+ (not double-counting earlier requirements), including at least one of CS 124, CS 137, CMS/CS/IDS 139, CS/IDS 142, CS/EE/IDS 143, CMS/CS/EE/IDS 144, CS/IDS 150a, or CS 151.',
        // Note: minUnits gate enforced flatly; the "at least one capstone" constraint
        // lives in the description (full constraint solving for AND-of-pool + at-least-one
        // capstone is out of scope for now).
        courses: [
          'CS115', 'CS116', 'CSIDS121', 'CS124', 'CS128', 'CS130', 'CS131', 'CS132', 'CS137',
          'CMSCSIDS139', 'CSIDS142', 'CSEEIDS143', 'CMSCSEEIDS144', 'CSIDS150a', 'CS151', 'CS152',
          'CMSCSCNSEEIDS155', 'CS164', 'EECNSCS148',
          'CSCNS171', 'IDSACMCS157', 'ACMCSEEIDS158',
        ],
        minUnits: 72,
      },
      {
        id: 'cs-breadth-1',
        name: 'Breadth: Ma / ACM / CS',
        description: '30 units in Ma, ACM, or CS — beyond the units used above (the planner does not enforce the "beyond" exclusion).',
        departments: ['Ma', 'ACM', 'CS'],
        minUnits: 30,
      },
      {
        id: 'cs-breadth-2',
        name: 'Breadth: EAS or Ma',
        description: '18 units in EAS or Ma.',
        departments: ['EAS', 'Ma'],
        minUnits: 18,
      },
      {
        id: 'cs-breadth-3',
        name: 'Breadth: free electives',
        description: '9 units not labeled PE, PVA, or SA. The planner does not enforce the label exclusion — treat this as a reminder.',
        minUnits: 9,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // PHYSICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/physics-option-ph/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ph',
    name: 'Physics',
    abbreviation: 'Ph',
    totalUnits: 486,
    requirements: [
      {
        id: 'ph-lab-3',
        name: 'Introductory Laboratory',
        description: 'Ph 3. Other lab courses may substitute (Ph 5, Ph 8 bc, APh 9 a).',
        slots: [
          { name: 'Ph 3 (or Ph 5 / Ph 8 bc / APh 9 a)', options: ['Ph3', 'Ph5', 'Ph8b', 'Ph8c', 'APh9a'] },
        ],
      },
      {
        id: 'ph-math',
        name: 'Mathematics',
        description: 'Ma 2 and Ma 3 (other stats courses such as Ge/Ay 117 or ACM 112 may substitute for Ma 3).',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3 (or GeAy 117 / ACM 112)', options: ['Ma3', 'GeAy117', 'ACM112'] },
        ],
      },
      {
        id: 'ph-sophomore',
        name: 'Sophomore Physics',
        description: 'Ph 12 abc.',
        slots: [
          { name: 'Ph 12a', options: ['Ph12a'] },
          { name: 'Ph 12b', options: ['Ph12b'] },
          { name: 'Ph 12c', options: ['Ph12c'] },
        ],
      },
      {
        id: 'ph-6',
        name: 'Ph 6 Laboratory',
        description: 'Ph 6 (Physics Laboratory).',
        slots: [
          { name: 'Ph 6', options: ['Ph6'] },
        ],
      },
      {
        id: 'ph-7',
        name: 'Ph 7 or APh/EE 24',
        description: 'Ph 7, or APh/EE 24 (APh 23 is a prerequisite for APh/EE 24).',
        slots: [
          { name: 'Ph 7 / APh/EE 24', options: ['Ph7', 'APhEE24'] },
        ],
      },
      {
        id: 'ph-research',
        name: 'Research / Thesis',
        description: '18u of Ph 77, or 27u of Ph 78 (experimental thesis), or 9u of Ph 77 + 9u of APh 77 or Ay 105, or 9u Ph 77 + 9u Ph 177.',
        // Approximate: any combination from these courses totaling ≥18 units.
        courses: ['Ph77a', 'Ph77b', 'Ph77c', 'Ph78a', 'Ph78b', 'Ph78c', 'APh77a', 'APh77b', 'APh77c', 'Ay105', 'Ph177'],
        minUnits: 18,
      },
      {
        id: 'ph-70',
        name: 'Communication (Ph 70)',
        description: 'Ph 70. Substitutes: Ay 30 + Ay 31, Ay 141, or Ma 10 + Ma 11.',
        slots: [
          { name: 'Ph 70 (or substitute)', options: ['Ph70', 'Ay30', 'Ay141'] },
        ],
      },
      {
        id: 'ph-106',
        name: 'Classical Physics',
        description: 'Ph 106 abc.',
        slots: [
          { name: 'Ph 106a', options: ['Ph106a'] },
          { name: 'Ph 106b', options: ['Ph106b'] },
          { name: 'Ph 106c', options: ['Ph106c'] },
        ],
      },
      {
        id: 'ph-125',
        name: 'Quantum Mechanics',
        description: 'Ph 125 ab.',
        slots: [
          { name: 'Ph 125a', options: ['Ph125a'] },
          { name: 'Ph 125b', options: ['Ph125b'] },
        ],
      },
      {
        id: 'ph-computational',
        name: 'Computational',
        description: 'Ph 21, Ph 22, one term of Ph 121 abc, Ay 190, APh/MS 141, or CS 155.',
        slots: [
          { name: 'Ph 21 / Ph 22 / Ph 121a / Ph 121b / Ph 121c / Ay 190 / APh/MS 141 / CS 155',
            options: ['Ph21', 'Ph22', 'Ph121a', 'Ph121b', 'Ph121c', 'Ay190', 'APhMS141', 'CS155'] },
        ],
      },
      {
        id: 'ph-elec',
        name: 'Advanced Physics Electives (90u)',
        description: '90 units of advanced physics electives: any Ph/APh/Ay course 100+, plus Ph 5, Ph 22, Ph 78, Ph 79, ACM 95, ACM 101, APh/EE 23, Ma 5, Ma 108, up to 10u of Ay 20-21. The planner counts Ph/APh/Ay-department units as a proxy.',
        departments: ['Ph', 'APh', 'Ay'],
        minUnits: 90,
      },
      {
        id: 'ph-outside',
        name: 'Science/Engineering Electives Outside PMA',
        description: '9 units of science/engineering electives outside Ph, Ay, APh, Ma, ACM (in addition to Core science electives).',
        minUnits: 9,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MATHEMATICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/mathematics-option-ma/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ma',
    name: 'Mathematics',
    abbreviation: 'Ma',
    totalUnits: 486,
    requirements: [
      {
        id: 'ma-2',
        name: 'Ma 2',
        description: 'Ma 2 — Differential Equations / Sophomore Mathematics.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
        ],
      },
      {
        id: 'ma-3',
        name: 'Ma 3 or Ma 140a',
        description: 'Ma 3 (Probability and Statistics) or Ma 140a.',
        slots: [
          { name: 'Ma 3 / Ma 140a', options: ['Ma3', 'Ma140a'] },
        ],
      },
      {
        id: 'ma-physics',
        name: 'Physics',
        description: 'Ph 2 bc or Ph 12 bc.',
        slots: [
          { name: 'Ph 2b / Ph 12b', options: ['Ph2b', 'Ph12b'] },
          { name: 'Ph 2c / Ph 12c', options: ['Ph2c', 'Ph12c'] },
        ],
      },
      {
        id: 'ma-core',
        name: 'Core Mathematics',
        description: 'Ma 5 abc; Ma 10; Ma 108 abc; Ma 109 abc.',
        slots: [
          { name: 'Ma 5a', options: ['Ma5a'] },
          { name: 'Ma 5b', options: ['Ma5b'] },
          { name: 'Ma 5c', options: ['Ma5c'] },
          { name: 'Ma 10', options: ['Ma10'] },
          { name: 'Ma 108a', options: ['Ma108a'] },
          { name: 'Ma 108b', options: ['Ma108b'] },
          { name: 'Ma 108c', options: ['Ma108c'] },
          { name: 'Ma 109a', options: ['Ma109a'] },
          { name: 'Ma 109b', options: ['Ma109b'] },
          { name: 'Ma 109c', options: ['Ma109c'] },
        ],
      },
      {
        id: 'ma-discrete-a',
        name: 'Discrete Mathematics A',
        description: 'Ma/CS 6a or Ma 121a.',
        slots: [
          { name: 'Ma/CS 6a / Ma 121a', options: ['MaCS6a', 'Ma121a'] },
        ],
      },
      {
        id: 'ma-discrete-b',
        name: 'Discrete Mathematics B',
        description: 'Ma/CS 6c or Ma 116a or Ma/CS 117a.',
        slots: [
          { name: 'Ma/CS 6c / Ma 116a / Ma/CS 117a', options: ['MaCS6c', 'Ma116a', 'MaCS117a'] },
        ],
      },
      {
        id: 'ma-elec',
        name: 'Mathematics Electives (45u)',
        description: '45 additional units of Ma numbered 110-190 or ACM numbered 95+. Of these, at most 18 may come from non-Caltech-Ma courses. Math majors must take two quarters (18u) of a single Ma 110-190 course (depth).',
        departments: ['Ma', 'ACM'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ELECTRICAL ENGINEERING
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/electrical-engineering-option-ee/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ee',
    name: 'Electrical Engineering',
    abbreviation: 'EE',
    totalUnits: 486,
    requirements: [
      {
        id: 'ee-core',
        name: 'EE Core',
        description: 'Ma 2; EE 2; SEC 10 + one of SEC 11-13; EE/CS 10ab; EE/APh 40; EE 44; EE 45; EE 55; EE 90; EE 111.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'EE 2', options: ['EE2'] },
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11, 12 or 13', options: ['SEC11', 'SEC12', 'SEC13'] },
          { name: 'EE/CS 10a', options: ['EECS10a'] },
          { name: 'EE/CS 10b', options: ['EECS10b'] },
          { name: 'EE/APh 40', options: ['EEAPh40'] },
          { name: 'EE 44', options: ['EE44'] },
          { name: 'EE 45', options: ['EE45'] },
          { name: 'EE 55', options: ['EE55'] },
          { name: 'EE 90', options: ['EE90'] },
          { name: 'EE 111', options: ['EE111'] },
        ],
      },
      {
        id: 'ee-physics',
        name: 'Physics',
        description: 'Two of Ph 2a, Ph 2b, Ph 2c, or APh/EE 23 (Ph 12 may replace Ph 2).',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c', 'APhEE23'],
        minCourses: 2,
      },
      {
        id: 'ee-math',
        name: 'Applied Mathematics (3 courses)',
        description: 'Three of ACM 95a, ACM 95b, ACM/IDS 104, ACM/EE/IDS 116.',
        courses: ['ACM95a', 'ACM95b', 'ACMIDS104', 'ACMEEIDS116'],
        minCourses: 3,
      },
      {
        id: 'ee-capstone-theory',
        name: 'Theory / Algorithms',
        description: 'EE 151 or EE/CS/IDS 160.',
        slots: [
          { name: 'EE 151 / EE/CS/IDS 160', options: ['EE151', 'EECSIDS160'] },
        ],
      },
      {
        id: 'ee-capstone-lab',
        name: 'Project Lab',
        description: 'EE 91 ab — waived if EE 80 abc is completed.',
        subRequirements: [
          {
            id: 'ee-cap-91',
            name: 'EE 91 ab',
            description: 'Two-quarter project lab.',
            slots: [
              { name: 'EE 91a', options: ['EE91a'] },
              { name: 'EE 91b', options: ['EE91b'] },
            ],
          },
          {
            id: 'ee-cap-80',
            name: 'EE 80 abc (waives 91 ab)',
            description: 'Senior thesis option.',
            slots: [
              { name: 'EE 80a', options: ['EE80a'] },
              { name: 'EE 80b', options: ['EE80b'] },
              { name: 'EE 80c', options: ['EE80c'] },
            ],
          },
        ],
      },
      {
        id: 'ee-elec',
        name: 'EE Electives (72 units)',
        description: '72 units of EE courses numbered 100+ or other EE-related engineering/science courses 100+ (e.g. CDS 110, CNS/Bi/Ph/CS/NB 187) with Option Rep approval. The planner counts EE-department units as a proxy.',
        departments: ['EE'],
        minUnits: 72,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MECHANICAL ENGINEERING
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/mechanical-engineering-option-me/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'me',
    name: 'Mechanical Engineering',
    abbreviation: 'ME',
    totalUnits: 486,
    requirements: [
      {
        id: 'me-comm',
        name: 'Technical Communication',
        description: 'SEC 10 and one of SEC 11, SEC 12, or SEC 13.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11, 12 or 13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'me-math-core',
        name: 'Mathematics Core',
        description: 'Ma 2 and ACM 95 ab.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'ACM 95a', options: ['ACM95a'] },
          { name: 'ACM 95b', options: ['ACM95b'] },
        ],
      },
      {
        id: 'me-math-elective',
        name: 'Mathematics Elective',
        description: '9 units selected from Ma 3, Ma/CS 6a, ACM/IDS 104, or other ACM courses numbered 100 and above. The planner counts the explicitly listed courses; for "other ACM 100+" use a custom override.',
        courses: ['Ma3', 'MaCS6a', 'ACMIDS104'],
        minUnits: 9,
      },
      {
        id: 'me-phys',
        name: 'Physics',
        description: '18 units selected from Ph 2 abc.',
        courses: ['Ph2a', 'Ph2b', 'Ph2c'],
        minUnits: 18,
      },
      {
        id: 'me-cs',
        name: 'Computing',
        description: '9 units selected from ACM 11, CS 1, CS 2, CS 11.',
        courses: ['ACM11', 'CS1', 'CS2', 'CS11'],
        minUnits: 9,
      },
      {
        id: 'me-core',
        name: 'ME Core',
        description: 'ME 10, ME 11 abc, ME 12 abc, ME 13, ME 14, ME 40, and ME 50 ab.',
        slots: [
          { name: 'ME 10', options: ['ME10'] },
          { name: 'ME 11a', options: ['ME11a'] },
          { name: 'ME 11b', options: ['ME11b'] },
          { name: 'ME 11c', options: ['ME11c'] },
          { name: 'ME 12a', options: ['ME12a'] },
          { name: 'ME 12b', options: ['ME12b'] },
          { name: 'ME 12c', options: ['ME12c'] },
          { name: 'ME 13', options: ['ME13'] },
          { name: 'ME 14', options: ['ME14', 'MECE14'] },
          { name: 'ME 40', options: ['ME40'] },
          { name: 'ME 50a', options: ['ME50a'] },
          { name: 'ME 50b', options: ['ME50b'] },
        ],
      },
      {
        id: 'me-capstone',
        name: 'Capstone Design',
        description: 'Complete any one of: ME 72 ab, ME 90 abc, or CS/EE/ME 75 abc. (Students choosing 75abc or 90abc must complete at least 27 units across the three quarters — not enforced by the planner.)',
        subRequirements: [
          {
            id: 'me-capstone-72',
            name: 'ME 72 ab',
            description: 'Two-quarter capstone sequence.',
            slots: [
              { name: 'ME 72a', options: ['ME72a'] },
              { name: 'ME 72b', options: ['ME72b'] },
            ],
          },
          {
            id: 'me-capstone-90',
            name: 'ME 90 abc',
            description: 'Three-quarter capstone sequence.',
            slots: [
              { name: 'ME 90a', options: ['ME90a'] },
              { name: 'ME 90b', options: ['ME90b'] },
              { name: 'ME 90c', options: ['ME90c'] },
            ],
          },
          {
            id: 'me-capstone-75',
            name: 'CS/EE/ME 75 abc',
            description: 'Interdisciplinary three-quarter capstone.',
            slots: [
              { name: 'CS/EE/ME 75a', options: ['CSEEME75a'] },
              { name: 'CS/EE/ME 75b', options: ['CSEEME75b'] },
              { name: 'CS/EE/ME 75c', options: ['CSEEME75c'] },
            ],
          },
        ],
      },
      {
        id: 'me-adv',
        name: 'Advanced Engineering Electives (45u)',
        description: '45 units of advanced engineering electives. Must include 27 units from one track (depth) and ≥9 units from each of two other tracks (breadth). Courses are pre-approved by the Option Representative. The planner counts ME-department units as a rough proxy; track depth/breadth is not enforced.',
        departments: ['ME'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHEMISTRY
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemistry-option-and-minor-ch/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ch',
    name: 'Chemistry',
    abbreviation: 'Ch',
    totalUnits: 486,
    requirements: [
      {
        id: 'ch-core',
        name: 'Chemistry & Foundation Core',
        description: 'Ch 14, Ch 21 abc, Ch 41 abc, Ch 90, Ma 2, Ph 2a. (Substitutions allowed: ESE/Ge 142 for Ch 14; Ph 2b/Ph 12b/Ch 125a/Ph 125a for Ch 21a; Ph 2c/Ph 12c/ChE/Ch 164/Ph 127a for Ch 21c.) Ch 91 also required (satisfies Institute scientific writing).',
        slots: [
          { name: 'Ch 14 (or ESE/Ge 142)', options: ['Ch14', 'ESEGe142'] },
          { name: 'Ch 21a (or Ph 2b / Ph 12b / Ch 125a / Ph 125a)', options: ['Ch21a', 'Ph2b', 'Ph12b', 'Ch125a', 'Ph125a'] },
          { name: 'Ch 21b', options: ['Ch21b'] },
          { name: 'Ch 21c (or Ph 2c / Ph 12c / ChE/Ch 164 / Ph 127a)', options: ['Ch21c', 'Ph2c', 'Ph12c', 'ChEChE164', 'Ph127a'] },
          { name: 'Ch 41a', options: ['Ch41a'] },
          { name: 'Ch 41b', options: ['Ch41b'] },
          { name: 'Ch 41c', options: ['Ch41c'] },
          { name: 'Ch 90 (Oral Presentation)', options: ['Ch90'] },
          { name: 'Ch 91 (Writing)', options: ['ChChE91', 'Ch91'] },
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ph 2a', options: ['Ph2a'] },
        ],
      },
      {
        id: 'ch-lab',
        name: 'Laboratory Work (5 terms)',
        description: 'A minimum of five terms of lab work chosen from Ch 4ab, Ch 5ab, Ch 6, Ch 7, Ch 11, Ch 15. One non-Ch lab may substitute (MS 90, Ph 6, Ph 7, or alternative with rep approval). One term of Ch 10c or Ch 82 (graded thesis) may count toward one of the five.',
        courses: ['Ch4a', 'Ch4b', 'Ch5a', 'Ch5b', 'Ch6', 'Ch7', 'Ch11', 'Ch15', 'MS90', 'Ph6', 'Ph7', 'Ch10c', 'Ch82'],
        minCourses: 5,
      },
      {
        id: 'ch-adv',
        name: 'Advanced Chemistry Electives (45u)',
        description: 'A minimum of five terms of advanced chemistry electives totaling ≥45 units, from Ch courses numbered 102+ (including cross-listed but excluding Ch 180 and Ch 280). Ch 101 may count toward the 45u but not the 5-term floor. The planner counts Ch-department units 100+ as a proxy.',
        departments: ['Ch'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BIOLOGY
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/biology-option-bi/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bi',
    name: 'Biology',
    abbreviation: 'Bi',
    totalUnits: 486,
    requirements: [
      {
        id: 'bi-core',
        name: 'Biology Core',
        description: 'Bi 8, Bi 9, Bi 117, Bi 122, NB/Bi/CNS 150, and Ch 41 abc.',
        slots: [
          { name: 'Bi 8', options: ['Bi8'] },
          { name: 'Bi 9', options: ['Bi9'] },
          { name: 'Bi 117', options: ['Bi117'] },
          { name: 'Bi 122', options: ['Bi122'] },
          { name: 'NB/Bi/CNS 150', options: ['NBBiCNS150'] },
          { name: 'Ch 41a', options: ['Ch41a'] },
          { name: 'Ch 41b', options: ['Ch41b'] },
          { name: 'Ch 41c', options: ['Ch41c'] },
        ],
      },
      {
        id: 'bi-math-phys',
        name: 'Math & Physics',
        description: 'Ma 2; Ma 3; two of Ph 2 abc (BE/Bi 25 may replace Ph 2c). Reasonable replacements allowed with rep approval.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'Ph 2 #1', options: ['Ph2a', 'Ph2b', 'Ph2c'] },
          { name: 'Ph 2 #2', options: ['Ph2a', 'Ph2b', 'Ph2c', 'BEBi25', 'Ch21a', 'Ch21c'] },
        ],
      },
      {
        id: 'bi-lab',
        name: 'Advanced Laboratory',
        description: 'One advanced (100/200-level) lab course, or Bi 21 with presentation, or three terms of Bi 90 abc.',
        slots: [
          { name: 'Advanced bio lab / Bi 21 / Bi 90abc', options: ['Bi21', 'Bi90a', 'Bi90b', 'Bi90c', 'Bi122', 'Bi145a', 'Bi145b'] },
        ],
      },
      {
        id: 'bi-biochem',
        name: 'Biochemistry (2 courses)',
        description: 'Two from Ch/Bi 110a, Ch/Bi 110b, Ch/Bi 111, BMB/Bi/Ch 170, BMB/Bi/Ch 173, or Ch 145.',
        courses: ['ChBi110a', 'ChBi110b', 'ChBi111', 'BMBBiCh170', 'BMBBiCh173', 'Ch145'],
        minCourses: 2,
      },
      {
        id: 'bi-comm',
        name: 'Scientific Writing',
        description: 'Bi/BE 24 (6u), or any writing course (e.g. En/Wr 84, 9u) + oral presentation at SURF Seminar Day, with rep approval.',
        slots: [
          { name: 'Bi/BE 24 (or alternative)', options: ['BiBE24', 'EnWr84'] },
        ],
      },
      {
        id: 'bi-elec',
        name: 'Biology Electives (≥8 courses)',
        description: 'At least 8 biology electives meeting all of: (a) not used for reqs 1-5, (b) 100+ level, (c) biology or bioengineering. At least two must be 9u each and graded; at least four total graded. Substantial Bi 22 research credit beyond the 12u minimum may count. The planner counts Bi+BE department courses 100+ as a proxy.',
        departments: ['Bi', 'BE'],
        minCourses: 8,
      },
      {
        id: 'bi-units',
        name: 'Biology Units (≥170u)',
        description: 'At least 170 units of biology must be taken and passed. Bi 1 courses, Bi 2, Bi 10, and BE/Bi/CNS/NB 197 do not count. BE electives count.',
        departments: ['Bi', 'BE'],
        minUnits: 170,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ASTROPHYSICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/astrophysics-option-and-minor-ay/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ay',
    name: 'Astrophysics',
    abbreviation: 'Ay',
    totalUnits: 486,
    requirements: [
      {
        id: 'ay-core',
        name: 'Astrophysics Core',
        description: 'Ay 20, 21, 101, 102, 30 (or one term of Ay 141), Ay 31, Ma 2, Ma 3, Ph 2 abc (or Ph 12 abc), Ph 125 ab, Ph 106 ab, Ph 106c (or Ph 107).',
        slots: [
          { name: 'Ay 20', options: ['Ay20'] },
          { name: 'Ay 21', options: ['Ay21'] },
          { name: 'Ay 101', options: ['Ay101'] },
          { name: 'Ay 102', options: ['Ay102'] },
          { name: 'Ay 30 / Ay 141', options: ['Ay30', 'Ay141a', 'Ay141b'] },
          { name: 'Ay 31', options: ['Ay31'] },
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'Ph 2a / Ph 12a', options: ['Ph2a', 'Ph12a'] },
          { name: 'Ph 2b / Ph 12b', options: ['Ph2b', 'Ph12b'] },
          { name: 'Ph 2c / Ph 12c', options: ['Ph2c', 'Ph12c'] },
          { name: 'Ph 125a', options: ['Ph125a'] },
          { name: 'Ph 125b', options: ['Ph125b'] },
          { name: 'Ph 106a', options: ['Ph106a'] },
          { name: 'Ph 106b', options: ['Ph106b'] },
          { name: 'Ph 106c or Ph 107', options: ['Ph106c', 'Ph107'] },
        ],
      },
      {
        id: 'ay-labs',
        name: 'Physics Laboratories (3)',
        description: 'Any three of Ph 3 or Ph 8 bc, Ph 5, Ph 6, Ph 7, Ph 77, or Ay 105. APh 23 + APh 24/123 may sub for one.',
        courses: ['Ph3', 'Ph5', 'Ph6', 'Ph7', 'Ph8b', 'Ph8c', 'Ph77a', 'Ph77b', 'Ph77c', 'Ay105', 'APh23', 'APh24', 'APh123'],
        minCourses: 3,
      },
      {
        id: 'ay-elec-ayph',
        name: 'Ay/Ph Electives (63u)',
        description: '63 additional units of Ay or Ph courses. Ph 127a, Ph 136 bc, and one of Ph 21/Ph 22/Ph 121 abc are strongly recommended.',
        departments: ['Ay', 'Ph'],
        minUnits: 63,
      },
      {
        id: 'ay-elec-sci',
        name: 'Science/Engineering Electives (27u)',
        description: '27 additional units of science or engineering electives, of which 18 must be outside the PMA division. Core classes and intro courses don\'t count.',
        minUnits: 27,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // APPLIED AND COMPUTATIONAL MATHEMATICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/applied-and-computational-mathematics-acm/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'acm',
    name: 'Applied and Computational Mathematics',
    abbreviation: 'ACM',
    totalUnits: 486,
    requirements: [
      {
        id: 'acm-math-fund',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2; Ma 3; Ma 6 ab or Ma 121 ab; Ma 6 c or CS 21; Ma 108 ab. Analytical tracks of Ma 1 bc strongly encouraged.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'Ma 6a or Ma 121a', options: ['MaCS6a', 'Ma6a', 'Ma121a'] },
          { name: 'Ma 6b or Ma 121b', options: ['MaCS6b', 'Ma6b', 'Ma121b'] },
          { name: 'Ma 6c or CS 21', options: ['MaCS6c', 'Ma6c', 'CS21'] },
          { name: 'Ma 108a', options: ['Ma108a'] },
          { name: 'Ma 108b', options: ['Ma108b'] },
        ],
      },
      {
        id: 'acm-prog',
        name: 'Programming Fundamentals',
        description: 'CS 1 or CS 1x; ACM 11.',
        slots: [
          { name: 'CS 1 or CS 1x', options: ['CS1', 'CS1x'] },
          { name: 'ACM 11', options: ['ACM11'] },
        ],
      },
      {
        id: 'acm-comm',
        name: 'Communication Fundamentals',
        description: 'SEC 10; one of SEC 11-13.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11, 12 or 13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'acm-core',
        name: 'ACM Core Classes',
        description: 'ACM 95 ab (intro methods); ACM 104 or ACM 107a (linear algebra); ACM 116 or CMS/ACM 117 (probability); ACM 101 ab (math methods); ACM 106 ab (numerical analysis).',
        slots: [
          { name: 'ACM 95a', options: ['ACM95a'] },
          { name: 'ACM 95b', options: ['ACM95b'] },
          { name: 'ACM 104 / ACM 107a', options: ['ACM104', 'ACMIDS104', 'ACM107a'] },
          { name: 'ACM 116 / CMS/ACM 117', options: ['ACM116', 'CMSACM117'] },
          { name: 'ACM 101a', options: ['ACM101a', 'ACMIDS101a'] },
          { name: 'ACM 101b', options: ['ACM101b', 'ACMIDS101b'] },
          { name: 'ACM 106a', options: ['ACM106a', 'ACMEE106a'] },
          { name: 'ACM 106b', options: ['ACM106b', 'ACMEE106b'] },
        ],
      },
      {
        id: 'acm-elec',
        name: 'ACM Electives (27u)',
        description: '27 units of 100+ ACM courses approved by adviser; up to 9u of ACM 80abc or ACM 81abc can count.',
        departments: ['ACM'],
        minUnits: 27,
      },
      {
        id: 'acm-seq',
        name: 'Application Sequence (27u)',
        description: 'One 27-unit 100+ sequence in science, engineering, or social sciences approved by the option representative (e.g. Probability & Statistics, Analysis & PDEs, Mathematical Modeling, Learning & Vision, Graphics, Robotics, etc.). The planner does not enforce sequence coherence.',
        minUnits: 27,
      },
      {
        id: 'acm-sci',
        name: 'Scientific Fundamentals (18u)',
        description: '18 units from BE/Bi 25, Bi 8, Bi 9, Ch 21 abc, Ch 41 abc, ME 11 abc, ME 12 abc, Ph 2 abc, or Ph 12 abc.',
        courses: [
          'BEBi25', 'Bi8', 'Bi9',
          'Ch21a', 'Ch21b', 'Ch21c',
          'Ch41a', 'Ch41b', 'Ch41c',
          'ME11a', 'ME11b', 'ME11c',
          'ME12a', 'ME12b', 'ME12c',
          'Ph2a', 'Ph2b', 'Ph2c',
          'Ph12a', 'Ph12b', 'Ph12c',
        ],
        minUnits: 18,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ECONOMICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/economics-option-ec/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ec',
    name: 'Economics',
    abbreviation: 'Ec',
    totalUnits: 486,
    requirements: [
      {
        id: 'ec-core',
        name: 'Core Economics',
        description: 'Ec 11; Ec 121 ab; PS/Ec 172; Ec 122.',
        slots: [
          { name: 'Ec 11', options: ['Ec11'] },
          { name: 'Ec 121a', options: ['Ec121a'] },
          { name: 'Ec 121b', options: ['Ec121b'] },
          { name: 'PS/Ec 172', options: ['PSEc172'] },
          { name: 'Ec 122', options: ['Ec122'] },
        ],
      },
      {
        id: 'ec-applied',
        name: 'Applied Microeconomics',
        description: 'One of Ec/Psy 108, Ec/Psy 109, Ec 105, Ec 135, or Ec 136.',
        slots: [
          { name: 'Ec/Psy 108 / 109 / Ec 105 / 135 / 136', options: ['EcPsy108', 'EcPsy109', 'Ec105', 'Ec135', 'Ec136'] },
        ],
      },
      {
        id: 'ec-macro',
        name: 'Macroeconomics & Growth',
        description: 'One of Ec 129, Ec 130, or Ec 140.',
        slots: [
          { name: 'Ec 129 / 130 / 140', options: ['Ec129', 'Ec130', 'Ec140'] },
        ],
      },
      {
        id: 'ec-stat',
        name: 'Statistics / Probability',
        description: 'Ma 3.',
        slots: [
          { name: 'Ma 3', options: ['Ma3'] },
        ],
      },
      {
        id: 'ec-linalg',
        name: 'Linear Algebra / Analysis',
        description: 'ACM 104 (Linear Algebra) or Ma 108a (Analysis). Grad-school-bound students encouraged to take both.',
        slots: [
          { name: 'ACM 104 / Ma 108a', options: ['ACM104', 'ACMIDS104', 'Ma108a'] },
        ],
      },
      {
        id: 'ec-elec-econ',
        name: 'Advanced Economics Electives (45u)',
        description: '45 additional units of advanced econ / social science courses 100+. Any BEM course except BEM 102, plus ACM 113 and ACM/EE/IDS 116 may partially satisfy.',
        departments: ['Ec', 'SS', 'PS'],
        minUnits: 45,
      },
      {
        id: 'ec-elec-sci',
        name: 'Advanced Science/Eng Electives (27u)',
        description: '27 additional units of advanced science, social science, math, and engineering courses (100+ only).',
        minUnits: 27,
      },
      {
        id: 'ec-writing',
        name: 'Writing / Oral Presentation',
        description: 'A scientific writing course and a 3u oral communication course (or a combined course like En/Wr 84). Must be taken on grades.',
        slots: [
          { name: 'Writing course (e.g. En/Wr 84)', options: ['EnWr84', 'ChChE91', 'Bi24', 'BiBE24'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BUSINESS, ECONOMICS, AND MANAGEMENT
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/business-economics-and-management-option-bem/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bem',
    name: 'Business, Economics, and Management',
    abbreviation: 'BEM',
    totalUnits: 486,
    requirements: [
      {
        id: 'bem-core',
        name: 'BEM/Economics Core',
        description: 'Ec 11; Ec 122; Ma 3 or ACM/EE/IDS 116; PS/Ec 172.',
        slots: [
          { name: 'Ec 11', options: ['Ec11'] },
          { name: 'Ec 122', options: ['Ec122'] },
          { name: 'Ma 3 or ACM/EE/IDS 116', options: ['Ma3', 'ACMEEIDS116'] },
          { name: 'PS/Ec 172', options: ['PSEc172'] },
        ],
      },
      {
        id: 'bem-found',
        name: 'BEM Foundation',
        description: 'BEM 102 and BEM 103.',
        slots: [
          { name: 'BEM 102', options: ['BEM102'] },
          { name: 'BEM 103', options: ['BEM103'] },
        ],
      },
      {
        id: 'bem-three',
        name: 'BEM 104+ Courses (3)',
        description: 'Three BEM courses numbered 104 or higher. At least two from BEM 104-112. Only one of BEM 104 and BEM 114 may be taken.',
        courses: ['BEM104', 'BEM105', 'BEM106', 'BEM107', 'BEM108', 'BEM109', 'BEM110', 'BEM111', 'BEM112', 'BEM114', 'BEM115', 'BEM116', 'BEM117', 'BEM118', 'BEM119'],
        minCourses: 3,
      },
      {
        id: 'bem-writing',
        name: 'Writing / Oral Communication',
        description: 'A scientific writing course and a 3u oral communication course (or a combined course such as En/Wr 84). Must be taken on grades.',
        slots: [
          { name: 'Writing course (e.g. En/Wr 84)', options: ['EnWr84', 'ChChE91', 'BiBE24'] },
        ],
      },
      {
        id: 'bem-five',
        name: 'Five Approved Courses',
        description: 'Five courses from the menu: any BEM (except those used in reqs 2-3; only one of BEM 104 and 114), ACM 113, ACM/EE/IDS 116, CS/Ec 149, Ec 102, Ec/ACM/CS 112, Ec 105+, Ma 112a, Ma/ACM/IDS 140ab, PS/Ec/IDS 126. No more than one of CMS/CS/CNS/EE/IDS 155, CS/CNS/EE 156a, IDS/ACM/CS 157. At least two must be BEM/Ec/PS/SS.',
        departments: ['BEM', 'Ec', 'PS', 'SS'],
        minCourses: 5,
      },
      {
        id: 'bem-elec',
        name: 'Additional Science/Math/Eng (45u)',
        description: '45 additional units of science (including econ, PS, psy, SS), math, and engineering courses 100+. Cannot be satisfied by intro lab courses.',
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // APPLIED PHYSICS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/applied-physics-aph/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'aph',
    name: 'Applied Physics',
    abbreviation: 'APh',
    totalUnits: 486,
    requirements: [
      {
        id: 'aph-comm',
        name: 'Communication',
        description: 'SEC 10 and one of SEC 11-13. (SEC 11-13 may be satisfied by 3u with APh 78/79 senior thesis, or Ph 70, En/Wr 84, Bi/BE 24.)',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11/12/13 (or alt)', options: ['SEC11', 'SEC12', 'SEC13', 'Ph70', 'EnWr84', 'BiBE24'] },
        ],
      },
      {
        id: 'aph-intro',
        name: 'APh Intro Sequence',
        description: 'APh/EE 9; APh/EE 23; APh/EE 24. With option rep approval, one may be replaced by Ph 3, Ph 5, Ph 6, Ph 7, or Ch 6.',
        slots: [
          { name: 'APh/EE 9 (or sub)', options: ['APhEE9', 'Ph3', 'Ph5', 'Ph6', 'Ph7', 'Ch6'] },
          { name: 'APh/EE 23 (or sub)', options: ['APhEE23', 'Ph3', 'Ph5', 'Ph6', 'Ph7', 'Ch6'] },
          { name: 'APh/EE 24 (or sub)', options: ['APhEE24', 'Ph3', 'Ph5', 'Ph6', 'Ph7', 'Ch6'] },
        ],
      },
      {
        id: 'aph-ph',
        name: 'Physics Core',
        description: 'Ph 12 abc, APh/MS/ME 105 ab (or Ph 127 ab), Ph 106 abc, Ph 125 ab (or Ch 125 ab).',
        slots: [
          { name: 'Ph 12a', options: ['Ph12a'] },
          { name: 'Ph 12b', options: ['Ph12b'] },
          { name: 'Ph 12c', options: ['Ph12c'] },
          { name: 'APh/MS/ME 105a (or Ph 127a)', options: ['APhMSME105a', 'Ph127a'] },
          { name: 'APh/MS/ME 105b (or Ph 127b)', options: ['APhMSME105b', 'Ph127b'] },
          { name: 'Ph 106a', options: ['Ph106a'] },
          { name: 'Ph 106b', options: ['Ph106b'] },
          { name: 'Ph 106c', options: ['Ph106c'] },
          { name: 'Ph 125a (or Ch 125a)', options: ['Ph125a', 'Ch125a'] },
          { name: 'Ph 125b (or Ch 125b)', options: ['Ph125b', 'Ch125b'] },
        ],
      },
      {
        id: 'aph-math',
        name: 'Mathematics',
        description: 'Ma 2, Ma 3, and ACM 95/100 ab.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'ACM 95a or ACM 100a', options: ['ACM95a', 'ACM100a'] },
          { name: 'ACM 95b or ACM 100b', options: ['ACM95b', 'ACM100b'] },
        ],
      },
      {
        id: 'aph-thesis',
        name: 'Senior Thesis / Research',
        description: 'APh 78 abc or APh 79 abc, or three terms of APh 123, APh 109, APh 119, Ae/APh 104 bc, or Ph 77 ab.',
        courses: ['APh78a', 'APh78b', 'APh78c', 'APh79a', 'APh79b', 'APh79c', 'APh123', 'APh109', 'APh119', 'AeAPh104b', 'AeAPh104c', 'Ph77a', 'Ph77b'],
        minCourses: 3,
      },
      {
        id: 'aph-elec',
        name: 'Advanced APh Electives (4 courses)',
        description: 'Four advanced APh courses numbered over 100 from a long approved list (APh 100, APh 200 do NOT count). The planner counts APh-department 100+ courses as a proxy.',
        departments: ['APh'],
        minCourses: 4,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHEMICAL ENGINEERING
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemical-engineering-option-che/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'che',
    name: 'Chemical Engineering',
    abbreviation: 'ChE',
    totalUnits: 486,
    requirements: [
      {
        id: 'che-core',
        name: 'ChE Core',
        description: 'Ma 2, Ph 2a, Ch/ChE 9, ChE 15, Ch 21 ab (Ph 12b may sub for Ch 21a), Ch 41 ab, ChE 62, ChE 63 ab, Ch/ChE 91 (or En/Wr 84), ACM 95 ab, ChE 101, ChE 103 abc, ChE 105, ChE 126.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ph 2a', options: ['Ph2a'] },
          { name: 'Ch/ChE 9', options: ['ChChE9'] },
          { name: 'ChE 15', options: ['ChE15'] },
          { name: 'Ch 21a (or Ph 12b)', options: ['Ch21a', 'Ph12b'] },
          { name: 'Ch 21b', options: ['Ch21b'] },
          { name: 'Ch 41a', options: ['Ch41a'] },
          { name: 'Ch 41b', options: ['Ch41b'] },
          { name: 'ChE 62', options: ['ChE62'] },
          { name: 'ChE 63a', options: ['ChE63a'] },
          { name: 'ChE 63b', options: ['ChE63b'] },
          { name: 'Ch/ChE 91 or En/Wr 84', options: ['ChChE91', 'EnWr84'] },
          { name: 'ACM 95a', options: ['ACM95a'] },
          { name: 'ACM 95b', options: ['ACM95b'] },
          { name: 'ChE 101', options: ['ChE101'] },
          { name: 'ChE 103a', options: ['ChE103a'] },
          { name: 'ChE 103b', options: ['ChE103b'] },
          { name: 'ChE 103c', options: ['ChE103c'] },
          { name: 'ChE 105', options: ['ChE105'] },
          { name: 'ChE 126', options: ['ChE126'] },
        ],
      },
      {
        id: 'che-data',
        name: 'Data / Statistics',
        description: 'One of ACM/EE/IDS 116, BE/Bi 103a, or ChE/Ch 137.',
        slots: [
          { name: 'ACM/EE/IDS 116 / BE/Bi 103a / ChE/Ch 137', options: ['ACMEEIDS116', 'BEBi103a', 'ChEChE137', 'ChEChE137a'] },
        ],
      },
      {
        id: 'che-soc',
        name: 'Social Science Requirement',
        description: 'One of Ec 11, Ec 117, BEM 102, BEM 103, BEM 104, or BEM 119. (BEM 102 does NOT count for the Institute core social science requirement.)',
        slots: [
          { name: 'Ec 11 / Ec 117 / BEM 102/103/104/119', options: ['Ec11', 'Ec117', 'BEM102', 'BEM103', 'BEM104', 'BEM119'] },
        ],
      },
      {
        id: 'che-track',
        name: 'ChE Track (≥63u)',
        description: 'Complete a 63-unit track: biomolecular, sustainability, process systems, materials, or computational. Inform option rep by sophomore spring.',
        subRequirements: [
          {
            id: 'che-track-bio',
            name: 'Biomolecular track',
            description: 'BE/ChE 163; Ch/Bi 110 a or 110 b; ChE 130 or ChE 90c; plus electives in bioengineering/biochemical engineering.',
            slots: [
              { name: 'BE/ChE 163', options: ['BEChE163'] },
              { name: 'Ch/Bi 110a or 110b', options: ['ChBi110a', 'ChBi110b'] },
              { name: 'ChE 130 or ChE 90c', options: ['ChEChBE130', 'ChE130', 'ChE90c'] },
            ],
            minUnits: 63,
          },
          {
            id: 'che-track-sus',
            name: 'Sustainability track',
            description: 'Two of ChE/ESE/ME/MS 111, ESE 101, ESE 102, ESE 103; one of ChE 128, ChE 90c, Ge 114a; plus 100-level ESE/EST electives.',
            slots: [
              { name: 'Sustainability #1', options: ['ChEESEMEMS111', 'ESE101', 'ESE102', 'ESE103'] },
              { name: 'Sustainability #2', options: ['ChEESEMEMS111', 'ESE101', 'ESE102', 'ESE103'] },
              { name: 'ChE 128 / ChE 90c / Ge 114a', options: ['ChE128', 'ChE90c', 'Ge114a'] },
            ],
            minUnits: 63,
          },
          {
            id: 'che-track-proc',
            name: 'Process Systems track',
            description: 'ChE 118; ChE 120; ChE 128 or ChE 90c; plus engineering electives.',
            slots: [
              { name: 'ChE 118', options: ['ChE118'] },
              { name: 'ChE 120', options: ['ChE120'] },
              { name: 'ChE 128 / ChE 90c', options: ['ChE128', 'ChE90c'] },
            ],
            minUnits: 63,
          },
          {
            id: 'che-track-mat',
            name: 'Materials track',
            description: 'ChE 128 or ChE 90c; one materials synthesis/processing course; one physical-properties course; plus electives.',
            slots: [
              { name: 'ChE 128 / ChE 90c', options: ['ChE128', 'ChE90c'] },
              { name: 'Synthesis/processing course', options: ['Ch102', 'Ch117', 'ChChE147', 'ChEChMS113', 'ChE115', 'MS133'] },
              { name: 'Properties course', options: ['Ch120a', 'Ch120b', 'ChEChE148', 'MS115', 'MSAPh122', 'MS131', 'MS132'] },
            ],
            minUnits: 63,
          },
          {
            id: 'che-track-comp',
            name: 'Computational track',
            description: 'ACM/IDS 104; ChE/Ch 137; at least one approved sequence; plus IDS/ACM/CS-area electives.',
            slots: [
              { name: 'ACM/IDS 104', options: ['ACMIDS104'] },
              { name: 'ChE/Ch 137', options: ['ChEChE137'] },
            ],
            minUnits: 63,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ENVIRONMENTAL SCIENCE AND ENGINEERING
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/environmental-science-and-engineering-option-and-minor-ese/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ese',
    name: 'Environmental Science and Engineering',
    abbreviation: 'ESE',
    totalUnits: 486,
    requirements: [
      {
        id: 'ese-core',
        name: 'Common Core (all tracks)',
        description: 'Ma 2; Ph 2a or Ph 12a; data analysis & statistics (BE/Bi 103ab OR Ph 20 + Ph 21 OR ChE 15 + BE/Bi 103b); ESE 101, 102, 103; writing (Ch 91 or Ph 70); oral presentation (Ge 109 or Ph 70 or Ch 90). ESE 91 senior thesis optional.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ph 2a or Ph 12a', options: ['Ph2a', 'Ph12a'] },
          { name: 'Data analysis course', options: ['BEBi103a', 'BEBi103b', 'Ph20', 'Ph21', 'ChE15'] },
          { name: 'ESE 101', options: ['ESE101'] },
          { name: 'ESE 102', options: ['ESE102'] },
          { name: 'ESE 103', options: ['ESE103'] },
          { name: 'Writing (Ch 91 / Ph 70)', options: ['ChChE91', 'Ch91', 'Ph70'] },
          { name: 'Oral presentation (Ge 109 / Ph 70 / Ch 90)', options: ['Ge109', 'Ph70', 'Ch90'] },
        ],
      },
      {
        id: 'ese-track',
        name: 'ESE Track',
        description: 'Complete one of three tracks: Chemistry, Physics, or Biology.',
        subRequirements: [
          {
            id: 'ese-track-chem',
            name: 'Chemistry Track',
            description: 'Ch 21ab; Ch 41ab; ESE/Ge 142; Ge/ESE 143; ESE/Ge/Ch 171; Lab: (Ch/ChE 9 OR Ch 4a) AND Ch 15; plus ≥77u of electives.',
            slots: [
              { name: 'Ch 21a', options: ['Ch21a'] },
              { name: 'Ch 21b', options: ['Ch21b'] },
              { name: 'Ch 41a', options: ['Ch41a'] },
              { name: 'Ch 41b', options: ['Ch41b'] },
              { name: 'ESE/Ge 142', options: ['ESEGe142'] },
              { name: 'Ge/ESE 143', options: ['GeESE143'] },
              { name: 'ESE/Ge/Ch 171', options: ['ESEGeCh171'] },
              { name: 'Lab core: Ch/ChE 9 or Ch 4a', options: ['ChChE9', 'Ch4a'] },
              { name: 'Ch 15', options: ['Ch15'] },
            ],
            minUnits: 77,
          },
          {
            id: 'ese-track-phys',
            name: 'Physics Track',
            description: 'Ph 12 bc, Ph 106 ab, ACM 95 ab, ME 11c, ESE 130; Ph 6 lab; ≥2 of (ME/CE/Ge/ESE 146, ESE 131, ESE 133, ME 119); ≥77u of electives.',
            slots: [
              { name: 'Ph 12b', options: ['Ph12b'] },
              { name: 'Ph 12c', options: ['Ph12c'] },
              { name: 'Ph 106a', options: ['Ph106a'] },
              { name: 'Ph 106b', options: ['Ph106b'] },
              { name: 'ACM 95a', options: ['ACM95a'] },
              { name: 'ACM 95b', options: ['ACM95b'] },
              { name: 'ME 11c', options: ['ME11c'] },
              { name: 'ESE 130', options: ['ESE130'] },
              { name: 'Ph 6', options: ['Ph6'] },
              { name: 'Track elective #1 (146/131/133/ME119)', options: ['MECEGeESE146', 'ESE131', 'ESE133', 'ME119'] },
              { name: 'Track elective #2', options: ['MECEGeESE146', 'ESE131', 'ESE133', 'ME119'] },
            ],
            minUnits: 77,
          },
          {
            id: 'ese-track-bio',
            name: 'Biology Track',
            description: 'ESE/Bio 166, 168, 178; Ch 41ab; ≥2 of (Bi 8, Bi 9, Bi 10, Bi/Ch 110); ≥9u lab from Bi 10, Ch 7, Ch 8, Ch 15, Ge 116, Ge 120ab; ≥77u electives.',
            slots: [
              { name: 'ESE/Bi 166', options: ['ESEBi166'] },
              { name: 'ESE/Bi 168', options: ['ESEBi168'] },
              { name: 'ESE/Bi 178', options: ['ESEBi178'] },
              { name: 'Ch 41a', options: ['Ch41a'] },
              { name: 'Ch 41b', options: ['Ch41b'] },
              { name: 'Bio core #1', options: ['Bi8', 'Bi9', 'Bi10', 'ChBi110a', 'ChBi110b'] },
              { name: 'Bio core #2', options: ['Bi8', 'Bi9', 'Bi10', 'ChBi110a', 'ChBi110b'] },
            ],
            minUnits: 77,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MATERIALS SCIENCE
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/materials-science-option-ms/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ms',
    name: 'Materials Science',
    abbreviation: 'MS',
    totalUnits: 486,
    requirements: [
      {
        id: 'ms-extended-core',
        name: 'Extended Core',
        description: 'Differential equations (Ma 2 or equivalent); Probability & Statistics (Ma 3 or equivalent); Waves (Ph 2a/Ph 12a/equiv); Quantum (Ph 2b/Ph 12b/Ch 21a/equiv); Thermodynamics & Stat Mech (Ph 2c/Ph 12c/equiv).',
        slots: [
          { name: 'Differential Equations', options: ['Ma2'] },
          { name: 'Probability & Statistics', options: ['Ma3'] },
          { name: 'Waves (Ph 2a/Ph 12a)', options: ['Ph2a', 'Ph12a'] },
          { name: 'Quantum (Ph 2b/Ph 12b/Ch 21a)', options: ['Ph2b', 'Ph12b', 'Ch21a'] },
          { name: 'Thermodynamics (Ph 2c/Ph 12c)', options: ['Ph2c', 'Ph12c'] },
        ],
      },
      {
        id: 'ms-cs',
        name: 'Programming Competency',
        description: 'CS 1 (or approved alternative or placement exam).',
        slots: [
          { name: 'CS 1', options: ['CS1', 'CS1x'] },
        ],
      },
      {
        id: 'ms-lab',
        name: 'Laboratory (18u)',
        description: '18 units of lab courses from APh 77 bc, Ae/APh 104 bc, CE 180, CS/CNS 171, CS/CNS 174, EE/CS 10ab, EE 45, EE 90, EE 91 ab, EE 110 abc, ME 50 ab, ME 72 ab, MS 121, MS/APh 122, MS 125, MS 142, or EAS lab courses.',
        courses: ['APh77b', 'APh77c', 'AeAPh104b', 'AeAPh104c', 'CE180', 'CSCNS171', 'CSCNS174', 'EECS10a', 'EECS10b', 'EE45', 'EE90', 'EE91a', 'EE91b', 'EE110a', 'EE110b', 'EE110c', 'ME50a', 'ME50b', 'ME72a', 'ME72b', 'MS121', 'MSAPh122', 'MS125', 'MS142'],
        minUnits: 18,
      },
      {
        id: 'ms-math',
        name: 'Advanced Mathematics',
        description: 'ACM/IDS 104 and ACM 95/100 ab, or Ma 108 abc, or Ma 109 abc.',
        slots: [
          { name: 'Advanced math sequence', options: ['ACMIDS104', 'ACM95a', 'ACM95b', 'ACM100a', 'ACM100b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c'] },
        ],
      },
      {
        id: 'ms-comm',
        name: 'Communication',
        description: 'SEC 10 or equivalent; one of SEC 11/12/13 or equivalent.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11/12/13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'ms-thermo-adv',
        name: 'Advanced Thermodynamics',
        description: 'APh 17 ab or ChE 63 ab or APh/MS/ME 105 ab.',
        slots: [
          { name: 'Sequence #1', options: ['APh17a', 'ChE63a', 'APhMSME105a'] },
          { name: 'Sequence #2', options: ['APh17b', 'ChE63b', 'APhMSME105b'] },
        ],
      },
      {
        id: 'ms-core',
        name: 'MS Core',
        description: 'MS 115 and MS/ME/MedE 116 and MS 90 (or other appropriate MS lab).',
        slots: [
          { name: 'MS 115', options: ['MS115'] },
          { name: 'MS/ME/MedE 116', options: ['MSMEMedE116'] },
          { name: 'MS 90 (or MS lab)', options: ['MS90'] },
        ],
      },
      {
        id: 'ms-elec',
        name: 'Restricted Electives (≥45u)',
        description: '≥45 additional units from a long approved list of MS / APh / ChE / Ch / Ge / Ae / ME courses (see catalog). The planner counts MS + APh department 100+ units as a proxy.',
        departments: ['MS', 'APh'],
        minUnits: 45,
      },
      {
        id: 'ms-thesis',
        name: 'Senior Thesis',
        description: 'MS 78 abc.',
        slots: [
          { name: 'MS 78a', options: ['MS78a'] },
          { name: 'MS 78b', options: ['MS78b'] },
          { name: 'MS 78c', options: ['MS78c'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // COMPUTATION AND NEURAL SYSTEMS
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/computation-and-neural-systems-option-cns/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'cns',
    name: 'Computation and Neural Systems',
    abbreviation: 'CNS',
    totalUnits: 486,
    requirements: [
      {
        id: 'cns-math-core',
        name: 'Extended Math Core (4 courses)',
        description: '4 courses from the extended math core: Differential Equations (Ma 2 / ACM 95ab / ACM 101ab / ACM 106ab / Ma 108abc / Ma 109abc); Probability & Statistics (Ma 3 / BE/Bi 103b / Ec/ACM/CS 112 / ACM 116 / CMS/ACM 117 / Ge/Ay 117 / IDS/ACM/CS 157); Other (Ma 5abc / Ma 6abc / ACM 104 / ACM 107ab / Bi/CNS/NB 195); Analytical Science: two from one set (Sophomore Physics, Advanced Physics, Optics, Organic Chemistry, Physical Chemistry, ChE, EE, or ME sequences).',
        courses: [
          'Ma2', 'ACM95a', 'ACM95b', 'ACM101a', 'ACM101b', 'ACM106a', 'ACM106b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c',
          'Ma3', 'BEBi103b', 'EcACMCS112', 'ACM116', 'CMSACM117', 'GeAy117', 'IDSACMCS157',
          'Ma5a', 'Ma5b', 'Ma5c', 'MaCS6a', 'MaCS6b', 'MaCS6c', 'ACM104', 'ACMIDS104', 'ACM107a', 'ACM107b', 'BiCNSNB195',
        ],
        minCourses: 4,
      },
      {
        id: 'cns-analytical',
        name: 'Analytical Science (2 from one sequence)',
        description: 'Two courses from one of: Ph 2 abc / Ph 12 abc (Sophomore Physics); Ph 106 abc / Ph 125 abc (Advanced); APh 23 / APh 24 / Ph 107 (Optics); Ch 41 abc (Organic); Ch 21 abc (Physical Chem); ChE 63 ab / ChE 62 (ChE); EE 44 / EE 119 ab / EE 114 ab (EE); ME 11 abc / ME 12 abc (ME).',
        courses: [
          'Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c',
          'Ph106a', 'Ph106b', 'Ph106c', 'Ph125a', 'Ph125b', 'Ph125c',
          'APh23', 'APh24', 'Ph107',
          'Ch41a', 'Ch41b', 'Ch41c',
          'Ch21a', 'Ch21b', 'Ch21c',
          'ChE63a', 'ChE63b', 'ChE62',
          'EE44', 'EE119a', 'EE119b', 'EE114a', 'EE114b',
          'ME11a', 'ME11b', 'ME11c', 'ME12a', 'ME12b', 'ME12c',
        ],
        minCourses: 2,
      },
      {
        id: 'cns-cs',
        name: 'Computer Programming Competency',
        description: 'CS 1, CS 2, and CS 3; or advanced alternatives: CS 24 (Systems), CS 21 (Decidability), CS 38 (Algorithms), BE 103 ab (Bio data), Bi/BE/CS 183 (Comp bio).',
        courses: ['CS1', 'CS1x', 'CS2', 'CS3', 'CS24', 'CS21', 'CS38', 'BEBi103a', 'BEBi103b', 'BiBECS183'],
        minCourses: 3,
      },
      {
        id: 'cns-lab',
        name: 'Bi/CNS 162 + Laboratory (9u)',
        description: 'Bi/CNS 162 and 9 units of lab from CS/CNS 171, CS/CNS 174, EE 45, EE 90, EE 91 ab, ME 72 ab, ME 50ab, BE/EE/MedE 189 a, BE/CS 196a, Bi/BE 227, Bi/CNS/BE/NB 230, ME/CS/EE 134, or equivalent.',
        slots: [
          { name: 'Bi/CNS 162', options: ['BiCNS162', 'NBBiCNS162'] },
          { name: 'Lab course #1', options: ['CSCNS171', 'CSCNS174', 'EE45', 'EE90', 'EE91a', 'EE91b', 'ME72a', 'ME72b', 'ME50a', 'ME50b', 'BEEEMedE189a', 'BECS196a', 'BiBE227', 'BiCNSBENB230', 'MECSEE134'] },
        ],
      },
      {
        id: 'cns-comm',
        name: 'Communication',
        description: 'SEC 10 and one of SEC 11/12/13, or Bi/BE 24.',
        slots: [
          { name: 'SEC 10 (or Bi/BE 24)', options: ['SEC10', 'BiBE24'] },
          { name: 'SEC 11/12/13 (or Bi/BE 24)', options: ['SEC11', 'SEC12', 'SEC13', 'BiBE24'] },
        ],
      },
      {
        id: 'cns-biocore',
        name: 'Biology Core',
        description: 'Bi 8; Bi 9; NB/Bi/CNS 150; Bi/CNS/NB 164.',
        slots: [
          { name: 'Bi 8', options: ['Bi8'] },
          { name: 'Bi 9', options: ['Bi9'] },
          { name: 'NB/Bi/CNS 150', options: ['NBBiCNS150'] },
          { name: 'Bi/CNS/NB 164', options: ['BiCNSNB164', 'NBBiCNS164'] },
        ],
      },
      {
        id: 'cns-cns',
        name: 'CNS-labeled Courses (5)',
        description: 'Choose five CNS-(co)labeled 3-digit courses.',
        departments: ['CNS'],
        minCourses: 5,
      },
      {
        id: 'cns-elec',
        name: 'Electives (45u)',
        description: '45 units of electives from advanced EAS courses or advanced science courses offered by BBE, CCE, GPS, or PMA divisions. (Senior thesis path: 27u electives + 27u of CNS thesis instead.)',
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BIOENGINEERING
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/bioengineering-option-be/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'be',
    name: 'Bioengineering',
    abbreviation: 'BE',
    totalUnits: 486,
    requirements: [
      {
        id: 'be-core',
        name: 'Bioengineering Core',
        description: 'BE/Bi 103a or IDS/ACM/CS 157; BE 150 or BE/CS/CNS/Bi 191a; BE/Bi/APh 161; BE/ChE 163.',
        slots: [
          { name: 'BE/Bi 103a or IDS/ACM/CS 157', options: ['BEBi103a', 'IDSACMCS157'] },
          { name: 'BE 150 or BE/CS/CNS/Bi 191a', options: ['BE150', 'BECSCNSBi191a'] },
          { name: 'BE/Bi/APh 161', options: ['BEBiAPh161'] },
          { name: 'BE/ChE 163', options: ['BEChE163'] },
        ],
      },
      {
        id: 'be-experimental',
        name: 'Experimental Methods',
        description: 'Bi 1x (by sophomore year); one of BE/EE/MedE 189a or BE 107; one of ChE/Ch/BE 130 or BE/CS 196a. (9u of BE 98 + BE 99 may substitute for one of these — except Bi 1x — with rep approval.)',
        slots: [
          { name: 'Bi 1x', options: ['Bi1x'] },
          { name: 'BE/EE/MedE 189a or BE 107', options: ['BEEEMedE189a', 'BE107'] },
          { name: 'ChE/Ch/BE 130 or BE/CS 196a', options: ['ChEChBE130', 'BECS196a'] },
        ],
      },
      {
        id: 'be-bcp',
        name: 'Biology, Chemistry & Physics',
        description: 'Two of Ph 2 abc (Ch 21 a may sub for Ph 2 b; Ch 21 c may sub for Ph 2 c); Bi 8; Bi 9; BE/Bi 25; Ch 41 a; Ch/Bi 110 a; plus one advanced bio course (Ch/Bi 111, Bi 114, Bi 117, Bi/BE 119, Bi 122, Bi 145 ab, NB/Bi/CNS 150, BE 150, Bi/BE/CS 183, or approved).',
        slots: [
          { name: 'Ph 2 #1', options: ['Ph2a', 'Ph2b', 'Ph2c'] },
          { name: 'Ph 2 #2', options: ['Ph2a', 'Ph2b', 'Ph2c', 'Ch21a', 'Ch21c'] },
          { name: 'Bi 8', options: ['Bi8'] },
          { name: 'Bi 9', options: ['Bi9'] },
          { name: 'BE/Bi 25', options: ['BEBi25'] },
          { name: 'Ch 41a', options: ['Ch41a'] },
          { name: 'Ch/Bi 110a', options: ['ChBi110a'] },
          { name: 'Advanced bio course', options: ['ChBi111', 'Bi114', 'Bi117', 'BiBE119', 'Bi122', 'Bi145a', 'Bi145b', 'NBBiCNS150', 'BE150', 'BiBECS183'] },
        ],
      },
      {
        id: 'be-math',
        name: 'Mathematical & Computational Methods',
        description: 'ACM 95 ab; Ma 2; Ma 3; one of ChE 105, CDS 110, or ACM 116; 9 units selected from CS 1, CS 2, CS 3, CS 21, CS 24, CS 38.',
        slots: [
          { name: 'ACM 95a', options: ['ACM95a'] },
          { name: 'ACM 95b', options: ['ACM95b'] },
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'ChE 105 / CDS 110 / ACM 116', options: ['ChE105', 'CDS110', 'ACM116'] },
        ],
      },
      {
        id: 'be-computing',
        name: 'Computing (9u)',
        description: '9 units selected from CS 1, CS 2, CS 3, CS 21, CS 24, CS 38.',
        courses: ['CS1', 'CS2', 'CS3', 'CS21', 'CS24', 'CS38'],
        minUnits: 9,
      },
      {
        id: 'be-elec',
        name: 'BE Electives (36u)',
        description: '36 units of BE electives: BE 98/99 (≤12u), any BE 100+ except BE/Bi/CNS/NB 197, BE-approved electives (biology, biodevices, biomaterials, biomechanics, computational, synthetic biology), or courses from requirements 1-3 that were not used to fulfill those requirements.',
        departments: ['BE'],
        minUnits: 36,
      },
      {
        id: 'be-comm',
        name: 'Communication',
        description: 'Bi/BE 24.',
        slots: [
          { name: 'Bi/BE 24', options: ['BiBE24'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // INFORMATION AND DATA SCIENCES
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/information-and-data-sciences-ids/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ids',
    name: 'Information and Data Sciences',
    abbreviation: 'IDS',
    totalUnits: 486,
    requirements: [
      {
        id: 'ids-cs-fund',
        name: 'Computer Science Fundamentals',
        description: 'CS 1 or CS 1X; CS 2; CS 21 or Ma/CS 6c; CS 38.',
        slots: [
          { name: 'CS 1 or CS 1X', options: ['CS1', 'CS1x'] },
          { name: 'CS 2', options: ['CS2'] },
          { name: 'CS 21 or Ma/CS 6c', options: ['CS21', 'MaCS6c'] },
          { name: 'CS 38', options: ['CS38'] },
        ],
      },
      {
        id: 'ids-math-fund',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2; Ma 3 or Ma/ACM/IDS 140a; Ma 108a; (CS 13 or Ma/CS 6a or Ma 121a); (Ma/CS 6b or Ma 121b).',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3 or Ma/ACM/IDS 140a', options: ['Ma3', 'MaACMIDS140a'] },
          { name: 'Ma 108a', options: ['Ma108a'] },
          { name: 'CS 13 / Ma/CS 6a / Ma 121a', options: ['CS13', 'MaCS6a', 'Ma121a'] },
          { name: 'Ma/CS 6b or Ma 121b', options: ['MaCS6b', 'Ma121b'] },
        ],
      },
      {
        id: 'ids-sci',
        name: 'Scientific Fundamentals (18u)',
        description: '18 units from BE/Bi 25, BE 153, Bi 8, Bi 9, Bi 117, Ch 21abc, Ch 24, Ch 25, Ch 41abc, Ph 2abc, or Ph 12abc.',
        courses: [
          'BEBi25', 'BE153', 'Bi8', 'Bi9', 'Bi117',
          'Ch21a', 'Ch21b', 'Ch21c', 'Ch24', 'Ch25',
          'Ch41a', 'Ch41b', 'Ch41c',
          'Ph2a', 'Ph2b', 'Ph2c',
          'Ph12a', 'Ph12b', 'Ph12c',
        ],
        minUnits: 18,
      },
      {
        id: 'ids-comm',
        name: 'Communication Fundamentals',
        description: 'SEC 10; one of SEC 11-13.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11, 12 or 13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'ids-core',
        name: 'IDS Core',
        description: 'Linear Algebra (ACM/IDS 104 + ACM 106a); Probability (ACM/EE/IDS 116); Statistics (IDS/ACM/CS 157); Machine Learning (CMS/CS/CNS/EE/IDS 155 or CS/CNS/EE 156a); Signal Processing (EE/IDS 111 or ACM/EE/IDS 170); Information Theory (EE/IDS 160).',
        slots: [
          { name: 'ACM/IDS 104', options: ['ACMIDS104'] },
          { name: 'ACM 106a', options: ['ACM106a', 'ACMEE106a'] },
          { name: 'ACM/EE/IDS 116', options: ['ACMEEIDS116'] },
          { name: 'IDS/ACM/CS 157', options: ['IDSACMCS157'] },
          { name: 'Machine Learning (155 or 156a)', options: ['CMSCSCNSEEIDS155', 'CSCNSEE156a'] },
          { name: 'Signal Processing (EE/IDS 111 or ACM/EE/IDS 170)', options: ['EEIDS111', 'ACMEEIDS170'] },
          { name: 'EE/IDS 160', options: ['EEIDS160'] },
        ],
      },
      {
        id: 'ids-applications',
        name: 'Applications Electives (≥18u)',
        description: '≥18 units from approved list: Ay 119, BE/Bi 103ab, BE/Bi 205, BEM 106, Bi/CNS/NB 162, Bi/BE/CS 183, CNS/Bi/EE/CS/NB 186, ME/CS/EE 133b, 134, EE/CNS/CS 148, Ec/ACM/CS 112, Ec 122, Ec/PS 124, ESE 136, Fs/Ay 3, Fs/Ph 4, Ge/Ay 117, Ge 165, HPS/Pl/CS 110, SS 228.',
        courses: [
          'Ay119', 'BEBi103a', 'BEBi103b', 'BEBi205', 'BEM106', 'BiCNSNB162',
          'BiBECS183', 'CNSBiEECSNB186', 'MECSEE133b', 'MECSEE134',
          'EECNSCS148', 'EcACMCS112', 'Ec122', 'EcPS124', 'ESE136',
          'FsAy3', 'FsPh4', 'GeAy117', 'Ge165', 'HPSPlCS110', 'SS228',
        ],
        minUnits: 18,
      },
      {
        id: 'ids-adv',
        name: 'Advanced Electives (≥54u)',
        description: '≥54 units from IDS 100+, CS/CNS/EE 156ab, ACM 106b, ACM 95/100ab, CMS/ACM/EE 122, CS 115, Ma 112ab.',
        courses: [
          'CSCNSEE156a', 'CSCNSEE156b', 'ACM106b', 'ACMEE106b',
          'ACM95a', 'ACM95b', 'ACM100a', 'ACM100b',
          'CMSACMEE122', 'CS115', 'Ma112a', 'Ma112b',
        ],
        departments: ['IDS'],
        minUnits: 54,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // GEOLOGICAL AND PLANETARY SCIENCES
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/geological-and-planetary-sciences-gps-geology-geobiology-geochemistry-geophysics-planetary-science/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'gps',
    name: 'Geological and Planetary Sciences',
    abbreviation: 'GPS',
    totalUnits: 486,
    requirements: [
      {
        id: 'gps-intro',
        name: 'GPS Introduction',
        description: 'Ge 1 or Ge 11a. (If you take Ge 11a here, an elective substitutes for Ge 11a below.)',
        slots: [
          { name: 'Ge 1 or Ge 11a', options: ['Ge1', 'Ge11a'] },
        ],
      },
      {
        id: 'gps-ge-11',
        name: 'Ge 11 Sequence',
        description: 'Ge 11a, 11b, 11c, 11d.',
        slots: [
          { name: 'Ge 11a', options: ['Ge11a'] },
          { name: 'Ge 11b', options: ['Ge11b'] },
          { name: 'Ge 11c', options: ['Ge11c'] },
          { name: 'Ge 11d', options: ['Ge11d'] },
        ],
      },
      {
        id: 'gps-comm',
        name: 'Writing & Oral Communication',
        description: 'A writing class ≥3u, and an oral presentation class ≥3u. En/Wr 84 (≥6u) may count toward both.',
        slots: [
          { name: 'Writing course', options: ['EnWr84', 'ChChE91', 'BiBE24', 'Ph70', 'Ay31'] },
          { name: 'Oral presentation', options: ['EnWr84', 'Ge109', 'Ph70', 'Ay30', 'Ch90'] },
        ],
      },
      {
        id: 'gps-math-phys',
        name: 'Math & Physics',
        description: 'Ma 2; Ma 3 or Ge/Ay 117; Ph 2a or Ph 12a; one of Ph 2b, Ph 12b, Ph 2c, Ph 12c.',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3 or Ge/Ay 117', options: ['Ma3', 'GeAy117'] },
          { name: 'Ph 2a or Ph 12a', options: ['Ph2a', 'Ph12a'] },
          { name: 'One of Ph 2b/12b/2c/12c', options: ['Ph2b', 'Ph12b', 'Ph2c', 'Ph12c'] },
        ],
      },
      {
        id: 'gps-electives',
        name: 'GPS Electives & Track Courses',
        description: 'The GPS major has additional track-specific requirements (geology, geobiology, geochemistry, geophysics, or planetary science) covered by Ge electives in consultation with the option representative. The planner counts Ge-department units as a proxy.',
        departments: ['Ge'],
        minUnits: 81,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ENGINEERING AND APPLIED SCIENCE
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/engineering-and-applied-science-option-eas/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'eas',
    name: 'Engineering and Applied Science',
    abbreviation: 'EAS',
    totalUnits: 486,
    requirements: [
      {
        id: 'eas-extended-core',
        name: 'Extended Core',
        description: 'Differential Equations (Ma 2 or equiv); Probability & Statistics (Ma 3 or equiv); Waves (Ph 2a/Ph 12a/equiv); Quantum (Ph 2b/Ph 12b/Ch 21a/equiv); Thermodynamics (Ph 2c/Ph 12c/ChE 63/ME 11/Ch 21c/equiv).',
        slots: [
          { name: 'Differential Equations', options: ['Ma2'] },
          { name: 'Probability & Statistics', options: ['Ma3'] },
          { name: 'Waves', options: ['Ph2a', 'Ph12a'] },
          { name: 'Quantum', options: ['Ph2b', 'Ph12b', 'Ch21a'] },
          { name: 'Thermodynamics', options: ['Ph2c', 'Ph12c', 'ChE63a', 'ChE63b', 'ME11a', 'Ch21c'] },
        ],
      },
      {
        id: 'eas-cs',
        name: 'Programming Competency',
        description: 'CS 1 (or approved alternative or placement exam by first term of sophomore year).',
        slots: [
          { name: 'CS 1', options: ['CS1', 'CS1x'] },
        ],
      },
      {
        id: 'eas-eas-adv',
        name: 'Advanced EAS Courses (27u)',
        description: '27 units of advanced EAS courses with prefixes Ae, ACM, AM, APh, CE, CS, CDS, EE, ESE, MS, or ME.',
        departments: ['Ae', 'ACM', 'AM', 'APh', 'CE', 'CS', 'CDS', 'EE', 'ESE', 'MS', 'ME'],
        minUnits: 27,
      },
      {
        id: 'eas-elec',
        name: 'Advanced Electives (27u)',
        description: '27 additional units of advanced EAS courses or advanced science courses offered by BBE, CCE, GPS, or PMA divisions.',
        minUnits: 27,
      },
      {
        id: 'eas-lab',
        name: 'Laboratory Courses (9u + 9u)',
        description: '9 units of lab from APh 77 bc, Ae/APh 104 bc, CE 180, CS/CNS 171, 174, EE 45, EE 53, EE 90, EE 91, MS 90, MS 125, ME 72 ab, ME 50 ab, ME 90 bc; plus 9 additional units of EAS lab courses.',
        courses: [
          'APh77b', 'APh77c', 'AeAPh104b', 'AeAPh104c', 'CE180',
          'CSCNS171', 'CSCNS174', 'EE45', 'EE53', 'EE90', 'EE91a', 'EE91b',
          'MS90', 'MS125', 'ME72a', 'ME72b', 'ME50a', 'ME50b', 'ME90b', 'ME90c',
        ],
        minUnits: 18,
      },
      {
        id: 'eas-math-adv',
        name: 'Advanced Mathematics',
        description: 'ACM 95 ab or Ma 108 abc or Ma 109 abc. Cannot be pass/fail.',
        slots: [
          { name: 'Advanced math sequence (any one of ACM 95ab / Ma 108abc / Ma 109abc)',
            options: ['ACM95a', 'ACM95b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c'] },
        ],
      },
      {
        id: 'eas-comm',
        name: 'Communication',
        description: 'SEC 10 or equivalent; one of SEC 11, SEC 12, or SEC 13 or equivalent.',
        slots: [
          { name: 'SEC 10', options: ['SEC10'] },
          { name: 'SEC 11/12/13', options: ['SEC11', 'SEC12', 'SEC13'] },
        ],
      },
      {
        id: 'eas-eas-bulk',
        name: 'EAS Bulk (117u)',
        description: 'At least 117 units of EAS courses not used for the elective/lab/math reqs above. Must include a senior thesis/capstone (EE 80abc, CS 80abc, ME 90abc, or two terms of EE 91ab). Customized schedule must be approved by the EAS Option Rep by end of sophomore year.',
        departments: ['Ae', 'ACM', 'AM', 'APh', 'CE', 'CS', 'CDS', 'EE', 'ESE', 'MS', 'ME'],
        minUnits: 117,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ENGLISH
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/english-option-and-minor-en/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'en',
    name: 'English',
    abbreviation: 'En',
    totalUnits: 486,
    requirements: [
      {
        id: 'en-99ab',
        name: 'En 99 ab',
        description: 'En 99 ab — Senior English Seminar.',
        slots: [
          { name: 'En 99a', options: ['En99a'] },
          { name: 'En 99b', options: ['En99b'] },
        ],
      },
      {
        id: 'en-adv',
        name: 'Advanced English (81u)',
        description: '81 additional units of English courses 99+. Up to 9u of first-year humanities in English (Hum/En 60 or below) and/or up to 9u of En 98 may substitute for up to 18u. Foreign literature courses or related humanities 100+ may substitute for up to 18u with adviser approval.',
        departments: ['En'],
        minUnits: 81,
      },
      {
        id: 'en-stem',
        name: 'Additional Science/Math/Engineering (54u)',
        description: '54 additional units of science, math, and engineering courses. Cannot be intro lab courses or courses numbered <10.',
        minUnits: 54,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // HISTORY
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/history-option-and-minor-h/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'h',
    name: 'History',
    abbreviation: 'H',
    totalUnits: 486,
    requirements: [
      {
        id: 'h-99abc',
        name: 'H 99 abc',
        description: 'H 99 abc — Senior History Seminar.',
        slots: [
          { name: 'H 99a', options: ['H99a'] },
          { name: 'H 99b', options: ['H99b'] },
          { name: 'H 99c', options: ['H99c'] },
        ],
      },
      {
        id: 'h-adv',
        name: 'Advanced History (72u)',
        description: '72 additional units of history courses 99+. Up to 9u Hum/H 60- and/or 9u of H 98 may substitute for up to 18u.',
        departments: ['H'],
        minUnits: 72,
      },
      {
        id: 'h-concentration',
        name: 'Area of Concentration (63u)',
        description: '63 of the total history units (including H 99 abc) must form an area of concentration defined with the adviser and option rep.',
        departments: ['H'],
        minUnits: 63,
      },
      {
        id: 'h-breadth',
        name: 'Outside Concentration (36u)',
        description: '36 history units in areas other than the area of concentration. H 99 abc does not count.',
        departments: ['H'],
        minUnits: 36,
      },
      {
        id: 'h-stem',
        name: 'Additional Science/Math/Engineering (54u)',
        description: '54 additional units of science, math, and engineering courses.',
        minUnits: 54,
      },
      {
        id: 'h-oral',
        name: 'Oral Communication (3u)',
        description: 'Three units of oral communication. En/Wr 84 satisfies, as do oral communication courses from other options.',
        slots: [
          { name: 'En/Wr 84 or equivalent', options: ['EnWr84', 'SEC10', 'SEC11', 'SEC12', 'SEC13', 'Ph70', 'Ch90', 'Ay30'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // HISTORY AND PHILOSOPHY OF SCIENCE
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/history-and-philosophy-of-science-option-and-minor-hps/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hps',
    name: 'History and Philosophy of Science',
    abbreviation: 'HPS',
    totalUnits: 486,
    requirements: [
      {
        id: 'hps-core',
        name: 'HPS Core',
        description: 'Hum/H/HPS 18; HPS 102 ab; HPS/Pl 120; HPS 103 (one quarter). HPS 102b satisfies Institute science writing.',
        slots: [
          { name: 'Hum/H/HPS 18', options: ['HumHHPS18'] },
          { name: 'HPS 102a', options: ['HPS102a'] },
          { name: 'HPS 102b', options: ['HPS102b'] },
          { name: 'HPS/Pl 120', options: ['HPSPl120'] },
          { name: 'HPS 103', options: ['HPS103'] },
        ],
      },
      {
        id: 'hps-adv',
        name: 'Advanced HPS Courses',
        description: 'One advanced history-of-science course (HPS/H 98+); one advanced philosophy-of-science course (HPS/Pl 98+); plus any four HPS courses. No more than 9u of HPS 98 counts.',
        departments: ['HPS', 'Pl'],
        minCourses: 6,
      },
      {
        id: 'hps-stem',
        name: 'Science / Math / Engineering (45u)',
        description: '45 units of science, math, and engineering courses. Cannot be intro lab or numbered <10.',
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // PHILOSOPHY
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/philosophy-option-and-minor-pi/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'pi',
    name: 'Philosophy',
    abbreviation: 'Pi',
    totalUnits: 486,
    requirements: [
      {
        id: 'pi-90ab',
        name: 'Pl 90 ab',
        description: 'Pl 90 ab — Senior Philosophy Seminar.',
        slots: [
          { name: 'Pl 90a', options: ['Pl90a'] },
          { name: 'Pl 90b', options: ['Pl90b'] },
        ],
      },
      {
        id: 'pi-adv',
        name: 'Advanced Philosophy (63u)',
        description: '63 units of advanced philosophy courses 99+. Up to 9u Hum/Pl 60- and/or 9u Pl 98 may substitute for up to 18u.',
        departments: ['Pl'],
        minUnits: 63,
      },
      {
        id: 'pi-related',
        name: 'Related Advanced (18u)',
        description: '18 units of advanced philosophy 99+ or closely-related non-philosophy courses (with rep approval).',
        minUnits: 18,
      },
      {
        id: 'pi-stem',
        name: 'Science/Math/Engineering (54u)',
        description: '54 units of additional science, math, and engineering courses (beyond core). Cannot be core/menu/intro-lab courses.',
        minUnits: 54,
      },
      {
        id: 'pi-oral',
        name: 'Oral Communication (3u)',
        description: 'Three units of oral communication. En 84 satisfies.',
        slots: [
          { name: 'En/Wr 84 or equivalent', options: ['EnWr84', 'SEC10', 'SEC11', 'SEC12', 'SEC13'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // POLITICAL SCIENCE
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/political-science-option-ps/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ps',
    name: 'Political Science',
    abbreviation: 'PS',
    totalUnits: 486,
    requirements: [
      {
        id: 'ps-core',
        name: 'PS Core',
        description: 'PS 12, PS 132, Ec 122.',
        slots: [
          { name: 'PS 12', options: ['PS12'] },
          { name: 'PS 132', options: ['PS132'] },
          { name: 'Ec 122', options: ['Ec122'] },
        ],
      },
      {
        id: 'ps-electives',
        name: 'PS Electives (4)',
        description: 'Four political science courses from PS 120, 123, 125, 135, 139, 141 ab, PS/Ec 172, or any 100-level PS with option rep approval.',
        courses: ['PS120', 'PS123', 'PS125', 'PS135', 'PS139', 'PS141a', 'PS141b', 'PSEc172'],
        departments: ['PS'],
        minCourses: 4,
      },
      {
        id: 'ps-ma3',
        name: 'Ma 3',
        description: 'Ma 3 — Probability & Statistics.',
        slots: [
          { name: 'Ma 3', options: ['Ma3'] },
        ],
      },
      {
        id: 'ps-adv-soc',
        name: 'Advanced Social Sciences (36u)',
        description: '36 additional units in advanced political science, economics, law, social science, psychology, or history.',
        departments: ['PS', 'Ec', 'SS', 'Psy', 'H'],
        minUnits: 36,
      },
      {
        id: 'ps-other',
        name: 'Advanced Other (36u)',
        description: '36 additional units in advanced social science, science, engineering, or mathematics.',
        minUnits: 36,
      },
      {
        id: 'ps-writing',
        name: 'Writing / Oral Communication',
        description: 'A scientific writing course and a 3u oral communication course (or combined like En/Wr 84). Must be on grades.',
        slots: [
          { name: 'En/Wr 84 or equivalent', options: ['EnWr84', 'ChChE91', 'BiBE24'] },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // INTERDISCIPLINARY STUDIES PROGRAM
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/interdisciplinary-studies-program-isp/
  // verified: 2026-05-21
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'isp',
    name: 'Interdisciplinary Studies Program',
    abbreviation: 'ISP',
    totalUnits: 486,
    requirements: [
      {
        id: 'isp-custom',
        name: 'Custom-Approved Curriculum',
        description: 'ISP is a customized option: a student designs their own curriculum under faculty supervision (≥2 professorial faculty from ≥2 options). The Curriculum Committee approves the contract. The planner cannot model individual ISP requirements; total units must reach 486 with passing grades.',
        minUnits: 486,
      },
    ],
  },
];


// ═════════════════════════════════════════════════════════════════
// MINORS — all catalog-verified 2026-05-21
// ═════════════════════════════════════════════════════════════════
export const MINORS: Major[] = [
  // ─── CS Minor ────────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/computer-science-option-and-minor-cs/
  {
    id: 'cs-minor',
    name: 'Computer Science Minor',
    abbreviation: 'CS Minor',
    requirements: [
      {
        id: 'csm-fund',
        name: 'CS Fundamentals',
        description: 'CS 1 or CS 1X; CS 2; CS 3x; CS 18.',
        slots: [
          { name: 'CS 1 or CS 1X', options: ['CS1', 'CS1x'] },
          { name: 'CS 2', options: ['CS2'] },
          { name: 'CS 3x', options: ['CS3x', 'CS3'] },
          { name: 'CS 18', options: ['CS18'] },
        ],
      },
      {
        id: 'csm-math',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2; Ma 3; (CS 13 or Ma/CS 6a or Ma 121a).',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3', options: ['Ma3'] },
          { name: 'CS 13 / Ma/CS 6a / Ma 121a', options: ['CS13', 'MaCS6a', 'Ma121a'] },
        ],
      },
      {
        id: 'csm-inter',
        name: 'Intermediate CS',
        description: 'CS 21; CS 24; CS 38.',
        slots: [
          { name: 'CS 21', options: ['CS21'] },
          { name: 'CS 24', options: ['CS24'] },
          { name: 'CS 38', options: ['CS38'] },
        ],
      },
      {
        id: 'csm-adv',
        name: 'Advanced CS (9u)',
        description: '9 units of CS courses numbered 114+ not used in the requirements above and not double-counted with the major.',
        departments: ['CS'],
        minUnits: 9,
      },
    ],
  },

  // ─── Mathematics Minor ──────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/mathematics-option-ma/
  {
    id: 'ma-minor',
    name: 'Mathematics Minor',
    abbreviation: 'Ma Minor',
    requirements: [
      {
        id: 'mam-ma2',
        name: 'Ma 2',
        description: 'Ma 2 (or equivalent approved by option rep).',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
        ],
      },
      {
        id: 'mam-ma3',
        name: 'Ma 3 or Ma 140a',
        description: 'Ma 3 or Ma 140a (or equivalent).',
        slots: [
          { name: 'Ma 3 / Ma 140a', options: ['Ma3', 'Ma140a'] },
        ],
      },
      {
        id: 'mam-sequences',
        name: 'Two Math Sequences',
        description: 'Two three-term Ma sequences chosen from Ma 5 abc, Ma 108 abc, Ma 109 abc.',
        courses: ['Ma5a', 'Ma5b', 'Ma5c', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c'],
        minCourses: 6,
      },
      {
        id: 'mam-elec',
        name: 'Additional Ma Electives (18u)',
        description: '18 additional units of approved Ma courses.',
        departments: ['Ma'],
        minUnits: 18,
      },
    ],
  },

  // ─── Astrophysics Minor ─────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/astrophysics-option-and-minor-ay/
  {
    id: 'ay-minor',
    name: 'Astrophysics Minor',
    abbreviation: 'Ay Minor',
    requirements: [
      {
        id: 'aym-phys',
        name: 'Physics Basis (Ph 2 ab or Ph 12 ab)',
        description: 'Ph 2 ab or Ph 12 ab — 18 units.',
        slots: [
          { name: 'Ph 2a / Ph 12a', options: ['Ph2a', 'Ph12a'] },
          { name: 'Ph 2b / Ph 12b', options: ['Ph2b', 'Ph12b'] },
        ],
      },
      {
        id: 'aym-intro',
        name: 'Introductory Astronomy (2 courses)',
        description: 'Any two of Ge/Ay 11c, Ay 20, Ay 21 — 18 units.',
        courses: ['GeAy11c', 'Ay20', 'Ay21'],
        minCourses: 2,
      },
      {
        id: 'aym-adv',
        name: 'Advanced Astrophysics / Instrumentation / Data (2 courses)',
        description: 'Any two of Ay 101, Ay 102, Ay 104, Ge/Ay 133, Ay 105, Ay/Ge 107, Ay 122 (or by petition). 18 units.',
        courses: ['Ay101', 'Ay102', 'Ay104', 'GeAy133', 'Ay105', 'AyGe107', 'Ay122'],
        minCourses: 2,
      },
      {
        id: 'aym-research',
        name: 'Research',
        description: 'Both Ay 142 (9u) and Ay 144 (3u) — 12 units total.',
        slots: [
          { name: 'Ay 142', options: ['Ay142'] },
          { name: 'Ay 144', options: ['Ay144'] },
        ],
      },
    ],
  },

  // ─── Chemistry Minor ───────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemistry-option-and-minor-ch/
  {
    id: 'ch-minor',
    name: 'Chemistry Minor',
    abbreviation: 'Ch Minor',
    requirements: [
      {
        id: 'chm-organic',
        name: 'Organic Chemistry (18u)',
        description: '18 units from Ch 41 abc.',
        courses: ['Ch41a', 'Ch41b', 'Ch41c'],
        minUnits: 18,
      },
      {
        id: 'chm-physical',
        name: 'Physical Chemistry (18u)',
        description: '18 units from Ch 21 abc (or substitution per major).',
        courses: ['Ch21a', 'Ch21b', 'Ch21c'],
        minUnits: 18,
      },
      {
        id: 'chm-adv',
        name: 'Advanced Chemistry Electives (27u)',
        description: '27 units of Ch 102+ approved by adviser/option rep.',
        departments: ['Ch'],
        minUnits: 27,
      },
      {
        id: 'chm-lab',
        name: 'Chemistry Lab (≥9u)',
        description: '≥9 units of Ch 4ab, Ch 5ab, Ch 6ab, Ch 7, Ch 11, or Ch 15 (no substitutions).',
        courses: ['Ch4a', 'Ch4b', 'Ch5a', 'Ch5b', 'Ch6a', 'Ch6b', 'Ch7', 'Ch11', 'Ch15'],
        minUnits: 9,
      },
    ],
  },

  // ─── Chemical Engineering Minor ────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/chemical-engineering-option-che/
  {
    id: 'che-minor',
    name: 'Chemical Engineering Minor',
    abbreviation: 'ChE Minor',
    requirements: [
      {
        id: 'chem-core',
        name: 'ChE Core',
        description: 'ChE 63a, ChE 103a, ChE 103b, ChE 101.',
        slots: [
          { name: 'ChE 63a', options: ['ChE63a'] },
          { name: 'ChE 103a', options: ['ChE103a'] },
          { name: 'ChE 103b', options: ['ChE103b'] },
          { name: 'ChE 101', options: ['ChE101'] },
        ],
      },
      {
        id: 'chem-math-or-add',
        name: 'Math (ACM 95ab) OR Additional ChE',
        description: 'If your major does not require ACM 95ab, fulfill (a). Otherwise fulfill (b) instead.',
        subRequirements: [
          {
            id: 'chem-math',
            name: '(a) ACM 95 ab',
            description: 'ACM 95 ab — Advanced Math.',
            slots: [
              { name: 'ACM 95a', options: ['ACM95a'] },
              { name: 'ACM 95b', options: ['ACM95b'] },
            ],
          },
          {
            id: 'chem-add',
            name: '(b) Two of ChE 63b / ChE 103c / ChE 105',
            description: 'Two additional ChE courses if ACM 95ab already in your major.',
            courses: ['ChE63b', 'ChE103c', 'ChE105'],
            minCourses: 2,
          },
        ],
      },
      {
        id: 'chem-elec',
        name: 'ChE Electives (≥18u)',
        description: '≥18 additional units from: ChE 63b, approved 100-level ChE-listed courses, or ChE 80 (≤9u).',
        departments: ['ChE'],
        minUnits: 18,
      },
    ],
  },

  // ─── GPS Minor ─────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/geological-and-planetary-sciences-gps-geology-geobiology-geochemistry-geophysics-planetary-science/
  {
    id: 'gps-minor',
    name: 'Geological & Planetary Sciences Minor',
    abbreviation: 'GPS Minor',
    requirements: [
      {
        id: 'gpsm-11a',
        name: 'Ge 11a',
        description: 'Ge 11a.',
        slots: [
          { name: 'Ge 11a', options: ['Ge11a'] },
        ],
      },
      {
        id: 'gpsm-11bcd',
        name: 'Two of Ge 11 b/c/d',
        description: 'Select two of Ge 11b, Ge 11c, Ge 11d.',
        courses: ['Ge11b', 'Ge11c', 'Ge11d'],
        minCourses: 2,
      },
      {
        id: 'gpsm-adv',
        name: 'Advanced GPS (27u)',
        description: '27 units of 100-level or higher GPS (Ge) courses, excluding Ge 109. ≤9 credits of Ge 136 may count. Optional track on transcript (Geobiology, Geochemistry, Geology, Geophysics, Planetary Sciences) if focused.',
        departments: ['Ge'],
        minUnits: 27,
      },
    ],
  },

  // ─── IDS Minor ─────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/information-and-data-sciences-ids/
  {
    id: 'ids-minor',
    name: 'Information & Data Sciences Minor',
    abbreviation: 'IDS Minor',
    requirements: [
      {
        id: 'idsm-cs',
        name: 'CS Fundamentals',
        description: 'CS 1 or CS 1X; CS 2; CS 21 or Ma/CS 6c; CS 38.',
        slots: [
          { name: 'CS 1 or CS 1X', options: ['CS1', 'CS1x'] },
          { name: 'CS 2', options: ['CS2'] },
          { name: 'CS 21 or Ma/CS 6c', options: ['CS21', 'MaCS6c'] },
          { name: 'CS 38', options: ['CS38'] },
        ],
      },
      {
        id: 'idsm-math',
        name: 'Mathematics Fundamentals',
        description: 'Ma 3 or Ma/ACM/IDS 140a; (CS 13 or Ma/CS 6a or Ma 121a).',
        slots: [
          { name: 'Ma 3 or Ma/ACM/IDS 140a', options: ['Ma3', 'MaACMIDS140a'] },
          { name: 'CS 13 / Ma/CS 6a / Ma 121a', options: ['CS13', 'MaCS6a', 'Ma121a'] },
        ],
      },
      {
        id: 'idsm-core',
        name: 'IDS Core',
        description: 'Linear Algebra (ACM/IDS 104); Probability (ACM/EE/IDS 116); Statistics (IDS/ACM/CS 157); Machine Learning (CMS/CS/CNS/EE/IDS 155 or CS/CNS/EE 156a); Signal Processing (EE/IDS 111 or ACM/EE/IDS 170).',
        slots: [
          { name: 'ACM/IDS 104', options: ['ACMIDS104'] },
          { name: 'ACM/EE/IDS 116', options: ['ACMEEIDS116'] },
          { name: 'IDS/ACM/CS 157', options: ['IDSACMCS157'] },
          { name: 'Machine Learning', options: ['CMSCSCNSEEIDS155', 'CSCNSEE156a'] },
          { name: 'Signal Processing', options: ['EEIDS111', 'ACMEEIDS170'] },
        ],
      },
      {
        id: 'idsm-applications',
        name: 'Applications Elective (≥9u)',
        description: '≥9 units from approved list: Ay 119, BE/Bi 103ab, BE/Bi 205, BEM 106, Bi/CNS/NB 162, Bi/BE/CS 183, CNS/Bi/EE/CS/NB 186, ME/CS/EE 133b/134, EE/CNS/CS 148, Ec/ACM/CS 112, Ec 122, Ec/PS 124, ESE 136, Fs/Ay 3, Ge/Ay 117, Ge 165, HPS/Pl/CS 110, SS 228.',
        courses: [
          'Ay119', 'BEBi103a', 'BEBi103b', 'BEBi205', 'BEM106', 'BiCNSNB162',
          'BiBECS183', 'CNSBiEECSNB186', 'MECSEE133b', 'MECSEE134',
          'EECNSCS148', 'EcACMCS112', 'Ec122', 'EcPS124', 'ESE136',
          'FsAy3', 'GeAy117', 'Ge165', 'HPSPlCS110', 'SS228',
        ],
        minUnits: 9,
      },
      {
        id: 'idsm-adv',
        name: 'Advanced Electives (≥9u)',
        description: '≥9 units from IDS 100+, CS/CNS/EE 156ab, ACM 106b, ACM 95/100ab, CMS/ACM/EE 122, CS 115, Ma 112ab.',
        courses: [
          'CSCNSEE156a', 'CSCNSEE156b', 'ACM106b', 'ACMEE106b',
          'ACM95a', 'ACM95b', 'ACM100a', 'ACM100b',
          'CMSACMEE122', 'CS115', 'Ma112a', 'Ma112b',
        ],
        departments: ['IDS'],
        minUnits: 9,
      },
    ],
  },

  // ─── ESE Minor ─────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/environmental-science-and-engineering-option-and-minor-ese/
  {
    id: 'ese-minor',
    name: 'Environmental Science & Engineering Minor',
    abbreviation: 'ESE Minor',
    requirements: [
      {
        id: 'esem-intro',
        name: 'ESE Intro (27u)',
        description: '27 units of ESE 1, 101, 102, or 103.',
        courses: ['ESE1', 'ESE101', 'ESE102', 'ESE103'],
        minUnits: 27,
      },
      {
        id: 'esem-adv',
        name: 'Additional ESE (27u)',
        description: '27 additional units of ESE courses (may include ≤18u of ESE 90 research with required written report).',
        departments: ['ESE'],
        minUnits: 27,
      },
    ],
  },

  // ─── Aerospace Minor ───────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/aerospace-minor-ae/
  {
    id: 'ae-minor',
    name: 'Aerospace Minor',
    abbreviation: 'Ae Minor',
    requirements: [
      {
        id: 'aem-105abc',
        name: 'Ae 105 abc',
        description: 'Complete Ae 105 abc.',
        slots: [
          { name: 'Ae 105a', options: ['Ae105a'] },
          { name: 'Ae 105b', options: ['Ae105b'] },
          { name: 'Ae 105c', options: ['Ae105c'] },
        ],
      },
      {
        id: 'aem-second',
        name: 'Second 100-level Ae Sequence',
        description: 'A second three-term 100-level Ae class: Ae 101 abc, 102 abc, 104 abc, 121 abc, Ae/Ge/ME 160 ab, or 27u of approved Ae courses.',
        courses: [
          'Ae101a', 'Ae101b', 'Ae101c',
          'AeAMCEME102a', 'AeAMCEME102b', 'AeAMCEME102c',
          'AeAPh104a', 'AeAPh104b', 'AeAPh104c',
          'Ae121a', 'Ae121b', 'Ae121c',
          'AeGeME160a', 'AeGeME160b',
        ],
        departments: ['Ae'],
        minUnits: 27,
      },
    ],
  },

  // ─── CDS Minor ─────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/control-and-dynamical-systems-minor/
  {
    id: 'cds-minor',
    name: 'Control & Dynamical Systems Minor',
    abbreviation: 'CDS Minor',
    requirements: [
      {
        id: 'cdsm-intro',
        name: 'Intro Control Sequence',
        description: 'CDS 110 (or CDS 131) and CDS 232.',
        slots: [
          { name: 'CDS 110 or CDS 131', options: ['CDS110', 'CDS131'] },
          { name: 'CDS 232', options: ['CDS232'] },
        ],
      },
      {
        id: 'cdsm-elec',
        name: 'Additional CDS (9u)',
        description: '9 additional units of CDS courses from CDS 110, 131, 212, 232, 233, 242, 243, 244, 245.',
        departments: ['CDS'],
        minUnits: 9,
      },
      {
        id: 'cdsm-thesis',
        name: 'Three-term Senior Thesis',
        description: 'A three-term senior thesis approved by the CDS faculty. May be satisfied by a thesis in your major option on CDS subject matter, or by CDS 90 abc.',
        slots: [
          { name: 'CDS 90a (or major-thesis sub)', options: ['CDS90a'] },
          { name: 'CDS 90b', options: ['CDS90b'] },
          { name: 'CDS 90c', options: ['CDS90c'] },
        ],
      },
    ],
  },

  // ─── Neurobiology Minor ────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/neurobiology-minor-nb/
  {
    id: 'nb-minor',
    name: 'Neurobiology Minor',
    abbreviation: 'NB Minor',
    requirements: [
      {
        id: 'nbm-fund',
        name: 'Biology Fundamentals',
        description: 'Bi 8 and Bi 9.',
        slots: [
          { name: 'Bi 8', options: ['Bi8'] },
          { name: 'Bi 9', options: ['Bi9'] },
        ],
      },
      {
        id: 'nbm-inter',
        name: 'Intermediate Biology',
        description: 'Bi 122 (Genetics); Bi 117 or Bi/BE 119 (Development); plus 9 units of other 100-level Bi, NB, or Ch courses.',
        slots: [
          { name: 'Bi 122', options: ['Bi122'] },
          { name: 'Bi 117 or Bi/BE 119', options: ['Bi117', 'BiBE119'] },
        ],
      },
      {
        id: 'nbm-other-bi',
        name: 'Other 100-level Bi/NB/Ch (9u)',
        description: '9 units of other 100-level Bi/NB/Ch courses.',
        departments: ['Bi', 'NB', 'Ch'],
        minUnits: 9,
      },
      {
        id: 'nbm-150',
        name: 'Intro Neuroscience',
        description: 'NB/Bi/CNS 150.',
        slots: [
          { name: 'NB/Bi/CNS 150', options: ['NBBiCNS150'] },
        ],
      },
      {
        id: 'nbm-adv',
        name: 'Advanced Neurobiology (18u)',
        description: '18 additional units of 100- or 200-level NB electives, not double-counted with the major.',
        departments: ['NB'],
        minUnits: 18,
      },
    ],
  },

  // ─── Robotics Minor ────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/robotics-minor-ro/
  {
    id: 'ro-minor',
    name: 'Robotics Minor',
    abbreviation: 'RO Minor',
    requirements: [
      {
        id: 'rom-cs',
        name: 'CS Fundamentals',
        description: 'CS 2.',
        slots: [
          { name: 'CS 2', options: ['CS2'] },
        ],
      },
      {
        id: 'rom-math',
        name: 'Mathematics Fundamentals',
        description: 'Ma 2; (Ma 3 or Ma/ACM/IDS 140a or ME 40 or EE 55).',
        slots: [
          { name: 'Ma 2', options: ['Ma2'] },
          { name: 'Ma 3 / Ma/ACM/IDS 140a / ME 40 / EE 55', options: ['Ma3', 'MaACMIDS140a', 'ME40', 'EE55'] },
        ],
      },
      {
        id: 'rom-eng',
        name: 'Engineering Fundamentals',
        description: 'ME/CS/EE 129; ME 13 or EE/ME 7.',
        slots: [
          { name: 'ME/CS/EE 129', options: ['MECSEE129'] },
          { name: 'ME 13 or EE/ME 7', options: ['ME13', 'EEME7'] },
        ],
      },
      {
        id: 'rom-core',
        name: 'Robotics Core',
        description: 'ME/CS/EE 133 ab; (ME/CS/EE 134 or ME/CS/EE 169).',
        slots: [
          { name: 'ME/CS/EE 133a', options: ['MECSEE133a'] },
          { name: 'ME/CS/EE 133b', options: ['MECSEE133b'] },
          { name: 'ME/CS/EE 134 or 169', options: ['MECSEE134', 'MECSEE169'] },
        ],
      },
      {
        id: 'rom-adv',
        name: 'Advanced Robotics & Controls (2 courses)',
        description: 'Two from ME/CDS/EE 234ab, ME/CDS 235ab, CDS 110, CDS 131, CDS 212, CDS 232.',
        courses: ['MECDSEE234a', 'MECDSEE234b', 'MECDS235a', 'MECDS235b', 'CDS110', 'CDS131', 'CDS212', 'CDS232'],
        minCourses: 2,
      },
      {
        id: 'rom-intel',
        name: 'Intelligence',
        description: 'One of CMS/CS/CNS/EE/IDS 155, EE/CNS/CS 148, or CNS/Bi/EE/CS/NB 186.',
        slots: [
          { name: 'Intelligence elective', options: ['CMSCSCNSEEIDS155', 'EECNSCS148', 'CNSBiEECSNB186'] },
        ],
      },
    ],
  },

  // ─── Structural Mechanics Minor ────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/structural-mechanics-minor-sm/
  {
    id: 'sm-minor',
    name: 'Structural Mechanics Minor',
    abbreviation: 'SM Minor',
    requirements: [
      {
        id: 'smm-core',
        name: 'Structural Mechanics Courses (54u)',
        description: '54 units selected from Ae/AM/CE 102 abc, AM/CE 151, Ae/CE 221, Ae/CE 165 ab, and CE 160 ab. Grade B− or higher required.',
        courses: [
          'AeAMCE102a', 'AeAMCE102b', 'AeAMCE102c', 'AeAMCEME102a', 'AeAMCEME102b', 'AeAMCEME102c',
          'AMCE151',
          'AeCE221',
          'AeCE165a', 'AeCE165b',
          'CE160a', 'CE160b',
        ],
        minUnits: 54,
      },
    ],
  },

  // ─── English Minor ─────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/english-option-and-minor-en/
  {
    id: 'en-minor',
    name: 'English Minor',
    abbreviation: 'En Minor',
    requirements: [
      {
        id: 'enm-units',
        name: 'English Courses (72u)',
        description: '72 units of English courses numbered 99+. Up to 9u of first-year humanities in English (Hum/En 60-) may substitute. Up to 9u of En 98 may substitute. Up to 9u of En 85 or 86 may substitute.',
        departments: ['En'],
        minUnits: 72,
      },
    ],
  },

  // ─── History Minor ─────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/history-option-and-minor-h/
  {
    id: 'h-minor',
    name: 'History Minor',
    abbreviation: 'H Minor',
    requirements: [
      {
        id: 'hm-units',
        name: 'History Courses (72u)',
        description: '72 units of history courses numbered 99+. Up to 9u of Hum/H 60- may substitute for 9u. Up to 9u of H 98 may substitute for 9u.',
        departments: ['H'],
        minUnits: 72,
      },
    ],
  },

  // ─── HPS Minor ─────────────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/history-and-philosophy-of-science-option-and-minor-hps/
  {
    id: 'hps-minor',
    name: 'History & Philosophy of Science Minor',
    abbreviation: 'HPS Minor',
    requirements: [
      {
        id: 'hpsm-units',
        name: 'HPS Courses (72u)',
        description: '72 units of HPS courses numbered 99+. Up to 9u of HPS 98 may substitute. Up to 9u of Hum/H/HPS 18 may substitute.',
        departments: ['HPS'],
        minUnits: 72,
      },
    ],
  },

  // ─── Philosophy Minor ──────────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/philosophy-option-and-minor-pi/
  {
    id: 'pi-minor',
    name: 'Philosophy Minor',
    abbreviation: 'Pi Minor',
    requirements: [
      {
        id: 'pim-units',
        name: 'Philosophy Courses (72u)',
        description: '72 units of philosophy courses numbered 99+. Up to 9u of Pl 98 may substitute. Up to 9u of Hum/Pl 60- may substitute.',
        departments: ['Pl'],
        minUnits: 72,
      },
    ],
  },

  // ─── Visual Culture Minor ──────────────────────────────────────
  // source: https://www.catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/visual-culture-minor-vc/
  {
    id: 'vc-minor',
    name: 'Visual Culture Minor',
    abbreviation: 'VC Minor',
    requirements: [
      {
        id: 'vcm-units',
        name: 'Visual Culture Courses (72u)',
        description: '72 units of Visual Culture courses numbered 99+. Up to 9u may be Hum/VC 60-. Up to 9u may be VC 90 (directed reading). Up to 9u may be VC courses numbered 61-89.',
        departments: ['VC'],
        minUnits: 72,
      },
    ],
  },
];
