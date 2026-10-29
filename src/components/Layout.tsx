import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/syllabus', label: 'Syllabus' },
  { to: '/reviewer', label: 'Canonical Reviewer' },
  { to: '/essay-questions', label: 'Possible Essay Exam Questions' },
  { to: '/theory-synthesis', label: 'Theory Synthesis' },
  { to: '/connections', label: 'Concept Connections' },
  { to: '/essay', label: 'Essay Practice' },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the collapsed menu after navigating
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="logo">PA 111 Exam Reviewer</Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav-list"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <ul id="main-nav-list" className={menuOpen ? 'nav-list open' : 'nav-list'}>
            {NAV_ITEMS.map(item => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={({isActive})=>isActive?'nav-link active':'nav-link'}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="footer"><div className="container"><p>PA 111 Exam Reviewer</p></div></footer>
    </div>
  )
}

export default Layout
