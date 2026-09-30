import { FaBell, FaCss3Alt, FaHtml5, FaLayerGroup, FaPhp, FaReact } from 'react-icons/fa6'
import { SiDart, SiFlutter, SiMysql, SiSupabase, SiTypescript, SiVite } from 'react-icons/si'
import type { IconType } from 'react-icons'

type ProjectTechnology = {
  name: string
  Icon: IconType
  color: string
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
  art: 'scheduler' | 'dashboard' | 'platform'
  image: string
  imageFit: 'cover' | 'contain'
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
  },
  {
    title: 'PBrunner',
    role: 'Running Tracker Web App',
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
  },
  {
    title: 'PORTFOLIO',
    role: 'Personal Portfolio Website',
    description: 'A responsive single-page portfolio built to showcase my projects, technical skills, CV, and professional links.',
    technologies: [
      { name: 'React', Icon: FaReact, color: '#61dafb' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'CSS', Icon: FaCss3Alt, color: '#1572b6' },
      { name: 'Vite', Icon: SiVite, color: '#a78bfa' },
    ],
    repository: 'https://github.com/Bowjj',
    repositoryLabel: 'GitHub Profile',
    demo: '#home',
    demoLabel: 'Current Website',
    art: 'platform',
    image: '/projects/portfolio-website.png',
    imageFit: 'cover',
  },
]
