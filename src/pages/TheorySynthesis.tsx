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
            efficiently. It started on the shop floor. Adam Smith and Charles Babbage showed that dividing work lowers
            costs, and Babbage added that even mental work should be split by skill level so that expensive workers
            are not wasted on simple tasks. Henry Metcalfe, at the Frankford Arsenal, replaced foremen&rsquo;s memories
            with shop-order cards, so the organization kept records instead of relying on people. Frederick Taylor then
            measured work scientifically, fought &ldquo;soldiering,&rdquo; and called for a &ldquo;mental
            revolution&rdquo; where managers and workers cooperate instead of fighting over the surplus. Henry Gantt kept
            Taylor&rsquo;s standards but made them more humane by guaranteeing the day wage and rewarding foremen for
            teaching, so where Taylor&rsquo;s approach was to drive, Gantt&rsquo;s was to teach and lead. Frank and
            Lillian Gilbreth studied motions instead of time and showed that reducing fatigue helps both workers and
            output, while Church and Alford connected cost accounting to daily operations.
          </p>
          <p>
            Other Classical thinkers looked at the organization from the top. Henri Fayol described management as
            planning, organizing, commanding, coordinating, and controlling, and gave principles like unity of command
            and the scalar chain. Luther Gulick summed up executive work as POSDCORB, and Lyndall Urwick added
            principles such as span of control and the principle of the objective. Mooney and Reiley called
            coordination the first principle of organization and separated line authority from staff advice. Finally,
            Max Weber, as explained by Martin Albrow, described bureaucracy as authority based on written rules,
            hierarchy, and qualified officials instead of personal favor.
          </p>
          <p>
            The main strength of this school is that it gave organizations clear roles, order, efficiency, and
            accountability. Its biggest weakness is that it treated workers almost like parts of a machine.
            Taylor&rsquo;s system was criticized as dehumanizing and faced union resistance. Merton pointed out that
            rules can become ends in themselves, Selznick showed that subunits can pursue their own goals, and Herbert
            Simon argued that the &ldquo;principles&rdquo; often contradict each other like proverbs. Talcott Parsons
            noted the conflict between authority based on position and authority based on expertise, and Peter Blau
            found that informal cooperation among employment-agency staff served clients better than strict
            competitive quotas. In public administration, Onofre Corpuz and Carl Friedrich stressed that bureaucratic
            neutrality should never replace ethical responsibility and responsiveness to the public. Basically, the
            Classical School assumed that a well-designed structure would automatically lead to good performance,
            which is not always true.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            The Human Relations School grew out of this weakness. In the Hawthorne studies, Elton Mayo and Fritz
            Roethlisberger found that productivity could not be explained by lighting or physical conditions alone,
            and in the Bank Wiring room workers kept to their own informal output norm. From this, they concluded that
            an organization is also a social system, that money is not the only motivator, and that morale affects
            output.
          </p>
          <p>
            The motivation theorists then explained what people actually need. Abraham Maslow arranged needs in a
            hierarchy from physiological to self-actualization, and Clayton Alderfer simplified it into Existence,
            Relatedness, and Growth, adding that people who are blocked from growing fall back on lower needs. David
            McClelland showed that needs for achievement, affiliation, and power are learned. Frederick Herzberg
            separated hygiene factors such as salary, which only prevent dissatisfaction, from motivators such as
            achievement and responsibility. Douglas McGregor showed that a manager&rsquo;s Theory X or Theory Y
            assumptions can become self-fulfilling, and Chris Argyris argued that narrow, controlled jobs clash with
            the mature adult personality. Other theorists focused on how motivation works. J. Stacy Adams showed that
            people compare their rewards with others&rsquo;, so fairness matters. Victor Vroom explained motivation
            as Expectancy &times; Instrumentality &times; Valence, so if any one of them is zero, motivation drops to
            zero. Edwin Locke and Gary Latham found that specific, challenging goals with feedback improve
            performance, and B.F. Skinner showed that behavior that is rewarded tends to be repeated.
          </p>
          <p>
            However, this school added to the Classical School rather than replacing it, because structure and pay
            still matter. Its weakness is assuming that satisfied workers will always be productive workers; as
            discussed in the lecture, Herzberg&rsquo;s theory takes this link for granted. Maslow&rsquo;s strict
            ladder also does not always match how people behave in real organizations.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School looked at the organization from an even wider angle. Daniel Katz and Robert Kahn
            described organizations as open systems that take in inputs, transform them, produce outputs, and adjust
            through feedback, and they noted that the same goal can be reached by different paths. This shows
            something the earlier schools missed: improving one department can sometimes hurt the whole organization.
            Peter Blau and W. Richard Scott classified organizations by who benefits from them, such as members,
            owners, clients, or the public. Edgar Schein explained that culture runs from visible artifacts down to
            unspoken assumptions, and Henry Mintzberg showed that organizations take different structures, such as a
            machine bureaucracy or an adhocracy, depending on how they coordinate work. John Meyer and Brian Rowan
            showed that agencies sometimes adopt formal structures mainly for legitimacy and then &ldquo;decouple&rdquo;
            them from actual work, and Philip Selznick showed how organizations absorb outside groups through
            co-optation to survive.
          </p>
          <p>
            Peter Drucker&rsquo;s Management by Objectives (MBO), the last topic in our exam coverage, brings the focus
            back to results. Managers and employees agree on goals together, and when people can see their own
            performance, they can manage themselves. For me, MBO is a good bridge between the Classical focus on
            standards and the Human Relations idea that committed people can direct their own work. Still, the Modern
            School has limits. Seeing the whole system does not automatically tell a manager what to do, and MBO can
            turn into simply chasing targets if the goals are forced on people or poorly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            Because of all this, I believe it is better for a manager to combine theories than to rely on only one.
            Real organizations usually have several problems at the same time. For example, imagine a municipal
            business-permit office where applications take weeks and employees have low morale. A manager could start
            with Classical tools by mapping the process, assigning clear responsibilities, keeping records like
            Metcalfe, and setting service standards. Then, using Human Relations ideas, the manager could talk to the
            frontline staff about what is slowing them down, make sure workloads and rewards are fair, and make sure
            good performance is actually recognized. Systems thinking would remind the manager that the delay might
            come from another office, like the fire-safety inspection. Finally, MBO could turn all of this into shared
            goals, like processing time, with each unit tracking its own progress.
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
