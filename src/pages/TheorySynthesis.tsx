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
            The Classical, Human Relations, and Modern schools of management can look like competing theories, but I
            think they are better seen as steps in one long conversation. All three try to answer the same question:
            how do you get many people to work together toward a common goal? Each school answered part of it and
            left a gap for the next one to fill. In this essay, I argue that a manager today should not depend on just
            one theory, but should first understand the problem and then combine the ideas that fit it.
          </p>

          <h3>1. The Classical School: structure, standards, and authority</h3>
          <p>
            The Classical School focused on how to organize work and authority so that an organization runs
            efficiently. Frederick Taylor measured work and set standards, and he called for a &ldquo;mental
            revolution&rdquo; where managers and workers cooperate instead of fighting over the surplus. Henry Gantt
            kept these standards but made the system more humane: he guaranteed the day wage and rewarded supervisors
            for teaching their workers. In short, Taylor&rsquo;s approach was to drive, while Gantt&rsquo;s was to
            teach and lead. Henri Fayol looked at the organization as a whole and described management as planning,
            organizing, commanding, coordinating, and controlling, while Max Weber explained authority based on
            written rules instead of personal favor.
          </p>
          <p>
            The main strength of this school is that it gave organizations clear roles, order, efficiency, and
            accountability. Its biggest weakness is that it treated workers almost like parts of a machine.
            Taylor&rsquo;s system was criticized as dehumanizing and monotonous, and Merton pointed out that rules can
            become more important than the goals they were meant to serve. Basically, the Classical School assumed that
            a well-designed structure would automatically lead to good performance, which is not always true.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            The Human Relations School grew out of this weakness. In the Hawthorne studies, Elton Mayo and Fritz
            Roethlisberger found that productivity could not be explained by lighting or physical conditions alone,
            and that workers followed informal group norms about how much to produce. From this, they concluded that
            an organization is also a social system, that money is not the only motivator, and that morale affects
            output. Later theorists built on this: Herzberg showed the role of recognition and achievement, McGregor
            showed how a manager&rsquo;s assumptions about people shape their behavior, and Adams showed that people
            care about fairness.
          </p>
          <p>
            However, this school added to the Classical School rather than replacing it, because structure and pay
            still matter. Its weakness is assuming that satisfied workers will always be productive workers. As
            discussed in the lecture, Herzberg&rsquo;s theory takes this link for granted without really proving it.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School looked at the organization from an even wider angle. Its key idea in our course is the
            Systems Approach, which sees the organization as an open system of connected parts that takes in inputs,
            produces outputs, and adjusts through feedback. This helps managers see something the earlier schools
            missed: improving one department can sometimes hurt the whole organization. Peter Drucker&rsquo;s
            Management by Objectives (MBO), the last topic in our exam coverage, then brings the focus back to results.
            Managers and employees agree on goals together, and when people can see their own performance, they can
            manage themselves. For me, MBO is a good bridge between the Classical focus on standards and the Human
            Relations idea that committed people can direct their own work.
          </p>
          <p>
            Still, the Modern School has limits. Seeing the whole system does not automatically tell a manager what to
            do, and MBO can turn into simply chasing targets if the goals are forced on people or poorly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            Because of all this, I believe it is better for a manager to combine theories than to rely on only one.
            Real organizations usually have several problems at the same time. For example, imagine a municipal
            business-permit office where applications take weeks and employees have low morale. A manager could start
            with Classical tools by mapping the process, assigning clear responsibilities, and setting service
            standards. Then, using Human Relations ideas, the manager could talk to the frontline staff about what is
            slowing them down and make sure workloads are fair. Systems thinking would remind the manager that the
            delay might actually come from another office, like the fire-safety inspection. Finally, MBO could turn
            all of this into shared goals, such as processing time, with each unit tracking its own progress.
          </p>
          <p>
            This combination works because each approach covers the blind spots of the others. Of course, the right
            mix depends on the situation. A routine and stable task might mostly need Classical standards, while a
            team of professionals might work better with clear objectives and more freedom.
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
            Looking at all three schools, management thought did not throw away old ideas but kept building on them.
            The Classical School gave us structure and accountability, the Human Relations School reminded us that
            workers are people, and the Modern School taught us to see the whole picture and focus on results. In my
            view, the best manager is not someone loyal to one school, but someone who knows how to combine these
            ideas depending on the problem they are facing.
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
