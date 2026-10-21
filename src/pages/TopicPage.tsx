import { getTopicById } from '@/data/content'
import { useParams, Link } from 'react-router-dom'
import './TopicPage.css'

export default function TopicPage() {
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

  // Map topicId to relevant reviewer anchor
  const reviewerAnchorMap: Record<string, string> = {
    't1-1': 'division-i--history-of-administration',
    't2a-1': 'a3-frederick-winslow-taylor-scientific-management',
    't2a-2': 'a7-henri-fayol-administrative-management-and-general-principles',
    't2b-1': 'b2-george-elton-mayo-and-the-hawthorne-studies',
    't2b-2': 'b3-abraham-maslow-hierarchy-of-human-needs',
    't3-1': 'division-iii--metaphors-of-organization',
    't4-1': 'division-iv--functions-of-administration',
  }

  const reviewerAnchor = topicId ? reviewerAnchorMap[topicId] || 'division-i--history-of-administration' : ''

  return (
    <div className="topic-page">
      <div className="container">
        <header className="topic-header">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/syllabus">Syllabus</Link> &bull; <span>{topic.division}</span>
          </nav>
          <h1>{topic.title}</h1>
          <div className="topic-header-meta">
            <span className="division-badge">{topic.division}</span>
            <span className="confidence-badge">Confidence: {topic.confidence}</span>
            <Link to={`/reviewer#${reviewerAnchor}`} className="btn-reviewer-highlight">
              📖 Read Complete Chapter in Canonical Reviewer &rarr;
            </Link>
          </div>
          <p className="topic-overview-text">{topic.overview}</p>
        </header>

        {/* Definitions */}
        {topic.definitions && topic.definitions.length > 0 && (
          <section className="section definitions-section">
            <h2>Formal Definitions</h2>
            <div className="definitions-grid">
              {topic.definitions.map((d: any, i: number) => (
                <div key={i} className="definition-card">
                  <span className="term">{d.term}</span>
                  <p className="def-body">{d.definition}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Concepts */}
        {topic.keyConcepts && topic.keyConcepts.length > 0 && (
          <section className="section">
            <h2>Key Concepts & Theoretical Mechanics</h2>
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

        {/* Assumptions, Strengths, Limitations */}
        <div className="analysis-grid">
          {topic.assumptions && topic.assumptions.length > 0 && (
            <div className="analysis-card assumptions">
              <h3>Underlying Assumptions</h3>
              <ul>
                {topic.assumptions.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {topic.strengths && topic.strengths.length > 0 && (
            <div className="analysis-card strengths">
              <h3>Strengths & Contributions</h3>
              <ul>
                {topic.strengths.map((s: string, i: number) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {topic.limitations && topic.limitations.length > 0 && (
            <div className="analysis-card limitations">
              <h3>Critical Limitations & Dysfunctions</h3>
              <ul>
                {topic.limitations.map((l: string, i: number) => <li key={i}>{l}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Applications */}
        {topic.applications && topic.applications.length > 0 && (
          <section className="section">
            <h2>Administrative Applications</h2>
            <ul className="applications-list">
              {topic.applications.map((a: string, i: number) => <li key={i}>{a}</li>)}
            </ul>
          </section>
        )}

        {/* Examples */}
        {topic.examples && topic.examples.length > 0 && (
          <section className="section">
            <h2>Concrete Historical & Practical Examples</h2>
            <ul className="examples-list">
              {topic.examples.map((e: string, i: number) => <li key={i}>{e}</li>)}
            </ul>
          </section>
        )}

        {/* Comparisons */}
        {topic.comparisons && topic.comparisons.length > 0 && (
          <section className="section">
            <h2>Theoretical Comparisons</h2>
            <div className="comparisons-grid">
              {topic.comparisons.map((comp: any, i: number) => (
                <div key={i} className="comparison-card">
                  <h3>{comp.title}</h3>
                  <div className="comp-versus"><strong>{comp.a}</strong> <em>versus</em> <strong>{comp.b}</strong></div>
                  <ul>{comp.points?.map((p: string, j: number) => <li key={j}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Notes */}
        {topic.notes && topic.notes.length > 0 && (
          <section className="section notes-section">
            <h2>Classroom & Senior Notes</h2>
            <ul className="notes-list">
              {topic.notes.map((n: string, i: number) => <li key={i}>{n}</li>)}
            </ul>
          </section>
        )}

        {/* Sources */}
        <section className="section sources-section">
          <h2>Verified Source References</h2>
          <p className="sources-text">
            {Array.isArray(topic.sources) 
              ? (topic.sources as any[]).map((s: any) => s.key + (s.page ? ` (${s.page})` : '')).join(' • ') 
              : 'Course Materials'}
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="topic-nav">
          <Link to="/syllabus" className="btn btn-secondary">&larr; Back to Syllabus</Link>
          <Link to={`/reviewer#${reviewerAnchor}`} className="btn btn-outline">Read in Reviewer</Link>
          <Link to="/essay-questions" className="btn btn-primary">Practice Exam Questions &rarr;</Link>
        </div>
      </div>
    </div>
  )
}
