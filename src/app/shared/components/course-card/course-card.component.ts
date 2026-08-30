import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-course-card',
  standalone: true,
  template: `<article class="course-card"><h3>{{title}}</h3><p>{{description}}</p></article>`,
  styles: ['.course-card{border:1px solid #e7edf3;padding:12px;border-radius:8px;}']
})
export class CourseCardComponent {
  @Input() title = '';
  @Input() description = '';
}
