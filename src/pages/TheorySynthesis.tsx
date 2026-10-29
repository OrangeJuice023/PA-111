import { Link } from 'react-router-dom'
import './TheorySynthesis.css'

// Per-theory strengths and limitations, taken from the reviewer's A.12, B.13 and C.8 matrices and section text
const SW_GROUPS: { school: string; rows: [string, string, string][] }[] = [
  {
    school: 'Classical School',
    rows: [
      ['Babbage: division of mental and physical labor', 'Lowers labor and training costs by matching skill to task', 'Deskilling, alienation, and fragmented work that needs heavy supervision'],
      ['Metcalfe: shop-order cards', 'Written records create institutional memory and accurate costs', 'Only records work; does not improve how the task is done'],
      ['Taylor: Scientific Management', 'Big gains in productivity; replaces rules of thumb with measured methods', 'Treats workers as machines driven by pay; deskilling and union resistance'],
      ['Gantt: task-and-bonus system', 'Guaranteed day wage; foremen teach and lead; the Gantt chart', 'Still focused mainly on the production floor'],
      ['Frank and Lillian Gilbreth: motion study', 'Removes wasted motion and fatigue; shows welfare and output go together', 'Risk of micromanaging every physical movement'],
      ['Church and Alford: systematic management', 'Ties cost accounting to daily operations', 'Heavy accounting overhead and complex records'],
      ['Fayol: administrative management', 'First general theory of management: five functions, 14 principles, the gangplank', 'Principles can contradict each other in practice (Simon’s “proverbs”)'],
      ['Gulick and Urwick: POSDCORB and principles', 'Clear, systematic vocabulary for executive work', 'Rigid structure; understates political reality'],
      ['Mooney and Reiley: principles of organization', 'Coordination as the first principle; line versus staff distinction', 'Shares the Classical weakness of “universal” principles that Simon criticized'],
      ['Weber and Albrow: bureaucracy', 'Predictability, merit, and equal treatment under rules', 'Goal displacement, trained incapacity, and red tape (Merton)'],
    ],
  },
  {
    school: 'Human Relations School',
    rows: [
      ['Mayo and Roethlisberger: Hawthorne studies', 'Revealed the informal organization; morale and two-way communication matter', 'Can ignore economic realities or become paternalistic manipulation'],
      ['Maslow: hierarchy of needs', 'Simple map of what people need, from survival to self-actualization', 'Needs do not follow a strict step-by-step order in real organizations'],
      ['Herzberg: two-factor theory', 'Separates hygiene factors from real motivators; job enrichment', 'Assumes satisfaction leads to productivity, which does not necessarily follow'],
      ['McGregor: Theory X and Theory Y', 'Shows how managers’ assumptions shape worker behavior', 'Theory X management becomes a self-fulfilling prophecy that kills initiative'],
      ['Argyris: personality and organization', 'Explains absenteeism and apathy as reactions to childish, controlled jobs', 'Classical structures trap mature workers, leading to flight, fight, or apathy'],
      ['Adams: equity theory', 'Explains why fairness matters as much as the amount of a reward', 'Unexplained pay or reward gaps quickly destroy morale'],
      ['McClelland: acquired needs', 'Matches people to roles based on achievement, affiliation, and power', 'High achievers put in executive roles tend to micromanage'],
      ['Locke and Latham: goal-setting', 'Specific, challenging goals with feedback raise performance', 'Metric gaming and neglect of unmeasured parts of service'],
      ['Alderfer: ERG theory', 'Frustration-regression explains complaints when growth is blocked', 'Managers may treat these complaints as purely about money'],
      ['Skinner: reinforcement theory', 'Rewarding desired behavior reliably strengthens it', 'Over-reliance on punishment breeds fear and avoidance'],
      ['Vroom: expectancy theory', 'Shows motivation needs ability, kept promises, and valued rewards', 'Political favoritism breaks instrumentality and motivation drops to zero'],
    ],
  },
  {
    school: 'Modern Management',
    rows: [
      ['Katz and Kahn: open systems', 'Shows interdependence, feedback, and that many paths can reach a goal', 'Seeing the whole system does not by itself say what to do'],
      ['Blau and Scott: cui bono typology', 'Classifies organizations by who benefits', 'Each type carries its own dilemma, such as accountability versus effectiveness'],
      ['Schein: organizational culture', 'Explains why reforms fail unless deep assumptions change', 'Espoused values often conflict with how people actually behave'],
      ['Mintzberg: structure in fives', 'Matches structure to the work and the environment', 'Machine bureaucracy breaks down in turbulent crises'],
      ['Meyer and Rowan: myth and ceremony', 'Explains formal plans and charters that are not really followed', 'Decoupling lets formal reforms become ceremony'],
      ['Selznick: co-optation', 'Explains how agencies survive outside pressure', 'Co-opted interests can subvert the original public mission'],
      ['Drucker: Management by Objectives', 'Agreed goals and self-control focus everyone on results', 'Hard-to-measure public goals get crowded out; targets can be gamed or imposed'],
    ],
  },
]

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
            The Classical School wanted organizations to run efficiently and predictably. It started on the shop
            floor. Smith and Babbage showed that dividing work lowers costs, and Babbage added that even mental work
            should be split by skill so that expensive workers are not wasted on simple tasks. Metcalfe, at the
            Frankford Arsenal, replaced foremen&rsquo;s memories with shop-order cards so the organization kept its own
            records. Taylor took the next step: instead of only recording work, he measured it to set standards. He
            attacked &ldquo;soldiering,&rdquo; or workers deliberately holding back output, and called for a
            &ldquo;mental revolution&rdquo; where managers and workers cooperate to enlarge the surplus instead of
            fighting over it.
          </p>
          <p>
            Gantt and the Gilbreths were already softening Taylor from the inside. Gantt guaranteed the day wage and
            paid foremen a bonus for teaching, so where Taylor&rsquo;s approach was to drive, Gantt&rsquo;s was to teach
            and lead. The Gilbreths studied motions instead of time and showed that reducing fatigue helps both the
            worker and output. Church and Alford then linked these shop-floor methods to cost accounting so managers
            could see the real cost of each decision.
          </p>
          <p>
            Other thinkers looked down from the top. While Taylor looked up from the worker, Fayol looked down from the
            managing director and defined management as planning, organizing, commanding, coordinating, and
            controlling. His unity of command, one boss for each worker, directly rejected Taylor&rsquo;s functional
            foremen. Mooney and Reiley made coordination the first principle of organization and separated line
            authority from staff advice. Gulick expanded Fayol&rsquo;s functions into POSDCORB, and Urwick combined
            Fayol, Taylor, and Mooney and Reiley into principles like span of control and the principle of the
            objective. Weber, as explained by Albrow, added bureaucracy: authority based on written rules, hierarchy,
            and qualified officials instead of personal favor.
          </p>
          <p>
            This school gave us clear roles, order, efficiency, and accountability, but it treated workers like parts
            of a machine, and Taylor&rsquo;s system faced strong union resistance. Its critics showed the cost. Merton
            warned that rules can become ends in themselves, Selznick showed subunits chasing their own goals, and
            Simon argued that the principles contradict each other like proverbs. Parsons pointed out the clash
            between authority from rank and authority from expertise, Blau found that informal cooperation served
            clients better than strict quotas, and Corpuz and Friedrich reminded us that neutrality must not replace
            ethics. In short, the Classical School assumed that a good design on paper would automatically perform
            well.
          </p>

          <h3>2. The Human Relations School: the social side of work</h3>
          <p>
            Human Relations grew out of this gap. The Hawthorne studies of Mayo and Roethlisberger actually began as a
            Classical experiment testing whether better lighting raises output, but output kept rising even when the
            lights were dimmed, so the cause had to be social. In the Bank Wiring room, workers kept to an informal
            output norm, which is Taylor&rsquo;s &ldquo;soldiering&rdquo; again, but now explained as group behavior
            instead of laziness. The conclusions were that an organization is a social system, money is not the only
            motivator, communication should go both ways, and morale is linked to output.
          </p>
          <p>
            The motivation theorists built on this. Maslow arranged needs in a hierarchy from physiological to
            self-actualization, and Alderfer later revised it into Existence, Relatedness, and Growth, adding that
            people blocked from growing fall back on lower needs. McClelland showed that needs for achievement,
            affiliation, and power are learned. Herzberg argued that hygiene factors like pay only prevent
            dissatisfaction, while real motivation comes from achievement and responsibility, which challenges
            Taylor&rsquo;s reliance on wages. McGregor&rsquo;s Theory X describes how Classical managers saw workers,
            and he warned that it becomes self-fulfilling. Argyris went straight at the Classical principles, arguing
            that specialization, hierarchy, and tight control clash with the mature adult personality.
          </p>
          <p>
            Others explained how motivation works. Adams showed that people compare their rewards with others&rsquo;,
            so fairness matters. Vroom described motivation as Expectancy &times; Instrumentality &times; Valence, so if
            any one is zero, motivation is zero. Locke and Latham found that specific, challenging goals with feedback
            raise performance, and Skinner showed that rewarded behavior tends to be repeated.
          </p>
          <p>
            Still, this school added to the Classical School rather than replacing it, since structure and pay still
            matter. Its weakness is assuming that a satisfied worker is automatically a productive one; as the lecture
            pointed out, Herzberg takes this link for granted.
          </p>

          <h3>3. Modern Management: the whole system and its results</h3>
          <p>
            The Modern School widened the view again. The Classical School saw a closed machine, and Human Relations
            looked mostly inside the work group. Katz and Kahn instead described the organization as an open system
            that takes inputs from its environment, transforms them, produces outputs, and adjusts through feedback.
            They also noted that the same goal can be reached by different paths, so there is no single &ldquo;one best
            way.&rdquo; This shows something the earlier schools missed: fixing one department can hurt the whole.
          </p>
          <p>
            The other Modern thinkers each added a lens. Blau and Scott classified organizations by who benefits from
            them: members, owners, clients, or the public. Schein explained that culture runs from visible artifacts
            down to unspoken assumptions. Mintzberg showed that organizations take different shapes depending on how
            they coordinate work, so Taylor and Weber&rsquo;s machine bureaucracy is only one option among several.
            Meyer and Rowan showed that agencies often adopt formal rules for legitimacy and then &ldquo;decouple&rdquo;
            them from real work, a bit like the formal and informal gap Hawthorne first noticed. Selznick explained how
            organizations co-opt outside groups to survive.
          </p>
          <p>
            Drucker&rsquo;s Management by Objectives, the last topic in our exam coverage, ties the schools together.
            Managers and employees agree on the results expected, and people who see their own results can control
            their own work. MBO keeps the Classical focus on standards and echoes Urwick&rsquo;s principle of the
            objective, turns Locke&rsquo;s goal-setting into a system, and assumes McGregor&rsquo;s Theory Y worker.
            Where Taylor and Fayol kept control with management, MBO moves much of it to the person doing the work.
            Its risk is that it becomes plain target-chasing when goals are forced on people or badly chosen.
          </p>

          <h3>4. One theory or several?</h3>
          <p>
            For these reasons, I believe a manager should combine theories instead of relying on only one. Take a
            municipal business-permit office where applications take weeks and morale is low. Classical tools come
            first: map the process, assign clear responsibilities, keep records of where each application is, and set
            service standards. Human Relations comes next: ask the frontline staff what slows them down and make sure
            workloads and rewards are fair. Systems thinking reminds the manager that the delay may come from another
            office, like the fire-safety inspection. Finally, MBO turns this into shared goals, like processing time,
            that each unit can track.
          </p>
          <p>
            This works because each approach covers the others&rsquo; blind spots. Too much control kills initiative,
            caring only about satisfaction can let performance slide, and fixing one unit can just move the delay. The
            mix should also depend on the situation: a routine task may need mostly standards, while a team of
            professionals may do better with objectives and freedom.
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
            structure and accountability, Human Relations reminded us that workers are people, and the Modern School
            taught us to see the whole picture and focus on results. In my view, the best manager is the one who
            combines these ideas based on the problem they are facing, not out of loyalty to one school.
          </p>
        </article>

        <section className="synthesis-sw" aria-labelledby="synthesis-sw-title">
          <h2 id="synthesis-sw-title">Strengths and Limitations of Each Theory</h2>
          <p className="synthesis-sw-intro">
            A quick study table, separate from the essay above. Use one or two of these per school when the exam asks
            for strengths and weaknesses. Taken from the summary matrices and sections of the Canonical Reviewer
            (A.1 to C.7).
          </p>
          {SW_GROUPS.map(group => (
            <div key={group.school} className="synthesis-sw-group">
              <h3>{group.school}</h3>
              <div className="synthesis-sw-table-wrap">
                <table className="synthesis-sw-table">
                  <thead>
                    <tr><th>Theory</th><th>Strength</th><th>Limitation or risk</th></tr>
                  </thead>
                  <tbody>
                    {group.rows.map(row => (
                      <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

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
