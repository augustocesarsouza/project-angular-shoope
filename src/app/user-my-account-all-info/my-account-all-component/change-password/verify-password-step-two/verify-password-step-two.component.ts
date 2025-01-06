import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { Router } from '@angular/router';
import { User } from '../../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { UpdateNumberUrlMyAccountService } from '../../../../login-and-register-user/service/update-number-url-my-account.service';

interface ErrorLogin {
  message: string;
  passwordIsCorrect: boolean;
}

@Component({
  selector: 'app-verify-password-step-two',
  templateUrl: './verify-password-step-two.component.html',
  styleUrl: './verify-password-step-two.component.scss'
})
export class VerifyPasswordStepTwoComponent implements OnInit {
  showErrorPasswordWrong = false;
  showErrorPasswordIsLessThanEightCharacter = false;
  showErroSistem = true;
  showEyesOpen = false;
  inputPasswordWithoutValue = true;
  inputPasswordValue = "";
  userObjState!: User | null;
  objError!: ErrorLogin;
  fullCheckPassword = true;

  @ViewChild('buttonConfirm') buttonConfirm!: ElementRef<HTMLButtonElement>;

  constructor(private router: Router, private userService: UserService, private updateNumberUrlMyAccountService: UpdateNumberUrlMyAccountService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      this.userObjState = user;
    }
  }

  onChangeInputEye(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.inputPasswordValue = input.value;

    if(input.value.length <= 0){
      this.buttonConfirm.nativeElement.style.cursor = 'not-allowed';
      this.buttonConfirm.nativeElement.style.opacity = "0.7";
      this.inputPasswordWithoutValue = true;
    }else {
      this.buttonConfirm.nativeElement.style.cursor = 'pointer';
      this.buttonConfirm.nativeElement.style.opacity = "1";
      this.inputPasswordWithoutValue = false;

      if(input.value.length > 8){
        this.showErrorPasswordIsLessThanEightCharacter = false;
      }

    }


    // if (Number.isNaN(Number(input.value))) {
    //   input.value = '';
    //   return;
    // }
  }

  onClickEyes = (inputPassword: HTMLInputElement) => {
    if (inputPassword === null) return;

    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      this.showEyesOpen = true;
    } else if (inputPassword.type === 'text') {
      inputPassword.type = 'password';
      this.showEyesOpen = false;
    }
  };

  onClickConfirm = () => {
    if(this.inputPasswordWithoutValue) return;

    if(this.inputPasswordValue.length <= 8){
      this.showErrorPasswordIsLessThanEightCharacter = true;
      return;
    }else {
      if(this.userObjState === null) return;

      this.userService.verifyPassword(this.userObjState.phone, this.inputPasswordValue).subscribe({
        next: (success) => {
          const value = success.data;
          // console.log(value);
          this.updateNumberUrlMyAccountService.updateImgUser(4);
          this.router.navigate(['/verify/ivs']);

          const errorLoginObj = {
            message: "sem erro",
            passwordIsCorrect: value.passwordIsCorrect,
          }

          this.objError = errorLoginObj;
        },
        error: error => {
          const objError: ErrorLogin = error.error;
          this.objError = objError;

          if(error.status === 400){
            console.log(error);
          }

          if(error.status === 403){
            localStorage.removeItem('user');
            this.router.navigate(['/buyer/login']);
          }
        }
      });
    }
  }
}
