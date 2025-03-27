import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ObjCodeUserPhoneToRegisterAccountService } from '../../../../service/obj-code-user-phone-to-register-account.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-first-step-create-account',
    templateUrl: './first-step-create-account.component.html',
    styleUrl: './first-step-create-account.component.scss',
    standalone: false
})
export class FirstStepCreateAccountComponent implements AfterViewInit, OnDestroy {
  @Input() changeValueStepIsNow!: (value: number) => void;
  @Input() valueNumberPhoneCreate!: string;
  allInputs!: NodeListOf<HTMLInputElement>;
  buttonNext!: HTMLInputElement;
  private SubscriptionAll: Subscription[] = [];

  valueInputPhoneOne = '';
  valueInputPhoneTwo = '';
  valueInputPhoneThree = '';
  valueInputPhoneFour = '';
  valueInputPhoneFive = '';
  valueInputPhoneSix = '';

  allSixVerificationCodeIsComplet = false;
  codeUserCreate: Record<string, string> = {};
  codeFull = '';
  codeIsWrong = false;

  constructor(private objCodeUserPhone: ObjCodeUserPhoneToRegisterAccountService){}

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

    if (input.value.length === 1 && index < this.allInputs.length - 1) {
      this.allInputs[index + 1].focus();
    }

    this.functionQuantityInputWithValueNumber();
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
    let quantityNumberInput = 0;

    this.allInputs.forEach((el) => {
      if(Number(el.value)){
        quantityNumberInput += 1;
      }
    });

    if(quantityNumberInput === 6){
      this.allSixVerificationCodeIsComplet = true;

      // this.buttonNext.style.backgroundColor = "#ee4d2d";
      this.buttonNext.style.cursor = "pointer";
      this.buttonNext.style.opacity = "1";
    }
  }

  onClickResendCode = () => {
    let numberRandom = '';

    for (let i = 0; i < 6; i++) {
      const code = Math.floor(Math.random() * 9) + 1;
      numberRandom += code;
    }

    const phoneNumber = this.valueNumberPhoneCreate.replace(/\s+/g, '').replace(/_/g, '').trim();

    this.codeUserCreate[phoneNumber] = numberRandom;

    this.objCodeUserPhone.updateobjCode(this.codeUserCreate);
    this.codeIsWrong = false;

    // setCodeUserCreate((code) => {
    //   return { ...code, [numberPhone]: numberRandom };
    // });

    // const resp = await fetch('http://localhost:3000/send-message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(objSend),
    // });

    // if (resp.status === 200) {
    //   setShowStepToContinueCreateAccount(true);
    // } else if (resp.status === 400) {
    //   setShowStepToContinueCreateAccount(false);
    // }
  };

  clickNextStep() {
    if(!this.allSixVerificationCodeIsComplet) return;

    const phoneUser = this.valueNumberPhoneCreate.replace(/\s+/g, '').replace(/_/g, '').trim();

    const containerYourCode = document.querySelector(".container-your-code-was-send-sms-main") as HTMLElement;

    if(this.codeUserCreate[phoneUser] === this.codeFull){
      this.codeIsWrong = false;
      this.changeValueStepIsNow(2);
    }else {
      this.codeIsWrong = true;
      containerYourCode.style.paddingTop = "20px";
    }
  }

  ngOnDestroy(): void {
    if (this.SubscriptionAll.length > 0) {
      this.SubscriptionAll.forEach((el) => {
        el.unsubscribe();
      })
    }
  }
}
