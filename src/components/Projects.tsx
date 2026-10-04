import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { projects, type Project } from '../data/projects'

function ProjectDetailCopy({ project }: { project: Project }) {
  if (!project.details) return <p>{project.description}</p>

  return <div className="project-detail-copy">
    {project.details.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {project.details.sections?.map((section) => <div key={section.heading}><h5>{section.heading}</h5>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}
    <h5>Key Features</h5>
    <ul>{project.details.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    {project.details.closingHeading && <h5>{project.details.closingHeading}</h5>}
    {project.details.closingParagraph && <p>{project.details.closingParagraph}</p>}
  </div>
}

function ProjectCard({ project }: { project: Project }) {
  const images = project.images ?? (project.image ? [{ src: project.image, alt: `${project.title} project screenshot` }] : [])
  const [activeImage, setActiveImage] = useState(0)
  const [imageDirection, setImageDirection] = useState<'next' | 'previous'>('next')
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const currentImage = images[activeImage]
  const hasGallery = images.length > 1

  function openDetails() {
    setIsDetailsOpen(true)
  }

  function showImage(index: number, direction: 'next' | 'previous') {
    setImageDirection(direction)
    setActiveImage(index)
  }

  function showNextImage() {
    setImageDirection('next')
    setActiveImage((current) => (current + 1) % images.length)
  }

  function showPreviousImage() {
    setImageDirection('previous')
    setActiveImage((current) => (current - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!isDetailsOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDetailsOpen(false)
      if (hasGallery && event.key === 'ArrowRight') {
        setImageDirection('next')
        setActiveImage((current) => (current + 1) % images.length)
      }
      if (hasGallery && event.key === 'ArrowLeft') {
        setImageDirection('previous')
        setActiveImage((current) => (current - 1 + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasGallery, images.length, isDetailsOpen])

  useEffect(() => {
    if (!isDetailsOpen) return
    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousRootOverflow
    }
  }, [isDetailsOpen])

  return (
    <>
    <article className="project-card reveal-on-scroll" tabIndex={0} aria-label={`Open ${project.title} project details`} aria-haspopup="dialog" onClick={openDetails} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openDetails() } }}>
      <div className={`project-art ${project.art}`}>
        {currentImage && <img className={`project-screenshot ${project.imageFit ?? 'cover'}`} src={currentImage.src} alt={currentImage.alt} onError={(event) => { event.currentTarget.hidden = true }} />}
        <div className="project-art-fallback" aria-hidden="true"><div className="art-window"><i /><i /><i /><span /></div><div className="art-shape one" /><div className="art-shape two" /><div className="art-shape three" /></div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.description}</p>
        <div className="project-techs" aria-label="Technologies used">{project.technologies.map(({ name, Icon, color }) => <span className="project-tech-icon" key={name} title={name} aria-label={name}><Icon aria-hidden="true" style={{ color }} /><small>{name}</small></span>)}</div>
        <div className="project-links" onClick={(event) => event.stopPropagation()}>
          <a className="project-action project-action-secondary" href={project.repository} target="_blank" rel="noreferrer">{project.repositoryLabel} <span>↗</span></a>
          {project.demo && project.demoLabel && <a className="project-action project-action-primary" href={project.demo} target={project.demo.startsWith('#') ? undefined : '_blank'} rel={project.demo.startsWith('#') ? undefined : 'noreferrer'}>{project.demoLabel} <span>↗</span></a>}
        </div>
      </div>
    </article>
      {isDetailsOpen && createPortal(<div className="project-detail-overlay" role="dialog" aria-modal="true" aria-label={`${project.title} project details`} onClick={(event) => { if (event.target === event.currentTarget) setIsDetailsOpen(false) }}>
        <div className="project-detail-panel">
          <header className="project-detail-header"><div><p>PROJECT PREVIEW</p><h3>{project.title}</h3></div><button className="project-detail-close" type="button" onClick={() => setIsDetailsOpen(false)} aria-label="Close project details" autoFocus>×</button></header>
          <div className="project-detail-body">
            <div className="project-detail-gallery">
              {currentImage ? <img className={`project-detail-image ${imageDirection}`} key={currentImage.src} src={currentImage.src} alt={currentImage.alt} /> : <div className={`project-detail-fallback ${project.art}`}><div className="art-window"><i /><i /><i /><span /></div><div className="art-shape one" /><div className="art-shape two" /><div className="art-shape three" /></div>}
              {hasGallery && <><button className="project-detail-control previous" type="button" onClick={showPreviousImage} aria-label="Previous screenshot"><FaChevronLeft aria-hidden="true" /></button><button className="project-detail-control next" type="button" onClick={showNextImage} aria-label="Next screenshot"><FaChevronRight aria-hidden="true" /></button><div className="project-detail-dots" aria-label={`Screenshot ${activeImage + 1} of ${images.length}`}>{images.map((image, index) => <button className={index === activeImage ? 'active' : ''} type="button" key={image.src} onClick={() => showImage(index, index > activeImage ? 'next' : 'previous')} aria-label={`Show screenshot ${index + 1}`} aria-current={index === activeImage ? 'true' : undefined} />)}</div></>}
            </div>
            <aside className="project-detail-info"><p className="project-role">{project.role}</p><h4>{project.title}</h4><ProjectDetailCopy project={project} /><div className="project-techs" aria-label="Technologies used">{project.technologies.map(({ name, Icon, color }) => <span className="project-tech-icon" key={name} title={name} aria-label={name}><Icon aria-hidden="true" style={{ color }} /><small>{name}</small></span>)}</div><div className="project-links"><a className="project-action project-action-secondary" href={project.repository} target="_blank" rel="noreferrer">{project.repositoryLabel} <span>↗</span></a>{project.demo && project.demoLabel && <a className="project-action project-action-primary" href={project.demo} target={project.demo.startsWith('#') ? undefined : '_blank'} rel={project.demo.startsWith('#') ? undefined : 'noreferrer'}>{project.demoLabel} <span>↗</span></a>}</div></aside>
          </div>
        </div>
      </div>, document.body)}
    </>
  )
}

export function Projects() {
  const orderedProjects = [...projects].sort((first, second) => {
    if (first.title === 'VERIPAY') return -1
    if (second.title === 'VERIPAY') return 1
    return 0
  })
  return <section id="projects" className="section projects-section"><div className="section-heading reveal-on-scroll"><p className="section-label">SELECTED WORK</p><h2>Featured <span>Projects</span></h2></div><div className="projects-grid">{orderedProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>
}
