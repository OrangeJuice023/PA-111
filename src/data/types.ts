export interface SourceRef {
  key: 'RS1' | 'CONS' | 'NOTES' | 'REV' | 'OTHER';
  page?: string;
  note?: string;
}

export interface Division {
  divisionId: string;
  title: string;
  order: number;
  description: string;
  sources: SourceRef[];
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
  definitions: Array<{term: string; definition: string}>;
  assumptions?: string[];
  strengths?: string[];
  limitations?: string[];
  applications: string[];
  examples: string[];
  comparisons?: Array<{title: string; a: string; b: string; points: string[]}>;
  relationships?: Array<{toTopicId: string; relation: string}>;
  sources: SourceRef[];
  syllabusAligned: boolean;
  prescribed?: boolean;
  confidence: 'high' | 'med' | 'low';
  notes?: string[];
  placeholders?: string[];
}
