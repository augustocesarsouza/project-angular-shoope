import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-language',
  templateUrl: './svg-language.component.html',
  styleUrl: './svg-language.component.scss'
})
export class SvgLanguageComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
