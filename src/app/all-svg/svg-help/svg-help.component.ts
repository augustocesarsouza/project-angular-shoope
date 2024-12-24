import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-help',
  templateUrl: './svg-help.component.html',
  styleUrl: './svg-help.component.scss'
})
export class SvgHelpComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';

}
