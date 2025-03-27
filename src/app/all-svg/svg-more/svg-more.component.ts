import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-more',
    templateUrl: './svg-more.component.html',
    styleUrl: './svg-more.component.scss',
    standalone: false
})
export class SvgMoreComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
