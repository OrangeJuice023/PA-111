import { Link } from 'react-router-dom'
import './Syllabus.css'

function Syllabus() {
  return (
    <div className="syllabus">
      <div className="container">
        <header className="page-header">
          <h1>Syllabus</h1>
        </header>
        <Link to="/topics/t1-1">The Management Discipline</Link>
      </div>
    </div>
  )
}

export default Syllabus
