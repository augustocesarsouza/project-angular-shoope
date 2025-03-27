import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow',
  templateUrl: './svg-arrow.component.html',
  styleUrl: './svg-arrow.component.scss'
})
export class SvgArrowComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
  @Input() rotate = 'rotate(0)';
}
