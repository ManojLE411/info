export interface InternshipTrack {
  id: string;
  title: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  skills: string[];
  description: string;
  image: string;
  overview?: string;
  programFlow?: string[];
  whatYoullLearn?: string[];
  programStructure?: string[];
  whoShouldApply?: string[];
  careerOutcomes?: string[];
}

