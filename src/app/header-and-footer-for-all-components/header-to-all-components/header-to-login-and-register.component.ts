import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-to-all-components',
  templateUrl: './header-to-all-components.component.html',
  styleUrl: './header-to-all-components.component.scss'
})
export class headerToAllComponentsComponent {
  @Input() valueToSpan = 'Entre';
}
