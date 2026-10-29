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
            The three schools covered in PA 111 are best read as successive answers to one practical problem: how to
            get many people to work together toward a common purpose. Each solved part of it and exposed a gap the next
            tried to fill. A contemporary manager should therefore neither adopt one school and discard the rest nor
            pile frameworks together, but diagnose the problem first and combine the theories that fit it.
          </p>

          <h3>1. The Classical School: structure, standards, and authority</h3>
          <p>
            The Classical School asked how work and authority should be organized so that an organization performs
            reliably, but its contributors did not all say the same thing. Smith and Babbage explained why dividing
            work raises output and lowers costs, which created a need for coordination. Metcalfe answered part of it at
            Frankford Arsenal with systematic written records; Taylor went further and measured work against
            standards, calling for a &ldquo;mental revolution&rdquo; in which managers and workers cooperate to
            enlarge the surplus instead of quarrelling over it. Henry Gantt kept Taylor&rsquo;s
            standards but changed the relationship. Taylor&rsquo;s differential piece-rate guaranteed no minimum wage;
            Gantt&rsquo;s task-and-bonus system guaranteed the day wage and rewarded supervisors for teaching. In the
            lecture&rsquo;s terms, Taylor&rsquo;s policy was to drive, and Gantt&rsquo;s was to teach and lead.
          </p>
          <p>
            Henri Fayol moved the focus from the task to the whole enterprise, defining management as planning,
            organizing, commanding, coordinating, and controlling, and offering principles such as unity of command
            and the scalar chain. Max Weber explained a different achievement: authority that rests on an impersonal
            legal order rather than personal favor, carried out by officials selected for their qualifications and
            bound by written rules.
          </p>
          <p>
            The strengths of this school are lasting: clear responsibilities, coordination, predictability,
            efficiency, and accountability. Its limitations are just as clear. The lecture&rsquo;s case against
            Taylor lists dehumanization, lack of worker involvement, monotony, neglect of teamwork and intrinsic
            motivation, and union resistance. Critics of bureaucracy add that rules can become ends in themselves
            (Merton) and that subunits can pursue their own goals at the expense of the whole (Selznick). The Classical
            School tended to assume that a formally rational design would automatically produce performance.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            The Human Relations School began from that gap. The Hawthorne investigations (1927 to 1932), led by Elton
            Mayo and Fritz Roethlisberger, found that output could not be explained by lighting or other physical
            conditions alone, and the Bank Wiring room showed workers holding output to an informal group norm. The
            lecture draws the conclusions: a business organization is a social system, not just a techno-economic one;
            economic incentives are not the only motivator; participation and two-way communication matter; and
            morale is linked to output.
          </p>
          <p>
            The motivation theories explain why. Herzberg separates hygiene factors such as salary, which prevent
            dissatisfaction, from motivators such as achievement and responsibility; McGregor shows that a
            manager&rsquo;s Theory X or Theory Y assumptions can become self-fulfilling; Argyris argues that narrow,
            tightly controlled jobs clash with the mature adult personality; and Adams adds that people judge rewards
            by comparison, so fairness matters as much as amount.
          </p>
          <p>
            This school expands the Classical School rather than replacing it; the consolidated notes are explicit
            that structure, standards, and pay still matter. Its limitations are real as well. The lecture notes that
            Herzberg&rsquo;s theory assumes satisfaction leads to productivity, which does not necessarily follow, and
            the &ldquo;Hawthorne effect&rdquo; is a weaker lesson than the broader point that managers must study the
            social context of work. Good relations cannot substitute for clear duties and sound procedures.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School widens the frame again. The consolidated notes describe modern management as attention
            to evidence, employee behavior, processes, technology, and environment, using data to diagnose problems and
            compare alternatives. Its central idea in the course is the Systems Approach: an organization is an open
            system of interdependent parts that takes in inputs, transforms them, produces outputs, and adjusts through
            feedback. This reveals a problem neither earlier school saw clearly: optimizing one department can harm
            the whole. The Modern readings are several lenses, not one uniform theory: Blau and Scott ask who
            benefits from an organization, and Selznick shows how organizations absorb outside interests through
            co-optation.
          </p>
          <p>
            Drucker&rsquo;s Management by Objectives, the last topic in the confirmed exam scope, brings the focus back
            to results. Superiors and subordinates agree on the results expected in each area, and people who receive
            information about their own performance can exercise self-control instead of waiting for supervision. MBO
            joins the Classical concern for standards with the Human Relations insight that committed people direct
            themselves, and it builds directly on Locke&rsquo;s finding that specific, challenging goals with feedback
            direct effort. Drucker&rsquo;s related distinction between efficiency
            (doing things right) and effectiveness (doing the right things) comes from his later writing rather than
            the 1954 reading.
          </p>
          <p>
            The limitation of the Modern School is that seeing the whole does not by itself tell a manager what to do.
            The consolidated notes warn that quantitative measures are tools for judgment, not replacements for it, and
            MBO can decay into target-chasing when objectives are imposed or poorly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            Should a contemporary manager rely on one theory? Generally not, because each school answers a particular
            problem and organizations face several at once. But &ldquo;use everything&rdquo; is not an answer either:
            the manager should diagnose the problem and choose theories that fit it and fit together.
          </p>
          <p>
            Consider a municipal business-permit office where applications take weeks and staff morale is low.
            Classical principles come first: map the workflow, define who is responsible for each step, set service
            standards, and keep records of where each application sits, as Metcalfe and Taylor would. Human Relations
            insights come next: ask the frontline clerks what blocks them, check whether workloads and recognition are
            fair, and treat informal norms as information rather than defiance. Systems thinking then asks how units
            affect one another, since the delay may come from the assessor&rsquo;s office or the fire-safety inspection
            rather than the permit counter. Finally, MBO turns the diagnosis into agreed objectives, such as processing
            time and accuracy, with each unit receiving its own figures.
          </p>
          <p>
            The combination works because each lens checks the others&rsquo; risks. Too much rigid control
            discourages initiative; attention only to employee satisfaction can neglect performance; improving one
            unit can simply shift the delay to another; and badly chosen targets invite superficial compliance. A
            different situation calls for a different mix: a routine, stable task may need mostly Classical
            standards, while a team of professionals may respond better to objectives and autonomy.
          </p>
          <aside className="synthesis-scope-note">
            <span className="scope-badge">Possible not included in the exam</span>
            <p>
              The course&rsquo;s Contingency Perspective (Division II-D) states this logic formally: no single method
              works equally well in every situation. It falls after the confirmed Drucker cutoff, so the argument above
              rests instead on Fayol&rsquo;s own point that centralization depends on the organization, Simon&rsquo;s
              critique of one perfect structure, and the Systems Approach.
            </p>
          </aside>

          <h3>Conclusion</h3>
          <p>
            The evolution of management thought is accumulation rather than replacement. Classical management supplies
            structure and accountability, Human Relations supplies an understanding of people, and Modern management
            supplies a view of the whole and a focus on results. A contemporary manager is most effective when they
            select and combine these insights deliberately, guided by the problem in front of them rather than by
            loyalty to one school.
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
