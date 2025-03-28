import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrl: './body-user.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class BodyUserComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() color = 'red';
}
