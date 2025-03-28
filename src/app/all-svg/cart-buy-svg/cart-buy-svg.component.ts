import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cart-buy-svg',
    templateUrl: './cart-buy-svg.component.html',
    styleUrl: './cart-buy-svg.component.scss',
    // eslint-disable-next-line @angular-eslint/prefer-standalone
    standalone: false
})
export class CartBuySvgComponent {
  @Input() width = '10px';
  @Input() height = '10px';
}
