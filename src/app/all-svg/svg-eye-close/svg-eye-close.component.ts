import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-eye-close',
  templateUrl: './svg-eye-close.component.html',
  styleUrl: './svg-eye-close.component.scss'
})
export class SvgEyeCloseComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
