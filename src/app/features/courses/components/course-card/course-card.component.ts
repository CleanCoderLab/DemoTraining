import { Component, Input } from '@angular/core';
import type { Course } from '../../models/course.model';

@Component({
  selector: 'courses-course-card',
  standalone: true,
  template: `<article class="course-card"><h3>{{course?.title}}</h3><p>{{course?.description}}</p></article>`,
  styles: ['.course-card{border:1px solid #e7edf3;padding:12px;border-radius:8px;}']
})
export class CoursesCourseCardComponent {
  @Input() course?: Course;
}
