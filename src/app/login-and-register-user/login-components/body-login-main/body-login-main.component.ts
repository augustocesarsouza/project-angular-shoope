import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { environment } from '../../../../environments/environment';
import CryptoJS from 'crypto-js';
import Inputmask from 'inputmask';

interface PropsLogin {
  data: {
    passwordIsCorrect: true;
    userDTO: UserDTOProps;
    message: string;
  }
}

interface UserDTOProps {
  id: string;
  name: string;
  token: string;
}

@Component({
  selector: 'app-body-login-main',
  templateUrl: './body-login-main.component.html',
  styleUrl: './body-login-main.component.scss',
})
export class BodyLoginMainComponent implements AfterViewInit, OnDestroy {
  showEyeOpen = false;
  inputPassword!: HTMLElement | null;
  buttonEnter!: HTMLElement | null;
  inputNumberHasValue = false;
  inputPasswordHasValue = false;
  inputValuePhone = "";
  someInfoIsWrong = false;

  settimeOutAny!: number;

  constructor(private router: Router, private userService: UserService){}

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const inputCepNewAddress = document.getElementById('input-number-name-user-email');
    const inputPassword = document.getElementById('input-password');
    const buttonEnter = document.getElementById('button-enter');
    this.buttonEnter = buttonEnter;

    this.inputPassword = inputPassword;

    if(inputCepNewAddress){
      const mask = Inputmask({
        mask: '(+99) 99 99999 9999',
        placeholder: '(+__) __ _____ ____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCepNewAddress);
    }
  }

  onClickEyeOpenAndClose(value: boolean){
    this.showEyeOpen = value;

    if(this.inputPassword === null) return;

    if(value){
      this.inputPassword.setAttribute('type', 'text');
    }else {
      this.inputPassword.setAttribute('type', 'password');
    }
  }

  onInputPhoneEmailName(event: Event): void {
    if(this.buttonEnter === null) return;

    const target = event.target as HTMLInputElement;

    if (!target) {
      console.warn("Target do evento está indefinido.");
      return;
    }

    const inputValue = target?.value || '';

    if(inputValue === null || inputValue === undefined) return;

    if (inputValue.length > 0) {
      this.inputNumberHasValue = true;
      this.inputValuePhone = inputValue;

      if(this.inputPasswordHasValue){
        this.buttonEnter.style.background = '#ee4d2d';
        this.buttonEnter.style.cursor = 'pointer';
      }
    } else {
      this.inputNumberHasValue = false;

      this.buttonEnter.style.background = '#f3826c';
      this.buttonEnter.style.cursor = 'auto';
    }
  }

  onInputPassword(event: Event): void {
    event.preventDefault();
    if(this.buttonEnter === null) return;

    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue) {
      this.inputPasswordHasValue = true;

      if(this.inputNumberHasValue){
        this.buttonEnter.style.background = '#ee4d2d';
        this.buttonEnter.style.cursor = 'pointer';
      }

    } else {
      this.inputPasswordHasValue = false;

      this.buttonEnter.style.background = '#f3826c';
      this.buttonEnter.style.cursor = 'auto';
    }
  }

  async onClickEnter(): Promise<Promise<void>> {
    if(!this.inputNumberHasValue || !this.inputPasswordHasValue) return;
    if(typeof document === 'undefined') return;

    this.someInfoIsWrong = false;

    const inputPassword = this.inputPassword as HTMLInputElement;
    const password = inputPassword.value;

    const containerLoginRegister = document.querySelector(".container-login-register") as HTMLElement;
    containerLoginRegister.style.height = "470px";

    this.userService.login(this.inputValuePhone, password).subscribe({
      next: (success: unknown) => {
        const value = success as PropsLogin;
        const data = value.data;

        const secretKey = environment.angularAppSecretKeyUser;

        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data.userDTO), secretKey).toString();

        localStorage.setItem('user', encrypted);
        this.router.navigate(['/']);
      },
      error: (error) => {
        if(error.status === 400){
          const dataLogin = error.error as PropsLogin;
          const login = dataLogin.data;

          this.settimeOutAny = setTimeout(() => {
            containerLoginRegister.style.height = "535px";
            this.someInfoIsWrong = !login.passwordIsCorrect;
          }, 1000) as unknown as number;

          // this.confirmEmail = false;
        }
      }
    });
  }

  clickRegister(): void {
    // this.router.navigate(['/movie', movie.id]);
    this.router.navigate(['/buyer/register']);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
