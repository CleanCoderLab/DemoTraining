import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Courses', path: '/courses' },
    { label: 'Jobs', path: '/placements', badge: 'new' },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' }
  ];
}
