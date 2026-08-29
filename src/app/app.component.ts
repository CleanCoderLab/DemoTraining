import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

type Course = { id: number; title: string; description: string; duration: string; level: string; category: string; icon: string; technologies: string[]; trainer: string };
type Job = { id: number; title: string; company: string; location: string; salary: string; experience: string; mode: string; type: string; posted: string; skills: string[]; description: string };
type Resource = { title: string; category: string; time: string; icon: string; description: string };

const courses: Course[] = [
  { id: 1, title: 'Full Stack .NET Development', description: 'Build production-ready web applications from database to deployment.', duration: '6 Months', level: 'Intermediate', category: '.NET', icon: '⌘', technologies: ['C#', '.NET', 'Angular', 'SQL Server'], trainer: 'Aarav Mehta' },
  { id: 2, title: 'Modern Angular Engineering', description: 'Create fast, accessible interfaces with Angular and TypeScript.', duration: '4 Months', level: 'Intermediate', category: 'Angular', icon: '◇', technologies: ['Angular', 'TypeScript', 'RxJS'], trainer: 'Nisha Rao' },
  { id: 3, title: 'Java Full Stack', description: 'Master enterprise Java patterns and ship scalable applications.', duration: '6 Months', level: 'Beginner', category: 'Java', icon: '☕', technologies: ['Java', 'Spring Boot', 'React'], trainer: 'Vikram Shah' },
  { id: 4, title: 'Python & Data Foundations', description: 'Learn Python essentials and turn data into practical insights.', duration: '3 Months', level: 'Beginner', category: 'Python', icon: '⌁', technologies: ['Python', 'Pandas', 'SQL'], trainer: 'Meera Iyer' },
  { id: 5, title: 'React Frontend Studio', description: 'Design robust component systems for the modern web.', duration: '4 Months', level: 'Intermediate', category: 'React', icon: '◌', technologies: ['React', 'JavaScript', 'Next.js'], trainer: 'Rohan Desai' },
  { id: 6, title: 'Cloud & DevOps Launchpad', description: 'Automate delivery and operate resilient cloud infrastructure.', duration: '5 Months', level: 'Advanced', category: 'Cloud & DevOps', icon: '☁', technologies: ['AWS', 'Docker', 'Kubernetes'], trainer: 'Ankit Verma' },
  { id: 7, title: 'QA Automation with Selenium', description: 'Build reliable automated test suites and quality workflows.', duration: '3 Months', level: 'Beginner', category: 'QA Automation', icon: '✓', technologies: ['Selenium', 'Java', 'Cucumber'], trainer: 'Priya Menon' },
  { id: 8, title: 'SQL & Database Design', description: 'Work confidently with relational data, queries, and performance.', duration: '2 Months', level: 'Beginner', category: 'SQL', icon: '▦', technologies: ['SQL', 'PostgreSQL', 'T-SQL'], trainer: 'Aarav Mehta' }
];

const jobs: Job[] = [
  { id: 1, title: 'Senior .NET Developer', company: 'Northstar Labs', location: 'Bengaluru, India', salary: '₹18–24 LPA', experience: '4–7 years', mode: 'Hybrid', type: 'Full-time', posted: '2 days ago', skills: ['C#', '.NET Core', 'Azure'], description: 'Own features across a high-trust product engineering team building tools for modern operations.' },
  { id: 2, title: 'Angular Developer', company: 'Orbit Systems', location: 'Pune, India', salary: '₹10–16 LPA', experience: '2–4 years', mode: 'Remote', type: 'Full-time', posted: '1 day ago', skills: ['Angular', 'TypeScript', 'RxJS'], description: 'Help craft thoughtful, high-performance interfaces used by teams around the world.' },
  { id: 3, title: 'Full Stack Developer', company: 'Cedar & Co.', location: 'Hyderabad, India', salary: '₹12–19 LPA', experience: '3–5 years', mode: 'On-site', type: 'Full-time', posted: '4 days ago', skills: ['React', 'Node.js', 'PostgreSQL'], description: 'Join a product team turning complex workflows into simple software.' },
  { id: 4, title: 'Java Developer', company: 'BluePeak Finance', location: 'Mumbai, India', salary: '₹14–21 LPA', experience: '3–6 years', mode: 'Hybrid', type: 'Full-time', posted: '5 days ago', skills: ['Java', 'Spring Boot', 'AWS'], description: 'Build secure, reliable services for a fast-growing financial platform.' },
  { id: 5, title: 'QA Automation Engineer', company: 'Kite Digital', location: 'Chennai, India', salary: '₹8–13 LPA', experience: '1–3 years', mode: 'Remote', type: 'Full-time', posted: '1 week ago', skills: ['Selenium', 'Java', 'API Testing'], description: 'Raise the quality bar through automation, collaboration, and curious testing.' },
  { id: 6, title: 'Cloud Engineer', company: 'Atlas Grid', location: 'Delhi, India', salary: '₹16–25 LPA', experience: '4–7 years', mode: 'Hybrid', type: 'Full-time', posted: '1 week ago', skills: ['AWS', 'Terraform', 'Docker'], description: 'Design the reliable infrastructure behind a growing developer platform.' }
];

const resources: Resource[] = [
  { title: 'How to Prepare for an IT Interview', category: 'Interview Prep', time: '8 min read', icon: '↗', description: 'A practical framework for answering clearly and showing your engineering thinking.' },
  { title: 'Build a Resume That Gets Read', category: 'Career Guidance', time: '6 min read', icon: '▤', description: 'Turn your experience into a focused story recruiters can quickly understand.' },
  { title: '.NET Interview Questions', category: 'Technical', time: '12 min read', icon: '⌘', description: 'Sharpen the fundamentals and patterns that come up in real conversations.' },
  { title: 'Angular Interview Questions', category: 'Technical', time: '10 min read', icon: '◇', description: 'Review the concepts that help you explain your frontend decisions with confidence.' },
  { title: 'SQL Interview Questions', category: 'Technical', time: '9 min read', icon: '▦', description: 'Practice joins, indexing, and the query thinking employers value.' },
  { title: 'Your IT Career Roadmap', category: 'Career Guidance', time: '7 min read', icon: '◒', description: 'Choose a direction, build proof of skill, and make progress one milestone at a time.' },
  { title: 'System Design, Demystified', category: 'Technical', time: '15 min read', icon: '◎', description: 'Learn a repeatable approach to conversations about scale and trade-offs.' },
  { title: 'From Learning to Landing Your First Role', category: 'Career Guidance', time: '5 min read', icon: '→', description: 'A grounded guide to projects, practice, networking, and the first application.' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly router = inject(Router);
  protected readonly path = signal(this.router.url);
  protected readonly courseQuery = signal('');
  protected readonly jobQuery = signal('');
  protected readonly jobLocation = signal('');
  protected readonly courseCategory = signal('All categories');
  protected readonly courseLevel = signal('All levels');
  protected readonly selectedJobMode = signal('All modes');
  protected readonly savedJobs = signal<number[]>([]);
  protected readonly notice = signal('');
  protected readonly courseList = courses;
  protected readonly jobList = jobs;
  protected readonly resourceList = resources;

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => this.path.set(event.urlAfterRedirects));
  }

  protected get currentCourse() { const id = Number(this.path().split('/').pop()); return courses.find(course => course.id === id) ?? courses[0]; }
  protected get currentJob() { const id = Number(this.path().split('/').pop()); return jobs.find(job => job.id === id) ?? jobs[0]; }
  protected get filteredCourses() { const query = this.courseQuery().toLowerCase(); return courses.filter(course => (!query || `${course.title} ${course.technologies.join(' ')}`.toLowerCase().includes(query)) && (this.courseCategory() === 'All categories' || this.courseCategory() === course.category) && (this.courseLevel() === 'All levels' || this.courseLevel() === course.level)); }
  protected get filteredJobs() { const query = this.jobQuery().toLowerCase(); const location = this.jobLocation().toLowerCase(); return jobs.filter(job => (!query || `${job.title} ${job.skills.join(' ')} ${job.company}`.toLowerCase().includes(query)) && (!location || job.location.toLowerCase().includes(location)) && (this.selectedJobMode() === 'All modes' || job.mode === this.selectedJobMode())); }
  protected is(page: string) { return this.path() === page || this.path().startsWith(`${page}/`); }
  protected toggleSave(id: number) { this.savedJobs.update(ids => ids.includes(id) ? ids.filter(saved => saved !== id) : [...ids, id]); }
  protected showNotice(message: string) { this.notice.set(message); setTimeout(() => this.notice.set(''), 3500); }
}
