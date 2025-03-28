import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-lock',
    templateUrl: './svg-lock.component.html',
    styleUrl: './svg-lock.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgLockComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
