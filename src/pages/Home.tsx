import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>PA 111 Exam Reviewer</h1>
          <p className="hero-subtitle">Syllabus-aligned reviewer for Management of Organizations. Focused on application, comparison, and essay preparation.</p>
          <div className="hero-actions">
            <Link to="/syllabus" className="btn btn-primary">View Syllabus</Link>
            <Link to="/essay-questions" className="btn btn-primary">Possible Essay Exam Questions</Link>
            <Link to="/connections" className="btn btn-secondary">Concept Connections</Link>
            <Link to="/essay" className="btn btn-secondary">Essay Practice</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
