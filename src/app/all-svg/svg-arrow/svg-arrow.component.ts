import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow',
  templateUrl: './svg-arrow.component.html',
  styleUrl: './svg-arrow.component.scss'
})
export class SvgArrowComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';
  @Input() rotate: string = 'rotate(0)';

  constructor(){

  }
}
