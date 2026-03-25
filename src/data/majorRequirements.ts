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
        description: '18 units from BE/Bi 25, Bi 8, Bi 9, Ch 21abc, Ch 41abc, Ph 2abc, Ph 12abc',
        courses: ['BEBi25', 'Bi8', 'Bi9', 'Ch21a', 'Ch21b', 'Ch21c', 'Ch41a', 'Ch41b', 'Ch41c', 'Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minUnits: 18,
      },
      {
        id: 'cs-adv',
        name: 'Advanced CS (72 units)',
        description: '72 units of CS 114+, including at least one of CS 124, CMS/CS/IDS 139, CS/EE/IDS 143, CMS/CS/EE/IDS 144, CS/IDS 150a, or CS 151',
        courses: ['CS124', 'CMSCSIDS139', 'CSEEIDS143', 'CMSCSEcEE144', 'CSIDS150a', 'CS151', 'CS115', 'CS116', 'CSIDS121', 'CS128', 'CS130', 'CS131', 'CS132', 'CS152', 'CMSCSCNSEEIDS155', 'CS164', 'EECNSCS148a', 'EECNSCS148b', 'CSCNS171', 'IDSACMCS157', 'IDSACMCS158'],
        minUnits: 72,
      },
      {
        id: 'cs-thesis',
        name: 'CS Project Sequence',
        description: 'CS 80abc thesis or approved project sequence',
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
        name: 'Sophomore Physics',
        description: 'Ph 12abc – Waves, Quantum Physics, and Statistical Mechanics (or Ph 2abc)',
        courses: ['Ph12a', 'Ph12b', 'Ph12c', 'Ph2a', 'Ph2b', 'Ph2c'],
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
        description: 'Ph 125ab – Quantum Mechanics (minimum 2 terms)',
        courses: ['Ph125a', 'Ph125b', 'Ph125c'],
        minCourses: 2,
      },
      {
        id: 'ph-lab',
        name: 'Physics Laboratory',
        description: 'Ph 3, Ph 5, Ph 6, Ph 7, or Ph 77abc',
        courses: ['Ph3', 'Ph5', 'Ph6', 'Ph7', 'Ph77a', 'Ph77b', 'Ph77c'],
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
        name: 'Physics Electives (90 units)',
        description: '90 units of advanced physics: Ph 100+, APh 100+, Ay 100+',
        courses: ['Ph105', 'Ph106a', 'Ph106b', 'Ph106c', 'Ph125a', 'Ph125b', 'Ph125c', 'Ph136a', 'Ph136b', 'Ph136c', 'Ph139', 'APh105', 'APh110', 'APh130', 'Ay101', 'Ay102'],
        minUnits: 90,
      },
      {
        id: 'ph-thesis',
        name: 'Senior Thesis / Advanced Lab',
        description: 'Ph 78abc (Experiment), Ph 79abc (Theory), or Ph 77abc (Advanced Lab)',
        courses: ['Ph78a', 'Ph78b', 'Ph78c', 'Ph79a', 'Ph79b', 'Ph79c', 'Ph77a', 'Ph77b', 'Ph77c'],
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
        description: 'Ma 109abc – Introduction to Geometry and Topology (at least 2 terms)',
        courses: ['Ma109a', 'Ma109b', 'Ma109c'],
        minCourses: 2,
      },
      {
        id: 'ma-discrete',
        name: 'Discrete Mathematics',
        description: 'Ma/CS 6abc or Ma 121ab – Discrete Mathematics or Combinatorics',
        courses: ['MaCS6a', 'MaCS6b', 'MaCS6c', 'Ma121a', 'Ma121b'],
        minCourses: 1,
      },
      {
        id: 'ma-physics',
        name: 'Physics Requirement',
        description: 'Ph 2bc or Ph 12bc',
        courses: ['Ph2b', 'Ph2c', 'Ph12b', 'Ph12c'],
        minCourses: 2,
      },
      {
        id: 'ma-elec',
        name: 'Mathematics Electives (45 units)',
        description: '45 units of Ma courses numbered 110–190, or ACM 95+',
        courses: ['Ma121a', 'Ma121b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c', 'ACM95a', 'ACM95b', 'ACM95c'],
        minUnits: 45,
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
        description: 'EE/CS 10ab; EE/APh 40; EE 44; EE 45; EE 55',
        courses: ['EECS10a', 'EECS10b', 'EEAPh40', 'EE44', 'EE45', 'EE55'],
        minCourses: 4,
      },
      {
        id: 'ee-signals',
        name: 'Signals & Systems',
        description: 'EE 111 – Signal-Processing Systems and Transforms',
        courses: ['EE111', 'EE112'],
        minCourses: 1,
      },
      {
        id: 'ee-math',
        name: 'Mathematics & Probability',
        description: 'Ma 2; three of ACM 95a, ACM 95b, ACM/IDS 104, ACM/EE/IDS 116',
        courses: ['Ma2', 'ACM95a', 'ACM95b', 'ACMIDS104', 'ACMEEIDS116'],
        minCourses: 3,
      },
      {
        id: 'ee-physics',
        name: 'Physics',
        description: 'Two terms of Ph 2abc or APh/EE 23',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'APhEE23'],
        minCourses: 2,
      },
      {
        id: 'ee-elec',
        name: 'EE Electives (72 units)',
        description: '72 units of EE courses numbered 100+ (with adviser approval)',
        courses: ['EE111', 'EE112', 'EEAPh120', 'EE151', 'EECSIDS160', 'EEMaCS127', 'EECNSCS148a', 'CSEEIDS143', 'MECSEE133a', 'MECSEE133b', 'APh105', 'APh110', 'APhMSME105a', 'APhMSME105b'],
        minUnits: 72,
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
        id: 'me-fluids',
        name: 'Fluid Mechanics',
        description: 'Ae/APh/CE/ME 101abc – Fluid Mechanics',
        courses: ['AeAPhCEME101a', 'AeAPhCEME101b', 'AeAPhCEME101c'],
        minCourses: 3,
      },
      {
        id: 'me-structures',
        name: 'Mechanics of Structures',
        description: 'Ae/AM/CE/ME 102abc – Mechanics of Structures and Solids',
        courses: ['AeAMCEME102a', 'AeAMCEME102b', 'AeAMCEME102c'],
        minCourses: 3,
      },
      {
        id: 'me-thermo',
        name: 'Thermal Science',
        description: 'ME 13 (Thermal Science) and/or Ae/ME 118 (Classical Thermodynamics)',
        courses: ['ME13', 'AeME118'],
        minCourses: 1,
      },
      {
        id: 'me-statics',
        name: 'Statics and Materials',
        description: 'ME/CE 14 – Statics and Mechanics of Materials',
        courses: ['MECE14'],
        minCourses: 1,
      },
      {
        id: 'me-math',
        name: 'Mathematics',
        description: 'Ma 2/102; ACM 95ab; one of Ma 3, Ma/CS 6a, or ACM/IDS 104',
        courses: ['Ma2', 'ACM95a', 'ACM95b', 'Ma3', 'MaCS6a', 'ACMIDS104'],
        minCourses: 3,
      },
      {
        id: 'me-physics',
        name: 'Physics',
        description: 'Three terms of Ph 2abc',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c'],
        minCourses: 3,
      },
      {
        id: 'me-elec',
        name: 'ME Electives (45 units)',
        description: '45 units of ME/related electives (100+): 27u depth + 9+9u breadth',
        courses: ['MECSEE129', 'MECSEE133a', 'MECSEE133b', 'MECSEE134', 'MECSEE169', 'APhMSME105a', 'APhMSME105b', 'CDS110', 'AeME118'],
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
        description: 'Ch 125abc – The Elements of Quantum Chemistry (at least 2 terms)',
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
        id: 'ch-lab',
        name: 'Chemistry Laboratory',
        description: 'Five terms from Ch 4ab, Ch 6a, Ch 7, Ch 11, Ch 3a, Ch 3x (minimum 5 terms)',
        courses: ['Ch4a', 'Ch6a', 'Ch11', 'Ch3a', 'Ch3x'],
        minCourses: 3,
      },
      {
        id: 'ch-math',
        name: 'Mathematics',
        description: 'Ma 2/102; Ph 2a required',
        courses: ['Ma2', 'Ph2a'],
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
        id: 'ch-writing',
        name: 'Scientific Communication',
        description: 'Ch 90 (oral) and Ch/ChE 91 (writing)',
        courses: ['Ch90', 'ChChE91'],
        minCourses: 1,
      },
      {
        id: 'ch-adv',
        name: 'Advanced Chemistry Electives (45 units)',
        description: '45 units from Ch 102+ (five terms minimum)',
        courses: ['Ch102', 'Ch125a', 'Ch125b', 'Ch125c', 'Ch21a', 'Ch21b', 'Ch21c', 'Ch41a', 'Ch41b', 'Ch41c'],
        minUnits: 45,
      },
      {
        id: 'ch-thesis',
        name: 'Senior Thesis',
        description: 'Ch 82 – Senior Thesis Research (3 terms for biochemistry track)',
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
        description: 'Bi 8 (Molecular Biology) + Bi 9 (Cell Biology)',
        courses: ['Bi8', 'Bi9'],
        minCourses: 2,
      },
      {
        id: 'bi-dev',
        name: 'Developmental Biology',
        description: 'Bi 117 – Developmental Biology',
        courses: ['Bi117'],
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
        id: 'bi-neuro',
        name: 'Neuroscience',
        description: 'NB/Bi/CNS 150 – Introductory Neuroscience',
        courses: ['NBBiCNS150'],
        minCourses: 1,
      },
      {
        id: 'bi-biochem',
        name: 'Biochemistry',
        description: 'Ch/Bi 110a or Ch/Bi 110b',
        courses: ['ChBi110a', 'ChBi110b', 'Bi110'],
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
        id: 'bi-math',
        name: 'Mathematics and Physics',
        description: 'Ma 2; Ma 3; two terms of Ph 2abc',
        courses: ['Ma2', 'Ma3', 'Ph2a', 'Ph2b', 'Ph2c'],
        minCourses: 3,
      },
      {
        id: 'bi-writing',
        name: 'Scientific Communication',
        description: 'Bi/BE 24 – Scientific Communication',
        courses: ['BiBE24'],
        minCourses: 1,
      },
      {
        id: 'bi-elec',
        name: 'Biology Electives (minimum 8 courses 100+)',
        description: 'At least 8 biology electives at 100+ level',
        courses: ['Bi114', 'Bi117', 'Bi122', 'Bi145', 'NBBiCNS150', 'ChBi110a', 'ChBi110b'],
        minCourses: 3,
        minUnits: 27,
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
        name: 'Introductory Astronomy',
        description: 'Ay 20, Ay 21, Ay 30 – Basic Astronomy Core',
        courses: ['Ay20', 'Ay21', 'Ay30'],
        minCourses: 3,
      },
      {
        id: 'ay-physics',
        name: 'Physics Core',
        description: 'Ph 2abc or Ph 12abc + Ph 125ab',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c', 'Ph125a', 'Ph125b'],
        minCourses: 4,
      },
      {
        id: 'ay-classical',
        name: 'Classical Physics',
        description: 'Ph 106ab (Topics in Classical Physics)',
        courses: ['Ph106a', 'Ph106b', 'Ph106c'],
        minCourses: 2,
      },
      {
        id: 'ay-adv',
        name: 'Advanced Astrophysics',
        description: 'Ay 101, 102; plus advanced Ay courses (Ay 123–135)',
        courses: ['Ay101', 'Ay102', 'Ay123', 'Ay124', 'Ay125', 'Ay126', 'Ay127', 'Ay135'],
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
        name: 'Observational & Research',
        description: 'Ay 10 (Observations); Ay 31 (Writing); Ay 141abc (Research Conference)',
        courses: ['Ay10', 'Ay31', 'Ay141a', 'Ay141b'],
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
        description: 'ACM 95ab – Introductory Methods of Applied Mathematics',
        courses: ['ACM95a', 'ACM95b', 'ACM95c'],
        minCourses: 2,
      },
      {
        id: 'acm-adv-methods',
        name: 'Advanced Methods',
        description: 'ACM 101ab – Methods of Applied Mathematics for Physical Sciences',
        courses: ['ACMIDS101a', 'ACMIDS101b'],
        minCourses: 1,
      },
      {
        id: 'acm-comp',
        name: 'Computational Mathematics',
        description: 'ACM 106ab – Introductory Methods of Computational Mathematics',
        courses: ['ACMEE106a', 'ACMEE106b'],
        minCourses: 2,
      },
      {
        id: 'acm-linalg',
        name: 'Linear Algebra',
        description: 'ACM/IDS 104 – Applied Linear Algebra',
        courses: ['ACMIDS104'],
        minCourses: 1,
      },
      {
        id: 'acm-prob',
        name: 'Probability',
        description: 'ACM/EE/IDS 116 or Ma/ACM/IDS 140a – Probability Models',
        courses: ['ACMEEIDS116', 'ACM118', 'MaACMIDS140a'],
        minCourses: 1,
      },
      {
        id: 'acm-math',
        name: 'Core Mathematics',
        description: 'Ma 2/102, Ma 3/103, Ma 108ab, Ma/CS 6ab or Ma 121ab',
        courses: ['Ma2', 'Ma3', 'Ma108a', 'Ma108b', 'MaCS6a', 'MaCS6b', 'Ma121a', 'Ma121b'],
        minCourses: 4,
      },
      {
        id: 'acm-cs',
        name: 'Computing',
        description: 'CS 1 and one advanced CS or IDS course',
        courses: ['CS1', 'CS1x', 'CS38', 'CMSCSIDS139'],
        minCourses: 2,
      },
      {
        id: 'acm-elec',
        name: 'ACM Electives (27 units)',
        description: '27 units of advanced ACM/Ma/CS courses',
        courses: ['ACM95a', 'ACM95b', 'ACM95c', 'ACMIDS104', 'ACMEE106a', 'ACMEE106b', 'ACMEEIDS116', 'ACM118', 'ACMIDS101a', 'ACMIDS101b', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma121a', 'MaACMIDS140a'],
        minUnits: 27,
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
        description: 'Ec 121ab – Theory of Value',
        courses: ['Ec121a', 'Ec121b'],
        minCourses: 1,
      },
      {
        id: 'ec-game',
        name: 'Game Theory',
        description: 'PS/Ec 172 – Game Theory',
        courses: ['PSEc172'],
        minCourses: 1,
      },
      {
        id: 'ec-econometrics',
        name: 'Econometrics',
        description: 'Ec 122 – Econometrics',
        courses: ['Ec122'],
        minCourses: 1,
      },
      {
        id: 'ec-macro',
        name: 'Macroeconomics',
        description: 'Ec 110 – Macroeconomics (one elective)',
        courses: ['Ec110'],
        minCourses: 1,
      },
      {
        id: 'ec-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103; ACM/IDS 104 or Ma 108a',
        courses: ['Ma2', 'Ma3', 'ACMIDS104', 'Ma108a'],
        minCourses: 2,
      },
      {
        id: 'ec-elec',
        name: 'Economics Electives (45 units)',
        description: '45 units of advanced economics and social science courses (100+)',
        courses: ['Ec105', 'Ec106', 'Ec110', 'Ec121a', 'Ec121b', 'Ec122', 'PSEc172', 'BEM102', 'BEM103', 'BEMEc120'],
        minUnits: 45,
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
        id: 'bem-econometrics',
        name: 'Econometrics',
        description: 'Ec 122 – Econometrics',
        courses: ['Ec122'],
        minCourses: 1,
      },
      {
        id: 'bem-game',
        name: 'Game Theory',
        description: 'PS/Ec 172 – Game Theory',
        courses: ['PSEc172'],
        minCourses: 1,
      },
      {
        id: 'bem-acct',
        name: 'Accounting',
        description: 'BEM 102 – Introduction to Accounting',
        courses: ['BEM102'],
        minCourses: 1,
      },
      {
        id: 'bem-finance',
        name: 'Finance',
        description: 'BEM 103 – Introduction to Finance',
        courses: ['BEM103'],
        minCourses: 1,
      },
      {
        id: 'bem-math',
        name: 'Mathematics/Statistics',
        description: 'Ma 3 or ACM/EE/IDS 116',
        courses: ['Ma3', 'ACMEEIDS116'],
        minCourses: 1,
      },
      {
        id: 'bem-bem',
        name: 'BEM Courses (3 courses)',
        description: 'Three BEM courses numbered 104+',
        courses: ['BEM104', 'BEM106', 'BEM109', 'BEM114', 'BEMEc120'],
        minCourses: 3,
      },
      {
        id: 'bem-elec',
        name: 'BEM Electives (45 units)',
        description: '45 units from BEM/Ec advanced courses',
        courses: ['BEM102', 'BEM103', 'BEM104', 'BEM106', 'BEM109', 'BEM114', 'BEMEc120', 'Ec105', 'Ec106', 'Ec110', 'Ec121a', 'Ec122', 'PSEc172'],
        minUnits: 45,
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
        description: 'Ph 12abc (or Ph 2abc); Ph 106abc; Ph 125ab',
        courses: ['Ph12a', 'Ph12b', 'Ph12c', 'Ph2a', 'Ph2b', 'Ph2c', 'Ph106a', 'Ph106b', 'Ph106c', 'Ph125a', 'Ph125b'],
        minCourses: 5,
      },
      {
        id: 'aph-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103, ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'aph-lab',
        name: 'Laboratory',
        description: 'APh/EE 9; APh/EE 23; APh/EE 24 (or one term from Ph 3/5/6/7)',
        courses: ['APhEE9', 'APhEE23', 'Ph3', 'Ph5', 'Ph6', 'Ph7'],
        minCourses: 2,
      },
      {
        id: 'aph-states',
        name: 'States of Matter',
        description: 'APh/MS/ME 105ab – States of Matter',
        courses: ['APhMSME105a', 'APhMSME105b', 'APhMSME105c'],
        minCourses: 2,
      },
      {
        id: 'aph-elec',
        name: 'APh Electives (4 courses)',
        description: 'Four advanced APh courses (100+)',
        courses: ['APh105', 'APh110', 'APh130', 'APhMSME105a', 'APhMSME105b', 'Ph125a', 'Ph125b', 'Ph125c', 'Ph136a', 'Ph136b', 'Ph136c'],
        minUnits: 36,
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
        description: 'ChE 15 – Introduction to Chemical Engineering Computation',
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
        id: 'che-sep',
        name: 'Separation Processes',
        description: 'ChE 62 – Separation Processes',
        courses: ['ChE62'],
        minCourses: 1,
      },
      {
        id: 'che-transport',
        name: 'Transport Phenomena',
        description: 'ChE 103abc – Transport Phenomena',
        courses: ['ChE103a', 'ChE103b', 'ChE103c'],
        minCourses: 2,
      },
      {
        id: 'che-rxn',
        name: 'Reaction Engineering',
        description: 'ChE 101 – Chemical Reaction Engineering',
        courses: ['ChE101'],
        minCourses: 1,
      },
      {
        id: 'che-control',
        name: 'Dynamics and Control',
        description: 'ChE 105 – Dynamics and Control of Chemical Systems',
        courses: ['ChE105'],
        minCourses: 1,
      },
      {
        id: 'che-lab',
        name: 'Laboratory',
        description: 'ChE 126 – Chemical Engineering Laboratory',
        courses: ['ChE126', 'ChE90'],
        minCourses: 1,
      },
      {
        id: 'che-chem',
        name: 'Chemistry',
        description: 'Ch 21ab; Ch 41ab – Organic Chemistry',
        courses: ['Ch21a', 'Ch21b', 'Ch41a', 'Ch41b'],
        minCourses: 3,
      },
      {
        id: 'che-math',
        name: 'Mathematics',
        description: 'Ma 2/102, Ma 3/103; ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b'],
        minCourses: 3,
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
        description: 'ESE 101, ESE 102, ESE 103 – all three required',
        courses: ['ESE101', 'ESE102', 'ESE103'],
        minCourses: 3,
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
        description: 'Ma 2/102; Ph 2a or Ph 12a',
        courses: ['Ma2', 'Ph2a', 'Ph12a'],
        minCourses: 2,
      },
      {
        id: 'ese-elec',
        name: 'ESE Electives (77 units)',
        description: '77 units of ESE/Ge/Ch/Bi related electives per track',
        courses: ['ESE101', 'ESE102', 'ESE103', 'Ge11a', 'Ge11b', 'Ge11c', 'Ch21a', 'Ch21b', 'Ch41a'],
        minUnits: 77,
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
        id: 'ms-fund',
        name: 'Materials Fundamentals',
        description: 'MS 115 – Fundamentals of Materials Science',
        courses: ['MS115'],
        minCourses: 1,
      },
      {
        id: 'ms-lab',
        name: 'Laboratory',
        description: 'MS 90 – Materials Science Laboratory',
        courses: ['MS90'],
        minCourses: 1,
      },
      {
        id: 'ms-states',
        name: 'States of Matter',
        description: 'APh/MS/ME 105ab – States of Matter (or APh 17ab or ChE 63ab)',
        courses: ['APhMSME105a', 'APhMSME105b', 'APh17', 'ChE63a', 'ChE63b'],
        minCourses: 2,
      },
      {
        id: 'ms-chem',
        name: 'Chemistry',
        description: 'Ch 1ab; Ch 41a; Ph 2abc or Ph 12abc',
        courses: ['Ch1a', 'Ch1b', 'Ch41a', 'Ph2a', 'Ph2b', 'Ph12a', 'Ph12b'],
        minCourses: 3,
      },
      {
        id: 'ms-math',
        name: 'Mathematics',
        description: 'Ma 2; Ma 3; ACM/IDS 104 or ACM 95ab',
        courses: ['Ma2', 'Ma3', 'ACMIDS104', 'ACM95a', 'ACM95b'],
        minCourses: 3,
      },
      {
        id: 'ms-adv',
        name: 'Materials Science Electives (45 units)',
        description: '45 units from MS 100+ and related courses',
        courses: ['MS115', 'MS125', 'MS130', 'MS132', 'MS133', 'APhMSME105a', 'APhMSME105b', 'ChE63a'],
        minUnits: 45,
      },
      {
        id: 'ms-thesis',
        name: 'Senior Thesis',
        description: 'MS 78abc – Materials Science Senior Thesis',
        courses: ['MS78a', 'MS78b', 'MS78c'],
        minCourses: 1,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // COMPUTATION AND NEURAL SYSTEMS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'cns',
    name: 'Computation and Neural Systems',
    abbreviation: 'CNS',
    totalUnits: 486,
    requirements: [
      {
        id: 'cns-neuro',
        name: 'Core Neuroscience',
        description: 'Bi 8, Bi 9, NB/Bi/CNS 150, NB/Bi/CNS 164',
        courses: ['Bi8', 'Bi9', 'NBBiCNS150', 'NBBiCNS164'],
        minCourses: 3,
      },
      {
        id: 'cns-math',
        name: 'Mathematics',
        description: 'ACM 95ab (or equivalent); ACM/IDS 104; ACM/EE/IDS 116',
        courses: ['ACM95a', 'ACM95b', 'ACMIDS104', 'ACMEEIDS116', 'MaACMIDS140a'],
        minCourses: 3,
      },
      {
        id: 'cns-cs',
        name: 'Computer Science',
        description: 'CS 1, CS 2, CS 3 (or CS 24, CS 21, CS 38)',
        courses: ['CS1', 'CS2', 'CS3', 'CS24', 'CS21', 'CS38'],
        minCourses: 2,
      },
      {
        id: 'cns-lab',
        name: 'Laboratory',
        description: 'NB/Bi/CNS 162 – Cellular and Systems Neuroscience Lab',
        courses: ['NBBiCNS162', 'CSCNS171'],
        minCourses: 1,
      },
      {
        id: 'cns-adv',
        name: 'Advanced CNS Courses (5 courses)',
        description: 'Five CNS-labeled 3-digit courses',
        courses: ['CMS_CS_CNS_EE_IDS155_CNS', 'CSCNSEE156a', 'CSCNSEE156b', 'EECNSCS148a', 'CNS100', 'CNSBiPhCSNB187'],
        minCourses: 5,
      },
      {
        id: 'cns-sci',
        name: 'Science/Engineering Electives (45 units)',
        description: '45 units from advanced science/engineering courses',
        courses: ['Ph2a', 'Ph2b', 'Ph2c', 'Ph12a', 'Ph12b', 'Ph12c', 'Ph106a', 'Ph106b', 'Ch41a', 'Ch41b'],
        minUnits: 45,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // BIOENGINEERING
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'be',
    name: 'Bioengineering',
    abbreviation: 'BE',
    totalUnits: 486,
    requirements: [
      {
        id: 'be-bio',
        name: 'Biology Core',
        description: 'Bi 8, Bi 9, BE/Bi 25; Ch 41a; Ch/Bi 110a',
        courses: ['Bi8', 'Bi9', 'BEBi25', 'Ch41a', 'ChBi110a'],
        minCourses: 4,
      },
      {
        id: 'be-core',
        name: 'Bioengineering Core',
        description: 'BE/Bi 103a; BE/Bi/APh 161; BE/ChE 163; BE 150 or BE/CS/CNS/Bi 191a',
        courses: ['BEBi103a', 'BEEEMedE150', 'BECS196a'],
        minCourses: 2,
      },
      {
        id: 'be-math',
        name: 'Mathematics',
        description: 'Ma 2; Ma 3; ACM 95ab; CS 1 or CS 2',
        courses: ['Ma2', 'Ma3', 'ACM95a', 'ACM95b', 'CS1', 'CS2'],
        minCourses: 4,
      },
      {
        id: 'be-physics',
        name: 'Physics',
        description: 'Two terms of Ph 2abc',
        courses: ['Ph2a', 'Ph2b', 'Ph2c'],
        minCourses: 2,
      },
      {
        id: 'be-writing',
        name: 'Scientific Communication',
        description: 'Bi/BE 24 – Scientific Communication',
        courses: ['BiBE24'],
        minCourses: 1,
      },
      {
        id: 'be-elec',
        name: 'BE Electives (36 units)',
        description: '36 units from biology, biodevices, biomaterials, biomechanics, or computational biology tracks',
        courses: ['Bi114', 'Bi117', 'Bi122', 'Bi145', 'NBBiCNS150', 'EE111', 'EE112', 'APhEE9', 'MS125', 'MS133'],
        minUnits: 36,
      },
    ],
  },
];

export const MINORS: Major[] = [
  // ─── CS Minor ────────────────────────────────────────────────────
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
        name: 'Advanced CS (9 units)',
        description: '9 units of CS numbered 114+',
        courses: ['CS115', 'CS116', 'CS124', 'CS128', 'CS130', 'CS131', 'CS132', 'CS152', 'CS151', 'CMSCSIDS139'],
        minUnits: 9,
      },
    ],
  },

  // ─── Mathematics Minor ───────────────────────────────────────────
  {
    id: 'ma-minor',
    name: 'Mathematics Minor',
    abbreviation: 'Ma Minor',
    requirements: [
      {
        id: 'mam-core',
        name: 'Core Mathematics',
        description: 'Two three-quarter courses from Ma 5abc, Ma 108abc, or Ma 109abc',
        courses: ['Ma5a', 'Ma5b', 'Ma5c', 'Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma109c'],
        minCourses: 4,
      },
      {
        id: 'mam-elec',
        name: 'Mathematics Electives (18 units)',
        description: '18 additional units of Ma courses (adviser approved)',
        courses: ['Ma108a', 'Ma108b', 'Ma108c', 'Ma109a', 'Ma109b', 'Ma121a', 'Ma121b', 'Ma5a', 'Ma5b', 'Ma5c'],
        minUnits: 18,
      },
    ],
  },

  // ─── Astrophysics Minor ──────────────────────────────────────────
  {
    id: 'ay-minor',
    name: 'Astrophysics Minor',
    abbreviation: 'Ay Minor',
    requirements: [
      {
        id: 'aym-physics',
        name: 'Physics Basis',
        description: 'Ph 2ab or Ph 12ab',
        courses: ['Ph2a', 'Ph2b', 'Ph12a', 'Ph12b'],
        minCourses: 2,
      },
      {
        id: 'aym-intro',
        name: 'Introductory Astronomy',
        description: 'Two of: Ge/Ay 11c, Ay 20, Ay 21',
        courses: ['Ge11c', 'Ay20', 'Ay21'],
        minCourses: 2,
      },
      {
        id: 'aym-adv',
        name: 'Advanced Astrophysics (18 units)',
        description: 'Two of: Ay 101, Ay 102, Ay 123, Ay 124, Ay 125, Ay 127',
        courses: ['Ay101', 'Ay102', 'Ay123', 'Ay124', 'Ay125', 'Ay127'],
        minUnits: 18,
      },
    ],
  },

  // ─── Chemistry Minor ─────────────────────────────────────────────
  {
    id: 'ch-minor',
    name: 'Chemistry Minor',
    abbreviation: 'Ch Minor',
    requirements: [
      {
        id: 'chm-organic',
        name: 'Organic Chemistry (18 units)',
        description: 'Ch 41abc – 18 units of organic chemistry',
        courses: ['Ch41a', 'Ch41b', 'Ch41c'],
        minUnits: 18,
      },
      {
        id: 'chm-physical',
        name: 'Physical Chemistry (18 units)',
        description: 'Ch 21abc – 18 units of physical chemistry',
        courses: ['Ch21a', 'Ch21b', 'Ch21c'],
        minUnits: 18,
      },
      {
        id: 'chm-lab',
        name: 'Chemistry Laboratory (9+ units)',
        description: '9+ units from Ch 4ab, Ch 6a, Ch 7, Ch 11, or Ch 15',
        courses: ['Ch4a', 'Ch6a', 'Ch11', 'Ch3a'],
        minUnits: 9,
      },
      {
        id: 'chm-adv',
        name: 'Advanced Chemistry Electives (27 units)',
        description: '27 units from Ch 102+ (adviser approved)',
        courses: ['Ch102', 'Ch125a', 'Ch125b', 'Ch125c', 'ChBi110a', 'ChBi110b'],
        minUnits: 27,
      },
    ],
  },

  // ─── Chemical Engineering Minor ──────────────────────────────────
  {
    id: 'che-minor',
    name: 'Chemical Engineering Minor',
    abbreviation: 'ChE Minor',
    requirements: [
      {
        id: 'chem-core',
        name: 'ChE Core',
        description: 'ChE 63a; ChE 103a; ChE 103b; ChE 101',
        courses: ['ChE63a', 'ChE103a', 'ChE103b', 'ChE101'],
        minCourses: 4,
      },
      {
        id: 'chem-adv',
        name: 'Advanced ChE Electives (18+ units)',
        description: '18+ units from ChE 63b, approved 100-level ChE courses',
        courses: ['ChE63b', 'ChE103c', 'ChE105', 'ChE130', 'ChE132', 'ChE165'],
        minUnits: 18,
      },
    ],
  },

  // ─── GPS Minor ───────────────────────────────────────────────────
  {
    id: 'gps-minor',
    name: 'Geology & Planetary Sciences Minor',
    abbreviation: 'GPS Minor',
    requirements: [
      {
        id: 'gpsm-intro',
        name: 'Introduction to Earth Science',
        description: 'Ge 11a (required)',
        courses: ['Ge11a'],
        minCourses: 1,
      },
      {
        id: 'gpsm-core',
        name: 'Core GPS Courses',
        description: 'Two of: Ge 11b, Ge 11c',
        courses: ['Ge11b', 'Ge11c'],
        minCourses: 2,
      },
      {
        id: 'gpsm-adv',
        name: 'Advanced GPS Electives (27 units)',
        description: '27 units of 100-level or higher Ge courses',
        courses: ['Ge100', 'Ge111', 'Ge121a'],
        minUnits: 27,
      },
    ],
  },

  // ─── IDS Minor ───────────────────────────────────────────────────
  {
    id: 'ids-minor',
    name: 'Information & Data Sciences Minor',
    abbreviation: 'IDS Minor',
    requirements: [
      {
        id: 'idsm-cs',
        name: 'CS Fundamentals',
        description: 'CS 1 or CS 1x; CS 2; CS 21 or Ma/CS 6c; CS 38',
        courses: ['CS1', 'CS1x', 'CS2', 'CS21', 'MaCS6c', 'CS38'],
        minCourses: 4,
      },
      {
        id: 'idsm-math',
        name: 'Math Fundamentals',
        description: 'Ma 3 or Ma/ACM/IDS 140a; CS 13 or Ma/CS 6a or Ma 121a',
        courses: ['Ma3', 'MaACMIDS140a', 'CS13', 'MaCS6a', 'Ma121a'],
        minCourses: 2,
      },
      {
        id: 'idsm-core',
        name: 'IDS Core',
        description: 'ACM/IDS 104; ACM/EE/IDS 116; IDS/ACM/CS 157; CMS/CS/CNS/EE/IDS 155 or CS/CNS/EE 156a; EE/IDS 111 or EE/IDS 160',
        courses: ['ACMIDS104', 'ACMEEIDS116', 'CMSCSCNSEEIDS155', 'CSCNSEE156a', 'IDSACMCS157', 'EE111', 'EECSIDS160'],
        minCourses: 4,
      },
      {
        id: 'idsm-elec',
        name: 'IDS Electives (9+ units)',
        description: '9+ units from IDS 100-level, CS/CNS/EE 156ab, ACM 106b, CS 115',
        courses: ['IDSACMCS158', 'CSIDS162', 'CSCNSEE156b', 'ACMEE106b', 'CS115', 'CSIDS150a', 'IDS101'],
        minUnits: 9,
      },
    ],
  },

  // ─── ESE Minor ───────────────────────────────────────────────────
  {
    id: 'ese-minor',
    name: 'Environmental Science & Engineering Minor',
    abbreviation: 'ESE Minor',
    requirements: [
      {
        id: 'esem-intro',
        name: 'ESE Introduction',
        description: 'ESE 1 – Introduction to Environmental Science and Engineering',
        courses: ['ESE1'],
        minCourses: 1,
      },
      {
        id: 'esem-core',
        name: 'ESE Core (27 units)',
        description: 'Three courses from ESE 101, 102, 103',
        courses: ['ESE101', 'ESE102', 'ESE103'],
        minUnits: 27,
      },
      {
        id: 'esem-adv',
        name: 'Advanced ESE Electives (27 units)',
        description: '27 additional units of ESE courses',
        courses: ['ESE101', 'ESE102', 'ESE103', 'Ge11a', 'Ge11b', 'Ge11c'],
        minUnits: 27,
      },
    ],
  },

  // ─── Aerospace Minor ─────────────────────────────────────────────
  {
    id: 'ae-minor',
    name: 'Aerospace Minor',
    abbreviation: 'Ae Minor',
    requirements: [
      {
        id: 'aem-required',
        name: 'Required: Ae 105abc',
        description: 'Ae 105abc – Space Engineering (all three terms required)',
        courses: ['Ae105a', 'Ae105b', 'Ae105c'],
        minCourses: 3,
      },
      {
        id: 'aem-seq',
        name: 'One Additional Ae Sequence (27 units)',
        description: 'One of: Ae 101abc, Ae 102abc, Ae 103abc, Ae 104abc, Ae 121ab, or Ae/Ge/ME 160ab',
        courses: ['AeAPhCEME101a', 'AeAPhCEME101b', 'AeAPhCEME101c', 'AeAMCEME102a', 'AeAMCEME102b', 'AeAMCEME102c', 'Ae103a', 'Ae103b', 'Ae103c', 'AeAPh104a', 'AeAPh104b', 'Ae121a', 'Ae121b'],
        minUnits: 27,
      },
    ],
  },

  // ─── CDS Minor ───────────────────────────────────────────────────
  {
    id: 'cds-minor',
    name: 'Control and Dynamical Systems Minor',
    abbreviation: 'CDS Minor',
    requirements: [
      {
        id: 'cdsm-core',
        name: 'CDS Core',
        description: 'One of CDS 110 or CDS 131; CDS 232',
        courses: ['CDS110', 'CDS131', 'CDS232'],
        minCourses: 2,
      },
      {
        id: 'cdsm-elec',
        name: 'CDS Electives (9 units)',
        description: '9 units from CDS courses or related robotics/controls',
        courses: ['CDS110', 'CDS131', 'CDS232', 'MECSEE133a', 'MECSEE133b', 'Ae103a', 'Ae103b'],
        minUnits: 9,
      },
    ],
  },

  // ─── Neurobiology Minor ──────────────────────────────────────────
  {
    id: 'nb-minor',
    name: 'Neurobiology Minor',
    abbreviation: 'NB Minor',
    requirements: [
      {
        id: 'nbm-bio',
        name: 'Biology Fundamentals',
        description: 'Bi 8, Bi 9 – Molecular and Cell Biology',
        courses: ['Bi8', 'Bi9'],
        minCourses: 2,
      },
      {
        id: 'nbm-genetics',
        name: 'Genetics',
        description: 'Bi 122 – Genetics',
        courses: ['Bi122'],
        minCourses: 1,
      },
      {
        id: 'nbm-dev',
        name: 'Development',
        description: 'Bi 117 or Bi/BE 119 – Developmental Biology',
        courses: ['Bi117'],
        minCourses: 1,
      },
      {
        id: 'nbm-neuro',
        name: 'Introductory Neuroscience',
        description: 'NB/Bi/CNS 150 – Introductory Neuroscience',
        courses: ['NBBiCNS150'],
        minCourses: 1,
      },
      {
        id: 'nbm-elec',
        name: 'NB Electives (18 units)',
        description: '18 units of 100–200 level NB/Bi/Ch courses',
        courses: ['NBBiCNS162', 'NBBiCNS164', 'Bi114', 'Bi145', 'ChBi110a'],
        minUnits: 18,
      },
    ],
  },

  // ─── Robotics Minor ──────────────────────────────────────────────
  {
    id: 'ro-minor',
    name: 'Robotics Minor',
    abbreviation: 'Ro Minor',
    requirements: [
      {
        id: 'rom-fund',
        name: 'Fundamentals',
        description: 'CS 2; Ma 2; one of Ma 3 or EE 55',
        courses: ['CS2', 'Ma2', 'Ma3', 'EE55'],
        minCourses: 3,
      },
      {
        id: 'rom-core',
        name: 'Robotics Core',
        description: 'ME/CS/EE 129; ME/CS/EE 133ab; one of ME/CS/EE 134 or ME/CS/EE 169',
        courses: ['MECSEE129', 'MECSEE133a', 'MECSEE133b', 'MECSEE134', 'MECSEE169'],
        minCourses: 4,
      },
      {
        id: 'rom-controls',
        name: 'Controls Electives',
        description: 'Two from: CDS 110, CDS 131, CDS 232, Ae 103abc (Advanced Robotics)',
        courses: ['CDS110', 'CDS131', 'CDS232', 'Ae103a', 'Ae103b'],
        minCourses: 2,
      },
      {
        id: 'rom-intel',
        name: 'Intelligence Elective',
        description: 'One from: CMS/CS/CNS/EE/IDS 155, EE/CNS/CS 148, CS/CNS/EE 156a',
        courses: ['CMSCSCNSEEIDS155', 'EECNSCS148a', 'CSCNSEE156a'],
        minCourses: 1,
      },
    ],
  },

  // ─── Structural Mechanics Minor ──────────────────────────────────
  {
    id: 'sm-minor',
    name: 'Structural Mechanics Minor',
    abbreviation: 'SM Minor',
    requirements: [
      {
        id: 'smm-core',
        name: 'Structural Mechanics Courses (54 units)',
        description: '54 units from Ae/AM/CE/ME 102abc and approved structural mechanics courses',
        courses: ['AeAMCEME102a', 'AeAMCEME102b', 'AeAMCEME102c', 'AeAPhCEME101a', 'AeAPhCEME101b', 'AeAPhCEME101c'],
        minUnits: 54,
      },
    ],
  },
];
