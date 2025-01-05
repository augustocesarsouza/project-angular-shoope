import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrl: './verify-password.component.scss'
})
export class VerifyPasswordComponent {

  onClickInputVerifyWithPassword(){
    console.log("click input");

  }
}
