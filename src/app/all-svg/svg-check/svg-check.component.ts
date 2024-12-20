import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-check',
  templateUrl: './svg-check.component.html',
  styleUrl: './svg-check.component.scss'
})
export class SvgCheckComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'red';

  constructor(){
  }
}
