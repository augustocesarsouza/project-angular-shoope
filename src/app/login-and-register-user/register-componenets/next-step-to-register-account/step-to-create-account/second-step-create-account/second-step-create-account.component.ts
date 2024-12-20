import { Component } from '@angular/core';

@Component({
  selector: 'app-second-step-create-account',
  templateUrl: './second-step-create-account.component.html',
  styleUrl: './second-step-create-account.component.scss'
})
export class SecondStepCreateAccountComponent {
  showEyeOpen = false;
  alreadyTypePassword = false;

  onlyLettersCommon = true;
  haveEightSixteenCharacters = false;
  atLestOneUppercaseCharacter = false;
  atLestOneLowercaseCharacter = false;

  constructor(){}

  clickBackToStepOne(){

  }

  changeInputPassword(e: Event){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 0){
      this.alreadyTypePassword = true;
    }

    if (input.value.includes('^')) {
      this.onlyLettersCommon = false;
    } else {
      this.onlyLettersCommon = true;
    }

    if (input.value.length >= 8) {
      this.haveEightSixteenCharacters = true;
    } else {
      this.haveEightSixteenCharacters = false;
    }

    let oneLetterUpperCase = new RegExp(/[A-Z]/);
    let oneLetterLowerCase = new RegExp(/[a-z]/);

    if (oneLetterUpperCase.test(input.value)) {
      this.atLestOneUppercaseCharacter = true;
    } else {
      this.atLestOneUppercaseCharacter = false;
    }

    if (oneLetterLowerCase.test(input.value)) {
      this.atLestOneLowercaseCharacter = true;
    } else {
      this.atLestOneLowercaseCharacter = false;
    }

    let buttonRegister = document.querySelector('.button-register') as HTMLElement;

    if (buttonRegister === null) return;

    if (
      this.onlyLettersCommon &&
      this.haveEightSixteenCharacters &&
      this.atLestOneUppercaseCharacter &&
      this.atLestOneLowercaseCharacter
    ) {
      buttonRegister.style.opacity = '1';
      buttonRegister.style.cursor = 'pointer';

      // buttonRegister.addEventListener('mouseenter', handleMouseEnter);
      // buttonRegister.addEventListener('mouseleave', handleMouseLeave);
    } else {
      if (this.alreadyTypePassword) {
        buttonRegister.style.opacity = '.7';
        buttonRegister.style.cursor = 'not-allowed';

        // buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        // buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }

  clickEye(input: HTMLInputElement){
    this.showEyeOpen = !this.showEyeOpen;

    if(this.showEyeOpen){
      input.type = 'text';
    }else {
      input.type = 'password';
    }
  }

  clickRegister(){

  }
}
