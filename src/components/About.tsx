import { FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJs, FaPhp, FaReact } from 'react-icons/fa6'
import { SiCisco, SiExpo, SiFigma, SiFlutter, SiMysql, SiPostgresql, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'

type Skill = {
  name: string
  Icon: IconType
  color: string
}

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', Icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', Icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'React', Icon: FaReact, color: '#61dafb' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'React Native', Icon: FaReact, color: '#61dafb' },
      { name: 'Expo', Icon: SiExpo, color: '#a5b4fc' },
      { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', Icon: FaPhp, color: '#777bb4' },
      { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ecf8e' },
    ],
  },
  {
    category: 'Tools & Integrations',
    skills: [
      { name: 'Git', Icon: FaGitAlt, color: '#f05032' },
      { name: 'Docker', Icon: FaDocker, color: '#2496ed' },
      { name: 'Cisco Packet Tracer', Icon: SiCisco, color: '#1ba0d7' },
    ],
  },
]

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-copy reveal-on-scroll">
        <p className="section-label">ABOUT ME</p>
        <h2>Hello, I&apos;m <span>Job Tantay</span></h2>
        <p> I&apos;m a Bachelor of Science in Information Technology student at the University of San Carlos with a strong ambition to become a software developer. I&apos;m driven by curiosity and a genuine desire to learn as much as I can. Whether it&apos;s exploring new programming languages, technologies, or ways of solving problems, I&apos;m always ready to learn and step outside my comfort zone. I believe in giving my best to every project, learning from every challenge, and continuously becoming better at what I do. </p>
        <div className="about-actions">
          <a className="button button-primary" href="/Job_Tantay_CV.pdf" download>Download CV <span>↓</span></a>
          <a className="text-link" href="#projects">View Projects <span>→</span></a>
        </div>
      </div>
      <div className="profile-wrap reveal-on-scroll">
        <div className="profile-glow" />
        <div className="profile-image">
          <img src="/profile.jpg" alt="Job Tantay" onError={(event) => { event.currentTarget.hidden = true }} />
          <div className="profile-placeholder" aria-hidden="true"><span>JT</span><small>developer / student</small></div>
        </div>
        <div className="profile-socials" aria-label="Social profiles">
          <a href="https://www.facebook.com/job.tantay" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>
          </a>
          <a href="https://www.instagram.com/bowjjjj/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="social-fill" /></svg>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jobinskic@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
          </a>
          <a href="https://github.com/Bowjj" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1a9.7 9.7 0 0 1 5 0c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/job-tantay-bb8185434/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5V8.5ZM4.8 3A2 2 0 1 0 4.8 7a2 2 0 0 0 0-4ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.7H9.1V21h3.5v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21H21v-7.2Z" /></svg>
          </a>
        </div>
      </div>
      <div className="tech-stack reveal-on-scroll">
        <p className="section-label">TECH STACK</p>
        <div className="stack-groups">
          {skillGroups.map(({ category, skills }) => (
            <section className="stack-group" key={category} aria-labelledby={`stack-${category}`}>
              <h3 id={`stack-${category}`} className="stack-heading">{category}</h3>
              <ul className="tech-grid">
                {skills.map(({ name, Icon, color }) => (
                  <li key={name}>
                    <div className="tech-card">
                      <Icon aria-hidden="true" style={{ color }} />
                      <span>{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
