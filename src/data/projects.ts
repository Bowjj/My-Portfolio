export type Project = {
  title: string
  role: string
  description: string
  technologies: string[]
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
    title: 'Schedly',
    role: 'Full-stack developer',
    description: 'A trip-planning mobile app for organizing activities, tracking budgets, and setting departure reminders.',
    technologies: ['Flutter', 'Supabase', 'Auth', 'OpenStreetMap'],
    repository: 'https://github.com/Bowjj/schedly',
    repositoryLabel: 'Repository',
    demo: 'https://schedly-lake.vercel.app',
    demoLabel: 'Live Demo',
    art: 'scheduler',
    image: '/projects/schedly.png',
    imageFit: 'contain',
  },
  {
    title: 'Personal Best Records',
    role: 'Full-stack developer, solo project',
    description: 'A personal tracking web application for running records, goals, upcoming races, and race statistics.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'CRUD', 'Authentication'],
    repository: 'https://github.com/Bowjj/MetaUnoPb',
    repositoryLabel: 'Repository',
    art: 'dashboard',
    image: '/projects/personal-best-records.png',
    imageFit: 'cover',
  },
  {
    title: 'Personal Portfolio Website',
    role: 'Frontend developer',
    description: 'A responsive single-page portfolio built to showcase my projects, technical skills, CV, and professional links.',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    repository: 'https://github.com/Bowjj',
    repositoryLabel: 'GitHub Profile',
    demo: '#home',
    demoLabel: 'Current Website',
    art: 'platform',
    image: '/projects/portfolio-website.png',
    imageFit: 'cover',
  },
]
