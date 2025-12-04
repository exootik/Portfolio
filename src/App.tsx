// src/App.tsx
import { useEffect, useState } from 'react'
import './index2.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Timeline from './pages/Timeline'

import bgImage from './assets/images/imgBg.png'

export default function App() {
  const [page, setPage] = useState<'home' | 'projects' | 'timeline'>('home')

  const goTo = (target: 'home' | 'projects' | 'timeline') => {
    setPage(target)
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const ids: Array<'home' | 'projects' | 'timeline'> = ['home','projects','timeline']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id) {
        const id = visible.target.id as 'home'|'projects'|'timeline'
        setPage(id)
      } else {
        for (const el of els) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            setPage(el.id as 'home'|'projects'|'timeline')
            break
          }
        }
      }
    }, { threshold: [0.15, 0.35, 0.6], root: null, rootMargin: '-20% 0px -20% 0px' })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.title = page === 'home' ? 'Simon - Accueil' : page === 'projects' ? 'Simon - Projets' : 'Simon - Parcours'
  }, [page])

  useEffect(() => {
    const prev = document.body.style.backgroundImage
    document.body.style.backgroundImage = `linear-gradient(180deg, rgba(11,12,15,0.65), rgba(15,17,21,0.65)), url(${bgImage})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center center'
    document.body.style.backgroundAttachment = 'fixed'
    return () => {
      document.body.style.backgroundImage = prev
    }
  }, [])

  return (
    <div className="container">
      <Header page={page} setPage={goTo} />

      <main>
        <section id="home" tabIndex={-1}><Home /></section>
        <section id="projects" tabIndex={-1}><Projects /></section>
        <section id="timeline" tabIndex={-1}><Timeline /></section>
      </main>

      <Footer />
    </div>
  )
}
