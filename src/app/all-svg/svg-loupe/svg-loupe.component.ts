import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-loupe',
    templateUrl: './svg-loupe.component.html',
    styleUrl: './svg-loupe.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgLoupeComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
