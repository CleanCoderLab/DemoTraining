import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly categories = [
    { name: '.NET Development', icon: '⌘', tone: 'coral' },
    { name: 'Angular', icon: '◇', tone: 'blue' },
    { name: 'Java', icon: '☕', tone: 'orange' },
    { name: 'React', icon: '◌', tone: 'cyan' },
    { name: 'Python', icon: '⌁', tone: 'yellow' },
    { name: 'SQL', icon: '▦', tone: 'violet' },
    { name: 'Cloud & DevOps', icon: '☁', tone: 'green' },
    { name: 'QA Automation', icon: '✓', tone: 'pink' }
  ];

  readonly features = [
    { n: '01', t: 'Industry-relevant training', d: 'Curriculum shaped around the skills teams are hiring for right now.', i: '→' },
    { n: '02', t: 'Experienced trainers', d: 'Learn from practitioners who know the work beyond the theory.', i: '⎇' },
    { n: '03', t: 'Hands-on projects', d: 'Build a portfolio that gives your new skills somewhere to live.', i: '▣' },
    { n: '04', t: 'Career & interview prep', d: 'Get the practice, feedback, and confidence to make your move.', i: '✦' }
  ];

  readonly courseList = [
    { id: 1, title: 'Full Stack .NET Development', description: 'Build production-ready web applications from database to deployment.', duration: '6 Months', level: 'Intermediate', technologies: ['C#', '.NET', 'Angular', 'SQL Server'], icon: '⌘' },
    { id: 2, title: 'Modern Angular Engineering', description: 'Create fast, accessible interfaces with Angular and TypeScript.', duration: '4 Months', level: 'Intermediate', technologies: ['Angular', 'TypeScript', 'RxJS'], icon: '◇' },
    { id: 3, title: 'Java Full Stack', description: 'Master enterprise Java patterns and ship scalable applications.', duration: '6 Months', level: 'Beginner', technologies: ['Java', 'Spring Boot', 'React'], icon: '☕' }
  ];

  readonly jobList = [
    { id: 1, title: 'Senior .NET Developer', company: 'Northstar Labs', location: 'Bengaluru, India' },
    { id: 2, title: 'Angular Developer', company: 'Orbit Systems', location: 'Pune, India' },
    { id: 3, title: 'Full Stack Developer', company: 'Cedar & Co.', location: 'Hyderabad, India' }
  ];
}
