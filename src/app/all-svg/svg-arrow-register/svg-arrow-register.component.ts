import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-register',
  templateUrl: './svg-arrow-register.component.html',
  styleUrl: './svg-arrow-register.component.scss'
})
export class SvgArrowRegisterComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'red';

  constructor(){
  }
}
