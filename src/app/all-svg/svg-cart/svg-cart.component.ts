import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-cart',
    templateUrl: './svg-cart.component.html',
    styleUrl: './svg-cart.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgCartComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
