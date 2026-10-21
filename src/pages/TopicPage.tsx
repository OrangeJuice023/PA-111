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
          <p className="topic-division">{topic.division}</p>
          <p className="topic-overview-text">{topic.overview}</p>
        </header>

        {topic.keyConcepts && topic.keyConcepts.length > 0 && (
          <section className="section">
            <h2>Key Concepts</h2>
            <div className="concepts-grid">
              {topic.keyConcepts.map((c: any, i: number) => (
                <div key={i} className="concept-card">
                  <h3>{c.name}</h3>
                  {c.definition && <p><strong>Definition:</strong> {c.definition}</p>}
                  {c.explanation && <p>{c.explanation}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {topic.applications && topic.applications.length > 0 && (
          <section className="section">
            <h2>Applications</h2>
            <ul className="applications-list">
              {topic.applications.map((a: string, i: number) => <li key={i}>{a}</li>)}
            </ul>
          </section>
        )}

        {topic.examples && topic.examples.length > 0 && (
          <section className="section">
            <h2>Examples</h2>
            <ul className="examples-list">
              {topic.examples.map((e: string, i: number) => <li key={i}>{e}</li>)}
            </ul>
          </section>
        )}

        {topic.comparisons && topic.comparisons.length > 0 && (
          <section className="section">
            <h2>Comparisons</h2>
            {topic.comparisons.map((comp: any, i: number) => (
              <div key={i} className="comparison-card">
                <h3>{comp.title}</h3>
                <div><strong>{comp.a}</strong> vs <strong>{comp.b}</strong></div>
                <ul>{comp.points?.map((p: string, j: number) => <li key={j}>{p}</li>)}</ul>
              </div>
            ))}
          </section>
        )}

        <section className="section">\n          <h2>Sources</h2>\n          <p>{Array.isArray(topic.sources) ? (topic.sources as any[]).map((s:any) => s.key + (s.page ? ' ' + s.page : '')).join(', ') : ''}</p>\n        </section>\n\n        <div className="topic-nav">
          <Link to="/syllabus" className="btn btn-secondary">Back to Syllabus</Link>
          <Link to="/essay-questions" className="btn btn-primary">Practice Questions</Link>
        </div>
      </div>
    </div>
  )
}

export default TopicPage


