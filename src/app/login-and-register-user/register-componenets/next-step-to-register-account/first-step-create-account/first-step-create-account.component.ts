import { Component } from '@angular/core';

@Component({
  selector: 'app-first-step-create-account',
  templateUrl: './first-step-create-account.component.html',
  styleUrl: './first-step-create-account.component.scss'
})
export class FirstStepCreateAccountComponent {
  codeSendPhone: string = '(+55) 67 98114 5503';
  allInputs!: NodeListOf<HTMLInputElement>;
  buttonNext!: HTMLInputElement;

  valueInputPhoneOne: string = '';
  valueInputPhoneTwo: string = '';
  valueInputPhoneThree: string = '';
  valueInputPhoneFour: string = '';
  valueInputPhoneFive: string = '';
  valueInputPhoneSix: string = '';

  allSixVerificationCodeIsComplet = false;

  constructor(){}

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    this.allInputs = document.querySelectorAll('.input-celphone') as NodeListOf<HTMLInputElement>;
    this.buttonNext = document.querySelector('.button-next') as HTMLInputElement;
  }

  clickInputVerificationCode = () => {
    for (let i = 0; i < this.allInputs.length; i++) {
      const input = this.allInputs[i];

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

    if (input.value.length === 1 && index < this.allInputs.length - 1) {
      this.allInputs[index + 1].focus();
    }

    this.functionQuantityInputWithValueNumber();
  }

  keyDownVerificationCode = (e: Event, index: number) => {
    const input = e.target as HTMLInputElement;
    let event = e as KeyboardEvent;

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
      console.log(this.buttonNext);

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

    console.log(numberRandom);


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
    console.log(this.allSixVerificationCodeIsComplet);


  }

}
