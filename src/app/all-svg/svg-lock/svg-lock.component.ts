import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-lock',
    templateUrl: './svg-lock.component.html',
    styleUrl: './svg-lock.component.scss',
    standalone: false
})
export class SvgLockComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
