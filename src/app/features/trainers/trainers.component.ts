import { Component } from '@angular/core';

@Component({
  selector: 'app-trainers',
  standalone: true,
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {
  readonly trainers = [
    { name: 'Aarav Mehta', role: 'Senior .NET Mentor', specialty: 'Full Stack & Architecture' },
    { name: 'Nisha Rao', role: 'Angular Specialist', specialty: 'Frontend Systems & UX' },
    { name: 'Vikram Shah', role: 'Java Engineer', specialty: 'Enterprise Apps' },
    { name: 'Meera Iyer', role: 'Data Coach', specialty: 'Python & Analytics' }
  ];
}
