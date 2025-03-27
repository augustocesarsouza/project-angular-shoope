import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-user-without-img',
    templateUrl: './svg-user-without-img.component.html',
    styleUrl: './svg-user-without-img.component.scss',
    standalone: false
})
export class SvgUserWithoutImgComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'white';
}
