import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../login-and-register-user/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, AfterViewInit {
  userObjState!: User | null;
  whichWasClicked = "1";
  @ViewChildren('mySpan') spans!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChildren('containerItensMyAccount') containerItensMyAccountAll!: QueryList<ElementRef<HTMLSpanElement>>;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      this.userObjState = user;
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.containerItensMyAccountAll.forEach((el, index) => {
      if(index === 0){
        el.nativeElement.style.display = "flex";

      }
    });

    this.spans.forEach((span, index) => {
      if(index === 0){
        span.nativeElement.style.color = "#ee4d2d";
      }
    });
  }

  onClickMyAccountItens = (number: string) => {
    // setWhichWasClicked(number);
    this.whichWasClicked = number;
    const userObj = this.userObjState;

    if(userObj === null) return;

    const spanNumber = Number(number);

    if (number === '1') {
      this.changeSpanColor(spanNumber);

      if (this.userObjState) {
        // nav('/user/account/profile', { state: { user: this.userObjState } });
        this.router.navigate(['/user/account/perfil']);
      }
    }

    if (number === '2') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/payment', { state: { user: userObjState } });
      this.router.navigate(['/user/account/payment' , { state: { userObj } }]);
    }

    if (number === '3') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/address', { state: { user: userObjState } });
      this.router.navigate(['/user/account/address' , { state: { userObj } }]);
    }

    if (number === '4') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/password', { state: { user: userObjState } });
      // nav('/verify', { state: { user: userObjState } });
      // this.router.navigate(['/verify' , { state: { userObj } }]);
    }

    if (number === '5') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/password', { state: { user: userObjState } });
      // nav('/user/account/cookie', { state: { user: userObjState } });
      this.router.navigate(['/user/account/cookie' , { state: { userObj } }]);
    }

    if (number === '6') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/password', { state: { user: userObjState } });
      // nav('/user/setting/privacy', { state: { user: userObjState } });
      this.router.navigate(['/user/account/privacy' , { state: { userObj } }]);
    }

    // if (number === '7') {
    //   nav('/user/notifications/order', { state: { user: userObjState } });
    // }

    // if (number === '8') {
    //   nav('/user/notifications/promotion', { state: { user: userObjState } });
    // }

    // if (number === '9') {
    //   nav('/user/notifications/wallet', { state: { user: userObjState } });
    // }

    // if (number === '10') {
    //   nav('/user/notifications/shopee', { state: { user: userObjState } });
    // }
  };

  changeSpanColor(spanNumber: number): void{
    this.spans.forEach((span, index) => {
      if(spanNumber === index + 1){
        // span.nativeElement.classList.add('active');
        span.nativeElement.style.color = "#ee4d2d";

      }else {
        span.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      }
    });
  }
}
