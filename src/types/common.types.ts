export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Web' | 'VLSI' | 'IoT' | 'Data Science';
  description: string;
  techStack: string[];
  image: string;
}

