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
            The Classical, Human Relations, and Modern schools are best understood not as rivals but as successive
            answers to one problem: how to get many people to work toward a common purpose. Each school solved part of
            that problem and left a gap that the next one tried to fill. For this reason, a contemporary manager should
            not rely on a single theory, but should diagnose the problem at hand and combine the theories that fit it.
          </p>

          <h3>1. The Classical School: structure, standards, and authority</h3>
          <p>
            The Classical School asked how work and authority should be organized so that an organization performs
            reliably. Taylor measured work against standards and called for a &ldquo;mental revolution&rdquo; in which
            managers and workers cooperate rather than quarrel over the surplus. Gantt kept Taylor&rsquo;s standards
            but humanized them by guaranteeing the day wage and rewarding supervisors for teaching; where
            Taylor&rsquo;s policy was to drive, Gantt&rsquo;s was to teach and lead. Fayol extended the analysis to the
            whole enterprise through the functions of planning, organizing, commanding, coordinating, and controlling,
            while Weber explained authority grounded in written rules rather than personal favor.
          </p>
          <p>
            The school&rsquo;s strengths are clear responsibilities, predictability, efficiency, and accountability.
            Its central weakness is its neglect of the human side of work. Taylor&rsquo;s system was criticized as
            dehumanizing and monotonous, and Merton warned that bureaucratic rules can become ends in themselves. The
            Classical School assumed that a design which is rational on paper would perform well in practice, which
            does not always hold.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            The Human Relations School began from this gap. The Hawthorne studies led by Mayo and Roethlisberger found
            that output could not be explained by lighting or physical conditions alone, and that workers held output
            to informal group norms. These findings established that an organization is a social system, that money
            is not the only motivator, and that morale is linked to output. Herzberg, McGregor, and Adams further
            showed that recognition, a manager&rsquo;s assumptions about people, and perceived fairness all shape
            effort.
          </p>
          <p>
            This school expanded the Classical School rather than replacing it, since structure and pay continue to
            matter. Its limitation is the assumption that satisfied workers are necessarily productive workers; the
            lecture notes that Herzberg&rsquo;s theory assumes this link without establishing it.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School widened the view further. Its central idea in the course is the Systems Approach, which
            treats the organization as an open system of interdependent parts that takes in inputs, produces outputs,
            and adjusts through feedback. This perspective reveals what the earlier schools overlooked: improving one
            department may harm the whole. Drucker&rsquo;s Management by Objectives, the last topic in the exam scope,
            returns the focus to results. Superiors and subordinates agree on expected results, and people who receive
            information on their own performance can exercise self-control. MBO thus combines the Classical concern
            for standards with the Human Relations insight that committed people direct themselves.
          </p>
          <p>
            Its limitation is that a view of the whole does not by itself indicate what action to take, and MBO can
            decline into target-chasing when objectives are imposed or poorly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            A contemporary manager should therefore integrate several theories, because real organizations face
            several problems at once. Consider a municipal business-permit office where applications take weeks and
            staff morale is low. Classical tools come first: mapping the workflow, assigning responsibility for each
            step, and setting service standards. Human Relations insights follow: consulting frontline clerks about
            obstacles and checking that workloads are fair. Systems thinking then recognizes that the delay may
            originate in another unit, such as the fire-safety inspection. Finally, MBO converts the diagnosis into
            agreed objectives, such as processing time, with each unit seeing its own results.
          </p>
          <p>
            Integration works because each approach offsets the blind spots of the others. The appropriate
            combination, however, depends on context: a routine, stable task may call mainly for Classical standards,
            whereas a team of professionals may respond better to objectives and autonomy.
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
            The evolution of management thought is a process of accumulation rather than replacement. The Classical
            School contributes structure and accountability, the Human Relations School an understanding of people,
            and the Modern School a view of the whole and a focus on results. The effective manager combines these
            insights deliberately, guided by the problem at hand rather than by loyalty to a single school.
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
