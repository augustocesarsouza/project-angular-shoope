import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';

@Component({
    selector: 'app-second-step-create-account',
    templateUrl: './second-step-create-account.component.html',
    styleUrl: './second-step-create-account.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SecondStepCreateAccountComponent {
  @Input() changeValueStepIsNow!: (value: number) => void;
  @Input() valueNumberPhoneCreate!: string;
  showEyeOpen = false;
  alreadyTypePassword = false;

  onlyLettersCommon = true;
  haveEightSixteenCharacters = false;
  atLestOneUppercaseCharacter = false;
  atLestOneLowercaseCharacter = false;
  passwordChosen = "";

  constructor(private router: Router, private userService: UserService){

  }

  clickBackToStepOne(){
    this.changeValueStepIsNow(1);
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

    const oneLetterUpperCase = new RegExp(/[A-Z]/);
    const oneLetterLowerCase = new RegExp(/[a-z]/);

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

    this.passwordChosen = input.value;

    const buttonRegister = document.querySelector('.button-register') as HTMLElement;

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
    if(this.onlyLettersCommon &&
      this.haveEightSixteenCharacters &&
      this.atLestOneUppercaseCharacter &&
      this.atLestOneLowercaseCharacter){

      const objCreate = {
        phone: this.valueNumberPhoneCreate,
        password: this.passwordChosen,
      };

      this.userService.createAccount(objCreate).subscribe({
        next: (success: unknown) => {
          console.log(success);
          this.changeValueStepIsNow(3);
        },
        error: error => {
          if(error.status === 400){
            console.log(error);

            // this.confirmEmail = false;
          }
        }
      });

      // const resp = await fetch(`${environment.angularUrlBackend}/public/user/create`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(objCreate),
      // });

      // if (resp.status === 200) {
      //   await resp.json();

      //   // localStorage.setItem('user', encrypted);
      //   // this.router.navigate(['/']);
      //   this.changeValueStepIsNow(3);
      //   // localStorage.setItem('user', JSON.stringify(data));
      //   // nav('/');
      //   // changeValueWhatStepIsNow(3);
      // } else if (resp.status === 400) {
      //   // setShowStepToContinueCreateAccount(false);
      // }
    }
  }
}
