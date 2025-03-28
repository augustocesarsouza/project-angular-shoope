import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-language',
    templateUrl: './svg-language.component.html',
    styleUrl: './svg-language.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgLanguageComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
