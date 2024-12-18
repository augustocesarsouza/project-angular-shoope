import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-user-without-img',
  templateUrl: './svg-user-without-img.component.html',
  styleUrl: './svg-user-without-img.component.scss'
})
export class SvgUserWithoutImgComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
