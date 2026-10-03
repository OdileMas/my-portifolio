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
  { value: 10, suffix: '+', label: 'Projects built' },
  { value: 4, suffix: '', label: 'Live deployments' },
  { value: 2026, suffix: '', label: 'BSc Software Eng. graduate', plain: true },
];

export const services = [
  {
    title: 'Backend & APIs',
    text: 'Django and FastAPI services with clean data models, REST APIs and the logic that keeps a product honest.',
    tags: ['Django', 'FastAPI', 'PostgreSQL', 'REST'],
  },
  {
    title: 'Frontend',
    text: 'Responsive React interfaces that feel calm and fast — dashboards, landing pages and multi-page sites.',
    tags: ['React', 'Next.js', 'JavaScript', 'CSS'],
  },
  {
    title: 'Full-stack products',
    text: 'Taking an idea from database to deployment: authentication, CRUD flows, admin dashboards and hosting.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Vercel'],
  },
  {
    title: 'Mobile',
    text: 'Cross-platform apps with Flutter and React Native for people who live on their phones.',
    tags: ['Flutter', 'Dart', 'React Native'],
  },
];

export const experience = [
  {
    period: '2026 — Present',
    role: 'Developer Intern',
    org: 'Travelis Rwanda',
    place: 'Kigali',
    current: true,
    points: ['Working in the development team on the design, development and maintenance of the company’s software products.'],
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
    note: 'Software development, networking, embedded systems, IoT and data analytics.',
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

export const categories = ['All', 'Full-stack', 'Frontend', 'Backend', 'Mobile'];

export const projects = [
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
