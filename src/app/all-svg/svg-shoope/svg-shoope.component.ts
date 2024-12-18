import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-shoope',
  templateUrl: './svg-shoope.component.html',
  styleUrl: './svg-shoope.component.scss'
})
export class SvgShoopeComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
