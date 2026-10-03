import cafeShot from './assets/shots/cafe.jpg';
import financeShot from './assets/shots/finance.jpg';
import vaultShot from './assets/shots/vault.jpg';

export const EMAIL = 'masengeshoodile@gmail.com';
export const GITHUB = 'https://github.com/OdileMas';
export const CV_URL = `${process.env.PUBLIC_URL}/Odile%20CV.pdf`;
export const CV_FILENAME = 'Odile CV.pdf';

// Contact form → FormSubmit → EMAIL inbox. After the one-time activation,
// FormSubmit sends a random alias; put it in REACT_APP_FORM_ID so the real
// address never appears in the request URL.
const FORM_ID = process.env.REACT_APP_FORM_ID || EMAIL;
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_ID}`;

export const experience = [
  {
    period: '2026 — Now',
    role: 'Developer Intern',
    org: 'Travelis Rwanda',
    place: 'Kigali',
    current: true,
    points: [
      'Working in the development team on the design, development and maintenance of the company’s software products.',
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

export const featured = [
  {
    title: 'CaféLocator Rwanda',
    kind: 'Web app · Team project',
    year: '2025',
    description:
      'Helps people find cafés across Rwanda — search by city, compare ratings and services, and get there with an interactive map and geolocation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Maps'],
    image: cafeShot,
    live: 'https://cafe-locator-rwanda.vercel.app',
    code: 'https://github.com/OdileMas/CafeLocator-Rwanda',
  },
  {
    title: 'Finance Tracker',
    kind: 'Web app',
    year: '2026',
    description:
      'A personal finance app for recording income and expenses, sorting spending into categories and seeing where the money actually goes.',
    stack: ['React', 'JavaScript', 'CSS'],
    image: financeShot,
    live: 'https://financce-tracker.vercel.app',
    code: 'https://github.com/OdileMas/financce-tracker',
  },
  {
    title: 'SecureVault Dashboard',
    kind: 'Dashboard · Collaboration',
    year: '2026',
    description:
      'A security dashboard for monitoring vaults — live metrics, access logs and analytics — containerised with Docker and Terraform.',
    stack: ['React', 'Node.js', 'Docker', 'Terraform'],
    image: vaultShot,
    live: 'https://secure-vault-dashboard-azure.vercel.app',
    code: 'https://github.com/OdileMas/SecureVault-Dashboard',
  },
];

export const more = [
  {
    title: 'Irondo ry’Umwuga',
    note: 'Final-year project',
    description: 'AI surveillance dashboard with separate views for the head of security and guards.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    code: 'https://github.com/OdileMas/FinalYear-Frontend',
  },
  {
    title: 'Django Training',
    note: 'Solvit Africa',
    description: 'Python and Django coursework, assignments and a Student Management System.',
    stack: ['Python', 'Django'],
    code: 'https://github.com/OdileMas/Django_training',
  },
  {
    title: 'Farmer Trading App',
    note: 'Mobile',
    description: 'Flutter app where farmers list produce and trade directly with buyers.',
    stack: ['Flutter', 'Dart'],
    code: 'https://github.com/OdileMas/farmer_trading_app',
  },
  {
    title: 'Product CRUD',
    note: 'Full stack',
    description: 'Product management with authentication and a full create-read-update-delete flow.',
    stack: ['React', 'Express', 'MongoDB'],
    code: 'https://github.com/OdileMas/product-crud',
  },
  {
    title: 'iHugure',
    note: 'Community',
    description: 'A platform encouraging the next generation of girls to step into technology.',
    stack: ['React'],
    code: 'https://github.com/OdileMas/iHugure',
  },
];

export const toolkit = [
  { label: 'Backend', items: ['Django', 'FastAPI', 'Node.js', 'Express', 'REST APIs'] },
  { label: 'Frontend', items: ['React', 'React Native', 'Next.js', 'HTML & CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'ORM modelling'] },
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart'] },
  { label: 'Practice', items: ['Git', 'Agile', 'Figma', 'Testing & debugging'] },
];
