import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-svg-check',
    templateUrl: './svg-check.component.html',
    styleUrl: './svg-check.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgCheckComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
  @Input() display = 'flex';

  @HostBinding('style.display') get hostDisplay() {
    return this.display;
  }
}
