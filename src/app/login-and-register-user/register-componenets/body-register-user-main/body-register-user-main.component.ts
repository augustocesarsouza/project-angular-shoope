import { Component, AfterViewInit } from '@angular/core';
import {  Router } from '@angular/router';
import Inputmask from 'inputmask';
import { ObjCodeUserPhoneToRegisterAccountService } from '../../service/obj-code-user-phone-to-register-account.service';

// interface CodeSendPhoneDTOProps {
//   phone: string;
//   code: string;
//   codeSendToPhone: boolean;
// }

@Component({
    selector: 'app-body-register-user-main',
    templateUrl: './body-register-user-main.component.html',
    styleUrl: './body-register-user-main.component.scss',
    standalone: false
})
export class BodyRegisterUserMainComponent implements AfterViewInit {
  buttonNext!: HTMLElement | null;
  canClickButtonNext = false;
  clickNextStepRegister = false;
  valueNumberPhoneCreate = "";

  codeUserCreate: Record<string, string> = {};

  constructor(private objCodeUserPhone: ObjCodeUserPhoneToRegisterAccountService, private router: Router){}

  ngAfterViewInit():void {
    if(typeof document === "undefined" || document === null) return;

    const inputNumberPhone = document.getElementById('input-number-phone');
    const buttonNext = document.getElementById('button-next');
    this.buttonNext = buttonNext;

    if(inputNumberPhone){
      const mask = Inputmask({
        mask: '(+99) 99 99999 9999',
        placeholder: '(+__) __ _____ ____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputNumberPhone);
    }
  }

  onInputPhoneEmailName(event: Event): void {
    if(this.buttonNext === null) return;

    const inputValue = (event.target as HTMLInputElement).value;
    // (+55) 23 32323 3223
    const inputValueNew = inputValue.replace(/_/g, '').trim();
    this.valueNumberPhoneCreate = inputValueNew;

    if (inputValueNew && inputValueNew.length >= 19) {
      this.buttonNext.style.background = '#ee4d2d';
      this.buttonNext.style.cursor = 'pointer';

      this.canClickButtonNext = true;
    } else {
      this.buttonNext.style.background = '#f3826c';
      this.buttonNext.style.cursor = 'not-allowed';

      this.canClickButtonNext = false;
    }
  }

  async clickNextButton(): Promise<void> {
    if(!this.canClickButtonNext) return;

    this.clickNextStepRegister = true;

    let numberRandom = '';

    for (let i = 0; i < 6; i++) {
      const code = Math.floor(Math.random() * 9) + 1;
      numberRandom += code;
    }

    const phoneNumber = this.valueNumberPhoneCreate.replace(/\s+/g, '').replace(/_/g, '').trim();

    this.codeUserCreate[phoneNumber] = numberRandom;

    this.objCodeUserPhone.updateobjCode(this.codeUserCreate);

    // const objSend = {
    //   "phone": this.valueNumberPhoneCreate,
    // }

    // const resp = await fetch('http://localhost:8080/v1/public/user/send-code-phone', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(objSend),
    // });

    // if (resp.status === 200) {
    //   const json = await resp.json();
    //   const data: CodeSendPhoneDTOProps = json.data;
    // } else if (resp.status === 400) {
    // }
  }

  clickEntry(): void{
    // this.router.navigate(['/movie', movie.id]);
    this.router.navigate(['/buyer/login']);
  }
}
