import { Link } from 'react-router-dom'
import './ConceptConnections.css'

function ConceptConnections() {
  return (
    <div className="connections">
      <div className="container">
        <header className="page-header">
          <h1>Concept Connections</h1>
          <p>
            How theories relate across schools without conflating them. Use these connections to compare and weave ideas in essays.
          </p>
        </header>

        <section className="connections-section">
          <div className="card">
            <h2>Classical → Human Relations</h2>
            <ul>
              <li><strong>Taylor & Gilbreth</strong> focus on efficiency and the one best way; <strong>Hawthorne/Mayo</strong> show social factors matter.</li>
              <li><strong>Gantt</strong> bridges: task-and-bonus with human development vs Taylor's drive approach.</li>
              <li><strong>Argyris</strong> argues restrictive structures (job specialization, tight control) conflict with mature adult personalities.</li>
            </ul>
          </div>

          <div className="card">
            <h2>Classical → Modern Systems</h2>
            <ul>
              <li><strong>Metcalfe</strong> (records) anticipates systems thinking's emphasis on information.</li>
              <li><strong>Weber</strong> bureaucracy is a formal structure; systems view sees interdependence and feedback.</li>
              <li><strong>Fayol</strong> coordination aligns with subsystems needing alignment.</li>
            </ul>
          </div>

          <div className="card">
            <h2>Motivation Theories Comparison</h2>
            <ul>
              <li><strong>Maslow</strong> - Hierarchy of needs (deficit → growth)</li>
              <li><strong>Herzberg</strong> - Hygiene vs motivators (dissatisfiers vs satisfiers)</li>
              <li><strong>McGregor</strong> - Theory X/Y assumptions shape management style</li>
              <li><strong>ERG (Alderfer)</strong> - Existence/Relatedness/Growth; allows frustration-regression</li>
              <li><strong>McClelland</strong> - Need for Achievement/Power/Affiliation</li>
              <li><strong>Equity (Adams)</strong> - Fairness relative to others</li>
              <li><strong>Expectancy (Vroom)</strong> - Effort→Performance→Outcome expectations</li>
              <li><strong>Goal-Setting (Locke/Latham)</strong> - Specific, challenging goals + feedback</li>
              <li><strong>Reinforcement (Skinner)</strong> - Behavior shaped by consequences</li>
            </ul>
          </div>

          <div className="card">
            <h2>Metaphors in Analysis</h2>
            <p>Use multiple metaphors together to avoid blind spots:</p>
            <ul>
              <li><strong>Machine</strong> - Structure, rules, efficiency (Classical)</li>
              <li><strong>Organism</strong> - Environment, adaptation, survival (Systems/Contingency)</li>
              <li><strong>Brain</strong> - Learning, information, feedback</li>
              <li><strong>Political</strong> - Power, interests, conflict</li>
              <li><strong>Cultural</strong> - Values, norms, identity</li>
            </ul>
            <p className="note-text">See <Link to="/syllabus">Syllabus</Link> for full metaphor discussions.</p>
          </div>
        </section>

        <section className="strategy-section">
          <div className="card">
            <h2>Essay Strategy: Weaving Connections</h2>
            <ol>
              <li><strong>Identify the lens</strong> - Which school(s) apply to the situation?</li>
              <li><strong>Contrast, don't conflate</strong> - Show where theories agree and differ</li>
              <li><strong>Apply situationally</strong> - Use Classical for structure/standards, HR for motivation/social, Systems/Contingency for context</li>
              <li><strong>Be precise</strong> - Distinguish Hawthorne effect from general HR claims; note Gantt vs Taylor differences</li>
              <li><strong>Consider limitations</strong> - No single theory is universal; context matters</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ConceptConnections
