// ─────────────────────────────────────────────────────────────
//  portfolio.js  —  Single source of truth for all content
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Venkataramana Routhu',
  initials: 'VR',
  roles: [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'React.js Developer',
    'Node.js Developer',
    'Frontend Developer',
  ],
  tagline:
    '1.5+ years shipping production-grade apps with React.js, Node.js, PHP & MySQL — for real businesses, real users.',
  summary: [
    'Full Stack Developer with 1.5+ years of hands-on experience building and deploying production-grade web applications using React.js, Node.js, Express.js, PHP, and MySQL.',
    'Skilled in end-to-end development — from designing responsive, modern UIs with Tailwind CSS and Material UI to architecting secure backend systems with REST APIs, JWT Authentication, and Role-Based Access Control (RBAC).',
    'Proven track record of delivering live company websites, secure client portals, and user management dashboards for real business clients across the full SDLC.',
  ],
  location: 'Hyderabad, India',
  email: 'routhuvenkey0007@gmail.com',
  phone: '+91 95733 09069',
  linkedin: 'https://linkedin.com/in/venkataramana-routhu-555966322',
  github: 'https://github.com/RouthuVenkataramana',
  portfolio: '#',
};

export const STATS = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '3+', label: 'Live Productions' },
  { value: '15+', label: 'API Endpoints Built' },
  { value: '99%+', label: 'Uptime Maintained' },
];

export const HIGHLIGHTS = [
  {
    icon: '⚡',
    title: 'Production-Ready Apps',
    desc: 'Built and deployed 3+ live production websites and dashboards using React.js, Node.js, PHP, and MySQL for industrial B2B clients.',
  },
  {
    icon: '🔒',
    title: 'Secure Systems',
    desc: 'Designed and implemented secure client portals with JWT-based authentication, session handling, and RBAC — reducing unauthorized access incidents to zero.',
  },
  {
    icon: '🚀',
    title: 'DevOps Capable',
    desc: 'End-to-end cPanel deployment with 99%+ production uptime.',
  },
];

// ─── Skills ───────────────────────────────────────────────────
export const SKILLS = [
  {
    category: 'Frontend',
    accent: '#22d3ee',
    accentLight: '#0891b2',
    emoji: '⟨/⟩',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Backend',
    accent: '#818cf8',
    accentLight: '#6366f1',
    emoji: '⚙',
    items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'JWT Authentication', 'RBAC', 'Session Management', 'MVC Architecture'],
  },
  {
    category: 'Database',
    accent: '#f472b6',
    accentLight: '#ec4899',
    emoji: '🗄',
    items: ['MySQL', 'MongoDB', 'Database Design', 'Query Optimization', 'Relational Modeling'],
  },
  {
    category: 'Tools & DevOps',
    accent: '#34d399',
    accentLight: '#16a34a',
    emoji: '⌨',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'cPanel', 'Deployment', 'Hosting', 'Website Maintenance'],
  },
  {
    category: 'Concepts',
    accent: '#fb923c',
    accentLight: '#ea580c',
    emoji: '💡',
    items: ['Full Stack Dev', 'MERN Stack', 'SDLC', 'Role-Based Access Control', 'API Design', 'SEO Optimization', 'Performance Tuning'],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: '01',
    badge: 'Live ✓',
    accent: '#22d3ee',
    accentLight: '#0891b2',
    title: 'Live Company Website',
    subtitle: 'Mechindus Pvt Ltd',
    description:
      'Official production website built from scratch for an industrial B2B company. Showcases product lines, services, and business credentials with dynamic inquiry forms, SEO-optimized architecture, and zero-downtime deployment.',
    tech: ['React.js', 'Node.js', 'PHP', 'MySQL', 'Tailwind CSS'],
    features: [
      'Live on mechindus.com — actively serving B2B clients',
      'Dynamic inquiry forms boosting qualified leads by ~40%',
      'SEO-friendly HTML5, semantic markup, meta optimization',
      'Zero-downtime staged cPanel deployment pipeline',
    ],
    github: 'https://github.com/RouthuVenkataramana/mechindus-website',
    live: 'https://www.mechindus.com',
    isLive: true,
  },
  {
    id: '02',
    badge: 'Security',
    accent: '#818cf8',
    accentLight: '#6366f1',
    title: 'Secure Client Portal',
    subtitle: 'Dashboard + Auth System',
    description:
      'Multi-role client dashboard with JWT authentication, session expiry handling, and refresh token logic. Strict RBAC ensures complete data isolation between all client accounts — zero unauthorized access incidents.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'RBAC'],
    features: [
      'JWT-based auth with session expiry + refresh tokens',
      'Role-Based Access Control — full data isolation per client',
      '10+ REST API endpoints for reports, users, access control',
      '8+ table relational MySQL schema with optimized joins',
    ],
    github: 'https://github.com/RouthuVenkataramana/dashboard',
    live: 'https://www.mechindus.com/dashboard',
    isLive: false,
  },
  {
    id: '03',
    badge: 'Full Stack',
    accent: '#f472b6',
    accentLight: '#ec4899',
    title: 'User Management System',
    subtitle: 'HippoCloud Technologies',
    description:
      'Internal platform supporting Admin, Manager, and User roles with full CRUD operations, real-time data updates, role assignment, activity reporting, and optimized pagination for large enterprise datasets.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    features: [
      '3-tier RBAC: Admin, Manager, User roles enforced',
      'Full CRUD with real-time data updates + role assignment',
      'Paginated data tables — ~25% load time reduction',
      'Client-side caching strategy reducing API fetch latency',
    ],
    github: 'https://github.com/RouthuVenkataramana/user-management-system',
    live: null,
    isLive: false,
  },
];

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Mechindus Pvt Ltd',
    period: 'Jan 2025 – Feb 2026',
    type: 'Full-time',
    accent: '#22d3ee',
    accentLight: '#0891b2',
    achievements: [
      'Developed and maintained 3+ live production websites and dashboards using React.js, Node.js, PHP, and MySQL for industrial B2B clients',
      'Built a secure client portal from scratch with JWT-based authentication, session handling, and RBAC — reducing unauthorized access incidents to zero',
      'Designed and implemented 15+ REST API endpoints with Node.js/Express.js enabling seamless frontend-backend data flow',
      'Optimized MySQL query performance and database schema design, improving data retrieval speeds by ~30% on report-heavy pages',
      'Managed end-to-end deployment, hosting, and maintenance on cPanel environments ensuring 99%+ uptime',
      'Built fully responsive, SEO-optimized UI components with React.js and Tailwind CSS for cross-device compatibility',
    ],
  },
  {
    role: 'MERN Full Stack Developer Intern',
    company: 'HippoCloud Technologies Pvt Ltd',
    period: 'Jun 2024 – Dec 2024',
    type: 'Internship',
    accent: '#818cf8',
    accentLight: '#6366f1',
    achievements: [
      'Built a full-featured user management dashboard using React.js, Node.js, and MySQL with authentication, RBAC, and REST API integration',
      'Implemented role-based access control supporting 3+ user roles (Admin, Manager, User) streamlining internal workflow',
      'Collaborated across the full SDLC — from requirements gathering and UI design to backend development, testing, and deployment',
      'Reduced data fetch latency by optimizing API response payloads and implementing client-side caching strategies',
    ],
  },
];

export const EDUCATION = {
  degree: 'B.Tech — Computer Science & Engineering',
  institution: 'Sri Sivani College of Engineering',
  university: 'JNTU Kakinada',
  graduated: 'April 2024',
  gpa: '7.3 / 10.0',
};

export const CERTIFICATIONS = [
  { name: 'MERN Full Stack Internship Certificate', org: 'HippoCloud Technologies Pvt Ltd', year: 'Jun 2024' },
  { name: 'MERN Full Stack Developer Certification', org: 'HippoCloud Technologies Pvt Ltd', year: 'Jan 2024' },
  { name: 'Android App Development Certificate', org: 'Academor', year: 'Jun – Jul 2023' },
  { name: 'Web Development Internship Certificate', org: 'Teachnook Institute of Technology', year: 'Aug 2022' },
];

export const OPEN_ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React.js Developer',
  'Node.js Developer',
  'Frontend Developer (React)',
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
