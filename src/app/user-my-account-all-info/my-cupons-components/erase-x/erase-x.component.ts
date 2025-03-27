import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-erase-x',
    templateUrl: './erase-x.component.html',
    styleUrl: './erase-x.component.scss',
    standalone: false
})
export class EraseXComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
}
