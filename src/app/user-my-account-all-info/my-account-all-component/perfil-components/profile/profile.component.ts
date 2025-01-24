import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { Router } from '@angular/router';
import {  GetUserPerfilService } from '../../../../login-and-register-user/service/get-user-perfil.service';
import { Subscription } from 'rxjs';
import { UpdateNumberUrlMyAccountService } from '../../../../login-and-register-user/service/update-number-url-my-account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  userObjState!: User | null;
  whichWasClicked = "1";
  @ViewChildren('mySpan') spans!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChildren('containerItensMyAccount') containerItensMyAccountAll!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChild('containerNotification') containerNotification!: ElementRef<HTMLDivElement>;

  @ViewChild('spanMyAccount') spanMyAccount!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanNotification') spanNotification!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanOrderUpdates') spanOrderUpdates!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanPromotion') spanPromotion!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanWalletUpdates') spanWalletUpdates!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanShopeeUpdates') spanShopeeUpdates!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMyCupons') spanMyCupons!: ElementRef<HTMLSpanElement>;
  @ViewChild('spanMyShopeeCoins') spanMyShopeeCoins!: ElementRef<HTMLSpanElement>;

  imgUserPerfil = "";
  settimeOutAny!: number;
  private routeSubscription!: Subscription;
  containerItensMyPourches!: HTMLDivElement;
  containerItensMyAccount!: HTMLDivElement;

  constructor(private router: Router, private getUserPerfilService: GetUserPerfilService, private updateNumberUrlMyAccountService: UpdateNumberUrlMyAccountService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      this.userObjState = user;
    }

    this.settimeOutAny = setTimeout(() => {
      this.getUserPerfilService.user$.subscribe((user) => {
        this.userObjState = user;
      });
    }, 10) as unknown as number;
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

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

    const numberUrl = this.updateNumberUrlMyAccountService.currentUser;

    if(numberUrl){
      this.changeSpanColor(numberUrl);
    };

    const containerItensMyPourches = document.querySelector(".container-itens-my-pourches")as HTMLDivElement;
    this.containerItensMyPourches = containerItensMyPourches;

    const containerItensMyAccount = document.querySelector(".container-itens-my-account")as HTMLDivElement;
    this.containerItensMyAccount = containerItensMyAccount;

    if(numberUrl === 10){
      this.containerItensMyAccount.style.display = "none";
      this.containerNotification.nativeElement.style.display = "none";
      this.spanMyAccount.nativeElement.style.color = "#ee4d2d";
    }

    if(numberUrl === 20){
      this.containerItensMyAccount.style.display = "none";
      this.spanOrderUpdates.nativeElement.style.color = "#ee4d2d";

      this.containerNotification.nativeElement.style.display = "flex";
      this.containerNotification.nativeElement.style.color = "#ee4d2d";
    }

    if(numberUrl === 30){
      this.containerItensMyAccount.style.display = "none";
      this.spanOrderUpdates.nativeElement.style.color = "#ee4d2d";

      this.containerNotification.nativeElement.style.display = "none";
      this.containerNotification.nativeElement.style.color = "#ee4d2d";

      this.spanMyCupons.nativeElement.style.color = "#ee4d2d";
    }

    if(numberUrl === 40){
      this.containerItensMyAccount.style.display = "none";
      this.spanOrderUpdates.nativeElement.style.color = "#ee4d2d";

      this.containerNotification.nativeElement.style.display = "none";
      this.containerNotification.nativeElement.style.color = "#ee4d2d";

      this.spanMyCupons.nativeElement.style.color = "black";
      this.spanMyShopeeCoins.nativeElement.style.color = "#ee4d2d";
    }

    // if(numberUrl === 21){
    //   this.spanOrderUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
    //   this.spanPromotion.nativeElement.style.color = "#ee4d2d";
    // }
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
        this.updateNumberUrlMyAccountService.updateImgUser(1);
        this.router.navigate(['/user/account/perfil']);
      }
    }

    if (number === '2') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/payment', { state: { user: userObjState } });
      this.updateNumberUrlMyAccountService.updateImgUser(2);
      this.router.navigate(['/user/account/payment']);
    }

    if (number === '3') {
      this.changeSpanColor(spanNumber);

      // nav('/user/account/address', { state: { user: userObjState } });
      this.updateNumberUrlMyAccountService.updateImgUser(3);
      this.router.navigate(['/user/account/address']);
    }

    if (number === '4') {
      this.changeSpanColor(spanNumber);

      this.updateNumberUrlMyAccountService.updateImgUser(4);
      this.router.navigate(['/verify']);
    }

    if (number === '5') {
      this.changeSpanColor(spanNumber);

      this.updateNumberUrlMyAccountService.updateImgUser(5);
      this.router.navigate(['/user/account/cookie']);
    }

    if (number === '6') {
      this.changeSpanColor(spanNumber);
      this.updateNumberUrlMyAccountService.updateImgUser(6);
      this.router.navigate(['/user/setting/privacy']);
    }

    if (number === '7') {
      this.spanPromotion.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanWalletUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanShopeeUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanOrderUpdates.nativeElement.style.color = "#ee4d2d";
      this.router.navigate(['/user/notifications/order']);
    }

    if (number === '8') {
      this.spanOrderUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanWalletUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanShopeeUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanPromotion.nativeElement.style.color = "#ee4d2d";
      this.router.navigate(['/user/notifications/promotion']);
    }

    if (number === '9') {
      this.spanOrderUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanPromotion.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanShopeeUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanWalletUpdates.nativeElement.style.color = "#ee4d2d";
      this.router.navigate(['/user/notifications/wallet']);
    }

    if (number === '10') {
      this.spanOrderUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanPromotion.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanWalletUpdates.nativeElement.style.color = "rgba(0, 0, 0, 0.65)";
      this.spanShopeeUpdates.nativeElement.style.color = "#ee4d2d";
      this.router.navigate(['/user/notifications/shopee']);
      // nav('/user/notifications/shopee', { state: { user: userObjState } });
    }
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

  onClickContainerMyAccount(){
    this.containerItensMyAccount.style.display = "flex";
    this.spanMyAccount.nativeElement.style.color = "black";

    this.updateNumberUrlMyAccountService.updateImgUser(1);
    this.router.navigate(['/user/account/perfil']);
  }

  onClickMyPurches(){
    this.updateNumberUrlMyAccountService.updateImgUser(10);
    this.router.navigate(['/user/purchase']);
  }

  onClickNotifications(){
    this.updateNumberUrlMyAccountService.updateImgUser(20);
    this.router.navigate(['/user/notifications/order']);
  }

  onClickContainerMyCupons(){
    this.updateNumberUrlMyAccountService.updateImgUser(30);
    this.router.navigate(['/user/voucher-wallet']);
  }

  onClickContainerMyShopeeCoins(){
    this.updateNumberUrlMyAccountService.updateImgUser(40);
    this.router.navigate(['/user/coin']);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
// voucher-wallet
