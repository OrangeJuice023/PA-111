import { Link, NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <Link to="/" className="logo">
            PA 111 Exam Reviewer
          </Link>
          <button className="nav-toggle" aria-label="Toggle navigation">
            ☰
          </button>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/syllabus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Syllabus
              </NavLink>
            </li>
            <li>
              <NavLink to="/connections" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Concept Connections
              </NavLink>
            </li>
            <li>
              <NavLink to="/essay" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Essay Practice
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} PA 111 Exam Reviewer. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
