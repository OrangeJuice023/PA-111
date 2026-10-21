import { Link } from 'react-router-dom';
import './Syllabus.css';

export default function Syllabus() {
  return (
    <div className="syllabus-page">
      <div className="container">
        {/* Header */}
        <header className="page-header">
          <span className="badge">PA 111 Course Structure</span>
          <h1>Course Syllabus Navigator</h1>
          <p className="subtitle">
            Systematically structured around the four official syllabus divisions. 
            Select any topic to view its interactive breakdown or jump directly into the authoritative canonical reviewer.
          </p>
        </header>

        {/* Division I */}
        <section className="division-block">
          <div className="division-header">
            <div className="div-title-group">
              <span className="div-number">Division I</span>
              <h2>History of Administration</h2>
            </div>
            <Link to="/reviewer#division-i--history-of-administration" className="btn-reviewer-jump">
              📖 Read Full Division in Reviewer &rarr;
            </Link>
          </div>
          <p className="div-summary">
            Explores the historical origins of administration as a long-standing practical activity versus a modern academic discipline. 
            Covers early civilizations, the evolution of record-keeping, Adam Smith and Charles Babbage on the division of labor, 
            Woodrow Wilson and the emergence of public administration, and the essential distinctions between public, private, and non-profit organizations.
          </p>
          <div className="topics-list">
            <div className="topic-item">
              <div className="topic-info">
                <h3>1.1 & 1.2 Administrative Origins & Early Civilizations</h3>
                <p>Sumerian records, Code of Hammurabi, Egyptian monumental coordination, Han Dynasty Confucian meritocracy, Greek specialization, Roman imperial standardization, and the Venetian Arsenal.</p>
                <div className="topic-tags">
                  <span>Sumer</span><span>Hammurabi</span><span>Han Dynasty</span><span>Venetian Arsenal</span>
                </div>
              </div>
              <div className="topic-links">
                <Link to="/topics/t1-1" className="btn-topic">Topic Summary</Link>
                <Link to="/reviewer#11-administration-and-management-as-long-standing-practices" className="btn-reader">Reviewer Section</Link>
              </div>
            </div>

            <div className="topic-item">
              <div className="topic-info">
                <h3>1.3 – 1.5 Trade, Specialization, Public Administration & Organization vs. Management</h3>
                <p>Adam Smith's division of labor; Charles Babbage's principle of surplus skill elimination; Woodrow Wilson's study of administration; core definitions of organization vs. management; and sectoral differences.</p>
                <div className="topic-tags">
                  <span>Adam Smith</span><span>Charles Babbage</span><span>Woodrow Wilson</span><span>Sectoral Differences</span>
                </div>
              </div>
              <div className="topic-links">
                <Link to="/topics/t1-1" className="btn-topic">Topic Summary</Link>
                <Link to="/reviewer#13-trade-specialization-and-the-emergence-of-the-discipline" className="btn-reader">Reviewer Section</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Division II */}
        <section className="division-block">
          <div className="division-header">
            <div className="div-title-group">
              <span className="div-number">Division II</span>
              <h2>Evolution of Management Thought</h2>
            </div>
            <Link to="/reviewer#division-ii--evolution-of-management-thought" className="btn-reviewer-jump">
              📖 Read Full Division in Reviewer &rarr;
            </Link>
          </div>
          <p className="div-summary">
            The master intellectual progression across four major traditions: Classical formal rationalism, 
            Neo-Classical Human Relations social systems, Modern open systems and institutional sociology, 
            and Emerging non-linear contingency perspectives.
          </p>

          {/* II-A Classical */}
          <div className="subschool-container">
            <div className="subschool-title">
              <h3>II-A. The Classical School (Structure, Efficiency, Authority)</h3>
              <Link to="/reviewer#ii-a-the-classical-school" className="subschool-link">Reviewer Chapter &rarr;</Link>
            </div>
            <div className="topics-list">
              <div className="topic-item">
                <div className="topic-info">
                  <h4>Scientific Management & Operational Methods</h4>
                  <p>Babbage (mental division of labor); Metcalfe (Frankford Arsenal card records); Taylor (mental revolution, soldiering, Bethlehem shovel experiments, 4 principles, differential piece-rate); Gantt (task-and-bonus, guaranteed day wage, "teach and lead", Gantt chart); Gilbreths (17 Therbligs, motion/fatigue study, ergonomics); Church & Alford (systematic cost accounting integration).</p>
                  <div className="topic-tags">
                    <span>Taylor</span><span>Gantt</span><span>Gilbreths</span><span>Metcalfe</span><span>Church & Alford</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/topics/t2a-1" className="btn-topic">Topic Summary</Link>
                  <Link to="/reviewer#a3-frederick-winslow-taylor-scientific-management" className="btn-reader">Reviewer</Link>
                </div>
              </div>

              <div className="topic-item">
                <div className="topic-info">
                  <h4>Administrative Management, Bureaucracy & Classical Principles</h4>
                  <p>Henri Fayol (6 industrial activities, 5 POCCC elements, 14 principles, Gangplank); Gulick & Urwick (POSDCORB, principles of organization, span of control); Mooney & Reiley (coordinative, scalar, functional, staff); Martin Albrow & Max Weber (Mosca feudal vs. bureaucratic, 3 authorities, 5 beliefs, 8 propositions, 10 official characteristics, 5 limits); Critiques by Merton (trained incapacity, goal displacement), Selznick, Simon, and Blau.</p>
                  <div className="topic-tags">
                    <span>Fayol</span><span>Gulick & Urwick</span><span>Weber</span><span>Albrow</span><span>Merton</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/topics/t2a-2" className="btn-topic">Topic Summary</Link>
                  <Link to="/reviewer#a7-henri-fayol-administrative-management-and-general-principles" className="btn-reader">Reviewer</Link>
                </div>
              </div>
            </div>
          </div>

          {/* II-B Human Relations */}
          <div className="subschool-container">
            <div className="subschool-title">
              <h3>II-B. The Neo-Classical / Human Relations School (People, Groups, Motivation)</h3>
              <Link to="/reviewer#ii-b-the-neo-classical--human-relations-school" className="subschool-link">Reviewer Chapter &rarr;</Link>
            </div>
            <div className="topics-list">
              <div className="topic-item">
                <div className="topic-info">
                  <h4>The Hawthorne Studies & Foundations of Human Relations</h4>
                  <p>Elton Mayo & Fritz Roethlisberger (Illumination, Relay Assembly, Interviewing, Bank Wiring Observation Room); informal organization, rate buster/chiseler/squealer, Hawthorne effect, and 7 major lessons of socio-technical systems.</p>
                  <div className="topic-tags">
                    <span>Elton Mayo</span><span>Hawthorne Effect</span><span>Informal Organization</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/topics/t2b-1" className="btn-topic">Topic Summary</Link>
                  <Link to="/reviewer#b2-george-elton-mayo-and-the-hawthorne-studies" className="btn-reader">Reviewer</Link>
                </div>
              </div>

              <div className="topic-item">
                <div className="topic-info">
                  <h4>Comprehensive Motivation Theories</h4>
                  <p>Maslow (hierarchy of needs, prepotency, deficit principle); Herzberg (motivators vs. hygiene, KITA, vertical job enrichment); McGregor (Theory X vs. Theory Y, self-fulfilling prophecy); Argyris (personality and organization immaturity-maturity continuum); Adams (Equity Theory, referent comparisons, inequity tension); McClelland (nAch, nAff, nPower); Locke & Latham (Goal-Setting Theory, self-efficacy); Alderfer (ERG, frustration-regression); Skinner (Reinforcement Theory); Vroom (Expectancy VIE model).</p>
                  <div className="topic-tags">
                    <span>Maslow</span><span>Herzberg</span><span>McGregor</span><span>Argyris</span><span>Adams</span><span>Vroom</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/topics/t2b-2" className="btn-topic">Topic Summary</Link>
                  <Link to="/reviewer#b3-abraham-maslow-hierarchy-of-human-needs" className="btn-reader">Reviewer</Link>
                </div>
              </div>
            </div>
          </div>

          {/* II-C Modern Management */}
          <div className="subschool-container">
            <div className="subschool-title">
              <h3>II-C. Modern Management Theory (Systems, Culture, Configurations)</h3>
              <Link to="/reviewer#ii-c-modern-management-theory" className="subschool-link">Reviewer Chapter &rarr;</Link>
            </div>
            <div className="topics-list">
              <div className="topic-item">
                <div className="topic-info">
                  <h4>Open Systems, Organizational Configurations & Institutional Sociology</h4>
                  <p>Daniel Katz & Robert L. Kahn (open systems, input-throughput-output-feedback, 10 characteristics, negative entropy, equifinality); Peter Blau & W. Richard Scott (Cui Bono typology: mutual-benefit, business, service, commonweal); Edgar Schein (3 levels of culture: artifacts, espoused values, basic assumptions); Henry Mintzberg (structure in 5s: apex, middle, core, technostructure, support; 5 configurations); Meyer & Rowan (myth & ceremony, decoupling); Philip Selznick (institutionalization, co-optation); Peter Drucker (MBO, knowledge work, effectiveness vs. efficiency).</p>
                  <div className="topic-tags">
                    <span>Katz & Kahn</span><span>Blau & Scott</span><span>Schein</span><span>Mintzberg</span><span>Meyer & Rowan</span><span>Drucker</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/reviewer#c1-daniel-katz-and-robert-l-kahn-organizations-as-open-systems" className="btn-reader">Reviewer Chapter</Link>
                  <Link to="/essay-questions" className="btn-topic">Related Essays</Link>
                </div>
              </div>
            </div>
          </div>

          {/* II-D Emerging Perspectives */}
          <div className="subschool-container">
            <div className="subschool-title">
              <h3>II-D. Emerging Perspectives (Contingency & Complexity)</h3>
              <Link to="/reviewer#ii-d-emerging-management-perspectives" className="subschool-link">Reviewer Chapter &rarr;</Link>
            </div>
            <div className="topics-list">
              <div className="topic-item">
                <div className="topic-info">
                  <h4>Contingency Theory & Chaos/Complexity Theory</h4>
                  <p>Fred Fiedler, Lawrence & Lorsch (contingency perspective, rejection of universalism, situational goodness-of-fit, mechanistic vs. organic systems); Henri Poincaré & Edward Lorenz (chaos theory, Butterfly Effect, sensitivity to initial conditions, edge of chaos, non-linear dynamics, self-organization).</p>
                  <div className="topic-tags">
                    <span>Fiedler</span><span>Lawrence & Lorsch</span><span>Chaos Theory</span><span>Butterfly Effect</span>
                  </div>
                </div>
                <div className="topic-links">
                  <Link to="/reviewer#d1-the-contingency-perspective-situational-alignment" className="btn-reader">Reviewer Chapter</Link>
                  <Link to="/connections" className="btn-topic">Compare Perspectives</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Division III */}
        <section className="division-block">
          <div className="division-header">
            <div className="div-title-group">
              <span className="div-number">Division III</span>
              <h2>Metaphors of Organization</h2>
            </div>
            <Link to="/reviewer#division-iii--metaphors-of-organization" className="btn-reviewer-jump">
              📖 Read Full Division in Reviewer &rarr;
            </Link>
          </div>
          <p className="div-summary">
            Gareth Morgan’s master framework (*Images of Organization*). Explores how metaphors serve as cognitive lenses that illuminate specific organizational features while casting others into shadow.
          </p>
          <div className="topics-list">
            <div className="topic-item">
              <div className="topic-info">
                <h3>Morgan's Diagnostic Lenses</h3>
                <p>Organizations as Machines (efficiency, predictability, rigidity); Organisms (needs, environmental adaptation, open survival); Brains (information processing, cybernetics, double-loop learning, holographic design); Political Systems (interests, conflict, power sources, coalitions); Cultural Systems; Psychic Prisons; Systems of Flux; Instruments of Domination; and Multi-Lens Diagnostic Matrix.</p>
                <div className="topic-tags">
                  <span>Machines</span><span>Organisms</span><span>Brains (Double-Loop)</span><span>Political Systems</span><span>Multi-Lens Matrix</span>
                </div>
              </div>
              <div className="topic-links">
                <Link to="/topics/t3-1" className="btn-topic">Topic Summary</Link>
                <Link to="/reviewer#division-iii--metaphors-of-organization" className="btn-reader">Reviewer Chapter</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Division IV */}
        <section className="division-block">
          <div className="division-header">
            <div className="div-title-group">
              <span className="div-number">Division IV</span>
              <h2>Functions of Administration</h2>
            </div>
            <Link to="/reviewer#division-iv--functions-of-administration" className="btn-reviewer-jump">
              📖 Read Full Division in Reviewer &rarr;
            </Link>
          </div>
          <p className="div-summary">
            The continuous administrative lifecycle: Planning, Implementation, Monitoring, and Evaluation (PIME), 
            distinguished from Fayol's internal executive elements (POCCC).
          </p>
          <div className="topics-list">
            <div className="topic-item">
              <div className="topic-info">
                <h3>The PIME Governance Lifecycle</h3>
                <p>Planning (needs assessment, SMART goals, risk forecasting); Implementation (operationalization, resource mobilization, street-level discretion); Monitoring (real-time variance, formative tracking, preventing metric gaming); Evaluation (effectiveness, efficiency, equity, unintended consequences); Continuous Learning Loop (single-loop repair vs. double-loop policy reconstruction); and Fayol POCCC vs. PIME comparison.</p>
                <div className="topic-tags">
                  <span>Planning</span><span>Implementation</span><span>Monitoring</span><span>Evaluation</span><span>PIME Lifecycle</span>
                </div>
              </div>
              <div className="topic-links">
                <Link to="/topics/t4-1" className="btn-topic">Topic Summary</Link>
                <Link to="/reviewer#division-iv--functions-of-administration" className="btn-reader">Reviewer Chapter</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
