import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  notice = '';

  showNotice(message: string): void {
    this.notice = message;
    setTimeout(() => this.notice = '', 3500);
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.showNotice('Thanks! We will be in touch soon.');
      form.reset();
    }
  }
}
