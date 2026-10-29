import { Link } from 'react-router-dom';
import './ConceptConnections.css';

export default function ConceptConnections() {
  return (
    <div className="connections-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <span className="badge">Cross-Theoretical Synthesis</span>
          <h1>Concept Connections & Comparative Matrices</h1>
          <p className="subtitle">
            Juxtapose schools of thought and individual theorists without conflating them. 
            Use these structured comparisons to build multi-lens arguments and nuanced situational evaluations in your essays.
          </p>
        </header>

        {/* Master Synthesis Threads */}
        <section className="connections-section">
          <div className="connection-card highlight-left">
            <div className="conn-header">
              <h2>1. Classical Engineering &rarr; Human Relations &rarr; Argyris</h2>
              <Link to="/reviewer#ii-a-the-classical-school" className="conn-link">Read in Reviewer &rarr;</Link>
            </div>
            <p className="conn-desc">
              The evolution from mechanical standardization to socio-technical and psychological development:
            </p>
            <div className="comparison-table-wrapper">
              <table className="mini-comp-table">
                <thead>
                  <tr>
                    <th>Paradigm / Theorist</th>
                    <th>View of the Worker</th>
                    <th>Primary Control Mechanism</th>
                    <th>Administrative Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Taylor (Scientific Management)</strong></td>
                    <td>Economic instrument (*homo economicus*); prone to systematic soldiering.</td>
                    <td>Time study, 21 lb shovel standard, differential piece-rate.</td>
                    <td>Deskilling, physical fatigue, labor union strikes, worker alienation.</td>
                  </tr>
                  <tr>
                    <td><strong>Gantt (Task-and-Bonus)</strong></td>
                    <td>Human learner requiring coaching and cooperative habits.</td>
                    <td>Guaranteed day wage + bonus for meeting quota + foreman bonus for coaching.</td>
                    <td>Still bounded largely by industrial factory shop floors.</td>
                  </tr>
                  <tr>
                    <td><strong>Mayo (Hawthorne Studies)</strong></td>
                    <td>Social human being governed by peer belonging and group norms.</td>
                    <td>Two-way empathetic communication, supportive supervision, informal cohesion.</td>
                    <td>Can be manipulated paternalistically; understates economic factors.</td>
                  </tr>
                  <tr>
                    <td><strong>Argyris (Personality & Org)</strong></td>
                    <td>Developing adult moving toward autonomy, variety, and self-control.</td>
                    <td>Job enrichment, participative leadership, horizontal responsibility.</td>
                    <td>Requires organizational willingness to surrender authoritarian control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="connection-card">
            <div className="conn-header">
              <h2>2. Formal Authority & Bureaucracy: Fayol vs. Weber vs. Merton</h2>
              <Link to="/reviewer#a10-max-weber-and-martin-albrow-the-theory-of-bureaucracy" className="conn-link">Read in Reviewer &rarr;</Link>
            </div>
            <div className="comparison-table-wrapper">
              <table className="mini-comp-table">
                <thead>
                  <tr>
                    <th>Theorist</th>
                    <th>Analytical Level</th>
                    <th>Core Focus</th>
                    <th>Operational Bridge / Critique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Henri Fayol</strong></td>
                    <td>Managing Director / Executive Suite</td>
                    <td>5 managerial functions (POCCC) and 14 universal principles of management.</td>
                    <td><strong>The Gangplank:</strong> Solved scalar communication delays by allowing lateral peer coordination.</td>
                  </tr>
                  <tr>
                    <td><strong>Max Weber</strong></td>
                    <td>Macro-Sociological Institution</td>
                    <td>Rational-legal authority, 10 official characteristics, career hierarchy, files.</td>
                    <td>Formal rationality guarantees equality and predictability, but risks an "iron cage".</td>
                  </tr>
                  <tr>
                    <td><strong>Robert K. Merton</strong></td>
                    <td>Sociological Dysfunction</td>
                    <td>Unintended consequences of bureaucratic discipline and hyper-formalism.</td>
                    <td><strong>Trained Incapacity & Goal Displacement:</strong> Rules become ends, causing red-tape paralysis.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="connection-card">
            <div className="conn-header">
              <h2>3. Motivation Theories: Need Content vs. Cognitive Process</h2>
              <Link to="/reviewer#ii-b-the-neo-classical--human-relations-school" className="conn-link">Read in Reviewer &rarr;</Link>
            </div>
            <div className="comparison-table-wrapper">
              <table className="mini-comp-table">
                <thead>
                  <tr>
                    <th>Theorist</th>
                    <th>Category</th>
                    <th>Core Theoretical Insight</th>
                    <th>Public Sector Implication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Maslow (Hierarchy of Needs)</strong></td>
                    <td>Content</td>
                    <td>5 tiers (Physiological to Self-Actualization); prepotency and deficit principles.</td>
                    <td>Once civil service pay meets basic needs, higher esteem and growth must be activated.</td>
                  </tr>
                  <tr>
                    <td><strong>Herzberg (Two-Factor)</strong></td>
                    <td>Content</td>
                    <td>Hygiene (salary, conditions) prevents dissatisfaction; Motivators create satisfaction.</td>
                    <td>Pay bumps are mere "KITA"; true engagement requires vertical job enrichment.</td>
                  </tr>
                  <tr>
                    <td><strong>Alderfer (ERG Theory)</strong></td>
                    <td>Content</td>
                    <td>Existence, Relatedness, Growth; allows simultaneous needs & frustration-regression.</td>
                    <td>Blocked promotion causes employees to obsess over lower existence/hygiene gripes.</td>
                  </tr>
                  <tr>
                    <td><strong>Adams (Equity Theory)</strong></td>
                    <td>Process</td>
                    <td>Comparative equity ratio: (Outcomes/Inputs) Self versus (Outcomes/Inputs) Referent.</td>
                    <td>Perceptions of political favoritism destroy motivation and trigger absenteeism.</td>
                  </tr>
                  <tr>
                    <td><strong>Locke & Latham (Goal-Setting)</strong></td>
                    <td>Process</td>
                    <td>Specific, challenging goals + feedback maximize directed persistence and strategy.</td>
                    <td>Avoid narrow target gaming; pair challenging public metrics with support and self-efficacy.</td>
                  </tr>
                  <tr>
                    <td><strong>Vroom (Expectancy Theory)</strong></td>
                    <td>Process</td>
                    <td>Cognitive calculation: Force = Expectancy $\times$ Instrumentality $\times$ Valence.</td>
                    <td>If civil servants believe promotions depend on patronage ($I=0$), effort collapses to zero.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="connection-card">
            <div className="conn-header">
              <h2>4. Systems, Contingency & Chaos: Navigating Environmental Complexity</h2>
              <Link to="/reviewer#ii-c-modern-management-theory" className="conn-link">Read in Reviewer &rarr;</Link>
            </div>
            <p className="conn-desc">
              How modern and emerging perspectives synthesize technical structure with situational adaptation:
            </p>
            <ul>
              <li>
                <strong>Katz & Kahn (Open Systems):</strong> Organizations survive by importing negative entropy through the Input-Throughput-Output-Feedback cycle. Subsystems must be harmonized to avoid destructive sub-optimization. Equifinality proves there is no single path to success.
              </li>
              <li>
                <strong>Fiedler, Lawrence & Lorsch (Contingency):</strong> Explicitly reject "one best way" universalism. Mechanistic structures fit stable, routine tasks; Organic structures fit turbulent, volatile environments.
              </li>
              <li>
                <strong>Poincaré & Lorenz (Chaos Theory):</strong> The "Butterfly Effect" demonstrates that small initial errors in interconnected public systems can amplify non-linearly into national crises. Agencies must operate at the "edge of chaos," fostering agility and self-organization.
              </li>
            </ul>
          </div>
        </section>

        {/* Essay Strategy Banner */}
        <section className="essay-strategy-callout">
          <h2>How to Weave These Connections in Pure Essays</h2>
          <ol className="strategy-numbered-list">
            <li>
              <strong>Never cite a theory in an analytical vacuum:</strong> Pair a Classical structural concept (e.g., Weber’s hierarchy) with a Human Relations social reality (e.g., Mayo’s informal peer norms).
            </li>
            <li>
              <strong>Explain the historical problem:</strong> Articulate <em>why</em> the theorist formulated the approach (e.g., Gantt modifying Taylor to stop industrial warfare).
            </li>
            <li>
              <strong>Use the Multi-Metaphor Lens:</strong> Analyze administrative crises through Machine (structure), Organism (needs/adaptation), Brain (learning), and Political (power/interests) lenses.
            </li>
            <li>
              <strong>Conclude with balanced public value:</strong> Show how management must balance procedural accountability with human dignity and democratic equity.
            </li>
          </ol>
          <div className="callout-actions">
            <Link to="/essay" className="btn btn-primary">Open Practice Workspace &rarr;</Link>
            <Link to="/essay-questions" className="btn btn-secondary">Browse Question Bank &rarr;</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
