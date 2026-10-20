export const divisions = [
  { divisionId: 'D1', title: 'Introduction / History of Administration', order: 1, description: 'Origins and early contributors.', sources: [] },
  { divisionId: 'D2A', title: 'Classical School', order: 2, description: 'Scientific Management, Principles, Bureaucracy.', sources: [] },
  { divisionId: 'D2B', title: 'Human Relations / Neo-Classical School', order: 3, description: 'Hawthorne and motivation theories.', sources: [] },
];

export const topics = [
  {
    topicId: 't1-1',
    divisionId: 'D1',
    title: 'The Management Discipline',
    division: 'Introduction / History of Administration',
    order: 1,
    overview: 'Management as organized endeavors.',
    keyConcepts: [],
    definitions: [],
    relationships: [],
    comparisons: [],
    applications: [],
    examples: [],
    sources: [],
    syllabusAligned: true,
    confidence: 'high',
    notes: [],
    placeholders: [],
  },
  {
    topicId: 't2a-1',
    divisionId: 'D2A',
    title: 'Scientific Management',
    division: 'Classical School',
    order: 1,
    overview: 'Taylor, Gantt, Gilbreth.',
    keyConcepts: [],
    definitions: [],
    relationships: [],
    comparisons: [],
    applications: [],
    examples: [],
    sources: [],
    syllabusAligned: true,
    confidence: 'high',
    notes: [],
    placeholders: [],
  },
];

export function getTopicsByDivision(divisionId: string) {
  return topics.filter((t: any) => t.divisionId === divisionId).sort((a: any, b: any) => a.order - b.order);
}

export function getTopicById(topicId: string) {
  return topics.find((t: any) => t.topicId === topicId);
}

export function getAllTopics() {
  return topics;
}
