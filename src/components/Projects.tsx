import { projects, type Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal-on-scroll">
      <div className={`project-art ${project.art}`} aria-hidden="true">
        <img className={`project-screenshot ${project.imageFit}`} src={project.image} alt="" onError={(event) => { event.currentTarget.hidden = true }} />
        <div className="art-window"><i /><i /><i /><span /></div>
        <div className="art-shape one" /><div className="art-shape two" /><div className="art-shape three" />
      </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p className="project-role">{project.role}</p>
          <p className="project-ai-note">Leveraged AI-assisted workflows to improve development efficiency and iteration.</p>
          <p>{project.description}</p>
        <div className="project-techs">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noreferrer">{project.repositoryLabel} <span>↗</span></a>
          {project.demo && project.demoLabel && <a href={project.demo} target={project.demo.startsWith('#') ? undefined : '_blank'} rel={project.demo.startsWith('#') ? undefined : 'noreferrer'}>{project.demoLabel} <span>↗</span></a>}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading reveal-on-scroll">
        <p className="section-label">SELECTED WORK</p>
        <h2>Featured <span>Projects</span></h2>
      </div>
      <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    </section>
  )
}
