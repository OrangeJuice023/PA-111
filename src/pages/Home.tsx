import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>PA 111 Exam Reviewer</h1>
          <p className="hero-subtitle">Syllabus-aligned reviewer for Public Administration 111.</p>
          <div className="hero-actions">
            <Link to="/syllabus">View Syllabus</Link>
            <Link to="/essay">Essay Practice</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
