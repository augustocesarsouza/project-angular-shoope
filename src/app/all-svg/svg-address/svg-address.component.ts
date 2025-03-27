import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-address',
    templateUrl: './svg-address.component.html',
    styleUrl: './svg-address.component.scss',
    standalone: false
})
export class SvgAddressComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
