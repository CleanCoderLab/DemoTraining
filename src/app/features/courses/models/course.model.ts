export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  icon?: string;
  technologies?: string[];
  trainer?: string;
}
