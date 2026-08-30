import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent) },
      { path: 'courses', loadChildren: () => import('./features/courses/courses.routes').then((m) => m.coursesRoutes) },
      { path: 'trainers', loadComponent: () => import('./features/trainers/trainers.component').then((m) => m.TrainersComponent) },
      { path: 'placements', loadComponent: () => import('./features/placements/placements.component').then((m) => m.PlacementsComponent) },
      { path: 'jobs', redirectTo: 'placements', pathMatch: 'full' },
      { path: 'jobs/:id', redirectTo: 'placements/:id', pathMatch: 'full' },
      { path: 'resources', loadComponent: () => import('./features/resources/resources.component').then((m) => m.ResourcesComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent) },
      { path: '**', redirectTo: '' }
    ]
  }
];
