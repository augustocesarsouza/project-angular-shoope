import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import {  ChangePassword, UserService } from '../../../../login-and-register-user/service/user.service';
import { UpdateNumberUrlMyAccountService } from '../../../../login-and-register-user/service/update-number-url-my-account.service';

@Component({
    selector: 'app-change-password-with-input',
    templateUrl: './change-password-with-input.component.html',
    styleUrl: './change-password-with-input.component.scss',
    standalone: false
})
export class ChangePasswordWithInputComponent implements OnInit, OnDestroy {
  userObjState!: User | null;
  showEyesOpenNewPassword = false;

  showErrorPasswordError = false;
  showEyesOpenConfirmPassword = false;

  showErrorNewPasswordNotMatchWithConfirmPassword = false;
  showPasswordChangeSuccessfully = false;

  canClickConfirmChangePassword = false;

  inputValueNewPassword = '';
  inputValueConfirmPassword = '';

  userUpdateUser!: ChangePassword;
  settimeOutArray: number[] = [];

  @ViewChild('inputNewPasssword') inputNewPasssword!: ElementRef<HTMLInputElement>;
  @ViewChild('inputConfirmPassword') inputConfirmPassword!: ElementRef<HTMLInputElement>;
  @ViewChild('buttonConfirm') buttonConfirm!: ElementRef<HTMLButtonElement>;

  constructor(private router: Router, private userService: UserService, private updateNumberUrlMyAccountService: UpdateNumberUrlMyAccountService){
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
  }

  onChangeNewPasssword(e: Event): void {
    const input = e.target as HTMLInputElement;
    // console.log(input.value);

    // let inputNewPassword = RefInputEyesNewPassword.current;
    // if (inputNewPassword === null) return;

    const inputEyes = input;
    this.inputValueNewPassword = inputEyes.value;

    const regexMenor = /^(?=.*[a-z])/;
    const regexMaior = /^(?=.*[A-Z])/;
    let booleValue = false;

    if (!regexMenor.test(inputEyes.value)) {
      // setShowErrorPasswordError(true);
      this.showErrorPasswordError = true;
      booleValue = true;
    } else {
      booleValue = false;
    }

    if (!regexMaior.test(inputEyes.value)) {
      // setShowErrorPasswordError(true);
      this.showErrorPasswordError = true;
      booleValue = true;
    } else {
      booleValue = false;
    }

    if (inputEyes.value.length < 8) {
      // setShowErrorPasswordError(true);
      this.showErrorPasswordError = true;
    }

    if(booleValue){
      this.showErrorNewPasswordNotMatchWithConfirmPassword = true;
      this.canClickConfirmChangePassword = false;
      this.changeBorderInputConfirmPassword(true);

      this.buttonConfirm.nativeElement.style.opacity = "0.5";
      this.buttonConfirm.nativeElement.style.cursor = "not-allowed";
    }else {
      this.showErrorNewPasswordNotMatchWithConfirmPassword = false;
      this.canClickConfirmChangePassword = true;
      this.changeBorderInputConfirmPassword(false);

      this.buttonConfirm.nativeElement.style.opacity = "1";
      this.buttonConfirm.nativeElement.style.cursor = "pointer";
    }

    if(inputEyes.value !== this.inputValueConfirmPassword){
      this.showErrorNewPasswordNotMatchWithConfirmPassword = true;
      this.canClickConfirmChangePassword = false;
      this.changeBorderInputConfirmPassword(true);

      this.buttonConfirm.nativeElement.style.opacity = "0.5";
      this.buttonConfirm.nativeElement.style.cursor = "not-allowed";
    }else {
      this.showErrorNewPasswordNotMatchWithConfirmPassword = false;
      this.canClickConfirmChangePassword = true;
      this.changeBorderInputConfirmPassword(false);

      this.buttonConfirm.nativeElement.style.opacity = "1";
      this.buttonConfirm.nativeElement.style.cursor = "pointer";
    }

    if (inputEyes.value.length > 7 && inputEyes.value.length <= 16 && !booleValue) {
      // setShowErrorPasswordError(false);
      this.showErrorPasswordError = false;
    }
  }

  onChangeConfirmPassword(e: Event): void {
    const input = e.target as HTMLInputElement;

    const valueInputConfirmPassword = input.value;
    this.inputValueConfirmPassword = input.value;

    if(valueInputConfirmPassword === this.inputValueNewPassword){
      this.showErrorNewPasswordNotMatchWithConfirmPassword = false;
      this.canClickConfirmChangePassword = true;
      this.changeBorderInputConfirmPassword(false);

      this.buttonConfirm.nativeElement.style.opacity = "1";
      this.buttonConfirm.nativeElement.style.cursor = "pointer";
    }else {
      this.showErrorNewPasswordNotMatchWithConfirmPassword = true;
      this.canClickConfirmChangePassword = false;
      this.changeBorderInputConfirmPassword(true);

      this.buttonConfirm.nativeElement.style.opacity = "0.5";
      this.buttonConfirm.nativeElement.style.cursor = "not-allowed";
    }
  }

  onClickEyesNewPassword(input: HTMLInputElement){
    this.showEyesOpenNewPassword = !this.showEyesOpenNewPassword;

    if(this.showEyesOpenNewPassword){
      input.type = 'text';
    }else {
      input.type = 'password';
    }
  }

  onClickEyesConfirmPassword(input: HTMLInputElement){
    this.showEyesOpenConfirmPassword = !this.showEyesOpenConfirmPassword;

    if(this.showEyesOpenConfirmPassword){
      input.type = 'text';
    }else {
      input.type = 'password';
    }
  }

  onClickButtonConfirm(e: Event){
    e.preventDefault();

    if(!this.canClickConfirmChangePassword) return;
    if(this.userObjState === null) return;

    const userChangePasswordDTO = {
      phone: this.userObjState.phone,
      confirmPassword: this.inputValueConfirmPassword
    }

    this.userService.updateUserPassword(userChangePasswordDTO).subscribe({
      next: (success) => {
        const userUpdateUser: ChangePassword = success.data;
        this.showPasswordChangeSuccessfully = userUpdateUser.passwordUpdateSuccessfully;
        // this.router.navigate(['/user/account/profile']);

        this.updateNumberUrlMyAccountService.updateImgUser(0);

        const value = setTimeout(() => {
          this.showPasswordChangeSuccessfully = false;
          this.router.navigate(['/user/account/perfil']);

        }, 2000) as unknown as number;

        this.settimeOutArray.push(value);

      },
      error: error => {
        console.log(error);

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

  changeBorderInputNewPassword(error: boolean){
    if(error){
      this.inputNewPasssword.nativeElement.style.border = "1px solid red";
    }else {
      this.inputNewPasssword.nativeElement.style.border = "1px solid rgba(0, 0, 0, 0.1490196078)";
    }
  }

  changeBorderInputConfirmPassword(error: boolean){
    if(error){
      this.inputConfirmPassword.nativeElement.style.border = "1px solid red";
    }else {
      this.inputConfirmPassword.nativeElement.style.border = "1px solid rgba(0, 0, 0, 0.1490196078)";
    }
  }

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((timeoutId) => clearTimeout(timeoutId));
  }
}
