import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-notification',
  templateUrl: './svg-notification.component.html',
  styleUrl: './svg-notification.component.scss'
})
export class SvgNotificationComponent {
  @Input() width: string = '10px';
  @Input() height: string = '10px';
  @Input() fill: string = 'white';

  constructor(){

  }
}
