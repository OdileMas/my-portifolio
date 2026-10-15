import cafeShot from './assets/shots/cafe.jpg';
import financeShot from './assets/shots/finance.jpg';
import vaultShot from './assets/shots/vault.jpg';
import ntdShot from './assets/shots/ntd.jpg';

export const EMAIL = 'masengeshoodile@gmail.com';
export const PHONE = '+250 780 283 130';
export const PHONE_HREF = 'tel:+250780283130';
export const GITHUB = 'https://github.com/OdileMas';
export const CV_URL = `${process.env.PUBLIC_URL}/Odile%20CV.pdf`;
export const CV_FILENAME = 'Odile CV.pdf';

// Contact form → FormSubmit → EMAIL inbox. After the one-time activation,
// FormSubmit sends a random alias; put it in REACT_APP_FORM_ID so the real
// address never appears in the request URL.
const FORM_ID = process.env.REACT_APP_FORM_ID || EMAIL;
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_ID}`;

export const stats = [
  { value: 6, suffix: '', label: 'Internships & programmes' },
  { value: 11, suffix: '+', label: 'Projects built' },
  { value: 5, suffix: '', label: 'Live deployments' },
  { value: 2026, suffix: '', label: 'BSc Software Eng. graduate', plain: true },
];

export const services = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    summary: 'Django and FastAPI services with clean data models, REST APIs and the logic that keeps a product honest.',
    intro:
      'I architect clean, resilient backends using Python (Django, FastAPI) and Node.js. My focus is on robust relational data modeling, query efficiency, secure authentication (JWT), and well-documented RESTful endpoints.',
    cvRecommendation:
      'Recommended in CV: Explore my backend architecture in AgriConnect (Solvit Africa) and production REST APIs developed for Travelis Rwanda Ltd.',
    tags: ['Django', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Node.js'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Responsive React interfaces that feel calm and fast — dashboards, landing pages and multi-page sites.',
    intro:
      'I craft accessible, modern, mobile-first web applications using React, Next.js, and clean CSS. I emphasize visual hierarchy, smooth micro-interactions, and fast load times across every screen size.',
    cvRecommendation:
      'Recommended in CV: Review my production deliverables on NTD Build & Design Solutions and the Irondo ry’Umwuga surveillance dashboard.',
    tags: ['React', 'Next.js', 'JavaScript', 'CSS', 'Figma'],
  },
  {
    id: 'fullstack',
    title: 'Full-stack products',
    summary: 'Taking an idea from database to deployment: authentication, CRUD flows, admin dashboards and hosting.',
    intro:
      'From database schemas and business logic to responsive user interfaces and cloud deployment on Vercel/Docker, I deliver cohesive, maintainable full-stack products that solve real problems.',
    cvRecommendation:
      'Recommended in CV: Check out full-stack case studies including SecureVault Dashboard, AgriConnect, and Product CRUD.',
    tags: ['Django + React', 'MERN Stack', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    summary: 'Cross-platform apps with Flutter and React Native for people who live on their phones.',
    intro:
      'I build fast, cross-platform mobile experiences with Flutter (Dart) and React Native, focusing on intuitive workflows, proximity-based matching, and offline-resilient UI state.',
    cvRecommendation:
      'Recommended in CV: Discover my current work on Fundi Mobile at Travelis Rwanda Ltd and Farmer Trading App.',
    tags: ['Flutter', 'Dart', 'React Native', 'Geolocation', 'REST APIs'],
  },
];

export const skillIntros = {
  Django: {
    category: 'Backend Framework',
    intro: 'Odile’s core Python framework for architecting scalable, data-driven web services, robust ORM modeling, and secure REST APIs.',
    cvRecommendation: 'See AgriConnect and Solvit Africa intensive Django program details in the updated CV.',
  },
  FastAPI: {
    category: 'Backend Framework',
    intro: 'High-performance Python API development with asynchronous endpoints and automated schema documentation.',
    cvRecommendation: 'Check CV for backend API benchmarks and microservice projects.',
  },
  'Node.js': {
    category: 'Backend Runtime',
    intro: 'Event-driven server-side JavaScript runtime utilized for scalable REST services and dashboard backends.',
    cvRecommendation: 'Refer to CV for SecureVault and full-stack MERN stack experience.',
  },
  Express: {
    category: 'Backend Framework',
    intro: 'Minimalist web framework for Node.js used to build RESTful endpoints and middleware authentication.',
    cvRecommendation: 'See Product CRUD and full-stack projects in the CV.',
  },
  'REST APIs': {
    category: 'API Architecture',
    intro: 'Standardized client-server communication with clean status codes, JWT auth, and structured JSON payloads.',
    cvRecommendation: 'Detailed across Travelis Rwanda Ltd, City of Kigali, and IDA Technology in the CV.',
  },
  React: {
    category: 'Frontend Library',
    intro: 'Odile’s go-to library for building modular component systems, interactive state workflows, and modern SPAs.',
    cvRecommendation: 'Featured in NTD Build & Design Solutions, Finance Tracker, and the portfolio codebase.',
  },
  'React Native': {
    category: 'Mobile Framework',
    intro: 'Cross-platform native mobile app development sharing core React component architecture.',
    cvRecommendation: 'Explore mobile projects and certifications in the CV.',
  },
  'Next.js': {
    category: 'Full-stack Framework',
    intro: 'Production React framework used for server-side rendering, static generation, and typed dashboards.',
    cvRecommendation: 'See the Irondo ry’Umwuga final-year AI surveillance dashboard in the CV.',
  },
  Flutter: {
    category: 'Mobile Framework',
    intro: 'Google’s UI toolkit used with Dart to craft Fundi Mobile at Travelis Rwanda Ltd and Farmer Trading App.',
    cvRecommendation: 'Read the Fundi Mobile internship profile in the updated CV.',
  },
  Dart: {
    category: 'Programming Language',
    intro: 'Client-optimized object-oriented language driving Odile’s Flutter mobile development.',
    cvRecommendation: 'See mobile application experience and code repositories in the CV.',
  },
  Python: {
    category: 'Programming Language',
    intro: 'Core language for backend architectures, automation, data structures, and Solvit Africa training.',
    cvRecommendation: 'Comprehensive coursework, training, and backend projects documented in the CV.',
  },
  JavaScript: {
    category: 'Programming Language',
    intro: 'Modern ES6+ JavaScript used across frontend apps, interactive DOM experiences, and Node backends.',
    cvRecommendation: 'Verified across commercial and academic projects in the CV.',
  },
  TypeScript: {
    category: 'Programming Language',
    intro: 'Typed JavaScript providing compile-time type safety across complex React and Next.js applications.',
    cvRecommendation: 'See final-year project and modern frontend implementations in the CV.',
  },
  PostgreSQL: {
    category: 'Relational Database',
    intro: 'Relational database management for structured data models, foreign keys, indexing, and ORM mapping.',
    cvRecommendation: 'Refer to Travelis Rwanda Ltd and Django project sections in the CV.',
  },
  MongoDB: {
    category: 'NoSQL Database',
    intro: 'Document-oriented database for flexible JSON-like schemas and MERN stack applications.',
    cvRecommendation: 'See full-stack project details in the CV.',
  },
  Figma: {
    category: 'Design & Prototyping',
    intro: 'UI/UX design tool for wireframing, layout systems, user flow design, and design-to-code translation.',
    cvRecommendation: 'Review design and agile prototyping methodologies in the CV.',
  },
  Git: {
    category: 'Version Control',
    intro: 'Branching, code reviews, rebasing, and collaborative workflow management across team repos.',
    cvRecommendation: 'Explore github.com/OdileMas and production collaboration in the CV.',
  },
  Agile: {
    category: 'Methodology',
    intro: 'Iterative sprint cycles, daily standups, and cross-functional team delivery honed across internships.',
    cvRecommendation: 'Outlined across City of Kigali and Travelis Rwanda experience in the CV.',
  },
};

export const experience = [
  {
    period: '2026 — Present',
    role: 'Software Developer Intern',
    org: 'Travelis Rwanda Ltd',
    place: 'Kigali',
    current: true,
    points: [
      'Working as a software developer intern on Fundi Mobile, a mobile & web platform connecting customers to nearby construction technicians and artisans (fundis) according to their specific repair and building problems.',
      'Developed proximity-based discovery, category-specific problem intake (plumbing, electrical, masonry, carpentry), and direct technician matching workflows to streamline service dispatch.',
      'Collaborated with the engineering team on RESTful API design, database schemas, and testing across mobile and web platforms in an Agile environment.',
    ],
  },
  {
    period: '2026',
    role: 'Django Full-Stack Training',
    org: 'Solvit Africa',
    place: 'Kigali',
    points: [
      'Three-month intensive programme in backend architecture, the Django ORM, database design and REST APIs.',
      'Built AgriConnect and a School Management System independently; contributing to FitSync as part of a team.',
    ],
  },
  {
    period: 'Mar — May 2026',
    role: 'Software Development Intern',
    org: 'City of Kigali × ICT Chamber',
    place: 'Kigali',
    points: [
      'Helped design a Smart Entry & Service Delivery System to digitise paper-based operations.',
      'Requirements analysis, implementation, testing and debugging in a multidisciplinary Agile team.',
    ],
  },
  {
    period: 'Mar — May 2025',
    role: 'Software Development Intern',
    org: 'IDA Technology',
    place: 'Kigali',
    points: [
      'Designed and built a responsive website for religious community services, with schedules and gathering times.',
      'Integrated APIs with the backend team so members can request baptism and marriage certificates online.',
    ],
  },
  {
    period: 'Feb — Mar 2025',
    role: 'Web Development Trainee',
    org: 'AFRETEC Project Workshop',
    place: 'Kigali',
    points: ['Built a location-based website in HTML, CSS and JavaScript under professional mentorship.'],
  },
  {
    period: 'Oct — Dec 2024',
    role: 'Bridge Program Student',
    org: 'Carnegie Mellon University Africa',
    place: 'Kigali',
    points: ['IoT air-monitoring system using temperature, humidity and LED sensors.'],
  },
];

export const education = [
  {
    period: '2022 — 2026',
    title: 'BSc, Software Engineering',
    org: 'University of Rwanda',
    note: 'Software development, networking, embedded systems, IoT and data analytics. Graduating October 2026.',
  },
  {
    period: '2018 — 2021',
    title: 'Advanced Level Diploma',
    org: 'École Secondaire Saint Vincent Muhoza',
    note: 'Mathematics, Physics, Computer Science.',
  },
];

export const certifications = [
  { title: 'AFRETEC Project Workshop Certificate', year: '2025' },
  { title: 'Digital Talent Program — Software Development (Beginner → Advanced)', year: '2025' },
  { title: 'Resonate RISE & STEM Program Certificate', year: '2024' },
  { title: 'Code Camp Python Beginner Certificate', year: '2024' },
  { title: 'CMU-Africa Bridge Program Certificate', year: '2024' },
];

export const toolkit = [
  { label: 'Backend', items: ['Django', 'FastAPI', 'Node.js', 'Express', 'REST APIs'] },
  { label: 'Frontend', items: ['React', 'React Native', 'Next.js', 'HTML & CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'ORM modelling'] },
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart'] },
  { label: 'Practice', items: ['Git', 'Agile', 'Figma', 'Testing & debugging'] },
];

export const categories = ['All', 'Mobile', 'Full-stack', 'Frontend', 'Backend'];

export const projects = [
  {
    slug: 'fundi-mobile',
    title: 'Fundi Mobile (Travelis Rwanda Ltd)',
    summary: 'Connecting customers to nearby construction technicians & artisans tailored to their specific repair and building needs.',
    category: 'Mobile',
    year: '2026',
    team: 'Travelis Rwanda Ltd · Internship',
    code: 'https://github.com/OdileMas',
    stack: ['Flutter', 'React', 'REST APIs', 'PostgreSQL', 'Geolocation'],
    overview:
      'Fundi Mobile is an on-demand marketplace developed at Travelis Rwanda Ltd to connect households and companies with nearby verified construction technicians (plumbing, electrical, masonry, carpentry). It eliminates the hassle of finding reliable artisans and enables direct problem-based matchmaking.',
    contributions: [
      'Developed customer-to-technician discovery and proximity matching workflows.',
      'Designed category-specific problem intake flows to accurately diagnose customer needs.',
      'Collaborated on RESTful backend endpoints, state management, and cross-platform UI components.',
    ],
    featured: true,
  },
  {
    slug: 'ntd-build-design',
    title: 'NTD Build & Design Solutions',
    summary: 'Multi-page website and admin dashboard for a Rwandan construction and architecture company.',
    category: 'Frontend',
    year: '2026',
    team: 'Team project · with Musengimana Fabrice',
    image: ntdShot,
    live: 'https://ntd-frontend-gamma.vercel.app',
    code: 'https://github.com/MFabrice001/NTD-Frontend',
    stack: ['React', 'Vite', 'React Router', 'Framer Motion', 'Recharts', 'Axios'],
    overview:
      'NTD Build & Design Solutions needed a professional web presence to present its construction, engineering and interior fit-out services, plus a dashboard where staff manage the content behind it.',
    highlightsTitle: 'What I built',
    contributions: [
      'Built the Blog, Contact and FAQ pages, including their layouts and content.',
      'Extended the admin dashboard with additional management views.',
      'Reworked the landing-page Skyline section and updated company information across the site.',
    ],
    featured: true,
  },
  {
    slug: 'cafelocator-rwanda',
    title: 'CaféLocator Rwanda',
    summary: 'Find cafés across Rwanda by city, compare ratings and services, and get directions on a map.',
    category: 'Frontend',
    year: '2025',
    team: 'Team project',
    image: cafeShot,
    live: 'https://cafe-locator-rwanda.vercel.app',
    code: 'https://github.com/OdileMas/CafeLocator-Rwanda',
    stack: ['HTML', 'CSS', 'JavaScript', 'Maps', 'Geolocation'],
    overview:
      'A guide to coffee spots in Kigali, Musanze, Huye, Rubavu and beyond — built so visitors and locals can find a good café without scrolling through social media.',
    contributions: [
      'City-based search and listings with ratings and available services.',
      'Interactive map with geolocation to show nearby cafés.',
      'Responsive layout that works on phones first.',
    ],
    featured: true,
  },
  {
    slug: 'finance-tracker',
    title: 'Finance Tracker',
    summary: 'Record income and expenses, categorise spending and see where the money actually goes.',
    category: 'Frontend',
    year: '2026',
    team: 'Team project',
    image: financeShot,
    live: 'https://financce-tracker.vercel.app',
    code: 'https://github.com/OdileMas/financce-tracker',
    stack: ['React', 'JavaScript', 'CSS'],
    overview:
      'A personal finance app focused on clarity: a calm interface for logging transactions and understanding spending habits at a glance.',
    contributions: [
      'Transaction recording for income and expenses.',
      'Spending categories and a dashboard view of financial behaviour.',
      'Clean landing page leading into the app.',
    ],
    featured: true,
  },
  {
    slug: 'securevault-dashboard',
    title: 'SecureVault Dashboard',
    summary: 'Security dashboard with live metrics, access logs and analytics, containerised for deployment.',
    category: 'Full-stack',
    year: '2026',
    team: 'Collaboration · training challenge',
    image: vaultShot,
    live: 'https://secure-vault-dashboard-azure.vercel.app',
    code: 'https://github.com/OdileMas/SecureVault-Dashboard',
    stack: ['React', 'Node.js', 'Docker', 'Terraform'],
    overview:
      'Built as part of a multi-track engineering challenge: a dashboard for monitoring secure vaults, with role-based sign-in and infrastructure defined as code.',
    contributions: [
      'Dashboard views for metrics, access logs and security analytics.',
      'Containerised with Docker and provisioned with Terraform.',
      'Deployed to Vercel for a live demo.',
    ],
    featured: true,
  },
  {
    slug: 'irondo-ry-umwuga',
    title: 'Irondo ry’Umwuga',
    summary: 'Final-year project: an AI surveillance dashboard with separate views for security heads and guards.',
    category: 'Full-stack',
    year: '2026',
    team: 'Final-year project',
    code: 'https://github.com/OdileMas/FinalYear-Frontend',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    overview:
      'A smart surveillance system for community security. The frontend gives the Head of Security and individual guards their own role-based dashboards.',
    contributions: [
      'Role-based authentication with separate admin and guard dashboards.',
      'Dark and light themes with a sidebar layout built on shadcn/ui.',
      'Typed end to end with TypeScript.',
    ],
  },
  {
    slug: 'django-training',
    title: 'Django & Python Training',
    summary: 'Coursework from Solvit Africa, including a menu-driven Student Management System.',
    category: 'Backend',
    year: '2026',
    team: 'Solvit Africa programme',
    code: 'https://github.com/OdileMas/Django_training',
    stack: ['Python', 'Django'],
    overview:
      'The repository behind my Django training: Python fundamentals, assignments and practical tasks that led to larger projects like AgriConnect and a School Management System.',
    contributions: [
      'Student Management System using core Python data structures.',
      'Exercises covering control flow, collections and problem solving.',
      'Foundation for Django apps built later in the programme.',
    ],
  },
  {
    slug: 'farmer-trading-app',
    title: 'Farmer Trading App',
    summary: 'Flutter app where farmers list produce and trade directly with buyers.',
    category: 'Mobile',
    year: '2025',
    team: 'Personal project',
    code: 'https://github.com/OdileMas/farmer_trading_app',
    stack: ['Flutter', 'Dart'],
    overview:
      'A mobile marketplace that cuts out middlemen so farmers can reach buyers directly and get paid fairly.',
    contributions: ['Product listings for agricultural produce.', 'Cross-platform build from a single Flutter codebase.'],
  },
  {
    slug: 'product-crud',
    title: 'Product CRUD',
    summary: 'Full-stack product management with authentication and complete create-read-update-delete flows.',
    category: 'Full-stack',
    year: '2025',
    team: 'Personal project',
    code: 'https://github.com/OdileMas/product-crud',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    overview: 'A MERN application demonstrating clean CRUD architecture with user authentication.',
    contributions: ['Express REST API backed by MongoDB.', 'User authentication.', 'Responsive React interface for managing products.'],
  },
  {
    slug: 'ihugure',
    title: 'iHugure',
    summary: 'A platform encouraging the next generation of girls to step into technology.',
    category: 'Frontend',
    year: '2025',
    team: 'Personal project',
    code: 'https://github.com/OdileMas/iHugure',
    stack: ['React', 'CSS'],
    overview: 'iHugure shares resources and stories to help close the gender gap in tech.',
    contributions: ['Designed and built the React site.', 'Content focused on girls exploring careers in technology.'],
  },
];
