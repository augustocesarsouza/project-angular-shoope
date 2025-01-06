import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-shield-shopee',
  templateUrl: './svg-shield-shopee.component.html',
  styleUrl: './svg-shield-shopee.component.scss'
})
export class SvgShieldShopeeComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'orange';
}
