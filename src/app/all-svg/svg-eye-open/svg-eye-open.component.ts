import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-eye-open',
  templateUrl: './svg-eye-open.component.html',
  styleUrl: './svg-eye-open.component.scss'
})
export class SvgEyeOpenComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'red';

  constructor(){

  }
}
