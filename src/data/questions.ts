export interface SourceRef {
  key: 'RS1' | 'CONS' | 'NOTES' | 'REV' | 'OTHER';
  page?: string;
}

/** Readable names for the source keys, shown on the essay page. */
export const SOURCE_LABELS: Record<SourceRef['key'], string> = {
  RS1: 'Reading Set 1',
  CONS: 'Consolidated Notes',
  NOTES: 'Lecture Notes',
  REV: 'Senior Exam Reviewer',
  OTHER: 'Other',
};

export interface EssayQuestion {
  id: string;
  title: string;
  divisionId: string;
  divisionLabel: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Integrative';
  question: string;
  theories: string[];
  answer: string;
  sources: SourceRef[];
  /** True when the question substantially relies on topics after the confirmed exam cutoff (Drucker/MBO). */
  outOfScope?: boolean;
}

export const essayQuestions: EssayQuestion[] = [
  {
    id: 'q1',
    title: 'Bureaucratic Office: Morale, Absenteeism, and Efficiency',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'A government department characterized by rigid hierarchies, exhaustive written rules, and hyper-specialized clerical desks is experiencing a 35% surge in chronic absenteeism, pervasive employee apathy, and mounting processing delays. Using Max Weber’s theory of bureaucracy, the Hawthorne Studies, and Chris Argyris’s Personality and Organization thesis, diagnose the root causes of this administrative pathology and propose actionable managerial remedies. Justify how your recommendations balance organizational accountability with employee morale.',
    theories: ["Weber's Rational-Legal Bureaucracy", "Elton Mayo's Hawthorne Studies", "Chris Argyris's Personality & Organization"],
    answer: `The administrative crisis within this department stems from an over-reliance on classical mechanistic controls that ignore human social and psychological realities. 

From a Weberian perspective, the department was engineered as an "ideal type" rational-legal bureaucracy, prioritizing functional specialization, scalar hierarchy, written records, and impersonal rules to guarantee consistency and eliminate personal arbitrariness. However, as Robert K. Merton noted in his critique of Weber, hyper-formalism inevitably induces "trained incapacity" and "goal displacement," where adherence to procedural manuals becomes an absolute end in itself, subordinating prompt public service to bureaucratic self-preservation.

The root psychological pathology is explained by Chris Argyris's Personality and Organization thesis. Argyris demonstrated that psychologically mature human beings naturally develop from childhood passivity, dependence, and narrow interests toward adulthood activity, autonomy, and self-control. When mature civil servants are placed in rigid classical structures with highly fractionated, repetitive tasks and authoritarian surveillance, an acute structural incongruence occurs. The organization effectively treats adult professionals like dependent children. To cope with this psychological frustration, employees resort to the reactions the lecture lists: "escape" (the 35% surge in absenteeism, and eventually resignations), "fight" (resistance through unions or the informal organization), and, most commonly, "adaptation" through apathy (psychological resignation where workers withhold initiative, do the bare minimum, and treat the salary as compensation for the punishment).

Furthermore, Elton Mayo’s Hawthorne Studies (specifically the Bank Wiring Observation Room) proved that formal workgroups operate as complex social systems governed by informal peer norms. When management treats workers purely as isolated economic cogs, the informal organization mobilizes defensively against management, establishing collective output ceilings to preserve peer solidarity.

To resolve this crisis, management must implement three integrated interventions:
1. Vertical Job Enrichment (Argyris & Herzberg): Restructure fractionated clerical roles into case-ownership teams where clerks manage an application from intake to final release, expanding decision-making discretion and cognitive variety.
2. Participatory Quality Circles (Hawthorne): Formalize regular cross-hierarchical feedback forums where frontline staff identify procedural bottlenecks and co-design streamlined workflows with supervisors.
3. Supportive Supervisory Coaching: Retrain hierarchical supervisors in two-way empathetic communication, transitioning from punitive surveillance to developmental coaching.

These measures successfully balance accountability with morale: procedural integrity and audit trails (Weber) are preserved through computerized milestones, while discretion, task variety, and social consultation (Argyris & Mayo) restore dignity and drastically reduce absenteeism.`,
    sources: [
      { key: 'CONS', page: 'Weber, Merton, Hawthorne, Argyris (p. 7–9)' },
      { key: 'NOTES', page: 'Weber (p. 22–24); Hawthorne (p. 24–25); Argyris (p. 28–29)' },
      { key: 'RS1', page: 'Albrow, Bureaucracy, Chs. 2–3; Argyris, The Individual and the Organization' }
    ]
  },
  {
    id: 'q2',
    title: 'Taylor vs. Gantt in a Public Works Infrastructure Unit',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'A municipal public works department tasked with road maintenance and floodway rehabilitation is suffering from severe project delays, wasteful material handling, and violent labor pushback against newly introduced production quotas. Compare and contrast Frederick W. Taylor’s Scientific Management with Henry L. Gantt’s task-and-bonus system. In what ways would Taylor’s approach exacerbate industrial friction in this public setting, and why does Gantt’s philosophy of "teaching and leading" provide a superior operational framework?',
    theories: ["Taylor's Scientific Management", "Gantt's Task-and-Bonus System", "Habits of Industry and Cooperation"],
    answer: `The operational breakdown in this public works department reflects the historical clash between the rigid, driving ethos of early Scientific Management and the humane, developmental approach of Henry L. Gantt.

Frederick Winslow Taylor sought to eliminate "soldiering" (deliberate output restriction) by developing an exact science for every work element through time study, standardizing tools (as in the Bethlehem Steel shovel experiment, which set a standard load of about 21 pounds), and enforcing compliance via a differential piece-rate system. Taylor’s system is economically coercive: workers who reach the scientifically calculated high quota receive a premium rate, while those falling short receive a punitive low rate, risking economic destitution. In a municipal civil service setting, imposing Taylor’s differential piece-rate or rigid individual quotas triggers fierce resistance: public sector work is subjected to unpredictable weather, supply-chain interruptions, and civil service union protections. Blaming workers through punitive pay cuts exacerbates labor hostility, induces safety shortcuts, and ignores environmental realities.

In sharp contrast, Henry L. Gantt recognized that efficiency cannot be coerced; it must be built through systematic instruction, mutual confidence, and social responsibility. Gantt fundamentally modified Taylorism through three vital innovations:
1. Guaranteed Minimum Day Wage: Gantt preserved a fair daily base wage, ensuring economic security regardless of temporary equipment failures or training delays, thus eliminating the existential anxiety caused by Taylor's differential piece-rate.
2. The Task and Bonus: Workers who mastered the standardized method and completed the task received a 20% to 50% cash bonus.
3. The Foreman's Bonus for Coaching: Gantt awarded the supervisor an extra cash bonus for every worker who made quota, plus an additional premium if all workers in the gang succeeded. This structurally transformed the foreman from a harsh "driver" into a patient "teacher and leader" personally invested in coaching struggling crew members.

In a municipal roadwork setting, Gantt’s model is markedly superior. Infrastructure rehabilitation requires interdependent teamwork (asphalt laying, compaction, traffic redirection) rather than isolated manual labor. Gantt’s philosophy instills "habits of industry and cooperation," where crews learn standardized methods collaboratively. 

Management should immediately deploy the Gantt visual scheduling chart to make project milestones, material arrivals, and gang progress publicly transparent. By guaranteeing baseline civil service wages, rewarding supervisory coaching, and celebrating gang-level completions, the department achieves operational standardization without sparking destructive labor revolt.`,
    sources: [
      { key: 'CONS', page: 'Taylor and Gantt (p. 5–6)' },
      { key: 'NOTES', page: 'Taylor and Gantt (p. 4–12)' },
      { key: 'REV', page: 'Taylor vs Gantt (p. 3–5, 19)' }
    ]
  },
  {
    id: 'q3',
    title: 'Weberian Bureaucracy: Rational-Legal Foundations and Dysfunctional Pathologies',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Integrative',
    question: 'Examine Max Weber’s ideal type of bureaucracy as the purest structural embodiment of rational-legal authority. What structural characteristics make it technically superior to traditional and charismatic administration? Furthermore, incorporate Robert K. Merton’s concepts of "trained incapacity" and "goal displacement" to explain how an administrative agency originally designed for procedural equity deteriorates into red-tape paralysis.',
    theories: ["Weber's Bureaucracy & Three Authorities", "Merton's Dysfunctions of Bureaucracy"],
    answer: `Max Weber conceptualized bureaucracy as the crowning achievement of modern societal rationalization, serving as the organizational machinery of rational-legal authority. Unlike traditional authority (legitimized by hereditary sanctity and personal loyalty to a master) or charismatic authority (legitimized by devotion to an individual’s extraordinary heroism or prophetic aura, which is inherently unstable and volatile), rational-legal authority derives its legitimacy from an impersonal, enacted legal order.

Weber asserted that a fully developed bureaucracy is technically superior to all other administrative forms due to its structural characteristics:
1. Strict scalar hierarchy with clear lines of appeal;
2. Functional division of labor with delineated jurisdictions;
3. Administration based on written documents ("the files");
4. Recruitment and promotion based on objective technical qualifications verified by diplomas or competitive examinations;
5. Separation of the officeholder’s private wealth from public administrative resources (preventing patrimonial corruption);
6. Impersonal rules that treat all citizens equally without personal favor or malice (*sine ira et studio*).
For high-volume, routine state tasks (taxation, censuses, licensing), Weberian bureaucracy offers unmatched predictability, continuity, calculability, and speed.

However, subsequent sociologists exposed the deep functional pathologies embedded within this structural perfection. Robert K. Merton demonstrated that the very mechanisms designed to guarantee reliability generate severe unintended consequences:
- Trained Incapacity: Intensive indoctrination in rigid procedures renders officials cognitively blind to novel circumstances. Past actions that were successful in standard conditions are mechanically applied to unprecedented problems, causing disastrous failures.
- Goal Displacement: Rules, originally designed as instrumental means toward broader public objectives, are transformed into sacred, absolute ends. Officials display obsessive procedural formalism ("red tape"), prioritizing meticulous documentation over client problem-solving.

In such settings, the pursuit of procedural correctness can eclipse substantive public service: the clerk who follows every rule to the letter while leaving citizens waiting for weeks has fulfilled his formal obligations but failed his substantive mission. Recognizing this pathology is the first step toward structural remedies—such as performance auditing, frontline discretion within clear boundaries, and periodic procedural review—that preserve the accountability strengths of bureaucracy without surrendering it to red-tape paralysis.`,
    sources: [
      { key: 'CONS', page: 'Weber, three bases of authority, Merton (p. 7)' },
      { key: 'NOTES', page: 'Weber and Albrow (p. 22–24); Merton is not in the notes' },
      { key: 'RS1', page: 'Albrow, Bureaucracy, Chs. 2–3' }
    ]
  },
  {
    id: 'q4',
    title: 'Motivation Beyond Monetary Compensation in Public Agencies',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Integrative',
    question: 'A civil service regulatory commission implemented an across-the-board 15% salary increase and invested heavily in modern ergonomics and office facilities, expecting a dramatic surge in performance. Six months later, employee productivity remains flat, citizen backlogs persist, and exit interviews reveal pervasive disengagement. Using Maslow’s Hierarchy of Needs, Herzberg’s Two-Factor Theory, and Adams’s Equity Theory, explain why financial compensation alone failed to motivate these civil servants, and design a comprehensive non-monetary motivational strategy.',
    theories: ["Maslow's Need Hierarchy", "Herzberg's Two-Factor Theory", "Adams's Equity Theory", "Public Service Motivation"],
    answer: `The failure of the regulatory commission’s monetary interventions illustrates the fundamental fallacy of treating civil servants as purely economic actors (*homo economicus*). Management conflated the removal of workplace dissatisfaction with the creation of genuine motivation.

Frederick Herzberg’s Two-Factor (Motivator-Hygiene) Theory provides the immediate diagnosis. Herzberg demonstrated that job satisfaction and dissatisfaction are not opposite ends of a single spectrum. Factors associated with the environment or context of work—such as base salary, working conditions, ergonomic desks, and administrative policies—are **Hygiene factors**. When inadequate, hygiene factors cause acute dissatisfaction; when made optimal, they merely achieve a neutral baseline of "no dissatisfaction." They do not stimulate positive motivation, creativity, or superior effort. True motivation is generated exclusively by **Motivator factors** rooted in the work content itself: personal achievement, meaningful recognition, expanded responsibility, and opportunities for intellectual growth. By raising salaries and modernizing cubicles, the commission merely polished its hygiene factors while leaving the intrinsic work monotonous, routine, and uninspiring.

Abraham Maslow’s Hierarchy of Needs reinforces this analysis through the **Deficit Principle**: a need that has been adequately satisfied ceases to act as a primary motivator of behavior. Once civil service salaries sufficiently meet physiological survival and security needs, higher-order human needs—Belonging, Esteem, and Self-Actualization—inevitably dominate consciousness. If the commission offers no avenues for professional mastery, public impact, or autonomy, employees remain in a state of unfulfilled higher-order need stagnation.

Furthermore, J. Stacy Adams’s Equity Theory highlights that compensation is evaluated relationally. Even with a 15% salary bump, if employees perceive that promotions, high-profile committee appointments, or performance ratings are awarded through political patronage ("padrino" system) rather than merit, an acute perceived underpayment inequity persists: the ratio of their own outcomes to inputs looks smaller than the same ratio for the favored colleague. To alleviate this internal psychological distress, demoralized civil servants reduce their inputs by withholding enthusiasm, extending breaks, and mentally disengaging.

To cultivate genuine, sustainable motivation, the commission must enact a four-point non-monetary strategy:
1. Vertical Job Enrichment: Delegate meaningful adjudicative discretion to case officers, granting them full ownership of regulatory portfolios.
2. Meritocratic Transparency: Publish transparent, objective criteria for promotions and performance citations, restoring distributive and procedural equity.
3. Public Service Recognition: Establish quarterly peer-nominated awards that celebrate exceptional citizen responsiveness and ethical integrity, directly feeding esteem and self-actualization needs.
4. Professional Growth Paths: Provide sponsored specialized training in emerging regulatory jurisprudence, aligning personal self-actualization with institutional excellence.`,
    sources: [
      { key: 'CONS', page: 'Maslow, Herzberg, Equity Theory (p. 8–9)' },
      { key: 'NOTES', page: 'Maslow (p. 25); Herzberg (p. 26–27); Adams (p. 29–30)' },
      { key: 'REV', page: 'Maslow, Herzberg, Adams (p. 11–13)' }
    ]
  },
  {
    id: 'q5',
    title: 'Multi-Metaphorical Diagnosis of Resistance to Administrative Reform',
    divisionId: 'D3',
    divisionLabel: 'Division III: Metaphors of Organization',
    difficulty: 'Integrative',
    question: 'A newly appointed city administrator launches an enterprise digital resource planning system to automate procurement and streamline citizen welfare disbursements. Frontline staff actively resist the rollout through subtle workarounds, deliberate data entry errors, and anonymous petitions to the city council alleging the system is dysfunctional. Using Gareth Morgan’s metaphors of organization—specifically the Machine, Organism, Brain, and Political System lenses—analyze the underlying drivers of this resistance and formulate an integrated change-management strategy.',
    theories: ["Gareth Morgan's Metaphors of Organization (Machine, Organism, Brain, Political System)", "Resistance to Change"],
    outOfScope: true,
    answer: `Administrative resistance to digital modernization is rarely a simple technical glitch; it is a multifaceted organizational phenomenon. Applying Gareth Morgan’s metaphorical lenses illuminates why a technically elegant software rollout triggers institutional revolt:

1. The Machine Lens (Structural Flaws):
From the machine perspective, the organization is a rational apparatus of standardized, interlocking gears. Management treated the digital system rollout as a purely mechanical software replacement, assuming that altering the software code would automatically alter frontline operations. However, management failed to recalibrate the connecting parts: operating manuals were poorly drafted, training sessions were truncated, and performance quotas remained pegged to manual workflows. Resistance here is an operational breakdown: the new digital "part" does not fit the mechanical assembly, creating administrative friction and processing errors.

2. The Organism Lens (Environmental & Human Needs Mismatch):
The organism lens views the organization as a living creature seeking survival, internal homeostasis, and satisfaction of member needs within an external environment. Frontline workers experienced the top-down digital imposition as an invasive pathogen threatening their professional security, autonomy, and social equilibrium. The change disrupted long-established informal social networks and introduced intense anxiety over job obsolescence and technical inadequacy. Resistance is an organic immune response: the social organism fights to protect its psychological health and familiar working habitat against external disruption.

3. The Brain Lens (Learning Failure & Single-Loop Traps):
The brain lens focuses on information processing, cybernetic feedback, and double-loop learning. Management engaged strictly in authoritarian single-loop directives: detecting resistance and responding by repeating standard orders and threatening penalties. The agency lacked double-loop learning capacity: it failed to create feedback channels where frontline staff could explain that the software's rigid validation logic clashed with the messy, complex realities of destitute welfare clients. Resistance in this lens is a symptomatic cry that the organizational brain is disconnected from street-level intelligence.

4. The Political System Lens (Power, Interests, and Coalitions):
The political lens recognizes that organizations are arenas of competing interests and power games. The manual procurement system vested immense gatekeeping power, personal discretion, and patronage leverage in senior clerks. The digital portal redistributes power: automated audits eliminate arbitrary discretion, make transaction timestamps transparent, and shift control to technical IT staff. Frontline resistance, malicious compliance, and anonymous petitions to the city council are calculated political maneuvers by threatened coalitions to defend their informal power base and preserve status.

Integrated Change-Management Strategy:
- Mechanical Fix: Redesign workflow SOPs, calibrate realistic processing quotas, and conduct hands-on, phased software simulations.
- Organic Adaptation: Provide ironclad guarantees against retrenchment, establish peer-mentorship networks, and acknowledge the emotional stress of digital transition.
- Brain Cybernetics: Institute cross-functional "digital improvement councils" where frontline clerks directly debug software workflows with programmers (enacting double-loop learning).
- Political Realignment: Co-opt senior clerks into the reform by appointing them as "System Implementation Champions" with oversight over system integrity, giving them a visible, prestigious stake in the new digital order.`,
    sources: [
      { key: 'CONS', page: 'Metaphors of Organization (p. 13)' },
      { key: 'REV', page: 'April 14 notes: cultural and political systems (p. 17)' },
      { key: 'OTHER', page: 'Gareth Morgan, Images of Organization (not in Reading Set 1)' }
    ]
  },
  {
    id: 'q6',
    title: 'Henri Fayol versus Max Weber: Administrative Management versus Rational-Legal Bureaucracy',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'Compare and contrast Henri Fayol’s Administrative Management with Max Weber’s theory of Rational-Legal Bureaucracy. Where do their structural frameworks converge, where do their foundational methodologies diverge, and how did Fayol’s concept of the "Gangplank" resolve a vital operational dilemma inherent in Weber’s rigid scalar chain?',
    theories: ["Fayol's Administrative Management", "Weber's Rational-Legal Bureaucracy", "Scalar Chain vs. Fayol's Bridge"],
    answer: `Henri Fayol and Max Weber represent the twin pillars of classical administrative theory, yet they approached the study of formal organization from fundamentally distinct intellectual and professional vantage points.

Points of Convergence:
Both theorists sought to establish order, predictability, and efficiency in large, modern collective enterprises:
1. Scalar Hierarchy: Both insisted on a clearly defined vertical chain of command from top authority to the lowest ranks.
2. Division of Labor: Both identified functional specialization as an indispensable requirement for operational competence.
3. Impersonal Discipline & Authority: Both held that organizational authority must be balanced by formal responsibility and bound by clear, enforceable rules rather than arbitrary personal whim.
4. Record-Keeping & Stability: Both valued administrative continuity and documented procedures as essential for institutional memory.

Points of Divergence:
1. Intellectual Origin and Perspective:
   - Fayol was a pragmatic industrial executive (Managing Director of a large French mining combine). He wrote from the practical perspective of an insider manager seeking to provide a universal practitioner's handbook (*Administration Industrielle et Générale*) for training future business leaders.
   - Weber was an academic sociologist, legal scholar, and political economist. He analyzed bureaucracy from the detached perspective of historical sociology (*Economy and Society*), examining how legal-rational administration accompanied the rise of capitalism and the modern nation-state.
2. Focus and Scope:
   - Fayol focused on the **managerial functions** (Planning, Organizing, Commanding, Coordinating, Controlling) and articulated 14 flexible, pragmatic principles of administrative practice.
   - Weber focused on the **macro-sociological structure** of the institution, constructing an "ideal type" based on rational-legal legitimacy, career structures, tenure, and total separation of the office from private property.
3. Flexibility of Principles:
   - Weber’s ideal type was rigid: deviations from full bureaucratization were viewed as compromises of formal rationality.
   - Fayol explicitly insisted that his 14 principles were flexible guidelines requiring contextual judgment: *"There is nothing rigid or absolute in management affairs; it is all a question of proportion."*

The Operational Resolution: Fayol's Gangplank (Fayol's Bridge):
In Weber’s pure bureaucratic model, communication must strictly travel vertical channels: an issue between Clerk D in Department A and Clerk J in Department B must ascend through section chiefs, division heads, and bureau directors to the top executive, and then descend the other chain step-by-step. In rapid industrial operations, this strict adherence causes catastrophic delays.

Fayol brilliantly solved this through **Fayol’s Bridge (The Gangplank)**: two employees at the same hierarchical level in different departments are authorized to communicate directly across scalar boundaries, provided their respective immediate superiors have approved the channel in advance and are kept promptly informed. Fayol’s Gangplank preserved the ultimate integrity of the scalar chain while injecting operational agility, resolving the bureaucratic paralysis that haunts Weber’s scalar hierarchy.`,
    sources: [
      { key: 'CONS', page: 'Fayol and Weber (p. 6–7)' },
      { key: 'NOTES', page: 'Fayol (p. 18–21); Weber (p. 22–24)' },
      { key: 'RS1', page: 'Fayol, General Principles of Management; Albrow, Bureaucracy, Chs. 2–3' }
    ]
  },
  {
    id: 'q7',
    title: 'Taylor’s Mental Revolution and the Bethlehem Steel Shovel Experiments',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Foundational',
    question: 'Discuss Frederick W. Taylor’s concept of the "Mental Revolution" in Scientific Management. How did the Bethlehem Steel shovel experiments empirically operationalize his four principles of management, and what were the broader human and labor consequences of his findings?',
    theories: ["Taylor's Scientific Management", "The Mental Revolution", "Bethlehem Steel Experiments"],
    answer: `In his 1912 testimony before the U.S. House of Representatives Special Committee, Frederick Winslow Taylor passionately asserted that Scientific Management does not consist of efficiency devices, stopwatches, or cost-accounting mechanisms. Rather, its very essence requires a complete **"Mental Revolution"** on the part of both workingmen and management.

Historically, industrial relations were characterized by continuous, hostile warfare: workers sought the highest possible wages for the least effort, while owners sought maximum output for the lowest possible pay. Taylor argued that both parties were destructively obsessed with how the existing "surplus" was divided. The Mental Revolution demanded that both sides cease this antagonistic division. Instead, by embracing scientific investigation and mutual cooperation, they could expand the total surplus to such an unprecedented magnitude that workers could receive substantially higher wages while owners achieved vastly lower production costs, eliminating the rationale for industrial strife.

Operationalization in the Bethlehem Steel Shovel Experiments:
At Bethlehem Steel, several hundred yard laborers shoveled diverse raw materials. Each worker owned and supplied his own shovel and used the same tool for very light materials such as rice coal and very heavy ones such as iron ore, so the load per shovelful varied enormously. Taylor observed that this was irrational, unscientific rule-of-thumb practice.

Taylor systematically operationalized his Four Principles:
1. Develop an Exact Science of Work: Two first-class shovelers were selected and timed at their ordinary fair pace across varying loads, showing that a first-class shoveler moved the most material in a day when the shovel load was about **21 pounds**. Taylor then manufactured specialized shovels: short, heavy scoops for dense iron ore and broad, light scoops for coal, keeping each load close to the 21-pound standard.
2. Scientifically Select and Train the Workman: Workers were medically examined, physically tested, and systematically trained in the optimal bodily mechanics of inserting, lifting, and swinging the shovel.
3. Bring Science and Workman Together: A central planning office issued daily instruction slips to each worker, detailing their workstation, assigned shovel, and specific tonnage quota.
4. Equal Division of Responsibility: Management assumed all intellectual burdens of planning, tool maintenance, route optimization, and scheduling, leaving workers free to execute the physical labor.

Results and Consequences:
- Economic Output: The lecture records that the cost of handling a ton fell from **7–8 cents to 3–4 cents**, even after counting the new clerical work, tool room, teaching, telephone system, implements, and higher wages. Taylor's own account in the reading adds that the yard force shrank to about 140 men, average tonnage per man rose from about 16 to 59 tons a day, and average daily earnings rose from about $1.15 to $1.88 (figures from Taylor's text, not from the lecture slides).
- Human and Labor Consequences: Despite efficiency triumphs, Taylorism provoked intense labor alienation. Workers felt transformed into unthinking physical automatons. The reduction of the yard force by several hundred men highlighted the social costs of unbridled efficiency. Taylor's assumption that money alone satisfies workers ignored social needs, triggering trade union strikes and federal regulatory scrutiny.`,
    sources: [
      { key: 'CONS', page: 'Taylor (p. 5–6)' },
      { key: 'NOTES', page: 'Taylor, mental revolution, shovel experiment (p. 4–10)' },
      { key: 'REV', page: 'Taylor (p. 2–4, 16, 19)' },
      { key: 'RS1', page: 'Taylor, What Is Scientific Management?; The Principles of Scientific Management' }
    ]
  },
  {
    id: 'q8',
    title: 'The Hawthorne Investigations: Methodological Phases and the Human Relations Revolution',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Foundational',
    question: 'Outline the four major methodological phases of the Hawthorne Studies (1927–1932) led by Elton Mayo and Fritz Roethlisberger. Explain the unexpected findings that dismantled classical techno-economic assumptions, and articulate why the "Bank Wiring Observation Room" proved the supremacy of the informal organization.',
    theories: ["Elton Mayo's Hawthorne Studies", "Hawthorne Effect", "Informal Organization & Peer Norms"],
    answer: `The Hawthorne Investigations, conducted between 1927 and 1932 at the Western Electric Hawthorne Works in Cicero, Illinois, represent the defining empirical turning point in the history of organizational theory, giving birth to the Human Relations Movement.

The Four Methodological Phases:
1. The Illumination Experiments:
These tested the classical assumption that output depends on the physical environment, in this case lighting. Output rose both in the test group, whose lighting was varied, and in the control group, whose lighting stayed constant, and it did not fall as expected when lighting was reduced. Physical conditions alone could not explain the results. (The illumination tests began before Mayo's team joined; the lecture dates the overall investigation 1927–1932.)

2. The Relay Assembly Test Room (1927–1929):
Six women assembling telephone relays were segregated in an experimental room. Researchers systematically varied rest breaks, working hours, bonus schemes, and meal provisions across multiple phases. Productivity rose continuously, reaching all-time highs even when all physical privileges were abruptly revoked. Elton Mayo concluded that the women had become a cohesive social unit: they were treated with respect, consulted by friendly researchers, freed from authoritarian surveillance, and felt a sense of social importance. This was later labelled the "Hawthorne effect"; the consolidated notes caution that the safer lesson is not that attention alone explains productivity, but that managers must study the social context of work.

3. The Massive Interviewing Program (1928–1930):
More than 20,000 employees were interviewed. When researchers shifted from rigid interrogations to non-directive, empathetic listening, employees disclosed deep emotional feelings regarding status, supervision, family stress, and dignity, proving that workplace grievances are often symptomatic of social maladjustment rather than objective physical defects.

4. The Bank Wiring Observation Room (1931–1932):
Fourteen male operators assembling switchboard banks were placed under unobtrusive observation with an individual-plus-group piecework financial incentive. Classical economics predicted that workers would maximize output to maximize earnings.

The Breakthrough of the Bank Wiring Room:
The researchers discovered that the formal financial incentive system was completely subordinated to the power of the **Informal Organization**:
- The men established an unwritten, informal daily output norm below what they could physically produce, systematically restricting output to protect slow workers and avoid management rate-cuts.
- The informal group strictly enforced compliance through social ostracism, ridicule, and "binging" (striking peers hard on the upper arm).
- Severe social penalties were applied to violators:
  - "Rate Busters" (who produced too much);
  - "Chiselers" (who produced too little);
  - "Squealers" (who carried complaints to the formal foreman).
- The Bank Wiring experiment demonstrated that workers are primarily social beings whose need for peer belonging, solidarity, and informal security far outweighs individual economic gain.

Lasting Legacy:
The lecture lists seven contributions: (1) a business organization is a social system, not just a techno-economic system; (2) employees are moved by psychological and social wants, so economic incentives are not the only motivator; (3) management must develop cooperative attitudes rather than rely on command; (4) participation, supported by two-way communication, becomes a key instrument; (5) productivity is linked to employee satisfaction; (6) group psychology matters, so management should rely more on informal group effort; and (7) the worker is a living machine far more important than the inanimate one, so morale is the key to higher output. Management can no longer rely purely on formal charts, time studies, or monetary incentives.`,
    sources: [
      { key: 'CONS', page: 'Section 2.2 (p. 8)' },
      { key: 'NOTES', page: 'Hawthorne Experiments Notes (p. 24-25)' },
      { key: 'REV', page: 'Hawthorne Summary (p. 10-11)' }
    ]
  },
  {
    id: 'q9',
    title: 'Herzberg’s Two-Factor Theory and Job Enrichment in Public Bureaucracies',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Intermediate',
    question: 'Examine Frederick Herzberg’s Two-Factor Theory by distinguishing Hygiene factors from Motivators. Why does Herzberg insist that traditional management techniques (such as across-the-board pay raises, improved office amenities, and sensitivity training) represent mere "KITA" (Kick In The Ass) rather than true motivation? Detail the operational principles of "Vertical Job Enrichment" versus "Horizontal Job Enlargement" within a public administrative setting.',
    theories: ["Herzberg's Motivator-Hygiene Theory", "KITA (Kick In The Ass)", "Job Enrichment vs. Job Enlargement"],
    answer: `Frederick Herzberg fundamentally transformed organizational psychology by demonstrating that **job satisfaction and job dissatisfaction are not opposite ends of a single continuum**, but are governed by two distinct sets of independent human needs.

Hygiene Factors versus Motivators:
- **Hygiene (Extrinsic / Context) Factors:** Derived from the animal drive to avoid pain, discomfort, and deprivation in the work environment. They include base salary, job security, company administrative policies, physical working conditions, technical supervision, and peer relationships. 
  - When hygiene factors are deficient or unfair, employees experience acute dissatisfaction.
  - However, when hygiene factors are fully optimized (generous salaries, comfortable offices, friendly bosses), employees do not become intrinsically motivated; they merely achieve a neutral psychological state of **zero dissatisfaction**. Herzberg compared hygiene factors to environmental sanitation: removing sewage prevents cholera, but it does not produce physical vitality.
- **Motivator (Intrinsic / Content) Factors:** Derived from the distinctively human need for psychological growth, self-actualization, and achievement. They are embedded directly in the work itself: personal achievement, meaningful recognition, the intrinsic challenge of the work, increased responsibility, and advancement.
  - Only motivators possess the capacity to stimulate genuine internal motivation, sustained drive, and pride of workmanship.

The Fallacy of KITA:
Herzberg scathingly criticized conventional management efforts to stimulate performance through external pushes—which he termed **KITA (Kick In The Ass)**:
- *Negative Physical/Psychological KITA:* Coercion, threats of dismissal, and reprimands. Breeds toxic hostility and requires constant surveillance.
- *Positive KITA:* Across-the-board pay raises, fringe benefits, company picnics, and sensitivity training.
Herzberg pointed out that positive KITA is merely a seduction. His illustration is a dog that moves when kicked: the dog moves, but the one who is motivated is the person doing the kicking. When the external push or financial carrot stops, the employee stops. True motivation occurs only when the employee has their own internal generator—activated solely by intrinsic motivators.

Job Enrichment versus Job Enlargement:
In response, Herzberg pioneered **Vertical Job Enrichment**:
- *Horizontal Job Enlargement ("Adding Zero to Zero"):* Merely expanding the quantity of routine, unchallenging tasks assigned to a worker (e.g., forcing a clerk who types 50 standard forms a day to type 80 standard forms, or adding a second filing duty). It merely compounds boredom and exhaustion.
- *Vertical Job Enrichment:* Redesigning the work to inject higher levels of responsibility, autonomy, and closure. 
In a public agency, vertical enrichment is operationalized by:
1. Removing controls while retaining accountability (granting case officers final signature authority on standard approvals without multi-tiered supervisor sign-offs);
2. Assigning complete, natural units of work (allowing an officer to manage an entire community development grant from application to post-audit);
3. Providing direct feedback on results (giving case officers direct access to client satisfaction data rather than routing it through management);
4. Introducing new and challenging tasks that encourage continuous professional development.

How the lecture presents it: the class slides give a two-step process (first remove hygiene stressors such as petty policies, unfair pay gaps, bullying, and cliques; then boost satisfaction through job enrichment, job enlargement, and employee empowerment), and they treat enlargement as a way to add variety rather than as "adding zero to zero." They also list the theory's limitations: it was developed for white-collar workers, ignores individual situations and perceptions, assumes satisfaction leads to productivity, offers no objective measure of satisfaction, and is open to bias. A strong answer states Herzberg's own critique of enlargement and acknowledges these limits.`,
    sources: [
      { key: 'CONS', page: 'Herzberg (p. 8)' },
      { key: 'NOTES', page: 'March 3 notes: Herzberg (p. 26–27)' },
      { key: 'RS1', page: 'Herzberg, One More Time: How Do You Motivate Employees?' }
    ]
  },
  {
    id: 'q10',
    title: 'The Administrative Lifecycle (PIME): Planning, Implementation, Monitoring, and Evaluation',
    divisionId: 'D4',
    divisionLabel: 'Division IV: Functions of Administration',
    difficulty: 'Intermediate',
    question: 'Trace the complete administrative lifecycle through the PIME framework (Planning, Implementation, Monitoring, Evaluation, and Revision). Using a concrete public sector scenario—such as a municipal initiative to digitize small business licensing—explain how a failure in the Monitoring phase corrupts the Evaluation phase and paralyzes the continuous learning loop.',
    theories: ["PIME Administrative Framework", "Cybernetic Feedback Loops", "Single-Loop vs. Double-Loop Learning"],
    outOfScope: true,
    answer: `The PIME framework (Planning, Implementation, Monitoring, and Evaluation) conceptualizes public administration as an integrated, closed-loop cybernetic lifecycle. Administrative success depends upon the seamless, iterative flow of intelligence across all four stages:

1. The PIME Lifecycle in a Municipal Business Licensing Initiative:
- **Planning:** The city council identifies that archaic manual licensing drives local entrepreneurs into the informal economy. Planning establishes clear diagnostic baselines, secures software vendors, budgets municipal resources, and defines measurable SMART targets (e.g., reducing licensing turnaround time from 28 days to 48 hours within six months, with a 95% user satisfaction rating).
- **Implementation:** The digital portal is launched, cloud infrastructure is deployed, licensing personnel are trained in software verification, and public awareness campaigns direct entrepreneurs to online filing kiosks.
- **Monitoring:** The continuous, real-time tracking of operations while implementation is actively underway. Project directors track weekly portal uptime, application submission rates, processing queues, system crash logs, and localized complaints.
- **Evaluation:** The systematic ex-post assessment of mature program outcomes against original objectives: assessing effectiveness (did turnaround drop to 48 hours?), efficiency (did municipal cost per license fall?), and equity (did micro-vendors in rural barangays access the system as easily as wealthy downtown corporations?).
- **Revision / Continuous Learning Loop:** Using evaluation findings to inform the next planning cycle—modifying system architecture, revising municipal ordinances, and adapting workflows to emerging needs.

2. The Cascading Failure: How Broken Monitoring Corrupts Evaluation and Paralyzes Learning:
Suppose the municipal project management team neglects robust **Monitoring**. Line supervisors fail to track daily queue times or verify whether frontline clerks are actually reviewing digital submissions. Instead of using automated tracking dashboards, the agency relies on infrequent, self-reported monthly summaries. 

Consequently, severe operational defects remain hidden:
- Frontline clerks, overwhelmed by the new interface, secretly print out digital applications and re-enter them manually into legacy paper logbooks, creating an unmonitored six-week backlog.
- Rural micro-entrepreneurs face continuous portal timeout errors on low-bandwidth mobile connections, abandoning applications unrecorded.

When the **Evaluation** phase commences at the end of the year, evaluators receive corrupted, distorted, or missing data:
1. False Positive Bias: Evaluators reviewing closed digital cases conclude that "average processing time was 24 hours," completely blind to the thousands of stalled paper workarounds and abandoned applications hidden by the lack of monitoring.
2. Inability to Attribute Causality: Evaluators cannot determine *why* total licensed businesses failed to reach targets. Did the policy fail because the software was defective, because training was poor, or because fees were too high? Without real-time monitoring records, evaluation becomes pure speculation.
3. Paralysis of the Revision Loop: The learning cycle breaks down. City leaders either cancel a fundamentally sound digital reform based on distorted failure metrics, or blindly renew funding for a broken implementation. The continuous feedback loop collapses, freezing administration in single-loop error repetition.`,
    sources: [
      { key: 'CONS', page: 'Functions of Administration (p. 14–15)' }
    ]
  },
  {
    id: 'q11',
    title: 'Classical Rationalism versus Human Relations: Henry Gantt as the Historical Bridge',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Integrative',
    question: 'Contrast the foundational assumptions regarding human labor and organizational control held by the Classical School with those of the Human Relations School. How does the work of Henry Laurence Gantt—specifically his transition from the differential piece-rate to the task-and-bonus system and his late-career writings on industrial service—serve as the vital historical bridge connecting these two paradigms?',
    theories: ["Classical School Rationalism", "Human Relations Movement", "Gantt's Task-and-Bonus", "Industrial Social Responsibility"],
    answer: `The historical evolution from the Classical School to the Human Relations School represents the fundamental paradigm shift of modern management thought:

Foundational Contrast:
- **Classical School (Taylor, Fayol, Weber):** Assumed an engineered, closed-system rationalism. Human beings were viewed primarily as economic instruments (*homo economicus*) characterized by natural indolence and opportunistic soldiering. Organizational control was achieved externally through rigorous time-study, mechanical standardization, scalar hierarchy, and financially coercive incentive schemes. The enterprise was conceived as a techno-economic machine.
- **Human Relations School (Mayo, Roethlisberger, Maslow):** Assumed an open, social-system paradigm. Workers were recognized as complex social beings driven by needs for belonging, peer recognition, psychological growth, and dignity. Organizational control was achieved internally through informal group norms, participatory leadership, and cooperative workplace morale. The enterprise was conceived as a social human community.

Henry Laurence Gantt as the Vital Historical Bridge:
Historically, students often treat Taylorism and Human Relations as abruptly separated by the 1927 Hawthorne Studies. In reality, **Henry Laurence Gantt served as the essential intellectual and practical bridge** that paved the way for Human Relations within the very heart of the Classical tradition.

Gantt began as Taylor’s closest associate at Midvale and Bethlehem Steel, thoroughly mastering time study, standardization, and operational efficiency. However, Gantt possessed a profound humanitarian sensibility that recognized the psychological and ethical dead-end of Taylor's authoritarianism:
1. Replacing "To Drive" with "To Teach and To Lead":
Taylor’s differential piece-rate was an instrument of economic pressure: workers who missed the standard were paid a low rate (80% in the lecture’s illustration) with no guaranteed minimum. Gantt broke decisively with this cruelty by introducing a **guaranteed daily base wage**, establishing a psychological floor of security. Gantt added a substantial bonus for meeting the standard, turning incentives into an uplifting aspiration rather than a punitive threat.
2. The Social Dynamics of Supervisory Coaching:
Gantt recognized the power of social relationships decades before Hawthorne. By giving the foreman an extra financial bonus for every subordinate who achieved the bonus, Gantt transformed the supervisor from a punitive slave-driver into an empathetic instructor and coach. Gantt realized that industrial efficiency depends on cultivating institutional "habits of industry and cooperation"—acknowledging that habit, pride, and social coaching govern output.
3. Social Responsibility (*The Parting of the Ways*):
In his final masterwork, Gantt anticipated modern corporate governance and public value theory. He warned that if the industrial system operated solely for private monetary profit while neglecting its moral obligation to render authentic service to the community, democratic society would dismantle it. Gantt declared that the ultimate test of any administrative system is its capacity to serve human welfare.

By humanizing incentives, elevating supervisory coaching, and asserting the primacy of public service, Gantt bridged the gap between mechanical Taylorism and the social humanism of Elton Mayo.`,
    sources: [
      { key: 'CONS', page: 'Gantt (p. 6); Human Relations (p. 8)' },
      { key: 'NOTES', page: 'Taylor vs Gantt; Gantt’s contributions (p. 10–12)' },
      { key: 'RS1', page: 'Gantt, Training Workmen in Habits of Industry and Cooperation; The Parting of the Ways' }
    ]
  },
  {
    id: 'q12',
    title: 'J. Stacy Adams’ Equity Theory: Relational Comparisons and Fairness in the Civil Service',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Intermediate',
    question: 'Explain J. Stacy Adams’ Equity Theory of motivation. How do employees cognitively calculate equity ratios, who do they select as referent others, and what predictable behavioral and psychological adaptations occur when public servants perceive acute underpayment inequity?',
    theories: ["Adams's Equity Theory", "Underpayment & Overpayment Inequity", "Referent Selection & Cognitive Distortion"],
    answer: `J. Stacy Adams formulated Equity Theory to explain how perceptions of social justice and relational fairness govern human motivation and behavior at work. Adams demonstrated that employees do not judge their compensation in an objective economic vacuum; rather, motivation is fundamentally comparative and relational.

The Cognitive Equity Calculation:
An employee continuously calculates a subjective ratio of their perceived job outcomes to perceived job inputs, and compares this ratio against the perceived ratio of a chosen **referent other**: their own outcomes relative to their own inputs, compared with the referent's outcomes relative to the referent's inputs.
- **Inputs:** The contributions the employee perceives they invest in the enterprise: working hours, physical effort, technical competence, educational credentials, loyalty, enthusiasm, emotional resilience, and personal sacrifice.
- **Outcomes:** The returns the employee receives from the enterprise: salary, performance bonuses, formal recognition, merit citations, job security, promotions, and prestigious office allocations.

Referent Selection:
Employees compare themselves against four primary referent categories:
1. *Self-Inside:* Their own past experiences in a different position within the same agency.
2. *Self-Outside:* Their own past experiences in a previous organization (e.g., prior private sector employment).
3. *Other-Inside:* Colleagues, peers, or supervisors within the same department or civil service bureau.
4. *Other-Outside:* Professionals with similar education and age working in other government branches or the external private economy.

Behavioral and Psychological Adaptations to Underpayment Inequity:
When an employee perceives that their outcome-to-input ratio is lower than their referent's, they experience an acute psychological state of **inequity distress (anger and resentment)**. Because inequity is psychologically distressing, the employee is powerfully motivated to restore equity through predictable adaptations:
1. *Altering Inputs (Behavioral):* The most immediate response. The public servant reduces work effort, arrives late, takes extended lunch breaks, refuses voluntary overtime, and withholds creative problem-solving (*"I'm not paid enough to care"*).
2. *Altering Outcomes (Behavioral):* Lobbying for reclassification, filing formal union grievances, aggressively demanding perks, or—in pathological public environments—engaging in bureaucratic corruption, bribery, and petty theft to supplement income.
3. *Cognitive Distortions of Inputs/Outcomes (Psychological):* Rationalizing the disparity to cope with cognitive dissonance (e.g., *"My favored colleague actually has dangerous political connections that I wouldn't want to handle anyway"*).
4. *Distorting the Referent's Inputs/Outcomes:* Artificially inflating the perceived sacrifices or credentials of the referent to justify the imbalance.
5. *Changing the Referent Other:* Shifting comparisons to someone even less fortunate to temporarily relieve feelings of deprivation.
6. *Leaving the Field:* Chronic absenteeism, requesting transfers to other bureaus, or resigning entirely from the civil service.

Overpayment inequity works in the opposite direction: an employee who believes they receive more than a referent for the same inputs may feel tension and respond by working harder or reinterpreting their inputs. The consolidated notes stress that both under-reward and over-reward can affect motivation.

Administrative Implication:
Public managers must realize that secrecy around evaluations and arbitrary political promotions instantly trigger perceptions of gross underpayment inequity, actively destroying the productivity of high-performing civil servants.`,
    sources: [
      { key: 'CONS', page: 'Equity Theory (p. 9)' },
      { key: 'NOTES', page: 'March 10 notes: Adams (p. 29–31)' },
      { key: 'RS1', page: 'Adams, Towards an Understanding of Inequity' }
    ]
  },
  {
    id: 'q13',
    title: 'The Open-Systems Approach in Public Administration: Katz & Kahn’s Dynamic Model',
    divisionId: 'D2C',
    divisionLabel: 'Division II: Evolution of Management Thought (Modern)',
    difficulty: 'Integrative',
    question: 'Examine Daniel Katz and Robert L. Kahn’s open-systems framework of organizations. Detail the Input-Throughput-Output-Feedback cycle, explicate the concepts of "Negative Entropy" and "Equifinality," and demonstrate how this perspective prevents public managers from committing the error of localized sub-optimization.',
    theories: ["Katz & Kahn Open Systems Theory", "Input-Throughput-Output-Feedback", "Negative Entropy & Equifinality", "Sub-Optimization"],
    answer: `Daniel Katz and Robert L. Kahn revolutionized organizational sociology by importing Ludwig von Bertalanffy’s General Systems Theory into the study of human enterprises. In *The Social Psychology of Organizations* (1966), they proved that human organizations cannot be treated as closed, self-contained mechanical clocks. Rather, they are **open social systems** that maintain life and order exclusively through continuous, energetic transactions with their external environment.

The Cybernetic Input-Throughput-Output-Feedback Cycle:
1. **Inputs:** The open system continuously imports diverse forms of energy, resources, and signals from its environment: public tax revenues, civil service recruits, citizen policy mandates, raw technology, and political legitimacy.
2. **Throughput (Transformation Process):** Subsystems within the agency process and reorganize this imported energy through core technologies, administrative procedures, decision-making deliberations, and frontline client interactions.
3. **Outputs:** The agency exports transformed energy back into the surrounding environment: delivered social services, educated graduates, paved highways, adjudicated disputes, and public health outcomes.
4. **Feedback Loops:** Outputs generate environmental reactions (citizen satisfaction, legislative hearings, media scrutiny, revised tax yields) that return to the agency as new informational inputs, signaling whether the agency must calibrate its internal operations.

Negative Entropy and Equifinality:
- **Negative Entropy (Negentropy):** The Second Law of Thermodynamics dictates that all closed physical systems inevitably wind down into maximum entropy—decay, disorganization, chaos, and ultimate death. However, an open system possesses the unique capacity to arrest this natural decay by importing more energy from its environment than it expends in output. By continually securing fresh citizen trust, legislative appropriations, and high-caliber human talent, a public agency generates **negative entropy**, sustaining organizational vitality across generations.
- **Equifinality:** In closed mechanical systems, there is a deterministic cause-and-effect link where a given end state can only be reached through one specific initial path. In open social systems, **equifinality demonstrates that an organization can achieve the same final objective from different initial conditions and through a multiplicity of divergent operational pathways**. This demolishes the classical dogmatic pursuit of the "one best way."

Preventing the Error of Localized Sub-Optimization:
A major pathology in public administration is **sub-optimization**: a department head optimizes the narrow technical efficiency of their isolated sub-unit in a manner that damages the performance of the organization as a whole.
- For example, if a public health agency's central procurement bureau ruthlessly slashes costs and standardizes purchasing (achieving a localized triumph of "purchasing efficiency"), but buys cheap medical supplies that fail in emergency operating rooms, the broader hospital system experiences catastrophic treatment delays and loss of life.
- The open-systems framework forces public managers to think holistically: every sub-unit is an interdependent subsystem. An administrative decision can only be judged by its aggregate contribution to the total system's public value creation and environmental adaptation.`,
    sources: [
      { key: 'CONS', page: 'Systems Approach (p. 10–11)' },
      { key: 'NOTES', page: 'March 17 notes: Modern Theories introduction only (p. 32)' },
      { key: 'RS1', page: 'Katz & Kahn, Organizations and the System Concept (1966)' }
    ]
  },
  {
    id: 'q14',
    title: 'The Contingency Perspective: Rejection of Universalism and Situational Alignment',
    divisionId: 'D2D',
    divisionLabel: 'Division II: Evolution of Management Thought (Emerging)',
    difficulty: 'Intermediate',
    question: 'Articulate the central axiom of the Contingency Perspective in management theory. Why does it explicitly reject both Classical universalism ("one best way") and Human Relations dogmatism? Detail the core environmental, technological, and structural contingencies that public leaders must evaluate before adopting either mechanistic or organic administrative arrangements.',
    theories: ["Contingency Theory (Fiedler, Lawrence & Lorsch)", "Mechanistic vs. Organic Systems (Burns & Stalker)", "Situational Alignment"],
    outOfScope: true,
    answer: `The Contingency Perspective represents the definitive intellectual maturation of modern administrative science, crystallizing through the empirical research of Fred Fiedler (the name the lecture associates with it) and, in the wider literature, Paul Lawrence, Jay Lorsch, Tom Burns, and G.M. Stalker.

The Central Axiom:
The foundational premise of Contingency Theory is that **there is no single best way to organize, lead, or make decisions in an enterprise**. Methods, structures, and leadership styles that produce spectacular success in one institutional setting will trigger disastrous administrative failure in another. Organizational effectiveness is strictly a function of achieving a dynamic **"goodness-of-fit" (situational alignment)** between internal administrative designs and external environmental constraints.

Rejection of Universalist Dogmatism:
The Contingency Perspective fundamentally dismantles two competing historical orthodoxies:
1. *Rejection of Classical Universalism:* Classical theorists (Taylor, Fayol, Weber) dogmatically asserted that universal principles of management (strict hierarchy, unity of command, narrow span of control, exhaustive written rules) applied to all organizations at all times. Contingency theory proved that rigid mechanistic bureaucracy becomes paralyzing red tape when applied in volatile, dynamic environments.
2. *Rejection of Human Relations Dogmatism:* Early human relations advocates reacted against classical engineering by implying that democratic participation, flat structures, and supportive leadership were universally superior. Contingency theory proved that in high-stakes, time-sensitive emergency operations (e.g., firefighting, armed military operations, surgical trauma intervention), democratic debate paralyzes execution, and decisive, structured command is essential for survival.

Core Contingency Dimensions for Administrative Design:
Public managers must diagnose four critical situational parameters before selecting an administrative structure:
1. **Environmental Uncertainty and Volatility:**
   - *Stable, Predictable Environments:* Public agencies handling routine legal transactions (property title registration, vital statistics records) thrive under **Mechanistic Structures**: centralized authority, standardized SOPs, functional specialization, and vertical scalar communication.
   - *Turbulent, Unpredictable Environments:* Agencies confronting dynamic crises (disaster risk reduction, epidemic disease surveillance, cybersecurity response) require **Organic Structures**: decentralized decision-making, wide spans of control, horizontal communication, and cross-functional teams coordinating via mutual adjustment.
2. **Nature of Core Technology and Tasks:**
   - Highly routine, programmable tasks allow classical standardization; highly complex, non-routine tasks requiring professional judgment (social work casework, judicial adjudication) demand high employee discretion.
3. **Organizational Size and Dispersion:**
   - Massive national ministries inevitably require formal administrative structures and rules to maintain accountability across thousands of dispersed civil servants, whereas small municipal taskforces function effectively through informal collaboration.
4. **Task-Maturity and Professional Competence of Personnel:**
   - Highly trained professionals thrive under empowering, Theory Y delegative leadership; inexperienced, untrained staff require structured direction and clear operational guidelines.`,
    sources: [
      { key: 'CONS', page: 'Contingency Perspective (p. 11)' },
      { key: 'OTHER', page: 'Burns & Stalker; Lawrence & Lorsch (not in the course materials)' }
    ]
  },
  {
    id: 'q15',
    title: 'Grand Theoretical Synthesis: Harmonizing Structure, Humanity, and Environmental Adaptation',
    divisionId: 'D2D',
    divisionLabel: 'Division II: Evolution of Management Thought (Synthesis through Emerging)',
    difficulty: 'Integrative',
    question: 'Develop a grand theoretical synthesis integrating the Classical School, the Human Relations School, the Systems Approach, and Contingency Theory. Demonstrate how a contemporary public sector leader must synthesize these four paradigms to successfully execute a major public health reform that simultaneously demands rigorous logistical efficiency, compassionate community trust, and rapid adaptability.',
    theories: ["Grand Synthesis: Classical, Human Relations, Systems, and Contingency Paradigms", "Public Health Governance"],
    outOfScope: true,
    answer: `The historical trajectory of administrative thought is not a graveyard of obsolete ideas; rather, it forms an integrated, cumulative toolkit. A sophisticated public administrator must act as an institutional conductor, harmonizing the structural rigor of the Classical School, the psychological empathy of the Human Relations School, the holistic integration of the Systems Approach, and the situational agility of Contingency Theory.

Consider a major public health reform: executing a national pandemic vaccination and healthcare delivery campaign across diverse urban and rural communities. Executing this massive mandate requires synthesizing all four schools:

1. The Classical Contribution (Logistical Precision and Accountability):
Without classical foundations, the campaign descends into logistical anarchy. Taylor’s time-study and workflow standardization ensure that cold-chain vaccine storage, needle preparation, and inventory auditing operate with zero waste. Fayol’s principles of unity of direction and clear scalar authority ensure that national directives flow unambiguously to regional health directors. Weber’s rational-legal bureaucracy provides strict accountability: ensuring vaccines are administered based on transparent medical vulnerability criteria rather than political patronage, and documenting every batch through systematic records (Metcalfe).

2. The Human Relations Contribution (Frontline Morale and Community Trust):
A purely classical vaccination campaign will fail if healthcare workers burn out and citizens distrust state medicine. Elton Mayo’s insights remind leadership that vaccination clinics are human social systems. Nurses and community health workers cannot be driven like machines; they require supportive leadership, empathetic listening, and team camaraderie. Furthermore, community acceptance depends on engaging informal neighborhood leaders and respect for local cultural norms. Applying Herzberg’s motivators (celebrating clinic achievements, granting nurse autonomy in outreach) and Adams’s equity principles (ensuring frontline hazard pay is distributed transparently without favoritism) sustains moral commitment across exhausted medical staff.

3. The Systems Contribution (Holistic Subsystem Integration):
Katz and Kahn’s open-systems framework prevents localized sub-optimization. Leadership views the vaccination drive as an open cybernetic loop: importing international vaccine shipments and budgetary resources (Inputs); coordinating supply-chain logistics, municipal transport, public education, and clinical injections (Throughput); delivering immunized citizens and community health safety (Outputs); and continuously monitoring adverse reactions, breakthrough infections, and public hesitancy (Feedback). If cold-chain storage fails, the clinic subsystem is immediately alerted; if public hesitancy surges, communication subsystems recalibrate outreach messaging in real time.

4. The Contingency Contribution (Situational Alignment):
The public health leadership rejects universal "one-best-way" dogmatism:
- In dense metropolitan mega-cities with high digital literacy and reliable internet, the agency deploys a mechanistic, highly automated digital booking portal and high-throughput mass vaccination stadiums.
- In remote, mountainous indigenous communities with no cellular connectivity and deep historical distrust of government authorities, the agency pivots to an organic, decentralized contingency model: deploying mobile medical foot-patrols who collaborate with tribal elders and adapt delivery schedules to agricultural harvest seasons.

Conclusion:
Classical theory provides the **structural backbone**; Human Relations provides the **vital heartbeat and social soul**; Systems theory provides the **interconnected neural network**; and Contingency theory provides the **adaptive cognitive intelligence**. True administrative excellence lies in synthesizing these four lenses into an integrated, humane, and resilient public governance system.`,
    sources: [
      { key: 'CONS', page: 'Section 2.1-2.4 & Essay Integration (p. 5-12, 16)' },
      { key: 'NOTES', page: 'Classical through Human Relations (p. 4–31)' },
      { key: 'RS1', page: 'Classics in Management; Classics of Org Theory' }
    ]
  },
  {
    id: 'q16',
    title: 'Drucker’s Management by Objectives and Self-Control in a Public Agency',
    divisionId: 'D2C',
    divisionLabel: 'Division II: Evolution of Management Thought (Modern)',
    difficulty: 'Integrative',
    question: 'Explain Peter F. Drucker’s Management by Objectives (MBO), including what he meant by "self-control." How does MBO differ from the way Taylor and Fayol located control in management, and how does it build on Locke’s goal-setting theory and McGregor’s Theory Y? Apply MBO to a city treasurer’s office whose performance is judged only by the number of receipts it issues, and identify the limits of MBO in public administration.',
    theories: ["Drucker's Management by Objectives and Self-Control", "Locke's Goal-Setting Theory", "McGregor's Theory Y", "Taylor and Fayol on Control"],
    answer: `Management by Objectives (MBO) is Drucker's answer to a question the Classical School left open: how can an organization of specialists be directed toward common results without supervising every move? In *The Practice of Management* (1954), Drucker argued that each manager's work should be defined by the objectives of the larger unit, and that those objectives should be set with the participation of the person who must achieve them. Superior and subordinate agree on the results expected in the subordinate's area, how they will be measured, and when they will be reviewed. Performance is then judged against results, not against visible activity.

**Self-control** is the half of the idea that is easiest to miss. Once people know their objectives and receive information about their own performance directly, they can measure and correct their own work. Control shifts from domination by a supervisor to self-direction informed by results. MBO therefore depends on performance data flowing to the person doing the work, not only upward to management.

The contrast with the Classical School is sharp. Taylor placed planning in management's hands and gave workers detailed instructions, so control meant conformity to a method designed by someone else. Fayol treated control as a managerial function that checks whether everything happens according to plans and standards. MBO keeps the plan and the standard but moves target-setting and much of the checking to the person responsible. It also echoes Urwick's principle of the objective: every part of an organization must express the purpose of the undertaking.

MBO also builds on the Human Relations School. Locke's goal-setting theory, covered in the lecture, holds that specific, challenging goals with feedback give direction and improve performance; MBO turns that finding into a management system. McGregor's Theory Y supplies its assumption that people will exercise self-direction toward objectives they are committed to. A Theory X manager who simply imposes targets is running a quota system with MBO paperwork.

Applied to the treasurer's office, counting receipts measures activity, not results. Under MBO, the treasurer and each section head would agree on objectives such as collection efficiency, average waiting time, accuracy of assessments, and delinquent accounts resolved, and each section would receive its own monthly figures so it can correct course without waiting for a reprimand.

MBO has clear limits in government. Many public objectives (fairness, legality, trust) are hard to measure, so measurable targets can crowd out important unmeasured work. Targets can be gamed. Budget and civil-service rules limit the discretion that self-control requires. And objectives "agreed" inside a strict hierarchy are often imposed in practice, which defeats the method. MBO works best when objectives are genuinely negotiated, measures are balanced, and reviews are used for learning rather than punishment.`,
    sources: [
      { key: 'RS1', page: 'Drucker, The Practice of Management (1954), last Modern Management entry' },
      { key: 'NOTES', page: 'No Drucker/MBO slide found; Urwick objective (p. 21); Locke (p. 31)' },
      { key: 'CONS', page: 'Goal-Setting Theory (p. 9)' }
    ]
  },
  {
    id: 'q17',
    title: 'From Division of Labor to Records, Measurement, and Teaching',
    divisionId: 'D1',
    divisionLabel: 'Division I: History of Administration',
    difficulty: 'Integrative',
    question: 'Trace the progression in early management thought from the division of labor (Micius, Adam Smith, Charles Babbage) to Captain Henry Metcalfe’s systematic records, Frederick W. Taylor’s scientific measurement, and Henry L. Gantt’s emphasis on teaching and cooperation. What problem did each contributor solve, what new problem did each solution create, and why is this sequence better understood as accumulation than as replacement?',
    theories: ["Micius, Smith and Babbage on Division of Labor", "Metcalfe's Systematic Records", "Taylor's Scientific Measurement", "Gantt's Teaching and Cooperation"],
    answer: `Early management thought can be read as a chain in which each solution created the problem the next contributor tried to solve.

The starting problem was output. Micius had already argued that a system lets even unskilled people achieve what otherwise depends on individual dexterity. Adam Smith showed that specialization raises output, lowers the cost of goods, and shortens training, since each worker learns one portion of the work. Babbage added a cost argument: highly skilled, highly paid workers should do only the tasks that need their skill, while cheaper labor handles simple steps, and small repeatable tasks are easier to mechanize. The new problem was coordination. Fragmented work must be brought together, and someone has to know what each part is doing.

Metcalfe met exactly that problem at Frankford Arsenal. Job orders were often given verbally, foremen kept informal memorandum books, and work was sometimes lost track of entirely. His answer was systematic records: a system of shop orders kept by foremen, storekeepers, and clerks, and cards in place of bound books so information could be classified and consolidated. He argued that administration rests on principles discoverable by diligent observation and continuous recording. Records gave management a memory, but they described what had happened; they did not say what should happen.

Taylor supplied the standard. Through time study he replaced rule-of-thumb with measured methods, selected and trained workers, and divided responsibility so that management planned and workers executed. The consolidated notes put the distinction precisely: Metcalfe records organizational activity; Taylor measures work performance against standards. In the shovel experiment, the cost of handling a ton fell from about 7–8 cents to 3–4 cents. Yet measurement enforced through a differential piece rate with no guaranteed minimum tended to drive workers rather than develop them, which fed distrust and union opposition.

Gantt addressed that human problem without abandoning the standard. His task-and-bonus system guaranteed the day wage, added a bonus for completing the task, and turned the foreman into an instructor who was rewarded when workers succeeded. As the lecture quotes him, the policy of the future would be "to teach and lead."

The sequence is accumulation, not replacement. Each step kept its predecessor: Gantt used Taylor's standards, Taylor needed records, and records presupposed divided work. A public office today still needs all four: a clear division of tasks, reliable records, measured service standards, and supervisors who teach. In an essay, the point to make is that each contributor answered the weakness of the last while depending on its strengths.`,
    sources: [
      { key: 'NOTES', page: 'Micius, Smith (p. 2–3); Taylor, Gantt (p. 4–12); Babbage, Metcalfe (p. 12–14)' },
      { key: 'CONS', page: 'Sections 1.3 and 2.1 (p. 4–6)' },
      { key: 'REV', page: 'Review questions (p. 19–20)' }
    ]
  },
  {
    id: 'q18',
    title: 'Captain Henry Metcalfe and the Science of Administration',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Foundational',
    question: 'Explain Captain Henry Metcalfe’s contribution to management. What administrative problems did he find at Frankford Arsenal, how did he distinguish the art of administration from its science, and how did his system of shop orders and card records address those problems? Apply his ideas to a provincial engineering office that cannot trace the status of its job orders.',
    theories: ["Metcalfe's Science of Administration", "System of Administration of Shop Orders", "Card System of Records"],
    answer: `Captain Henry Metcalfe (1847–1927), a U.S. Army ordnance officer and inventor, is classified in the lecture as a pre-classical contributor. His importance lies in a simple but radical claim: administration can be studied, because the causes of good and bad results can be found in a continuous record of what actually happens.

**The problem.** When Metcalfe became officer-in-charge of Frankford Arsenal in the late 1870s, its basic managerial problem was the lack of written records. As the lecture quotes Chatfield (1996), production records were informal memorandum books carried by shop foremen; job orders were often authorized verbally, only cursory data were kept, and orders were sometimes lost track of entirely. Neither the foremen's jottings nor the formal shop ledger could record shop-floor events as they happened, so management could not know costs, progress, or responsibility.

**Art and science.** In *The Cost of Manufactures and the Administration of Workshops, Public and Private* (1885), Metcalfe drew a general distinction: art seeks to produce certain effects, while science investigates the causes of those effects. Running arsenals and workshops is in great measure an art, but it depends on applying certain principles to a great variety of cases, and those principles together make up a "science of administration." They can be found by recording observations and experiences, and by diligent observation over time.

**The system.** After analyzing the arsenal's existing organization, Metcalfe proposed a new organization and a system of administration of shop orders. Foremen, storekeepers, and clerks each kept defined books and papers; foremen, for example, filed reports of fabrication and reports of material returned to store. He then proposed cards instead of bound books, which, as the consolidated notes put it, allowed information to be classified and consolidated. The senior reviewer sums up his contribution as recording production events and experiences and using them for improvement.

**Why it matters.** Metcalfe's records came before Taylor's measurement. The consolidated notes draw the line clearly: Metcalfe records organizational activity, while Taylor measures performance against standards. Standards need data, and Metcalfe showed how to collect it.

**Application.** A provincial engineering office that cannot trace its job orders has Frankford's problem. Following Metcalfe, every job order should be written and numbered when it is authorized; each unit (field engineer, warehouse, records clerk) should log defined events against that number; and the records should be sortable so management can see pending orders, materials used, and delays. A digital tracker is a modern card system.

**Limitation.** Records describe but do not evaluate. Paperwork can multiply without improving decisions, and records used only to find fault invite incomplete entries. Records serve administration only when someone analyzes them, which is the step Taylor later took.`,
    sources: [
      { key: 'NOTES', page: 'Feb 3 notes: Metcalfe (p. 13–14)' },
      { key: 'REV', page: 'Metcalfe (p. 5–6, 18–20)' },
      { key: 'CONS', page: 'Metcalfe (p. 5)' },
      { key: 'RS1', page: 'Metcalfe, The Science of Administration' }
    ]
  },
  {
    id: 'q19',
    title: 'Soldiering, Its Causes, and the Case Against Taylor',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'Taylor’s Principles of Scientific Management starts from the problem of workers who regard it as their duty "to go slow instead of to go fast." Explain the causes of this soldiering as Taylor presented them and how Scientific Management proposed to remove them. Then evaluate Scientific Management using the criticisms discussed in class, including the systematic-management view of Church and Alford. Are the criticisms fatal, or does something of Taylor survive?',
    theories: ["Taylor's Scientific Management", "Soldiering", "The Case Against Taylor", "Church and Alford's Systematic Management"],
    answer: `Taylor's starting point was that soldiering, the deliberate restriction of output, was not simple laziness but a rational response to a mistaken belief and to bad management. As the lecture records his view, "That is our fault more than theirs that this fallacy prevails."

**Causes.** The lecture traces two causes. The first is the fallacy that more output per worker means fewer jobs. Taylor's example was the cotton industry around 1840: when power machinery arrived, the 5,000 operatives knew there would be work for no more than about 1,000 of them, so they resisted. Taylor replied that increased output brings more wealth into the world, gives more work to more people over time, and benefits consumers. The second cause lies with management: inefficient systems that fail to reward productive effort, so that workers gain nothing, or fear a harder quota, by working faster.

**Remedy.** Taylor's response had two parts. The first was the mental revolution: both sides stop fighting over the division of the surplus and cooperate to enlarge it. The second was to substitute exact knowledge for opinion and rule-of-thumb: develop a science for each element of work, select and train workers scientifically, bring the science and the worker together, and divide responsibility so that management takes on planning duties it had never performed. The differential rate system set a standard output and paid different rates for the same job depending on whether it was met. At Midvale, Taylor even had foremen educated so that they had at least a fraction of their men's knowledge.

**The case against Taylor.** The lecture lists eight criticisms: workers are treated like machines; they have no involvement in decisions; efficiency is overemphasized, producing monotony and burnout; the system can be exploitative, since management captures most gains and wages may not rise in proportion; social aspects such as teamwork and intrinsic motivators are ignored; workers and unions resist it for fear of job loss; early gains may decay through turnover and unrest; and it does not suit creative or knowledge work. Church and Alford offered a systematic alternative: analyze workflows and integrate them with cost accounting, but stay flexible to human factors. Alford argued that efficiency gains owed more to the leadership of the company's president than to Taylor's methods.

**Evaluation.** The criticisms are serious but not fatal. They show that Taylor's view of motivation was too narrow and his control too centralized. They do not undo his core idea that work methods should rest on evidence and be revised when a better method is shown; Taylor himself said a better method would likely be found within two or three years. Public agencies still study processing steps and publish service standards. What survives is the method; what failed is the assumption that money and instruction alone govern behavior, which the Human Relations School set out to correct.`,
    sources: [
      { key: 'NOTES', page: 'Taylor (p. 4–5, 7–10); Church & Alford and Case Against Taylor (p. 16–18)' },
      { key: 'REV', page: 'Taylor (p. 3–4); Church & Alford, critique (p. 7, 20)' },
      { key: 'CONS', page: 'Taylor; Church and Alford (p. 5–6)' },
      { key: 'RS1', page: 'Taylor, The Principles of Scientific Management; Church & Alford, The Principles of Management' }
    ]
  },
  {
    id: 'q20',
    title: 'Differential Piece-Rate versus Task-and-Bonus: The Exact Taylor–Gantt Distinctions',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Foundational',
    question: 'The lecture contrasts Taylor and Gantt in specific terms: how tasks are set, how workers are paid, and whether management "drives" or "teaches and leads." State these distinctions precisely. Then show how three workers (one who takes longer than the standard time, one who finishes within it, and one who finishes faster) would be paid under Taylor’s differential piece-rate system and under Gantt’s task-and-bonus system. What does the comparison reveal about each man’s view of the worker?',
    theories: ["Taylor's Differential Piece-Rate", "Gantt's Task-and-Bonus System", "To Drive versus To Teach and Lead"],
    answer: `Gantt worked with Taylor at Midvale and Bethlehem Steel and accepted Taylor's premise that work standards should come from scientific investigation. The lecture's contrast lies in what happens after the standard is set.

**The core distinctions.**
1. Setting versus teaching. Taylor: tasks should be set only as the result of a scientific investigation. Gantt: teach workmen how to use the improved methods, then induce them to do as they are taught.
2. Wage guarantee. Under Taylor's differential piece-rate, the worker's minimum wage is not guaranteed. Gantt guarantees the day (time) wage.
3. Philosophy. The senior reviewer reduces it to two phrases: Taylor "to drive," Gantt "to teach and to lead." Gantt's own words, quoted in the lecture, are that "the era of force must give way to that of knowledge."
4. Emphasis. The lecture associates Taylor with factory production and a lean labor force, and Gantt with work efficiency, employee motivation, and productivity improvement.

Gantt's system has three parts: an instructor who transfers standard methods based on expert knowledge; a task with definite operational steps, a schedule, and an evaluation mechanism; and a bonus that combines day work and piece work. Supervisors also earned bonuses when their workers succeeded.

**Three workers compared** (using the lecture's illustrative rates):
- Worker A takes longer than the standard time. Taylor: paid the low rate, given as 80 percent, with no guaranteed minimum. Gantt: still receives the time wage.
- Worker B finishes within the standard time. Taylor: paid the high rate, given as 120 percent. Gantt: receives the time wage plus a bonus, given in the lecture as 20 percent of the wages earned (other notes describe bonuses of 20–50 percent).
- Worker C finishes faster than the standard time. Taylor: continues at the high rate on the larger output. Gantt: paid at high piece rates.

**What the comparison reveals.** At the top, both systems reward productivity in similar ways. The difference lies at the bottom. Taylor's design penalizes the worker who falls short, which assumes the standard is fair and the shortfall is the worker's fault. Gantt's design protects the learner, which assumes a shortfall usually means the worker has not yet been taught, lacks proper tools, or faces obstacles that management must remove. That is why Gantt paid supervisors for their workers' success: their job was to provide "helps" (training, equipment, incentives) and remove obstacles.

For a public agency introducing productivity standards, Gantt's model is the safer guide. It keeps measurement and reward while protecting employees during training, and it puts responsibility for poor results first on management. Its limitation is cost and patience: guaranteed wages pay for slow learners, and the system still assumes the standard itself is correct.`,
    sources: [
      { key: 'NOTES', page: 'Gantt (p. 5–6); Taylor vs Gantt and wage systems (p. 11–12)' },
      { key: 'REV', page: 'Wage systems (p. 4–5); Differentiate Taylor and Gantt (p. 19)' },
      { key: 'CONS', page: 'Gantt (p. 6)' },
      { key: 'RS1', page: 'Gantt, Training Workmen in Habits of Industry and Cooperation' }
    ]
  },
  {
    id: 'q21',
    title: 'Fayol’s Administrative Framework Compared with Urwick and Gulick',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'Henri Fayol, Lyndall Urwick, and Luther Gulick each tried to state general principles of administration. Compare Fayol’s six industrial activities, five managerial functions, and fourteen principles with Urwick’s principles of organization and Gulick’s POSDCORB. Where do they agree, what does each add, and what are the limits of "principles" as a guide? Illustrate with a provincial health office whose staff receive instructions from both the provincial health officer and the governor’s office.',
    theories: ["Fayol's Administrative Management", "Urwick's Principles of Organization", "Gulick's POSDCORB", "Unity of Command"],
    answer: `Fayol, Urwick, and Gulick belong to the administrative branch of the Classical School. Where Taylor studied the individual task, they asked how a whole enterprise should be managed and organized.

**Fayol.** Writing from his experience running a French industrial and mining concern, Fayol divided the activities of an industrial undertaking into six types: technical, commercial, financial, security, accounting, and managerial. He treated the managerial activity as distinct and defined it through five functions: planning, organizing, commanding, coordinating, and controlling. His fourteen principles (division of work, authority and responsibility, discipline, unity of command, unity of direction, subordination of individual interest, remuneration, centralization, scalar chain, order, equity, stability of tenure, initiative, and esprit de corps) give managers a vocabulary for aligning the parts. The lecture stresses that the right degree of centralization depends on the organization, so the principles call for judgment.

**Urwick.** Urwick, whose reading is presented "with special reference to the work of Henri Fayol," restated and extended these ideas as principles of organization: the objective (every part must express the purpose of the undertaking), specialization, coordination, authority and responsibility, definition of every position in writing, a span of control of no more than five or six subordinates whose work interlocks, balance, continuity (reorganization as a continuous process), simplicity, efficiency, uniformity, unity of command, and the scalar principle. His contribution is precision about structure: written definition of positions and a numerical span of control.

**Gulick.** Gulick, whose papers appear in Reading Set 1, condensed the chief executive's work into POSDCORB: planning, organizing, staffing, directing, coordinating, reporting, and budgeting. Compared with Fayol, POSDCORB separates staffing, reporting, and budgeting, which fits government, where personnel and budget are distinct, legally regulated functions.

**Agreement and difference.** All three accept specialization, hierarchy, unity of command, and coordination. Fayol supplies the functional view, Urwick the structural detail, and Gulick an executive task list suited to public administration.

**Application.** Staff who take instructions from two superiors violate unity of command, a principle Fayol and Urwick share. The remedy is to define each position in writing (Urwick), make the provincial health officer the single line superior, and route the governor's office's requests through that officer while keeping superiors informed, as Fayol's scalar chain requires. Planning, staffing, and budgeting for the office should be explicit functions (Gulick).

**Limits.** Herbert Simon, whom the consolidated notes cite among the critics, argued that there is no single correct administrative structure; principles can contradict one another, as when a narrow span of control lengthens the hierarchy and slows communication. The principles also say little about informal groups and motivation, the gap the Human Relations School would fill.`,
    sources: [
      { key: 'NOTES', page: 'Fayol (p. 18–21); Urwick (p. 21–22)' },
      { key: 'REV', page: 'Fayol and Urwick (p. 7–9, 20)' },
      { key: 'CONS', page: 'Fayol; Simon critique (p. 6–7)' },
      { key: 'RS1', page: 'Fayol; Gulick et al., Papers on the Science of Administration; Urwick' }
    ]
  },
  {
    id: 'q22',
    title: 'Albrow on Weber: Legal Authority, Bureaucratic Staff, and the Limits of Bureaucracy',
    divisionId: 'D2A',
    divisionLabel: 'Division II: Evolution of Management Thought (Classical)',
    difficulty: 'Intermediate',
    question: 'Using Martin Albrow’s account of Weber (Bureaucracy, Chapters 2 and 3) as discussed in class, explain (a) Mosca’s distinction between feudal and bureaucratic government, (b) the beliefs on which legal authority depends and Weber’s propositions on how legal authority is structured, (c) the defining characteristics of the bureaucratic administrative staff, and (d) the limits on bureaucracy. Why does it matter that, as the lecture notes, "Weber never defined bureaucracy"?',
    theories: ["Mosca's Ruling Class", "Weber's Legal Authority (Albrow)", "Characteristics of Bureaucratic Staff", "Limits of Bureaucracy"],
    answer: `Albrow's chapters show that Weber's theory is less a recipe for efficient offices than an analysis of how authority becomes impersonal.

**(a) Mosca.** Gaetano Mosca (1895) criticized the traditional classification of governments and divided society into a ruling class and a ruled class. In feudal government the structure is simple: any member of the ruling class can exercise economic, judicial, administrative, or military functions and hold direct personal authority over the ruled. In bureaucratic government these functions are sharply separated and become the exclusive work of particular sections of the ruling class, and part of the national wealth pays a body of salaried officials.

**(b) Legal authority.** For Weber an organization is an ordering of social relationships maintained by people who take that as their special task, and a distinctive set of rules is intrinsic to it. Legal authority rests on five beliefs: a legal code can be established that claims obedience; law is a system of abstract rules applied to particular cases; the person exercising authority also obeys the impersonal order; members obey the law only as members; and obedience is owed to the impersonal order, not to the person. Eight propositions describe its structure: continuous, rule-bound official tasks; functionally distinct spheres with the requisite authority; hierarchy with specified rights of control and complaint; technical or legal rules that require trained staff; separation of organizational from private resources; no appropriation of office; administration through written documents, making the bureau the hub; and legal authority at its purest in a bureaucratic staff.

**(c) The staff.** Officials are personally free and bound only by impersonal duties; offices form a clear hierarchy with specified functions; officials are appointed by contract and selected by professional qualification, ideally a diploma gained by examination. The senior reviewer adds a graded money salary with pension rights, the post as primary occupation, a career with promotion by seniority or merit, and unified discipline.

**(d) Limits.** Weber listed devices that restrict bureaucracy: collegiality (decisions by a body, slower because views conflict), separation of powers, amateur administration by people who can afford unpaid service, direct democracy (short terms, selection by lot, recall), and representation.

**Why "never defined" matters.** Weber described bureaucracy through characteristics rather than a definition, so it is an ideal type to compare real offices against, not a blueprint. The lecture made the same point through administrative rationality: continuity, hierarchy, and files matter, but Stinchcombe argued that craft-based occupational standards can secure quality more efficiently in fields such as construction and social welfare. The lesson recorded in class was that different situations require different administrative structures. For a public manager, Weber explains legitimacy and accountability, not a single best organization chart.`,
    sources: [
      { key: 'NOTES', page: 'Feb 19–26 notes: Mosca, Weber, limits, administrative rationality (p. 22–24)' },
      { key: 'REV', page: 'Bureaucracy (p. 9–10); Weber summary (p. 21)' },
      { key: 'RS1', page: 'Albrow, Bureaucracy, Chs. 2–3' },
      { key: 'CONS', page: 'Weber (p. 7)' }
    ]
  },
  {
    id: 'q23',
    title: 'Maslow, Alderfer, and McClelland: Comparing Need Theories',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Intermediate',
    question: 'Compare Abraham Maslow’s hierarchy of needs, Clayton Alderfer’s ERG theory, and David McClelland’s needs theory. How does each define the needs that drive behavior, and how do they differ on whether needs are satisfied in sequence? Apply the three theories to a newly hired social worker whose requests for training are repeatedly denied and who now complains mainly about pay and office politics.',
    theories: ["Maslow's Hierarchy of Needs", "Alderfer's ERG Theory and Frustration-Regression", "McClelland's Achievement, Power and Affiliation"],
    answer: `All three are content theories: they explain motivation by the needs people try to satisfy. They differ in how those needs are organized.

**Maslow.** The lecture presents Maslow's original five-stage model: biological and physiological needs, safety, love and belonging, esteem, and self-actualization. Lower "deficit" needs must be satisfied before a person progresses to higher "growth" needs, and growth needs, once engaged, continue to be felt and may even grow stronger. The consolidated notes add a caution: the model explains why wages alone may not motivate every employee, but it should not be treated as a rigid sequence that applies identically to everyone.

**Alderfer.** ERG theory condenses Maslow's five categories into three: Existence (material and physical safety needs), Relatedness (significant relationships and recognition), and Growth (personal development and realizing one's potential). It departs from Maslow in two ways. More than one need can be active at the same time, and the frustration-regression principle holds that when a higher need is blocked, a person may emphasize a lower need that seems more attainable.

**McClelland.** McClelland does not arrange needs in a hierarchy. He identifies three needs that people hold in different strengths: achievement (the urge to excel against a set of standards), power (the desire to influence and control others), and affiliation (the desire for open, cooperative relationships). The lecture notes that people high in achievement seek challenging work, want feedback, and take responsibility for solving problems, while power-motivated people want their views to dominate and seek to lead.

**Comparison.** Maslow offers a sequence, Alderfer a flexible three-part set with regression, and McClelland a profile of individual differences. Maslow and Alderfer describe needs everyone shares; McClelland explains why two people in the same job respond differently to the same incentive.

**Application.** The social worker's case fits Alderfer best. Denied training, the worker is frustrated in Growth and, as ERG predicts, shifts attention toward Existence (pay) and Relatedness (office politics). A strict Maslow reading would treat the complaints as unmet lower needs and recommend a pay review, which may be the wrong remedy if the real problem is blocked growth. McClelland would ask about the worker's profile: someone high in need for achievement, who chose social work to solve hard problems, will be especially demotivated when development is blocked.

The manager should restore a growth path (training, a mentor, gradually more complex cases), check that pay is fair, and give regular feedback on achievement. The limitation of all three theories is that they describe needs but say little about how rewards are perceived or whether treatment is fair. That is why the course pairs them with equity, goal-setting, and reinforcement theories.`,
    sources: [
      { key: 'NOTES', page: 'Maslow (p. 25); McClelland (p. 31)' },
      { key: 'CONS', page: 'Maslow (p. 8); ERG Theory (p. 9–10)' },
      { key: 'REV', page: 'Maslow (p. 11); McClelland (p. 13); summary (p. 18)' },
      { key: 'RS1', page: 'Maslow; Alderfer (1969); McClelland, The Urge to Achieve' }
    ]
  },
  {
    id: 'q24',
    title: 'Goal-Setting, Reinforcement, and Expectancy in a Revenue Office',
    divisionId: 'D2B',
    divisionLabel: 'Division II: Evolution of Management Thought (Human Relations)',
    difficulty: 'Integrative',
    question: 'A municipal revenue office wants to raise business-tax collections. Its new head proposes monthly collection targets for each examiner, immediate public praise for those who meet them, and a promotion list based on results. Using Locke’s goal-setting theory, Skinner’s reinforcement theory, and Vroom’s expectancy theory, evaluate the proposal. Under what conditions will it work, and what could go wrong?',
    theories: ["Locke's Goal-Setting Theory", "Skinner's Reinforcement Theory", "Vroom's Expectancy Theory"],
    answer: `The proposal combines three distinct motivational mechanisms. Each theory explains one part of it and also shows where it could fail.

**Goal-setting (Locke).** The lecture states that goal setting is linked to task performance: specific, challenging goals with appropriate feedback produce better performance and give employees direction. The consolidated notes add the conditions: goals should be clear and measurable, accepted, consistent with the organization's purpose, and backed by confidence in one's ability (self-efficacy). Monthly targets for each examiner satisfy specificity and feedback. They fail if they ignore differences in caseload, if examiners lack the skills or data to reach them, or if they conflict with the office's purpose. The notes also warn that difficult goals can encourage excessive risk-taking; here, examiners might pressure compliant taxpayers or inflate assessments.

**Reinforcement (Skinner).** Skinner focuses on what happens after a person acts: behavior followed by a positive response is more likely to recur. Immediate public praise is positive reinforcement, and the lecture's own example is praising an employee right away for arriving early. The lecture also notes the theory's limit: it shapes behavior through the environment but does not explain the causes of behavior. Praise for collections alone will reinforce whatever produces collections, including shortcuts. Reinforcement should therefore target the behaviors the office wants (accurate assessments, fair treatment, delinquent accounts cleared), not only the total.

**Expectancy (Vroom).** The course materials name Vroom only as the author of expectancy theory. In its usual statement, motivation depends on three beliefs: that effort will lead to performance (expectancy), that performance will lead to the reward (instrumentality), and that the reward is valued (valence). If any is near zero, motivation collapses. Examiners assigned to poor districts may believe no effort can reach the target; staff who have seen promotions follow connections will doubt the promotion list; and some may not value public praise at all.

**Verdict.** The proposal can work if targets are negotiated and adjusted for district conditions, examiners get data and training, praise rewards quality as well as volume, and the promotion list is transparent and actually honored. It goes wrong if targets are imposed uniformly, rewards are unreliable, and only totals count. The office would then get more effort aimed at the measure rather than the mission.

The repaired proposal comes close to Drucker's Management by Objectives, the last topic in the exam scope. MBO adds what the three theories do not supply on their own: objectives agreed with the people who must reach them, and performance information that lets them control their own work.`,
    sources: [
      { key: 'NOTES', page: 'March 10–12 notes: Locke, Skinner (p. 31–32)' },
      { key: 'CONS', page: 'Goal-Setting Theory (p. 9)' },
      { key: 'REV', page: 'Locke, Skinner (p. 13–14); Vroom named (p. 18)' },
      { key: 'RS1', page: 'Locke & Latham; Skinner (1953); Vroom (1974)' }
    ]
  },
  {
    id: 'q25',
    title: 'Who Benefits? Blau and Scott’s Typology and Selznick’s Co-optation',
    divisionId: 'D2C',
    divisionLabel: 'Division II: Evolution of Management Thought (Modern)',
    difficulty: 'Integrative',
    question: 'Using Peter Blau and W. Richard Scott’s "cui bono" (who benefits?) classification of formal organizations and Philip Selznick’s analysis of organizations and co-optation, analyze a provincial water district that has given seats on its advisory board to large commercial water users after protests over tariff increases. What kind of organization is the water district, whose interests should prevail, and what risks does co-optation create?',
    theories: ["Blau and Scott's Cui Bono Typology", "Selznick's Co-optation", "Commonweal versus Service Organizations"],
    answer: `Blau and Scott (1962) classified formal organizations by their prime beneficiary, asking *cui bono*: who benefits? Their four types are mutual-benefit associations (members benefit, as in unions and professional associations), business concerns (owners benefit), service organizations (clients benefit, as in hospitals and schools), and commonweal organizations (the public at large benefits, as in the police or tax administration). Each type faces a characteristic problem: internal democracy for mutual-benefit associations, efficiency for business concerns, the tension between professional service and administrative control for service organizations, and external democratic control for commonweal organizations.

A water district is a mixed case, which is why the classification helps. Day to day it serves customers like a service organization, and it must cover its costs like a business. Yet water is a public necessity, and its prime beneficiary should be the public at large, including households that cannot protest effectively. In Blau and Scott's terms, the decisive question is external accountability to the public, not the satisfaction of its most powerful clients.

Selznick (1948) explains why this becomes difficult in practice. He treated formal organizations as instruments that are always embedded in a social environment. To survive, they must win support and avert threats, and one strategy is co-optation: absorbing new elements into the leadership or policy-making structure. Formal co-optation shares the symbols of authority, such as advisory seats, to gain legitimacy without sharing real power. Informal co-optation yields actual influence to powerful outside interests in exchange for their support. The consolidated notes record a related point from Selznick: subunits can pursue their own goals at the expense of the whole.

Applied to the water district, the advisory seats may begin as formal co-optation, a way to calm protests and legitimize the tariff decision. The risk is drift into informal co-optation: the large users gain influence over tariff structure, connection priorities, and investment, and over time the district favors commercial users over households and new connections in poor barangays. A commonweal organization would then be serving a narrow clientele, the kind of displacement of mission Selznick warned about.

The district can use co-optation without surrendering its mission. Seats should be balanced with representatives of households, barangays, and consumer groups; advisory roles should be clearly separated from tariff-setting authority; and deliberations and tariff studies should be published, so the public, the prime beneficiary, can see whose interests prevailed. The limitation of both frameworks is that they diagnose rather than prescribe. Blau and Scott identify whom the organization should serve, and Selznick shows how that purpose can be quietly subverted, but neither offers a formula for weighing legitimate stakeholder claims.

Note on sources: these two readings are on Reading Set 1, but the transcribed lecture notes stop before the Modern School readings, so no lecture-specific emphasis could be confirmed.`,
    sources: [
      { key: 'RS1', page: 'Blau & Scott, The Concept of Formal Organization (1962); Selznick, Foundations of the Theory of Organization (1948)' },
      { key: 'CONS', page: 'Blau and Selznick among the critiques of bureaucracy (p. 7)' }
    ]
  }
];

export function getAllQuestions(): EssayQuestion[] {
  return essayQuestions;
}

export function getQuestionById(id: string): EssayQuestion | undefined {
  return essayQuestions.find((q) => q.id === id);
}
