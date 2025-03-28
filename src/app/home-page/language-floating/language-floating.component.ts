import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-language-floating',
    templateUrl: './language-floating.component.html',
    styleUrl: './language-floating.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LanguageFloatingComponent {
  @Input() handleShowContainerLenguage!: (newValue: boolean) => void;
  @Input() clearLanguageTimeout!: () => void;
  @Input() showContainerLenguage!: boolean;

  onMouseEnterLanguageFloating(){
    this.handleShowContainerLenguage(true);
  }

  onMouseLeaveLanguageFloating(){
    this.handleShowContainerLenguage(false);
  }

  onMouseEnterArrowTopFloating(){
    this.clearLanguageTimeout();
  }
}
