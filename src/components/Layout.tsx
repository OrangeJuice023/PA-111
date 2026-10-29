import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './Layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/syllabus', label: 'Syllabus' },
  { to: '/reviewer', label: 'Canonical Reviewer' },
  { to: '/essay-questions', label: 'Possible Essay Exam Questions' },
  { to: '/connections', label: 'Concept Connections' },
  { to: '/essay', label: 'Essay Practice' },
]

// Pages left out of the nav that can still be found through the search bar
const HIDDEN_PAGES = [
  { to: '/theory-synthesis', label: 'Theory Synthesis' },
]

const SEARCH_PAGES = [...NAV_ITEMS, ...HIDDEN_PAGES]

function searchPages(query: string) {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  return SEARCH_PAGES.filter(page => page.label.toLowerCase().includes(q))
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const results = searchPages(query)

  // Close the collapsed menu and clear the search after navigating
  useEffect(() => { setMenuOpen(false); setQuery('') }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) navigate(results[0].to)
  }

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="logo">PA 111 Exam Reviewer</Link>
          <form className="nav-search" role="search" onSubmit={onSearchSubmit}>
            <input
              type="search"
              className="nav-search-input"
              placeholder="Search pages…"
              aria-label="Search pages"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => { if (e.key === 'Escape') setQuery('') }}
            />
            {query.trim().length >= 2 && (
              <ul className="nav-search-results">
                {results.length > 0 ? results.map(page => (
                  <li key={page.to}><Link to={page.to}>{page.label}</Link></li>
                )) : <li className="nav-search-empty">No matching page</li>}
              </ul>
            )}
          </form>
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
