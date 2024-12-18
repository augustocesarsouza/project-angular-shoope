import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-floating',
  templateUrl: './language-floating.component.html',
  styleUrl: './language-floating.component.scss'
})
export class LanguageFloatingComponent {
  @Input() handleShowContainerLenguage!: (newValue: boolean) => void;
  @Input() clearLanguageTimeout!: () => void;
  @Input() showContainerLenguage!: boolean;

  constructor(){}

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
