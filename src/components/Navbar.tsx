type NavbarProps = {
  activeSection: string
}

const links = [
  ['about', 'About Me'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
] as const

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className={`brand ${activeSection === 'home' ? 'active' : ''}`} href="#home" aria-label="Job Tantay, home">
          JOB <span>TANTAY,</span>
        </a>
        <div className="nav-links">
          {links.map(([id, label]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
