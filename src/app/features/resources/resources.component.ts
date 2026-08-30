import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent {
  readonly resourceList = [
    { title: 'How to Prepare for an IT Interview', category: 'Interview Prep', time: '8 min read', icon: '↗', description: 'A practical framework for answering clearly and showing your engineering thinking.' },
    { title: 'Build a Resume That Gets Read', category: 'Career Guidance', time: '6 min read', icon: '▤', description: 'Turn your experience into a focused story recruiters can quickly understand.' },
    { title: '.NET Interview Questions', category: 'Technical', time: '12 min read', icon: '⌘', description: 'Sharpen the fundamentals and patterns that come up in real conversations.' },
    { title: 'Angular Interview Questions', category: 'Technical', time: '10 min read', icon: '◇', description: 'Review the concepts that help you explain your frontend decisions with confidence.' }
  ];
}
