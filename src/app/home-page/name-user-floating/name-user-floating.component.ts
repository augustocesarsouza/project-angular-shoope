import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-name-user-floating',
    templateUrl: './name-user-floating.component.html',
    styleUrl: './name-user-floating.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
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

  clickMyAccount(){
    this.router.navigate(['/user/account']);
  }

  clickExitUser(){

    if(typeof window !== "undefined"){
      localStorage.removeItem("user");
    }

    this.router.navigate(['/buyer/login']);
    // window.location.reload();
  }
}
