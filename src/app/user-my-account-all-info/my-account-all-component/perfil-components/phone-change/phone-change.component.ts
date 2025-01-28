import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import Inputmask from 'inputmask';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { Router } from '@angular/router';
import { ObjCodeUserPhoneToRegisterAccountService } from '../../../../login-and-register-user/service/obj-code-user-phone-to-register-account.service';

@Component({
  selector: 'app-phone-change',
  templateUrl: './phone-change.component.html',
  styleUrl: './phone-change.component.scss'
})
export class PhoneChangeComponent implements AfterViewInit, OnInit, OnDestroy {
  inputNumberPhone!: HTMLInputElement;
  buttonNext!: HTMLButtonElement;
  canClickButtonNext = false;
  phoneAlreadyRegistered = false;
  valueNumberPhoneCreate = "";
  codeUserCreate: Record<string, string> = {};
  user!: User | null;
  settimeOutGender!: number;

  constructor(private userService: UserService, private router: Router, private objCodeUserPhone: ObjCodeUserPhoneToRegisterAccountService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.user = user;
    }
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const inputNumberPhone = document.querySelector(".input-number-phone") as HTMLInputElement;
    this.inputNumberPhone = inputNumberPhone;

    const buttonNext = document.querySelector(".button-next") as HTMLButtonElement;
    this.buttonNext = buttonNext;

    if(this.inputNumberPhone){
      const mask = Inputmask({
        mask: '(+99) 99 99999 9999',
        placeholder: '(+__) __ _____ ____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(this.inputNumberPhone);
    }
  }

  onInputPhoneEmailName(event: Event): void {
    if(this.buttonNext === null) return;

    const inputValue = (event.target as HTMLInputElement).value;
    // (+55) 23 32323 3223
    const inputValueNew = inputValue.replace(/_/g, '').trim();
    this.valueNumberPhoneCreate = inputValueNew;

    if (inputValueNew && inputValueNew.length >= 19) {
      this.buttonNext.style.backgroundColor = '#ee4d2d';
      this.buttonNext.style.cursor = 'pointer';

      this.canClickButtonNext = true;
    } else {
      this.buttonNext.style.backgroundColor = '#facac0';
      this.buttonNext.style.cursor = 'not-allowed';

      this.canClickButtonNext = false;
    }
  }

  onClickSendCodeEmail = () => {
    if(this.inputNumberPhone === null || !this.canClickButtonNext || this.user === null) return;

    if(!this.canClickButtonNext) return;

    let numberRandom = '';

    for (let i = 0; i < 6; i++) {
      const code = Math.floor(Math.random() * 9) + 1;
      numberRandom += code;
    }

    const phoneNumber = this.valueNumberPhoneCreate.replace(/\s+/g, '').replace(/_/g, '').trim();

    this.codeUserCreate[phoneNumber] = numberRandom;

    this.objCodeUserPhone.updateobjCode(this.codeUserCreate);

    this.router.navigate(['confirm-code-email'], { queryParams: { email: null, phone: this.valueNumberPhoneCreate} });

    // const objSend = { -> ESSE É O CORRETO
    //   phone: this.valueNumberPhoneCreate,
    //   userId: this.user.id,
    // };

    // this.userService.sendCodePhone(objSend).subscribe({
    //   next: (success) => {
    //     const codeSend: CodeSendToPhone = success.data;

    //     if(codeSend.phoneAlreadyRegistered){
    //       this.phoneAlreadyRegistered = codeSend.phoneAlreadyRegistered;

    //       this.settimeOutGender = setTimeout(() => {
    //         this.phoneAlreadyRegistered = false;
    //       }, 5000);
    //     }

    //     if(codeSend.codeSendToPhone && this.user){
    //       // confirm-code-email
    //       this.router.navigate(['confirm-code-email'], { queryParams: { email: null, phone: this.valueNumberPhoneCreate} });
    //     }

    //   },
    //   error: error => {
    //     console.log(error);

    //     // if(error.status === 400){
    //     //   console.log(error);
    //     //   // this.confirmEmail = false;
    //     // }

    //     // if(error.status === 403){
    //     //   localStorage.removeItem('user');
    //     //   this.router.navigate(['/buyer/login']);
    //     //   // this.confirmEmail = false;
    //     // }
    //   }
    // });

  };

  onMouseEnterButtonNext = () => {
    if (this.inputNumberPhone === null) return;

    if (
      this.inputNumberPhone !== null &&
      this.inputNumberPhone.value.length > 1 &&
      this.inputNumberPhone.value.includes('@')
    ) {
      if (this.inputNumberPhone) {
        this.inputNumberPhone.style.backgroundColor = 'rgb(238 100 73)';
      }
    }
  };

  onMouseLeaveButtonNext = () => {
    if (this.inputNumberPhone === null) return;

    if (
      this.inputNumberPhone !== null &&
      this.inputNumberPhone.value.length > 1 &&
      this.inputNumberPhone.value.includes('@')
    ) {
      if (this.buttonNext) {
        this.buttonNext.style.backgroundColor = '#ee4d2d';
      }
    }
  };

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutGender);
  }
}
