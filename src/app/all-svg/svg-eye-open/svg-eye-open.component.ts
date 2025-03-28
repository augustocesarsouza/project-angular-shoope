import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-eye-open',
    templateUrl: './svg-eye-open.component.html',
    styleUrl: './svg-eye-open.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgEyeOpenComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
}
