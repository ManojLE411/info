export interface TrainingProgram {
  id: string;
  title: string;
  category: 'Institutional' | 'Corporate' | 'Other';
  description: string;
  features: string[];
  icon?: string;
}

