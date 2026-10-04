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
  sections?: { heading: string; paragraphs: string[] }[]
  features: string[]
  closingHeading?: string
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
    description: 'A client-based system built from real-world requirements that automates payment reconciliation by matching payment records with GCash statements and generating organized, annotated Excel outputs.',
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
        'VeriPay is a client-based payment reconciliation and verification system developed according to specific requirements provided by the client. The system was designed to improve an existing workflow for comparing payment records with GCash transaction statements.',
      ],
      sections: [
        {
          heading: 'The Problem',
          paragraphs: [
            "The client's verification process involved manually searching, matching, and checking transactions one by one across payment records and multiple GCash statements. This repetitive process required significant manual effort and made it difficult to efficiently identify missing references, duplicate transactions, and records requiring further review.",
          ],
        },
        {
          heading: 'The Solution',
          paragraphs: [
            'I developed VeriPay to automate the repetitive parts of this workflow while preserving manual verification where human review is still necessary.',
            'The system processes Excel-based payment records alongside multiple GCash transaction statements and automatically reconciles transactions using exact reference numbers. It identifies successfully matched transactions as well as missing references, unmatched records, duplicates, and other transactions that require manual verification.',
            'For cases that cannot be confidently reconciled automatically, VeriPay provides a structured manual review workflow instead of forcing an automatic match.',
            'Once verification is complete, the system generates organized and annotated Excel outputs for both the payment records and individual GCash statements, making the results easier to review, track, and maintain.',
          ],
        },
      ],
      features: [
        'Excel (XLSX) payment record and GCash statement import',
        'Multiple GCash statement processing',
        'Exact reference-number reconciliation',
        'Missing and unmatched reference detection',
        'Duplicate transaction detection',
        'Manual review workflow for unresolved transactions',
        'CASH and BANK payment handling',
        'Matched customer annotations',
        'Verification history',
        'Annotated payment record exports',
        'Individual annotated GCash statement exports',
        'Workspace-based organization',
      ],
      closingHeading: 'Project Outcome',
      closingParagraph: 'VeriPay transformed the client\'s repetitive payment verification workflow into a more structured and automated process. The project demonstrates my ability to understand client requirements, analyze an existing workflow, translate those requirements into system functionality, and develop a practical solution for a real-world operational problem.',
    },
    images: [
      { src: '/projects/veripay-dashboard.png', alt: 'VeriPay dashboard showing recent verification runs' },
      { src: '/projects/veripay-history.png', alt: 'VeriPay history view showing payment review results' },
      { src: '/projects/veripay-excel-export.png', alt: 'Annotated VeriPay payment workbook export' },
    ],
  },
]
