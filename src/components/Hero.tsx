import { CodeVisual } from './CodeVisual'

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <div className="badges reveal hero-badges">
          <span>CODE</span><span>CREATIVITY</span><span>PURPOSE</span>
        </div>
        <h1 className="reveal">From<br /> <span>THOUGHT</span><br />To <span>CREATION.</span></h1>
        <p className="hero-description reveal">I turn ideas into clean, functional digital experiences through code, creativity, and continuous learning.</p>
        <div className="hero-actions reveal">
          <a className="button button-primary" href="#projects">View Projects <span>↗</span></a>
          <a className="button button-secondary" href="#about">About Me</a>
        </div>
        <p className="availability reveal"><i /> Available for internship opportunities</p>
      </div>
      <div className="hero-code reveal"><CodeVisual /></div>
    </section>
  )
}
