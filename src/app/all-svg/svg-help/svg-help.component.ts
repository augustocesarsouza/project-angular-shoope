import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-help',
  templateUrl: './svg-help.component.html',
  styleUrl: './svg-help.component.scss'
})
export class SvgHelpComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
