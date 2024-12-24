import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-user-floating',
  templateUrl: './name-user-floating.component.html',
  styleUrl: './name-user-floating.component.scss'
})
export class NameUserFloatingComponent {
  @Input() handleShowContainerNameUser!: (newValue: boolean) => void;
  @Input() clearNameUserTimeout!: () => void;
  @Input() showContainerNameUser!: boolean;

  constructor(private router: Router){}

  onMouseEnterNameUserFloating(){
    this.handleShowContainerNameUser(true);
  }

  onMouseLeaveNameUserFloating(){
    this.handleShowContainerNameUser(false);
  }

  onMouseEnterArrowTopFloating(){
    this.clearNameUserTimeout();
  }
}
