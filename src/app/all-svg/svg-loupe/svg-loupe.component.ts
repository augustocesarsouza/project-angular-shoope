import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-loupe',
    templateUrl: './svg-loupe.component.html',
    styleUrl: './svg-loupe.component.scss',
    standalone: false
})
export class SvgLoupeComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
