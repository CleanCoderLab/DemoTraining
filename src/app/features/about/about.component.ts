import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly stats = [
    { n: '500+', l: 'Students trained' },
    { n: '20+', l: 'Courses & paths' },
    { n: '50+', l: 'Industry projects' },
    { n: '90%', l: 'Career success' }
  ];
}
