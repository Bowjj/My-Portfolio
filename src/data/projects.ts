import { FaBell, FaCss3Alt, FaFileExcel, FaHtml5, FaLayerGroup, FaPhp } from 'react-icons/fa6'
import { SiDart, SiFlutter, SiMysql, SiNextdotjs, SiPostgresql, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'

type ProjectTechnology = {
  name: string
  Icon: IconType
  color: string
}

type ProjectImage = {
  src: string
  alt: string
}

type ProjectDetails = {
  paragraphs: string[]
  features: string[]
  closingParagraph?: string
}

export type Project = {
  title: string
  role: string
  description: string
  technologies: ProjectTechnology[]
  repository: string
  repositoryLabel: string
  demo?: string
  demoLabel?: string
  art: 'scheduler' | 'dashboard' | 'platform' | 'veripay'
  image?: string
  imageFit?: 'cover' | 'contain'
  images?: ProjectImage[]
  details?: ProjectDetails
}

export const projects: Project[] = [
  {
    title: 'SCHEDLY',
    role: 'Trip Planning Mobile App',
    description: 'A trip-planning mobile app for organizing activities, tracking budgets, and setting departure reminders.',
    technologies: [
      { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8' },
      { name: 'Dart', Icon: SiDart, color: '#0175c2' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ecf8e' },
      { name: 'Provider', Icon: FaLayerGroup, color: '#a78bfa' },
      { name: 'Local Notifications', Icon: FaBell, color: '#f4b942' },
    ],
    repository: 'https://github.com/Bowjj/schedly',
    repositoryLabel: 'Repository',
    demo: 'https://schedly-lake.vercel.app',
    demoLabel: 'Live Demo',
    art: 'scheduler',
    image: '/projects/schedly.png',
    imageFit: 'contain',
    details: {
      paragraphs: [
        'Schedly is a mobile trip planning application I developed using Flutter and Supabase to make organizing and managing trips easier in one place.',
        'The application allows users to create and manage trips by setting their destination, travel dates, and budget. Each trip can be organized using a checklist, while the built-in calendar provides a clear view of upcoming and previous trips.',
        'Schedly also integrates location search powered by OpenStreetMap and the Nominatim API, allowing users to search for destinations and view them through an interactive map. Local notifications are used to remind users before their scheduled trip dates, helping ensure important departures are not missed.',
      ],
      features: [
        'Email authentication with sign up and login',
        'Create, edit, and delete trips',
        'Destination, travel date, and budget management',
        'Location autocomplete',
        'Interactive destination maps',
        'Per-trip checklists',
        'Calendar view with trip markers',
        'Trip history',
        'Local trip reminders and notifications',
      ],
    },
  },
  {
    title: 'METAUNOPB',
    role: 'Running Progress & Personal Record Tracking System',
    description: 'A personal tracking web application for running records, goals, upcoming races, and race statistics.',
    technologies: [
      { name: 'HTML', Icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', Icon: FaCss3Alt, color: '#1572b6' },
      { name: 'PHP', Icon: FaPhp, color: '#777bb4' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
    ],
    repository: 'https://github.com/Bowjj/MetaUnoPb',
    repositoryLabel: 'Repository',
    art: 'dashboard',
    image: '/projects/personal-best-records.png',
    imageFit: 'cover',
    details: {
      paragraphs: [
        'Personal Best Records is a web application I developed to track running progress, personal best records, running goals, and upcoming races.',
        'This was my first-ever web development project and was created primarily as a hands-on learning experience. Through building the application from scratch, I practiced core web development concepts such as user authentication, database management, CRUD operations, debugging, and deploying a web application.',
        'The system allows users to create an account and manage their personal running information through a web-based dashboard. Users can record and update their personal bests, set running goals, manage upcoming races, and view race-related statistics.',
        'The project is still under development, and some features and parts of the interface may continue to change as I improve my web development skills.',
      ],
      features: [
        'User registration and authentication',
        'Personal running record tracking',
        'Running goals',
        'Upcoming race management',
        'Race statistics',
        'Add, edit, and delete records',
        'MySQL database integration',
        'Web-based dashboard',
      ],
    },
  },
  {
    title: 'VERIPAY',
    role: 'Payment Reconciliation & Verification System',
    description: 'A local-first tool that matches payment records with GCash statements by exact reference number and creates annotated Excel outputs.',
    technologies: [
      { name: 'Next.js', Icon: SiNextdotjs, color: '#f0e7e9' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ecf8e' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
      { name: 'ExcelJS', Icon: FaFileExcel, color: '#217346' },
    ],
    repository: 'https://github.com/Bowjj/VeriPay-PaymentReconciliationSystem',
    repositoryLabel: 'Repository',
    art: 'veripay',
    details: {
      paragraphs: [
        'VeriPay is a payment reconciliation and verification system I developed to automate and simplify the process of comparing payment records with GCash transaction statements.',
        'I built VeriPay to solve a repetitive workflow where transactions had to be manually searched, matched, and verified one by one. The system processes Excel-based payment records and multiple GCash transaction statements, automatically matches transactions using exact reference numbers, and identifies records that require further attention.',
        'VeriPay can detect missing or unmatched reference numbers, duplicate transactions, and other records that require manual verification. It also supports CASH and BANK payment handling, matched customer annotations, verification history, and workspace-based organization.',
        'Rather than completely replacing manual verification, VeriPay automates the repetitive parts of the process while providing a structured manual review workflow for transactions that cannot be confidently reconciled automatically.',
        'After verification, the system generates organized Excel outputs, including annotated payment records and individual annotated GCash transaction statements, making the results easier to review, track, and maintain.',
      ],
      features: [
        'Excel (XLSX) payment record and GCash statement import',
        'Support for multiple GCash transaction statements',
        'Exact reference-number reconciliation',
        'Missing and reference-not-found detection',
        'Duplicate reference detection',
        'Manual review workflow for unresolved transactions',
        'CASH and BANK payment handling',
        'Matched customer annotations',
        'Verification history',
        'Annotated Payment Records export',
        'Individual annotated GCash statement exports',
        'Workspace-based organization',
      ],
      closingParagraph: 'VeriPay was developed primarily as a practical tool for my personal workflow and client-related work. It demonstrates my ability to identify a real-world operational problem and build a system that reduces repetitive manual work, improves organization, and makes payment verification more efficient and reliable.',
    },
    images: [
      { src: '/projects/veripay-dashboard.png', alt: 'VeriPay dashboard showing recent verification runs' },
      { src: '/projects/veripay-history.png', alt: 'VeriPay history view showing payment review results' },
      { src: '/projects/veripay-excel-export.png', alt: 'Annotated VeriPay payment workbook export' },
    ],
  },
]
