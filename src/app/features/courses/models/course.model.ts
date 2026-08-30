export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  icon: string;
  technologies: string[];
  trainer: string;
}

export const courses: Course[] = [
  { id: 1, title: 'Full Stack .NET Development', description: 'Build production-ready web applications from database to deployment.', duration: '6 Months', level: 'Intermediate', category: '.NET', icon: '⌘', technologies: ['C#', '.NET', 'Angular', 'SQL Server'], trainer: 'Aarav Mehta' },
  { id: 2, title: 'Modern Angular Engineering', description: 'Create fast, accessible interfaces with Angular and TypeScript.', duration: '4 Months', level: 'Intermediate', category: 'Angular', icon: '◇', technologies: ['Angular', 'TypeScript', 'RxJS'], trainer: 'Nisha Rao' },
  { id: 3, title: 'Java Full Stack', description: 'Master enterprise Java patterns and ship scalable applications.', duration: '6 Months', level: 'Beginner', category: 'Java', icon: '☕', technologies: ['Java', 'Spring Boot', 'React'], trainer: 'Vikram Shah' },
  { id: 4, title: 'Python & Data Foundations', description: 'Learn Python essentials and turn data into practical insights.', duration: '3 Months', level: 'Beginner', category: 'Python', icon: '⌁', technologies: ['Python', 'Pandas', 'SQL'], trainer: 'Meera Iyer' },
  { id: 5, title: 'React Frontend Studio', description: 'Design robust component systems for the modern web.', duration: '4 Months', level: 'Intermediate', category: 'React', icon: '◌', technologies: ['React', 'JavaScript', 'Next.js'], trainer: 'Rohan Desai' },
  { id: 6, title: 'Cloud & DevOps Launchpad', description: 'Automate delivery and operate resilient cloud infrastructure.', duration: '5 Months', level: 'Advanced', category: 'Cloud & DevOps', icon: '☁', technologies: ['AWS', 'Docker', 'Kubernetes'], trainer: 'Ankit Verma' },
  { id: 7, title: 'QA Automation with Selenium', description: 'Build reliable automated test suites and quality workflows.', duration: '3 Months', level: 'Beginner', category: 'QA Automation', icon: '✓', technologies: ['Selenium', 'Java', 'Cucumber'], trainer: 'Priya Menon' },
  { id: 8, title: 'SQL & Database Design', description: 'Work confidently with relational data, queries, and performance.', duration: '2 Months', level: 'Beginner', category: 'SQL', icon: '▦', technologies: ['SQL', 'PostgreSQL', 'T-SQL'], trainer: 'Aarav Mehta' }
];
