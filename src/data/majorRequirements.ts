import type { Major } from '../types';

export const MAJORS: Major[] = [
  // ─────────────────────────────────────────────────────────────────
  // COMPUTER SCIENCE
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
        description: 'CS 1 or CS 1x; CS 2; CS 3x; CS 18; CS 4',
        courses: ['CS1', 'CS1x', 'CS2', 'CS3x', 'CS4', 'CS18'],
        minCourses: 5,
      },
      {
        id: 'cs-inter',
        name: 'Intermediate CS',
        description: 'CS 21; CS 24; CS 38',
        courses: ['CS21', 'CS24', 'CS38'],
        minCourses: 3,
      },
      {
        id: 'cs-math',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2/102; Ma 3/103; one of CS 13, Ma/CS 6a, or Ma 121a',
        courses: ['Ma2', 'Ma3', 'CS13', 'MaCS6a', 'Ma121a'],
        minCourses: 3,
      },
      {
        id: 'cs-comm',
        name: 'Communication Fundamentals',
        description: 'SEC 10 and one of SEC 11–13',
        courses: ['SEC10', 'SEC11', 'SEC12'],
        minCourses: 2,
      },
      {
        id: 'cs-sci',
        name: 'Scientific Core Electives',
        description: '18 units from Bi, Ch, or Ph courses',
        courses: ['Bi8', 'Bi9', 'Ch21a', 'Ch21b', 'Ch21c', 'Ch41a', 'Ch41b', 'Ch41c', 'Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minUnits: 18,
      },
      {
        id: 'cs-adv',
        name: 'Advanced CS (72 units)',
        description: '72 units of CS numbered 114+, including at least one of CS 124, CS 137, CMS/CS/IDS 139, CS/EE/IDS 143, CMS/CS/EE/IDS 144, CS/IDS 150a, or CS 151',
        courses: ['CS124', 'CMS_CS_IDS139', 'CS_EE_IDS143', 'CMS_CS_Ec_EE144', 'CS_IDS150a', 'CS151', 'CS115', 'CS116', 'CS128', 'CS130', 'CS131', 'CS132', 'CS152', 'CMS_CS_CNS_EE_IDS155', 'CS164', 'EECNSS148a', 'EECNSS148b'],
        minUnits: 72,
      },
      {
        id: 'cs-thesis',
        name: 'CS Project Sequence',
        description: 'CS 80abc thesis or approved independent project',
        courses: ['CS80a', 'CS80b', 'CS80c'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // PHYSICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ph',
    name: 'Physics',
    abbreviation: 'Ph',
    totalUnits: 486,
    requirements: [
      {
        id: 'ph-intro',
        name: 'Introduction to Physics Research',
        description: 'Ph 2abc (or Ph 12abc) – Waves, Quantum Mechanics, Statistical Physics',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minCourses: 3,
      },
      {
        id: 'ph-classical',
        name: 'Classical Physics',
        description: 'Ph 106abc – Topics in Classical Physics',
        courses: ['Ph106a', 'Ph106b', 'Ph106c'],
        minCourses: 3,
      },
      {
        id: 'ph-quantum',
        name: 'Quantum Mechanics',
        description: 'Ph 125abc – Quantum Mechanics',
        courses: ['Ph125a', 'Ph125b', 'Ph125c'],
        minCourses: 3,
      },
      {
        id: 'ph-lab',
        name: 'Physics Laboratory',
        description: 'Ph 3 and Ph 77abc (Advanced Physics Laboratory) or equivalent',
        courses: ['Ph3', 'Ph5'],
        minCourses: 1,
      },
      {
        id: 'ph-math',
        name: 'Mathematical Methods',
        description: 'Ma 2/102, Ma 3/103; ACM 95abc or equivalent',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b', 'ACM95c'],
        minCourses: 3,
      },
      {
        id: 'ph-elec',
        name: 'Physics Electives',
        description: '45 units of advanced physics electives (Ph 100+)',
        courses: ['Ph105', 'Ph106a', 'Ph106b', 'Ph106c', 'Ph125a', 'Ph125b', 'Ph125c', 'Ph136a', 'Ph136b', 'Ph136c', 'Ph139', 'Ay101', 'Ay102'],
        minUnits: 45,
      },
      {
        id: 'ph-thesis',
        name: 'Senior Thesis',
        description: 'Ph 78abc (Experiment) or Ph 79abc (Theory)',
        courses: ['Ph78a', 'Ph78b', 'Ph78c', 'Ph79a', 'Ph79b', 'Ph79c'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MATHEMATICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ma',
    name: 'Mathematics',
    abbreviation: 'Ma',
    totalUnits: 486,
    requirements: [
      {
        id: 'ma-analysis',
        name: 'Analysis',
        description: 'Ma 108abc – Classical Analysis',
        courses: ['Ma108a', 'Ma108b', 'Ma108c'],
        minCourses: 3,
      },
      {
        id: 'ma-algebra',
        name: 'Algebra',
        description: 'Ma 5abc – Introduction to Abstract Algebra',
        courses: ['Ma5a', 'Ma5b', 'Ma5c'],
        minCourses: 3,
      },
      {
        id: 'ma-topo',
        name: 'Geometry & Topology',
        description: 'Ma 109abc – Introduction to Geometry and Topology',
        courses: ['Ma109a', 'Ma109b', 'Ma109c'],
        minCourses: 2,
      },
      {
        id: 'ma-discrete',
        name: 'Discrete Mathematics',
        description: 'Ma/CS 6abc – Introduction to Discrete Mathematics',
        courses: ['MaCS6a', 'MaCS6b', 'MaCS6c'],
        minCourses: 1,
      },
      {
        id: 'ma-elec',
        name: 'Mathematics Electives',
        description: '54 units of advanced math courses (Ma 100+)',
        courses: ['Ma121a', 'Ma121b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c'],
        minUnits: 54,
      },
      {
        id: 'ma-thesis',
        name: 'Senior Thesis',
        description: 'Ma 92abc – Senior Thesis in Mathematics',
        courses: ['Ma92'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ELECTRICAL ENGINEERING
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
        description: 'EE 44, EE 45, EE 55 – Core circuits and systems',
        courses: ['EE44', 'EE45', 'EE55'],
        minCourses: 3,
      },
      {
        id: 'ee-signals',
        name: 'Signals & Systems',
        description: 'EE 111, EE 112 – Signal processing',
        courses: ['EE111', 'EE112'],
        minCourses: 2,
      },
      {
        id: 'ee-em',
        name: 'Electromagnetics',
        description: 'EE 151 – Electromagnetic Engineering',
        courses: ['EE151'],
        minCourses: 1,
      },
      {
        id: 'ee-math',
        name: 'Mathematics for EE',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'ee-elec',
        name: 'EE Electives',
        description: '54 units of EE electives (EE 100+)',
        courses: ['EE111', 'EE112', 'EE120', 'EE151', 'EEMA_CS127', 'EE_CNS_CS148a', 'CS_EE_IDS143', 'MECSEE133a', 'MECSEE133b'],
        minUnits: 54,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MECHANICAL ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'me',
    name: 'Mechanical Engineering',
    abbreviation: 'ME',
    totalUnits: 486,
    requirements: [
      {
        id: 'me-intro',
        name: 'ME Introduction',
        description: 'ME 13, ME 14 – Thermal Science, Statics and Mechanics',
        courses: ['ME13', 'ME14'],
        minCourses: 2,
      },
      {
        id: 'me-core',
        name: 'ME Core',
        description: 'ME 25, ME 35, ME 116, ME 118 – Design, Fluid Mechanics, Dynamics',
        courses: ['ME25', 'ME35', 'ME116', 'ME118'],
        minCourses: 3,
      },
      {
        id: 'me-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'me-elec',
        name: 'ME Electives',
        description: '45 units of ME/related electives (100+)',
        courses: ['ME129', 'MECSEE133a', 'MECSEE133b', 'MECSEE169'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHEMISTRY
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ch',
    name: 'Chemistry',
    abbreviation: 'Ch',
    totalUnits: 486,
    requirements: [
      {
        id: 'ch-organic',
        name: 'Organic Chemistry',
        description: 'Ch 41abc – Organic Chemistry sequence',
        courses: ['Ch41a', 'Ch41b', 'Ch41c'],
        minCourses: 3,
      },
      {
        id: 'ch-physical',
        name: 'Physical Chemistry',
        description: 'Ch 21abc – Physical Chemistry sequence',
        courses: ['Ch21a', 'Ch21b', 'Ch21c'],
        minCourses: 3,
      },
      {
        id: 'ch-quantum',
        name: 'Quantum Chemistry',
        description: 'Ch 125abc – The Elements of Quantum Chemistry',
        courses: ['Ch125a', 'Ch125b', 'Ch125c'],
        minCourses: 2,
      },
      {
        id: 'ch-bio',
        name: 'Biochemistry',
        description: 'Ch/Bi 110ab – Introduction to Biochemistry',
        courses: ['ChBi110a', 'ChBi110b'],
        minCourses: 1,
      },
      {
        id: 'ch-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103',
        courses: ['Ma2', 'Ma3'],
        minCourses: 2,
      },
      {
        id: 'ch-inorg',
        name: 'Inorganic Chemistry',
        description: 'Ch 102 – Introduction to Inorganic Chemistry',
        courses: ['Ch102'],
        minCourses: 1,
      },
      {
        id: 'ch-thesis',
        name: 'Senior Thesis',
        description: 'Ch 82 – Senior Thesis Research',
        courses: ['Ch82'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BIOLOGY
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bi',
    name: 'Biology',
    abbreviation: 'Bi',
    totalUnits: 486,
    requirements: [
      {
        id: 'bi-intro',
        name: 'Introductory Biology',
        description: 'Bi 8 + Bi 9 – Molecular and Cell Biology',
        courses: ['Bi8', 'Bi9'],
        minCourses: 2,
      },
      {
        id: 'bi-biochem',
        name: 'Biochemistry',
        description: 'Ch/Bi 110a – Introduction to Biochemistry',
        courses: ['ChBi110a', 'Bi110'],
        minCourses: 1,
      },
      {
        id: 'bi-cell',
        name: 'Cell Biology',
        description: 'Bi 114 – Cell Biology',
        courses: ['Bi114'],
        minCourses: 1,
      },
      {
        id: 'bi-genetics',
        name: 'Genetics',
        description: 'Bi 122 – Genetics',
        courses: ['Bi122'],
        minCourses: 1,
      },
      {
        id: 'bi-lab',
        name: 'Laboratory',
        description: 'Bi 10 – Biochemistry and Cell Biology Lab',
        courses: ['Bi10'],
        minCourses: 1,
      },
      {
        id: 'bi-chem',
        name: 'Chemistry',
        description: 'Ch 41a – Organic Chemistry',
        courses: ['Ch41a', 'Ch41b'],
        minCourses: 1,
      },
      {
        id: 'bi-elec',
        name: 'Biology Electives',
        description: '54 units of advanced biology courses',
        courses: ['Bi114', 'Bi122', 'Bi145', 'ChBi110a', 'ChBi110b'],
        minUnits: 54,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ASTROPHYSICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ay',
    name: 'Astrophysics',
    abbreviation: 'Ay',
    totalUnits: 486,
    requirements: [
      {
        id: 'ay-intro',
        name: 'Introduction to Astrophysics',
        description: 'Ay 20 + Ay 21 – Basic Astronomy and Galaxies',
        courses: ['Ay20', 'Ay21'],
        minCourses: 2,
      },
      {
        id: 'ay-physics',
        name: 'Physics Core',
        description: 'Ph 2abc or Ph 12abc – Quantum Mechanics & Statistical Physics',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minCourses: 3,
      },
      {
        id: 'ay-adv',
        name: 'Advanced Astrophysics',
        description: 'At least 3 of Ay 101, 102, 123, 124, 125, 126, 127',
        courses: ['Ay101', 'Ay102', 'Ay123', 'Ay124', 'Ay125', 'Ay126', 'Ay127'],
        minCourses: 3,
        minUnits: 27,
      },
      {
        id: 'ay-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'ay-obs',
        name: 'Observational Astronomy',
        description: 'Ay 10 – Introduction to Astronomical Observations',
        courses: ['Ay10'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // APPLIED AND COMPUTATIONAL MATHEMATICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'acm',
    name: 'Applied and Computational Mathematics',
    abbreviation: 'ACM',
    totalUnits: 486,
    requirements: [
      {
        id: 'acm-methods',
        name: 'Methods of Applied Mathematics',
        description: 'ACM 95abc – Methods of Applied Mathematics',
        courses: ['ACM95a', 'ACM95b', 'ACM95c'],
        minCourses: 3,
      },
      {
        id: 'acm-comp',
        name: 'Computational Mathematics',
        description: 'ACM 106ab – Introductory Methods of Computational Mathematics',
        courses: ['ACM106a', 'ACM106b'],
        minCourses: 2,
      },
      {
        id: 'acm-prob',
        name: 'Probability',
        description: 'ACM 116 or ACM 118 – Probability Models',
        courses: ['ACM116', 'ACM118'],
        minCourses: 1,
      },
      {
        id: 'acm-math',
        name: 'Core Mathematics',
        description: 'Ma 2/102, Ma 3/103, Ma 108a, ACM 104',
        courses: ['Ma2', 'Ma3', 'Ma108a', 'ACM104'],
        minCourses: 3,
      },
      {
        id: 'acm-cs',
        name: 'Computing',
        description: 'CS 1 and one advanced CS or IDS course',
        courses: ['CS1', 'CS1x', 'CS38', 'CMS_CS_IDS139'],
        minCourses: 2,
      },
      {
        id: 'acm-elec',
        name: 'ACM Electives',
        description: '36 units of advanced ACM/Ma/CS courses',
        courses: ['ACM95a', 'ACM95b', 'ACM95c', 'ACM104', 'ACM106a', 'ACM106b', 'ACM116', 'ACM118', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma121a'],
        minUnits: 36,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ECONOMICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ec',
    name: 'Economics',
    abbreviation: 'Ec',
    totalUnits: 486,
    requirements: [
      {
        id: 'ec-intro',
        name: 'Introduction to Economics',
        description: 'Ec 11 – Introduction to Economics',
        courses: ['Ec11'],
        minCourses: 1,
      },
      {
        id: 'ec-micro',
        name: 'Microeconomics',
        description: 'Ec 121a – Theory of Value',
        courses: ['Ec121a'],
        minCourses: 1,
      },
      {
        id: 'ec-game',
        name: 'Game Theory',
        description: 'Ec 122 – Game Theory',
        courses: ['Ec122'],
        minCourses: 1,
      },
      {
        id: 'ec-macro',
        name: 'Macroeconomics',
        description: 'Ec 110 – Macroeconomics',
        courses: ['Ec110'],
        minCourses: 1,
      },
      {
        id: 'ec-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, Ma/CS 6a',
        courses: ['Ma2', 'Ma3', 'MaCS6a'],
        minCourses: 2,
      },
      {
        id: 'ec-elec',
        name: 'Economics Electives',
        description: '36 units of advanced economics courses',
        courses: ['Ec105', 'Ec106', 'Ec110', 'Ec121a', 'Ec122', 'BEM102', 'BEM103', 'BEM120'],
        minUnits: 36,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BUSINESS, ECONOMICS, AND MANAGEMENT
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bem',
    name: 'Business, Economics, and Management',
    abbreviation: 'BEM',
    totalUnits: 486,
    requirements: [
      {
        id: 'bem-ec',
        name: 'Economics Core',
        description: 'Ec 11 – Introduction to Economics',
        courses: ['Ec11'],
        minCourses: 1,
      },
      {
        id: 'bem-finance',
        name: 'Finance',
        description: 'BEM 102 – Finance',
        courses: ['BEM102'],
        minCourses: 1,
      },
      {
        id: 'bem-acct',
        name: 'Accounting',
        description: 'BEM 104 – Financial Accounting',
        courses: ['BEM104'],
        minCourses: 1,
      },
      {
        id: 'bem-mgmt',
        name: 'Management',
        description: 'BEM 106 – Management',
        courses: ['BEM106'],
        minCourses: 1,
      },
      {
        id: 'bem-ops',
        name: 'Operations Research',
        description: 'BEM 109 – Operations Research',
        courses: ['BEM109'],
        minCourses: 1,
      },
      {
        id: 'bem-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103',
        courses: ['Ma2', 'Ma3'],
        minCourses: 2,
      },
      {
        id: 'bem-elec',
        name: 'BEM Electives',
        description: '36 units from BEM/Ec 100+ courses',
        courses: ['BEM102', 'BEM103', 'BEM104', 'BEM106', 'BEM109', 'BEM114', 'BEM120', 'Ec105', 'Ec106', 'Ec110', 'Ec121a', 'Ec122'],
        minUnits: 36,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // APPLIED PHYSICS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'aph',
    name: 'Applied Physics',
    abbreviation: 'APh',
    totalUnits: 486,
    requirements: [
      {
        id: 'aph-ph',
        name: 'Physics Core',
        description: 'Ph 2abc or Ph 12abc',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minCourses: 3,
      },
      {
        id: 'aph-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'aph-core',
        name: 'Applied Physics Core',
        description: 'APh 17, APh 105, APh 110',
        courses: ['APh17', 'APh105', 'APh110'],
        minCourses: 2,
      },
      {
        id: 'aph-elec',
        name: 'APh Electives',
        description: '54 units of APh/Ph electives',
        courses: ['APh105', 'APh110', 'APh130', 'Ph125a', 'Ph125b', 'Ph125c', 'Ph136a', 'Ph136b', 'Ph136c'],
        minUnits: 54,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CHEMICAL ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'che',
    name: 'Chemical Engineering',
    abbreviation: 'ChE',
    totalUnits: 486,
    requirements: [
      {
        id: 'che-intro',
        name: 'Introduction to ChE',
        description: 'ChE 15 – Introduction to Chemical Engineering',
        courses: ['ChE15'],
        minCourses: 1,
      },
      {
        id: 'che-thermo',
        name: 'Thermodynamics',
        description: 'ChE 63ab – Chemical Engineering Thermodynamics',
        courses: ['ChE63a', 'ChE63b'],
        minCourses: 2,
      },
      {
        id: 'che-transport',
        name: 'Transport Phenomena',
        description: 'ChE 64 – Mass Transfer and Transport Phenomena',
        courses: ['ChE64'],
        minCourses: 1,
      },
      {
        id: 'che-rxn',
        name: 'Reaction Engineering',
        description: 'ChE 101 – Chemical Reaction Engineering',
        courses: ['ChE101'],
        minCourses: 1,
      },
      {
        id: 'che-design',
        name: 'Process Design',
        description: 'ChE 103 – Process Design and Analysis',
        courses: ['ChE103'],
        minCourses: 1,
      },
      {
        id: 'che-lab',
        name: 'Laboratory',
        description: 'ChE 90 – Chemical Engineering Laboratory',
        courses: ['ChE90'],
        minCourses: 1,
      },
      {
        id: 'che-chem',
        name: 'Chemistry',
        description: 'Ch 41abc – Organic Chemistry',
        courses: ['Ch41a', 'Ch41b', 'Ch41c'],
        minCourses: 2,
      },
      {
        id: 'che-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a'],
        minCourses: 2,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ENVIRONMENTAL SCIENCE AND ENGINEERING
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ese',
    name: 'Environmental Science and Engineering',
    abbreviation: 'ESE',
    totalUnits: 486,
    requirements: [
      {
        id: 'ese-intro',
        name: 'Introduction to ESE',
        description: 'ESE 1 – Introduction to Environmental Science and Engineering',
        courses: ['ESE1'],
        minCourses: 1,
      },
      {
        id: 'ese-core',
        name: 'ESE Core',
        description: 'ESE 101, ESE 102, ESE 103',
        courses: ['ESE101', 'ESE102', 'ESE103'],
        minCourses: 2,
      },
      {
        id: 'ese-geo',
        name: 'Earth Sciences',
        description: 'Ge 11abc – Oceans, Geochemistry, Volcanoes',
        courses: ['Ge11a', 'Ge11b', 'Ge11c'],
        minCourses: 2,
      },
      {
        id: 'ese-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103',
        courses: ['Ma2', 'Ma3'],
        minCourses: 2,
      },
      {
        id: 'ese-elec',
        name: 'ESE Electives',
        description: '45 units of ESE/Ge/Ch related electives',
        courses: ['ESE101', 'ESE102', 'ESE103', 'Ge11a', 'Ge11b', 'Ge11c', 'Ch21a', 'Ch21b'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // MATERIALS SCIENCE
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'ms',
    name: 'Materials Science',
    abbreviation: 'MS',
    totalUnits: 486,
    requirements: [
      {
        id: 'ms-thermo',
        name: 'Thermodynamics of Materials',
        description: 'MS 115',
        courses: ['MS115'],
        minCourses: 1,
      },
      {
        id: 'ms-structure',
        name: 'Structure and Bonding',
        description: 'MS 125',
        courses: ['MS125'],
        minCourses: 1,
      },
      {
        id: 'ms-kinetics',
        name: 'Kinetics of Materials',
        description: 'MS 130',
        courses: ['MS130'],
        minCourses: 1,
      },
      {
        id: 'ms-elec',
        name: 'Electronic Materials',
        description: 'MS 132 – Electronic Materials and Devices',
        courses: ['MS132'],
        minCourses: 1,
      },
      {
        id: 'ms-mech',
        name: 'Mechanical Behavior',
        description: 'MS 133 – Mechanical Behavior of Materials',
        courses: ['MS133'],
        minCourses: 1,
      },
      {
        id: 'ms-chem',
        name: 'Chemistry',
        description: 'Ch 1ab, Ch 41a',
        courses: ['Ch1a', 'Ch1b', 'Ch41a'],
        minCourses: 2,
      },
      {
        id: 'ms-phys',
        name: 'Physics',
        description: 'Ph 2ab or Ph 12ab',
        courses: ['Ph2a', 'Ph2b', 'Ph12a', 'Ph12b'],
        minCourses: 2,
      },
    ],
  },
];

export const MINORS: Major[] = [
  {
    id: 'cs-minor',
    name: 'Computer Science Minor',
    abbreviation: 'CS Minor',
    requirements: [
      {
        id: 'csm-fund',
        name: 'CS Fundamentals',
        description: 'CS 1 or CS 1x; CS 2; CS 3x; CS 18',
        courses: ['CS1', 'CS1x', 'CS2', 'CS3x', 'CS18'],
        minCourses: 4,
      },
      {
        id: 'csm-math',
        name: 'Mathematical Fundamentals',
        description: 'Ma 2; Ma 3; one of CS 13, Ma/CS 6a, or Ma 121a',
        courses: ['Ma2', 'Ma3', 'CS13', 'MaCS6a', 'Ma121a'],
        minCourses: 3,
      },
      {
        id: 'csm-inter',
        name: 'Intermediate CS',
        description: 'CS 21; CS 24; CS 38',
        courses: ['CS21', 'CS24', 'CS38'],
        minCourses: 3,
      },
      {
        id: 'csm-adv',
        name: 'Advanced CS',
        description: '9 CS units numbered 114+',
        courses: ['CS115', 'CS116', 'CS124', 'CS128', 'CS130', 'CS131', 'CS132', 'CS152', 'CS151'],
        minUnits: 9,
      },
    ],
  },
  {
    id: 'ma-minor',
    name: 'Mathematics Minor',
    abbreviation: 'Ma Minor',
    requirements: [
      {
        id: 'mam-core',
        name: 'Core Mathematics',
        description: 'Ma 5abc – Abstract Algebra and Ma 108a – Analysis',
        courses: ['Ma5a', 'Ma5b', 'Ma5c', 'Ma108a'],
        minCourses: 3,
      },
      {
        id: 'mam-elec',
        name: 'Mathematics Electives',
        description: '36 units of Ma courses numbered 100+',
        courses: ['Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma121a', 'Ma121b'],
        minUnits: 36,
      },
    ],
  },
  {
    id: 'ay-minor',
    name: 'Astrophysics Minor',
    abbreviation: 'Ay Minor',
    requirements: [
      {
        id: 'aym-intro',
        name: 'Introductory Astrophysics',
        description: 'Ay 20 and Ay 21',
        courses: ['Ay20', 'Ay21'],
        minCourses: 2,
      },
      {
        id: 'aym-adv',
        name: 'Advanced Astrophysics',
        description: '27 units of Ay 100+',
        courses: ['Ay101', 'Ay102', 'Ay123', 'Ay124', 'Ay125'],
        minUnits: 27,
      },
    ],
  },
];
