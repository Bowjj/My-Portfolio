import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

type Theme = 'dark' | 'light'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section[id]')
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible[0]) setActiveSection(visible[0].target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 })
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    sections.forEach((section) => sectionObserver.observe(section))
    revealItems.forEach((item) => revealObserver.observe(item))
    return () => { sectionObserver.disconnect(); revealObserver.disconnect() }
  }, [])

  return <><Navbar activeSection={activeSection} theme={theme} onThemeChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main><Hero /><About /><Projects /><Contact /></main><Footer /></>
}

export default App
