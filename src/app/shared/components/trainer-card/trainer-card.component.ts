import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-trainer-card',
  standalone: true,
  template: `<div class="trainer"><strong>{{name}}</strong><div class="role">{{role}}</div></div>`,
  styles: ['.trainer{border:1px solid #eef;padding:10px;border-radius:6px;} .role{color:#7a879a;font-size:12px;}']
})
export class TrainerCardComponent {
  @Input() name = '';
  @Input() role = '';
}
