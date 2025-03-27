import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { ObjCodeUserPhoneToRegisterAccountService } from '../../../../login-and-register-user/service/obj-code-user-phone-to-register-account.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-email-and-phone-confirm-code',
    templateUrl: './email-and-phone-confirm-code.component.html',
    styleUrl: './email-and-phone-confirm-code.component.scss',
    standalone: false
})
export class EmailAndPhoneConfirmCodeComponent implements OnInit, AfterViewInit {
  emailThatWasSent: string | null = null;
  phoneThatWasSent: string | null = null;
  allInputs!: NodeListOf<HTMLInputElement>;

  valueInputPhoneOne = '';
  valueInputPhoneTwo = '';
  valueInputPhoneThree = '';
  valueInputPhoneFour = '';
  valueInputPhoneFive = '';
  valueInputPhoneSix = '';

  codeFull = '';
  allSixVerificationCodeIsComplet = false;
  buttonNext!: HTMLInputElement;
  userLogin!: User | null;

  codeUserCreate: Record<string, string> = {};
  private SubscriptionAll: Subscription[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private objCodeUserPhone: ObjCodeUserPhoneToRegisterAccountService){
    // emailThatWasSent
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.emailThatWasSent = params['email'] || null;
      this.phoneThatWasSent = params['phone'] || null;
    });

    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.userLogin = user;
    }
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    this.allInputs = document.querySelectorAll('.input-celphone') as NodeListOf<HTMLInputElement>;
    this.buttonNext = document.querySelector('.button-next') as HTMLInputElement;

    if(this.objCodeUserPhone.currentObjCode){
      this.SubscriptionAll.push(this.objCodeUserPhone.objCode$.subscribe((objCode) => {
        this.codeUserCreate = objCode;
        console.log(this.codeUserCreate);
      }));
    }
  }

  onClickBackStar = () => {
    // nav('/user/account/email');
    this.router.navigate(['/user/account/email']);
  };

  onClickResendCode = () =>{
    // seila
  }

  onClickNextStep = () => {
    if(!this.allSixVerificationCodeIsComplet) return;

    if (this.userLogin === null || this.codeFull.length <= 5) return;

    if(!this.emailThatWasSent){
      const phoneUser = this.userLogin?.phone.replace(/\s+/g, '').replace(/_/g, '').trim();
      if(phoneUser === null || phoneUser === undefined) return;

      if(this.codeUserCreate[phoneUser] === this.codeFull){
        this.router.navigate(['/user/account/profile']);
      }else {
        console.log("NOT OK");
      }
    }else {
      const userId = this.userLogin.id;

      const bodyUserEmailCode = {
        code: this.codeFull,
        userId: userId,
        email: this.emailThatWasSent,
        phone: this.phoneThatWasSent
      };

      this.userService.verifyCodeUser(bodyUserEmailCode).subscribe({
        next: (success) => {
          // this.userObjState = success.data;
          const resultData = success.data;
          console.log(resultData);
          this.router.navigate(['/user/account/profile']);


          // nav('/user/account/profile', { state: { user: { email: emailThatWasSent } } });
        },
        error: error => {
          if(error.status === 400){
            console.log(error);

            // this.confirmEmail = false;
          }
        }
      });
      }
  };

  clickInputVerificationCode = () => {
    for (const input of Array.from(this.allInputs)) {

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

  changeInputVerificationCode(e: Event, index: number): void {
    const input = e.target as HTMLInputElement;

    if (Number.isNaN(Number(input.value))) {
      input.value = '';
      return;
    }

    switch (index) {
      case 0:
        this.valueInputPhoneOne = input.value;
        break;
      case 1:
        this.valueInputPhoneTwo = input.value;
        break;
      case 2:
        this.valueInputPhoneThree = input.value;
        break;
      case 3:
        this.valueInputPhoneFour = input.value;
        break;
      case 4:
        this.valueInputPhoneFive = input.value;
        break;
      case 5:
        this.valueInputPhoneSix = input.value;
        break;
    }

    let codeFull = "";
    for (const input of Array.from(this.allInputs)) {
      codeFull += input.value;
    }

    this.codeFull = codeFull;

    if(codeFull.length > 5){
      this.functionQuantityInputWithValueNumber();
    }

    if (input.value.length === 1 && index < this.allInputs.length - 1) {
      this.allInputs[index + 1].focus();
    }
  }

  keyDownVerificationCode = (e: Event, index: number) => {
    const input = e.target as HTMLInputElement;
    const event = e as KeyboardEvent;

    if (event.code === 'Backspace' && index > 0) {
      if (input.value.length === 1) {
        // allInputs[index].value = '';

        switch (index) {
          case 0:
            this.valueInputPhoneOne = '';
            break;
          case 1:
            this.valueInputPhoneTwo = '';
            break;
          case 2:
            this.valueInputPhoneThree = '';
            break;
          case 3:
            this.valueInputPhoneFour = '';
            break;
          case 4:
            this.valueInputPhoneFive = '';
            break;
          case 5:
            this.valueInputPhoneSix = '';
            break;
        }

        this.allInputs[index - 1].focus();
      } else {
        this.allInputs[index - 1].focus();
        this.allInputs[index - 1].value = '';
      }

      let quantityNumberInput = 0;


      this.allInputs.forEach((el) => {
        if(Number(el.value)){
          quantityNumberInput += 1;
        }
      });

      if((quantityNumberInput - 1) < 6){
        this.allSixVerificationCodeIsComplet = false;
        this.buttonNext.style.cursor = "not-allowed";
        this.buttonNext.style.opacity = "0.7";
      }

      let codeFull = "";
      for (const input of Array.from(this.allInputs)) {
        codeFull += input.value;
      }

      this.codeFull = codeFull;
      e.preventDefault();
    }
  };

  functionQuantityInputWithValueNumber(){
    // let quantityNumberInput = 0;

    // this.allInputs.forEach((el) => {
    //   if(Number(el.value)){
    //     quantityNumberInput += 1;
    //   }
    // });

    // if(quantityNumberInput === 6){
    //   this.allSixVerificationCodeIsComplet = true;

    //   // this.buttonNext.style.backgroundColor = "#ee4d2d";
    //   this.buttonNext.style.cursor = "pointer";
    //   this.buttonNext.style.opacity = "1";
    // }

    this.allSixVerificationCodeIsComplet = true;

    // this.buttonNext.style.backgroundColor = "#ee4d2d";
    this.buttonNext.style.cursor = "pointer";
    this.buttonNext.style.opacity = "1";
  }
}
