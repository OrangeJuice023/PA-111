import { Link } from 'react-router-dom'
import './Syllabus.css'

function Syllabus() {
  return (
    <div className="syllabus">
      <div className="container">
        <header className="page-header">
          <h1>Syllabus</h1>
        </header>
        <ul>
          <li><Link to="/topics/t1-1">The Management Discipline and Early Contributions</Link></li>
          <li><Link to="/topics/t2a-1">Scientific Management: Taylor, Gantt, Gilbreth</Link></li>
          <li><Link to="/topics/t2a-2">Fayol, Urwick, Weber - Principles and Bureaucracy</Link></li>
          <li><Link to="/topics/t2b-1">Hawthorne Studies and Human Relations</Link></li>
          <li><Link to="/topics/t2b-2">Motivation Theories</Link></li>
          <li><Link to="/topics/t3-1">Metaphors of Organization</Link></li>
          <li><Link to="/topics/t4-1">Functions of Administration</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Syllabus
