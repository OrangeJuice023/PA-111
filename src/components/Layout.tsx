import { Link, NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <Link to="/" className="logo">PA 111 Exam Reviewer</Link>
          <ul className="nav-list">
            <li><NavLink to="/" end className={({isActive})=>isActive?'nav-link active':'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/syllabus" className={({isActive})=>isActive?'nav-link active':'nav-link'}>Syllabus</NavLink></li>
            <li><NavLink to="/reviewer" className={({isActive})=>isActive?'nav-link active':'nav-link'}>Canonical Reviewer</NavLink></li>
            <li><NavLink to="/essay-questions" className={({isActive})=>isActive?'nav-link active':'nav-link'}>Possible Essay Exam Questions</NavLink></li>
            <li><NavLink to="/connections" className={({isActive})=>isActive?'nav-link active':'nav-link'}>Concept Connections</NavLink></li>
            <li><NavLink to="/essay" className={({isActive})=>isActive?'nav-link active':'nav-link'}>Essay Practice</NavLink></li>
          </ul>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="footer"><div className="container"><p>PA 111 Exam Reviewer</p></div></footer>
    </div>
  )
}

export default Layout
