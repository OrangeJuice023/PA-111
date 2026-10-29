import { Link } from 'react-router-dom'
import './TheorySynthesis.css'

// Integrative practice essay kept apart from the 25-question bank so the narrative synthesis is easy to find.
export default function TheorySynthesis() {
  return (
    <div className="synthesis-page">
      <div className="container synthesis-container">
        <header className="synthesis-header">
          <span className="synthesis-kicker">Integrative practice essay</span>
          <h1>Theory Synthesis</h1>
          <p className="synthesis-lede">
            One comparative question that ties the Classical, Human Relations, and Modern schools together,
            with a suggested model answer written from the PA 111 course materials.
          </p>
        </header>

        <section className="synthesis-question" aria-labelledby="synthesis-question-title">
          <h2 id="synthesis-question-title">
            Comparative Essay: The Evolution of Management Thought and the Contemporary Manager
          </h2>
          <p>
            Provide a comparative, narrative analysis of the Classical, Neoclassical (Human Relations), and Modern
            schools of management thought. For each school, explain its central assumptions, major contributions,
            strengths, and limitations. Show how later approaches addressed or expanded upon the limitations of
            earlier ones. Then, from the perspective of a contemporary manager, argue whether it is better to rely
            exclusively on one management theory or to integrate insights from multiple theories. Defend your
            position using concepts from the course and a practical organizational example, explaining how the
            context should shape the choice and combination of approaches.
          </p>
          <div className="synthesis-actions">
            <Link to="/essay" className="synthesis-link">Draft your own answer in Essay Practice &rarr;</Link>
          </div>
        </section>

        <article className="synthesis-answer" aria-label="Suggested model answer">
          <h2>Suggested Model Answer</h2>

          <p>
            Here is the big idea, class. The three schools are not rivals. Each one tried to answer the same question,
            which is how to get many people working toward a common goal, and each one left a gap that the next school
            tried to fill. So the best manager today doesn&rsquo;t pick just one school. You look at the problem first,
            then you use the theories that fit it.
          </p>

          <h3>1. The Classical School: structure, standards, and authority</h3>
          <p>
            The Classical School asked how to organize work and authority so that things run reliably. Taylor measured
            work against standards and called for a &ldquo;mental revolution&rdquo; where managers and workers
            cooperate instead of fighting. Gantt kept the standards but was kinder about it: he guaranteed the day wage
            and rewarded supervisors for teaching. As the lecture put it, Taylor&rsquo;s policy was to drive and
            Gantt&rsquo;s was to teach and lead. Fayol looked at the whole enterprise (planning, organizing,
            commanding, coordinating, controlling), and Weber explained authority based on written rules instead of
            personal favor.
          </p>
          <p>
            Its strengths are clear roles, predictability, efficiency, and accountability. Its weakness is that it
            forgot the people. Taylor was criticized for dehumanizing and monotonous work, and Merton warned that rules
            can become ends in themselves. A design that looks rational on paper doesn&rsquo;t always perform.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            That gap is where Human Relations comes in. The Hawthorne studies of Mayo and Roethlisberger found that
            output depended on more than lighting or physical conditions, and that workers kept to informal group
            norms. The lesson: an organization is a social system, money is not the only motivator, and morale is
            linked to output. Herzberg, McGregor, and Adams add that recognition, a manager&rsquo;s assumptions about
            people, and fairness all shape effort.
          </p>
          <p>
            Remember, though, that this school expands the Classical one, it doesn&rsquo;t replace it. Structure and
            pay still matter. And a happy worker is not automatically a productive one; the lecture points out that
            Herzberg assumed that link without proving it.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School widens the view again. Its key idea for us is the Systems Approach: an organization is
            an open system of connected parts, with inputs, outputs, and feedback. This shows something the earlier
            schools missed, that fixing one department can hurt the whole. Then Drucker&rsquo;s Management by
            Objectives, the last topic in our exam scope, brings the focus back to results. Managers and staff agree on
            goals, and people who see their own performance can control their own work. MBO joins Classical standards
            with the Human Relations idea that committed people direct themselves.
          </p>
          <p>
            Its weakness? Seeing the whole system doesn&rsquo;t tell you what to do, and MBO can turn into plain
            target-chasing if goals are forced on people or badly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            So should a manager stick to one theory? No, because real organizations have several problems at once.
            Take a municipal business-permit office where applications take weeks and staff morale is low. First, use
            Classical tools: map the steps, assign responsibility, and set service standards. Next, use Human
            Relations: ask the clerks what is blocking them and check that workloads are fair. Then think in systems:
            the delay might actually come from another office, such as the fire-safety inspection. Finally, use MBO to
            set agreed goals, like processing time, and show each unit its own numbers.
          </p>
          <p>
            Each lens covers the others&rsquo; blind spots, and the mix depends on the situation. A routine task may
            need mostly standards, while a team of professionals may do better with goals and freedom.
          </p>
          <aside className="synthesis-scope-note">
            <span className="scope-badge">Possible not included in the exam</span>
            <p>
              The course&rsquo;s Contingency Perspective (Division II-D) states this idea formally: no single method
              works equally well in every situation. It comes after the confirmed Drucker cutoff, so the argument above
              rests on the Systems Approach instead.
            </p>
          </aside>

          <h3>Conclusion</h3>
          <p>
            Management thought builds up; it doesn&rsquo;t throw out the old. Classical gives us structure, Human
            Relations gives us people, and Modern gives us the whole picture and a focus on results. A good manager
            combines them on purpose, based on the problem in front of them, not out of loyalty to one school.
          </p>
        </article>

        <section className="synthesis-sources" aria-labelledby="synthesis-sources-title">
          <h2 id="synthesis-sources-title">Source notes</h2>
          <ul>
            <li><strong>Lecture notes</strong> (Jan 22 to Mar 17): history, Taylor, Gantt, Metcalfe, Fayol, Urwick, Weber and Albrow, Hawthorne, and the motivation theories.</li>
            <li><strong>Senior exam reviewer:</strong> the Taylor and Gantt contrast (&ldquo;to drive&rdquo; versus &ldquo;to teach and to lead&rdquo;) and the review questions.</li>
            <li><strong>Consolidated notes:</strong> the school-by-school structure, Weber&rsquo;s critics, the Human Relations caveats, and the Modern School and Systems Approach.</li>
            <li><strong>Reading Set 1:</strong> the Modern School readings (Blau and Scott, Katz and Kahn, Schein, Mintzberg, Meyer and Rowan, Selznick, Drucker).</li>
            <li>
              The Drucker and MBO material follows <em>The Practice of Management</em> (1954). No lecture slide on
              Drucker was found in the course files; see section C.7 of the{' '}
              <Link to="/reviewer#c7-peter-f-drucker-the-practice-of-management-and-management-by-objectives">Canonical Reviewer</Link>.
            </li>
          </ul>
          <p className="synthesis-disclaimer">
            This is a suggested model answer for practice. It is not a prediction of the actual examination.
          </p>
        </section>
      </div>
    </div>
  )
}
