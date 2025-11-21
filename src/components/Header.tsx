import { useEffect, useRef, useState } from 'react'

type Props = {
  page: 'home' | 'projects' | 'timeline'
  setPage: (p: 'home'|'projects'|'timeline') => void
}

export default function Header({ page, setPage }: Props) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY.current

          // Toujours afficher en haut de page
          if (currentY <= 60) {
            setVisible(true)
          } else if (delta > 8) {
            // scroll down -> cacher
            setVisible(false)
          } else if (delta < -8) {
            // scroll up -> montrer
            setVisible(true)
          }

          lastY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onFocusIn(e: FocusEvent) {
      if (headerRef.current && headerRef.current.contains(e.target as Node)) {
        setVisible(true)
      }
    }
    window.addEventListener('focusin', onFocusIn)
    return () => window.removeEventListener('focusin', onFocusIn)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`header ${visible ? 'visible' : 'hidden'}`}
      aria-hidden={false}
    >
      <div className="logo">Simon - Game Dev</div>
      <nav>
        <button className={`navbtn ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>Accueil</button>
        <button className={`navbtn ${page === 'projects' ? 'active' : ''}`} onClick={() => setPage('projects')}>Projets</button>
        <button className={`navbtn ${page === 'timeline' ? 'active' : ''}`} onClick={() => setPage('timeline')}>Parcours</button>
      </nav>
    </header>
  )
}
