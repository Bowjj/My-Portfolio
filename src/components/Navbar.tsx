type NavbarProps = {
  activeSection: string
  theme: 'dark' | 'light'
  onThemeChange: () => void
}

const links = [
  ['about', 'About Me'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
] as const

export function Navbar({ activeSection, theme, onThemeChange }: NavbarProps) {
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
        <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'light'}>
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 15.8A8.5 8.5 0 0 1 8.2 3.4 8.5 8.5 0 1 0 20.6 15.8Z" /></svg>
          )}
        </button>
      </nav>
    </header>
  )
}
