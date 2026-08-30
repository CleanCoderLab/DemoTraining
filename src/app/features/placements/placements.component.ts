import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.scss'
})
export class PlacementsComponent {
  readonly jobs = [
    { id: 1, title: 'Senior .NET Developer', company: 'Northstar Labs', location: 'Bengaluru, India', salary: '₹18–24 LPA', experience: '4–7 years', mode: 'Hybrid', type: 'Full-time', posted: '2 days ago', skills: ['C#', '.NET Core', 'Azure'], description: 'Own features across a high-trust product engineering team building tools for modern operations.' },
    { id: 2, title: 'Angular Developer', company: 'Orbit Systems', location: 'Pune, India', salary: '₹10–16 LPA', experience: '2–4 years', mode: 'Remote', type: 'Full-time', posted: '1 day ago', skills: ['Angular', 'TypeScript', 'RxJS'], description: 'Help craft thoughtful, high-performance interfaces used by teams around the world.' },
    { id: 3, title: 'Full Stack Developer', company: 'Cedar & Co.', location: 'Hyderabad, India', salary: '₹12–19 LPA', experience: '3–5 years', mode: 'On-site', type: 'Full-time', posted: '4 days ago', skills: ['React', 'Node.js', 'PostgreSQL'], description: 'Join a product team turning complex workflows into simple software.' },
    { id: 4, title: 'Java Developer', company: 'BluePeak Finance', location: 'Mumbai, India', salary: '₹14–21 LPA', experience: '3–6 years', mode: 'Hybrid', type: 'Full-time', posted: '5 days ago', skills: ['Java', 'Spring Boot', 'AWS'], description: 'Build secure, reliable services for a fast-growing financial platform.' }
  ];

  search = '';
  location = '';
  selectedMode = 'All modes';
  savedJobs: number[] = [];

  get filteredJobs() {
    const query = this.search.toLowerCase();
    const qLocation = this.location.toLowerCase();
    return this.jobs.filter(job =>
      (!query || `${job.title} ${job.skills.join(' ')} ${job.company}`.toLowerCase().includes(query)) &&
      (!qLocation || job.location.toLowerCase().includes(qLocation)) &&
      (this.selectedMode === 'All modes' || job.mode === this.selectedMode)
    );
  }

  toggleSave(id: number): void {
    this.savedJobs = this.savedJobs.includes(id) ? this.savedJobs.filter(saved => saved !== id) : [...this.savedJobs, id];
  }
}
