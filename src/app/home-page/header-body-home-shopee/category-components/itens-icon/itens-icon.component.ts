import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-itens-icon',
    templateUrl: './itens-icon.component.html',
    styleUrl: './itens-icon.component.scss',
    standalone: false
})
export class ItensIconComponent {
  @Input() img = '';
  @Input() alt = '';
  @Input() title = '';

  onMouseEnterContainerItensIcon = (containerItensIcon: HTMLDivElement) => {
    containerItensIcon.style.paddingBottom = '3px';
  };

  onMouseLeaveContainerItensIcon = (containerItensIcon: HTMLDivElement) => {
    containerItensIcon.style.paddingBottom = '0px';
  };
}
