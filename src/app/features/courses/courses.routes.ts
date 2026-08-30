import { Routes } from '@angular/router';
import { CourseListPageComponent } from './pages/course-list/course-list.component';
import { CourseDetailsPageComponent } from './pages/course-details/course-details.component';

export const coursesRoutes: Routes = [
  { path: '', component: CourseListPageComponent },
  { path: ':id', component: CourseDetailsPageComponent }
];
