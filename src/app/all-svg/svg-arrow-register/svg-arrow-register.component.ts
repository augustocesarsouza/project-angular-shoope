import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-arrow-register',
    templateUrl: './svg-arrow-register.component.html',
    styleUrl: './svg-arrow-register.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgArrowRegisterComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
}
