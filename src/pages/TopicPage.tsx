import { getTopicById } from '@/data/content'
import { useParams, Link } from 'react-router-dom'
import './TopicPage.css'

function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = topicId ? getTopicById(topicId) : undefined

  if (!topic) {
    return (
      <div className="container">
        <div className="not-found-topic">
          <h1>Topic Not Found</h1>
          <p>The requested topic could not be found.</p>
          <Link to="/syllabus" className="btn btn-primary">Back to Syllabus</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="topic-page">
      <div className="container">
        <header className="topic-header">
          <nav className="breadcrumb">
            <Link to="/syllabus">Syllabus</Link> / <span>{topic.division}</span> / <span>{topic.title}</span>
          </nav>
          <h1>{topic.title}</h1>
        </header>
      </div>
    </div>
  )
}

export default TopicPage
