import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-cart',
  templateUrl: './svg-cart.component.html',
  styleUrl: './svg-cart.component.scss'
})
export class SvgCartComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
