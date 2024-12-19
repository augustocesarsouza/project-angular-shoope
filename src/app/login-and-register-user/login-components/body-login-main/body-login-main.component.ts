import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-body-login-main',
  templateUrl: './body-login-main.component.html',
  styleUrl: './body-login-main.component.scss'
})
export class BodyLoginMainComponent {
  showEyeOpen: boolean = false;
  inputPassword!: HTMLElement | null;
  buttonEnter!: HTMLElement | null;
  inputNumberHasValue: boolean = false;
  inputPasswordHasValue: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    if(typeof document === "undefined" || document === null) return;

    let inputCepNewAddress = document.getElementById('input-number-name-user-email');
    let inputPassword = document.getElementById('input-password');
    let buttonEnter = document.getElementById('button-enter');
    this.buttonEnter = buttonEnter;

    this.inputPassword = inputPassword;

    if(inputCepNewAddress){
      let mask = Inputmask({
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

    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue) {
      this.inputNumberHasValue = true;

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

  onClickEnter(): void {
    if(!this.inputNumberHasValue || !this.inputPasswordHasValue) return;

    console.log("onClickEnter");
  }

  clickRegister(): void {
    // this.router.navigate(['/movie', movie.id]);
    this.router.navigate(['/buyer/register']);
  }
}
