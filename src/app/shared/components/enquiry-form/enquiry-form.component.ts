import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'shared-enquiry-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Name <input name="name" ngModel></label>
      <label>Email <input name="email" ngModel></label>
      <button>Send</button>
    </form>
  `
})
export class EnquiryFormComponent {
  onSubmit() { /* placeholder */ }
}
