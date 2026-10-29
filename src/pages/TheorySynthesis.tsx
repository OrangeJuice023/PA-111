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
            The Classical, Human Relations, and Modern schools can look like competing theories, but I think they are
            better seen as steps in one conversation about how to get many people to work toward a common goal. Each
            school answered part of that question and left a gap for the next one to fill. In this essay, I argue that
            a manager today should not depend on just one theory, but should understand the problem first and then
            combine the ideas that fit it.
          </p>

          <h3>1. The Classical School: structure, standards, and authority</h3>
          <p>
            The Classical School wanted organizations to run efficiently and predictably. On the shop floor, Smith and
            Babbage showed that dividing work lowers costs. Metcalfe then replaced foremen&rsquo;s memories with written
            records, and Taylor took the next step by measuring work to set standards, calling for a &ldquo;mental
            revolution&rdquo; of cooperation between managers and workers. Gantt and the Gilbreths were already
            softening Taylor from the inside: Gantt guaranteed the day wage so supervisors would teach and lead
            instead of drive, and the Gilbreths showed that reducing fatigue helps output. Church and Alford linked
            these methods to cost accounting.
          </p>
          <p>
            Other thinkers looked down from the top. Fayol defined management as planning, organizing, commanding,
            coordinating, and controlling, and his unity of command rejected Taylor&rsquo;s idea of several functional
            bosses. Mooney and Reiley made coordination the first principle, Gulick expanded Fayol&rsquo;s functions
            into POSDCORB, and Urwick combined all of them into principles like span of control. Weber, as explained by
            Albrow, added bureaucracy: authority based on written rules and qualified officials instead of personal
            favor.
          </p>
          <p>
            This school gave us clear roles, order, and accountability, but it treated workers like parts of a
            machine. Its critics showed the cost: Merton&rsquo;s rules that become ends in themselves, Selznick&rsquo;s
            subunits chasing their own goals, Simon&rsquo;s principles that contradict each other like proverbs,
            Parsons&rsquo;s clash between rank and expertise, Blau&rsquo;s finding that informal cooperation beat strict
            quotas, and Corpuz and Friedrich&rsquo;s reminder that neutrality must not replace ethics.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            Human Relations grew out of this gap. The Hawthorne studies of Mayo and Roethlisberger actually began as a
            Classical experiment on lighting, but they found that output depended on social factors instead. Even
            Taylor&rsquo;s &ldquo;soldiering&rdquo; reappeared in the Bank Wiring room, now explained as a group norm
            rather than laziness. The conclusion was that an organization is a social system and money is not the only
            motivator.
          </p>
          <p>
            The motivation theorists built on this. Maslow&rsquo;s hierarchy of needs was later revised by
            Alderfer&rsquo;s ERG theory, and McClelland showed that needs like achievement are learned. Herzberg argued
            that pay only prevents dissatisfaction, which challenges Taylor&rsquo;s reliance on wages. McGregor&rsquo;s
            Theory X describes how Classical managers saw workers, and Argyris argued that specialization and tight
            control clash with the mature adult. Adams, Vroom, Locke and Latham, and Skinner explained how motivation
            works through fairness, expectations, goals, and reinforcement.
          </p>
          <p>
            Still, this school added to the Classical School rather than replacing it, since structure and pay still
            matter, and a satisfied worker is not automatically a productive one.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School widened the view again. The Classical School saw a closed machine and Human Relations
            looked mostly inside the work group, but Katz and Kahn described the organization as an open system with
            inputs, outputs, and feedback, where there is no single &ldquo;one best way.&rdquo; This shows that fixing
            one department can hurt the whole. The other Modern thinkers each added a lens: Blau and Scott asked who
            benefits from an organization, Schein looked at culture, Mintzberg showed that Taylor and Weber&rsquo;s
            machine bureaucracy is only one possible structure, Meyer and Rowan showed how formal rules get
            &ldquo;decoupled&rdquo; from real work, and Selznick explained co-optation.
          </p>
          <p>
            Drucker&rsquo;s Management by Objectives, the last topic in our exam coverage, ties the schools together.
            Managers and employees agree on goals, and people who see their own results can control their own work.
            MBO keeps the Classical focus on standards, turns Locke&rsquo;s goal-setting into a system, and assumes
            McGregor&rsquo;s Theory Y worker. Its risk is that it becomes plain target-chasing when goals are forced on
            people.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            For these reasons, I believe a manager should combine theories. Take a municipal business-permit office
            where applications take weeks and morale is low. Classical tools come first: map the process, assign clear
            responsibilities, and set service standards. Human Relations comes next: ask the frontline staff what slows
            them down and make sure workloads and rewards are fair. Systems thinking reminds the manager that the delay
            may come from another office, like the fire-safety inspection. Finally, MBO turns this into shared goals,
            like processing time, that each unit can track. Each approach covers the others&rsquo; blind spots, and the
            mix should depend on the situation.
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
            Management thought did not throw away old ideas but kept building on them. The Classical School gave us
            structure, Human Relations reminded us that workers are people, and the Modern School taught us to see the
            whole picture and focus on results. In my view, the best manager is the one who combines these ideas based
            on the problem they are facing, not out of loyalty to one school.
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
