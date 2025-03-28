import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-to-all-components',
    templateUrl: './header-to-all-components.component.html',
    styleUrl: './header-to-all-components.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class headerToAllComponentsComponent {
  @Input() valueToSpan = 'Entre';
}
