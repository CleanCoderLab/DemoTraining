import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { courses, Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  readonly courseList = courses;
  courseQuery = '';
  courseCategory = 'All categories';
  courseLevel = 'All levels';

  get filteredCourses(): Course[] {
    const query = this.courseQuery.toLowerCase();
    return this.courseList.filter(course =>
      (!query || `${course.title} ${course.technologies.join(' ')}`.toLowerCase().includes(query)) &&
      (this.courseCategory === 'All categories' || course.category === this.courseCategory) &&
      (this.courseLevel === 'All levels' || course.level === this.courseLevel)
    );
  }
}
