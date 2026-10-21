import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">UP NCPAG &bull; PA 111 &bull; Prof. Dan Saguil</span>
            <h1>Management of Organizations</h1>
            <p className="hero-description">
              Authoritative, syllabus-aligned study portal and interactive essay practice workspace. 
              Designed specifically for in-depth situational analysis, cross-theoretical synthesis, 
              and comprehensive exam preparation.
            </p>
            <div className="hero-buttons">
              <Link to="/reviewer" className="btn btn-primary">
                📖 Open Canonical Reviewer
              </Link>
              <Link to="/essay-questions" className="btn btn-primary-alt">
                ✍️ Possible Essay Exam Questions
              </Link>
              <Link to="/syllabus" className="btn btn-outline">
                Course Syllabus Navigator
              </Link>
              <Link to="/essay" className="btn btn-outline">
                Essay Practice Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Study Instructions & Strategy */}
      <section className="study-strategy-section">
        <div className="container">
          <div className="strategy-card">
            <h2>Exam Preparation Strategy & Academic Guidance</h2>
            <p className="strategy-lead">
              PA 111 examinations prioritize <strong>situational essay questions</strong> that test deep diagnostic competence rather than rote memorization of definitions.
            </p>
            <div className="strategy-grid">
              <div className="strategy-col">
                <h3>1. Master Underlying Assumptions</h3>
                <p>
                  Understand <em>why</em> theories developed and what historical problems they addressed (e.g., Taylor solving soldiering; Gantt humanizing efficiency; Hawthorne uncovering social systems).
                </p>
              </div>
              <div className="strategy-col">
                <h3>2. Juxtapose & Contrast Schools</h3>
                <p>
                  Never treat theories in isolation. Compare classical mechanics with human relations needs, and contrast closed-system rules with open-system contingency adaptation.
                </p>
              </div>
              <div className="strategy-col">
                <h3>3. Follow the 6-Step Essay Framework</h3>
                <p>
                  State a clear thesis argument, expound theory accurately, apply to case facts, compare an alternative lens, propose concrete remedies, and evaluate trade-offs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Syllabus Divisions */}
      <section className="divisions-section">
        <div className="container">
          <div className="section-header">
            <h2>The Four Course Syllabus Divisions</h2>
            <p>Direct entry points into the core academic modules of the curriculum.</p>
          </div>

          <div className="divisions-grid">
            {/* Division I */}
            <article className="division-card">
              <div className="card-top">
                <span className="division-tag">Division I</span>
                <h3>History of Administration</h3>
              </div>
              <p className="card-desc">
                Historical origins of administration as a practical activity versus formal academic discipline. 
                Early administrative innovations from Sumer, Hammurabi, Egypt, Han Dynasty meritocracy, Greece, Rome, 
                and the Venetian Arsenal, followed by Adam Smith and Charles Babbage on the division of labor.
              </p>
              <div className="card-meta">
                <span>Key Authors: Smith, Babbage, Wilson, Pacioli</span>
              </div>
              <div className="card-actions">
                <Link to="/reviewer#division-i--history-of-administration" className="card-link">
                  Read in Reviewer &rarr;
                </Link>
                <Link to="/topics/t1-1" className="card-link-sub">
                  Topic Overview
                </Link>
              </div>
            </article>

            {/* Division II */}
            <article className="division-card highlight-border">
              <div className="card-top">
                <span className="division-tag">Division II</span>
                <h3>Evolution of Management Thought</h3>
              </div>
              <p className="card-desc">
                The core intellectual progression across four major traditions:
                <br /><strong>A. Classical:</strong> Taylor, Gantt, Gilbreths, Church & Alford, Fayol, Gulick, Urwick, Mooney & Reiley, Albrow/Weber.
                <br /><strong>B. Human Relations:</strong> Mayo, Hawthorne, Maslow, Herzberg, McGregor, Argyris, Adams, McClelland, Locke, Alderfer, Skinner, Vroom.
                <br /><strong>C. Modern:</strong> Katz & Kahn, Blau & Scott, Schein, Mintzberg, Meyer & Rowan, Selznick, Drucker.
                <br /><strong>D. Emerging:</strong> Contingency Perspective (Fiedler, Lawrence & Lorsch) and Chaos Theory (Poincaré, Lorenz).
              </p>
              <div className="card-actions">
                <Link to="/reviewer#division-ii--evolution-of-management-thought" className="card-link">
                  Read in Reviewer &rarr;
                </Link>
                <Link to="/syllabus" className="card-link-sub">
                  Explore Topics
                </Link>
              </div>
            </article>

            {/* Division III */}
            <article className="division-card">
              <div className="card-top">
                <span className="division-tag">Division III</span>
                <h3>Metaphors of Organization</h3>
              </div>
              <p className="card-desc">
                Gareth Morgan’s multi-lens framework for organizational diagnosis. Detailed explorations of organizations 
                as <strong>Machines</strong> (precision, rigidity), <strong>Organisms</strong> (needs, survival, open systems), 
                <strong>Brains</strong> (information processing, double-loop learning), <strong>Political Systems</strong> (power, interests, coalitions), 
                as well as Cultural and Psychic Prison lenses.
              </p>
              <div className="card-meta">
                <span>Core Framework: Gareth Morgan's Images of Organization</span>
              </div>
              <div className="card-actions">
                <Link to="/reviewer#division-iii--metaphors-of-organization" className="card-link">
                  Read in Reviewer &rarr;
                </Link>
                <Link to="/topics/t3-1" className="card-link-sub">
                  Topic Overview
                </Link>
              </div>
            </article>

            {/* Division IV */}
            <article className="division-card">
              <div className="card-top">
                <span className="division-tag">Division IV</span>
                <h3>Functions of Administration</h3>
              </div>
              <p className="card-desc">
                The integrated administrative lifecycle: <strong>Planning</strong> (diagnostic intent, SMART objectives), 
                <strong>Implementation</strong> (operationalization, street-level friction), <strong>Monitoring</strong> (real-time variance, formative tracking), 
                and <strong>Evaluation</strong> (effectiveness, efficiency, equity, unintended consequences) connected via continuous learning loops.
              </p>
              <div className="card-meta">
                <span>Core Model: PIME Governance Cycle vs. Fayol POCCC</span>
              </div>
              <div className="card-actions">
                <Link to="/reviewer#division-iv--functions-of-administration" className="card-link">
                  Read in Reviewer &rarr;
                </Link>
                <Link to="/topics/t4-1" className="card-link-sub">
                  Topic Overview
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quick Access to Tools */}
      <section className="tools-overview-section">
        <div className="container">
          <div className="tools-grid">
            <div className="tool-box">
              <h3>Possible Essay Exam Questions</h3>
              <p>
                Browse 15 curated exam prompts with complete, high-scoring suggested answers (250–450 words) 
                featuring structured claims, theory integration, scenario applications, and source references.
              </p>
              <Link to="/essay-questions" className="btn btn-secondary">
                Browse Question Bank &rarr;
              </Link>
            </div>
            <div className="tool-box">
              <h3>Concept Connections Matrix</h3>
              <p>
                Direct comparative analyses juxtaposing Taylor vs. Gantt, Fayol vs. Weber, Maslow vs. Herzberg, 
                and Classical vs. Human Relations vs. Systems perspectives.
              </p>
              <Link to="/connections" className="btn btn-secondary">
                View Comparisons &rarr;
              </Link>
            </div>
            <div className="tool-box">
              <h3>Interactive Essay Practice Workspace</h3>
              <p>
                Structured drafting tool featuring the 6-part analytical framework, live word count, browser draft persistence, 
                and prompt transfer from the question bank.
              </p>
              <Link to="/essay" className="btn btn-secondary">
                Launch Workspace &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
