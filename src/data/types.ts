export interface SourceRef {
  key: 'RS1' | 'CONS' | 'NOTES' | 'REV' | 'OTHER';
  page?: string;
  note?: string;
}

export interface Comparison {
  title: string;
  a: string;
  b: string;
  points: string[];
}

export interface Relationship {
  toTopicId: string;
  relation: string;
}

export interface Concept {
  name: string;
  definition?: string;
  explanation?: string;
  example?: string;
}

export interface Topic {
  topicId: string;
  divisionId: string;
  title: string;
  division: string;
  order: number;
  overview: string;
  keyConcepts: Concept[];
  definitions: Array<{ term: string; definition: string; source?: SourceRef[] }>;
  relationships: Relationship[];
  comparisons: Comparison[];
  applications: string[];
  examples: string[];
  sources: SourceRef[];
  syllabusAligned: boolean;
  confidence: 'high' | 'med' | 'low';
  notes: string[];
  placeholders: string[];
}

export interface Division {
  divisionId: string;
  title: string;
  order: number;
  description: string;
  sources: SourceRef[];
}
