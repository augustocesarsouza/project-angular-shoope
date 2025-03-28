import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-help',
    templateUrl: './svg-help.component.html',
    styleUrl: './svg-help.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SvgHelpComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';

}
