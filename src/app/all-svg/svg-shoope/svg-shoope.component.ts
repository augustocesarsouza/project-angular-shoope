import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-shoope',
  templateUrl: './svg-shoope.component.html',
  styleUrl: './svg-shoope.component.scss'
})
export class SvgShoopeComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
