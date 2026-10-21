export interface EssayQuestion {
  id: string
  title: string
  divisionId: string
  difficulty: 'Foundational' | 'Intermediate' | 'Integrative'
  question: string
  theories?: string[]
  answer: string
  sources?: Array<{key:'RS1'|'CONS'|'NOTES'|'REV'|'OTHER'; page?:string}>
}

export const essayQuestions: EssayQuestion[] = [
  {
    id: 'q1',
    title: 'Bureaucratic Office: Morale and Efficiency',
    divisionId: 'D2A',
    difficulty: 'Intermediate',
    question: 'A government office with clear rules, specialization, and hierarchy has experienced declining morale and increased absenteeism. Using management theories, analyze the situation and propose concrete solutions. Justify your recommendations.',
    theories: ["Weber's Bureaucracy", 'Human Relations (Hawthorne)', 'Argyris'],
    answer: "Bureaucracies provide predictability, impersonality, and division of labor (Weber), but excessive formalization can conflict with employees' needs for growth and autonomy. The Hawthorne Studies showed social factors matter. Argyris argued restrictive structures can mismatch mature adult personalities.\n\nRecommendations: improve two-way communication, apply job enrichment, increase participation while preserving controls.\n\nConclusion: Humanize bureaucracy without abandoning accountability.",
    sources: [{key:'NOTES',page:'p22-29'},{key:'REV',page:'p10-13'},{key:'CONS',page:'2.1-2.2'}]
  },
  {
    id: 'q2',
    title: 'Taylor vs Gantt in a Public Works Unit',
    divisionId: 'D2A',
    difficulty: 'Intermediate',
    question: 'Compare and contrast Taylor\'s Scientific Management and Gantt\'s task-and-bonus system. In what situations would each be appropriate or problematic in a public works unit?',
    theories: ['Scientific Management', 'Gantt Task-and-Bonus'],
    answer: "Taylor emphasized time studies, standardization, differential piece-rate. Gantt emphasized training, guaranteed day wages plus bonus, and cooperation (teach and lead). In public works, Gantt better aligns with fairness and training; Taylor can help standardize but risks incentivizing quantity over quality. Blend scientific standards with humane incentives.",
    sources: [{key:'NOTES',page:'p4-12'},{key:'REV',page:'p2-5'}]
  },
  {
    id: 'q3',
    title: 'Weber\'s Bureaucracy: Strengths, Critique, Refinements',
    divisionId: 'D2A',
    difficulty: 'Integrative',
    question: 'Discuss the strengths and weaknesses of Weber\'s ideal bureaucracy. How does the Human Relations School critique it, and what refinements do Systems/Contingency approaches offer?',
    theories: ['Weberian Bureaucracy', 'Human Relations', 'Systems Theory', 'Contingency Theory'],
    answer: "Strengths: rational-legal authority, rules, hierarchy, merit. Weaknesses: rigidity, red tape. Human Relations critiques social needs ignored. Systems/Contingency see organizations as open systems needing fit to context with feedback loops. Solution: selective bureaucratization balancing structure and flexibility.",
    sources: [{key:'NOTES',page:'p22-24'},{key:'CONS',page:'2.1,2.3,2.4'}]
  },
  {
    id: 'q4',
    title: 'Motivation Beyond Money',
    divisionId: 'D2B',
    difficulty: 'Integrative',
    question: 'Monetary rewards alone have not improved performance in a public agency. Using at least three motivation theories, explain why and recommend measures.',
    theories: ['Maslow', 'Herzberg', 'Equity Theory'],
    answer: "Maslow: higher needs matter after basics. Herzberg: hygiene vs motivators (pay is hygiene). Equity: fairness perceptions drive motivation. Recommendations: job enrichment, recognition, career development, procedural fairness, align with public service motivation.",
    sources: [{key:'NOTES',page:'p25-31'},{key:'REV',page:'p11-14'},{key:'CONS',page:'2.2'}]
  },
  {
    id: 'q5',
    title: 'Metaphors for Reform Resistance',
    divisionId: 'D3',
    difficulty: 'Integrative',
    question: 'A reform is met with unexpected resistance. Using at least three organizational metaphors, analyze sources of resistance and suggest strategies.',
    theories: ['Metaphors of Organization'],
    answer: "Machine: routines disrupted -> training. Organism: poor fit -> phased change. Political: power redistribution -> coalition building. Cultural: values conflict -> engage leaders. Brain: learning needed -> pilot and feedback. Combine metaphors for diagnosis.",
    sources: [{key:'CONS',page:'3'},{key:'REV',page:'p17'}]
  },
  {
    id: 'q6',
    title: 'Fayol vs Weber',
    divisionId: 'D2A',
    difficulty: 'Intermediate',
    question: 'Compare Fayol\'s principles of management with Weber\'s ideal bureaucracy. Where do they overlap and diverge?',
    theories: ['Fayol', 'Weber'],
    answer: "Overlap: division of work, hierarchy, authority-responsibility, unity of command/direction. Diverge: Fayol focuses on managerial functions/principles; Weber on ideal form and rational-legal authority. Apply both for structure with practical guidance.",
    sources: [{key:'NOTES',page:'p18-24'}]
  },
  {
    id: 'q7',
    title: 'Bethlehem Steel & Mental Revolution',
    divisionId: 'D2A',
    difficulty: 'Foundational',
    question: 'Explain Taylor\'s mental revolution and the Bethlehem Steel shovel experiment.',
    theories: ['Scientific Management'],
    answer: "Mental revolution: workers and management cooperate to increase surplus, not fight over it. Shovel experiment found optimal 21-lb load, standardized tools/methods, trained workers - costs fell from ~7-8c to ~3-4c/ton.",
    sources: [{key:'NOTES',page:'p7-10'},{key:'REV',page:'p3-4'}]
  },
  {
    id: 'q8',
    title: 'Hawthorne Studies: Key Lessons',
    divisionId: 'D2B',
    difficulty: 'Foundational',
    question: 'What are the key lessons of the Hawthorne Studies?',
    theories: ['Hawthorne Studies'],
    answer: "Organizations are social systems; group norms matter; attention/participation affect morale and productivity; informal organization influences behavior. Led to Human Relations movement.",
    sources: [{key:'NOTES',page:'p24-25'},{key:'REV',page:'p10-11'}]
  },
  {
    id: 'q9',
    title: 'Herzberg: Hygiene vs Motivators',
    divisionId: 'D2B',
    difficulty: 'Intermediate',
    question: 'Explain Herzberg\'s two-factor theory and job enrichment.',
    theories: ['Herzberg Two-Factor'],
    answer: "Hygiene prevent dissatisfaction (pay, policy, conditions); motivators create satisfaction (achievement, recognition, work, responsibility, growth). Job enrichment adds responsibility/challenge/growth after ensuring adequate hygiene factors.",
    sources: [{key:'NOTES',page:'p25-27'}]
  },
  {
    id: 'q10',
    title: 'Functions of Administration Cycle',
    divisionId: 'D4',
    difficulty: 'Intermediate',
    question: 'Explain Planning-Implementation-Monitoring-Evaluation cycle with an example.',
    theories: ['Functions of Administration'],
    answer: "Plan set objectives/indicators; Implement assign roles/resources; Monitor track progress; Evaluate outcomes/learning; Revise. Example: permit delays - plan targets, implement workflow changes, monitor times, evaluate fairness/efficiency, adjust.",
    sources: [{key:'CONS',page:'4'}]
  },
  {
    id: 'q11',
    title: 'Classical vs Human Relations',
    divisionId: 'D2B',
    difficulty: 'Integrative',
    question: 'Contrast Classical and Human Relations schools; how does Gantt bridge them?',
    theories: ['Classical', 'Human Relations', 'Gantt'],
    answer: "Classical emphasizes structure/efficiency; HR emphasizes people/social needs. Gantt bridges with guaranteed wages, training, cooperation while using task analysis - 'teach and lead' vs 'drive'.",
    sources: [{key:'NOTES',page:'p10-12'}]
  },
  {
    id: 'q12',
    title: 'Equity Theory',
    divisionId: 'D2B',
    difficulty: 'Intermediate',
    question: 'Explain Adams\' Equity Theory and workplace implications.',
    theories: ['Equity Theory'],
    answer: "Motivation depends on perceived fairness of inputs/outputs vs referents. Perceived inequity leads to demotivation/behavior change. Ensure procedural and distributive fairness.",
    sources: [{key:'NOTES',page:'p29-31'}]
  },
  {
    id: 'q13',
    title: 'Systems Approach',
    divisionId: 'D2C',
    difficulty: 'Integrative',
    question: 'Describe Systems Approach (inputs-process-outputs-feedback) and diagnose a service problem.',
    theories: ['Systems Approach'],
    answer: "Organization as open system with interdependent parts. Look at inputs/process/outputs/feedback holistically; problems often systemic (coordination) not individual. Use feedback for improvement.",
    sources: [{key:'CONS',page:'2.3'}]
  },
  {
    id: 'q14',
    title: 'Contingency Theory',
    divisionId: 'D2D',
    difficulty: 'Intermediate',
    question: 'What is Contingency Theory and why reject one-best-way?',
    theories: ['Contingency Theory'],
    answer: "No universal best method; approach must fit context (size, tech, environment, people). Diagnose situation and adapt structure/processes accordingly.",
    sources: [{key:'CONS',page:'2.4'}]
  },
  {
    id: 'q15',
    title: 'Integrating Multiple Schools',
    divisionId: 'D2A',
    difficulty: 'Integrative',
    question: 'Integrate Classical, Human Relations, and Systems/Contingency to improve efficiency and morale simultaneously.',
    theories: ['Classical', 'Human Relations', 'Systems', 'Contingency'],
    answer: "Use Classical for structure/standards (Fayol/Weber/Gantt), Human Relations for motivation/participation, Systems/Contingency for fit and feedback. Balance structure with engagement and adapt based on results.",
    sources: [{key:'CONS',page:'2.1-2.4'}]
  },
]

export function getAllQuestions(): EssayQuestion[] {
  return essayQuestions
}

export function getQuestionById(id: string): EssayQuestion | undefined {
  return essayQuestions.find((q) => q.id === id)
}
