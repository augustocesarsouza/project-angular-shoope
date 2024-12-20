import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-body-register-user-main',
  templateUrl: './body-register-user-main.component.html',
  styleUrl: './body-register-user-main.component.scss'
})
export class BodyRegisterUserMainComponent {
  buttonNext!: HTMLElement | null;
  canClickButtonNext: boolean = false;
  clickNextStepRegister: boolean = true;

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  ngAfterViewInit():void {
    if(typeof document === "undefined" || document === null) return;

    let inputNumberPhone = document.getElementById('input-number-phone');
    let buttonNext = document.getElementById('button-next');
    this.buttonNext = buttonNext;

    if(inputNumberPhone){
      let mask = Inputmask({
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
    let inputValueNew = inputValue.replace(/_/g, '').trim();

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

  clickNextButton(): void {
    if(!this.canClickButtonNext) return;

    this.clickNextStepRegister = true;
  }

  clickEntry(): void{
    // this.router.navigate(['/movie', movie.id]);
    this.router.navigate(['/buyer/login']);
  }
}
