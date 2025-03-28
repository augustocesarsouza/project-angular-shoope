import { Component } from '@angular/core';
import { UpdateNumberUrlMyAccountService } from '../../../../login-and-register-user/service/update-number-url-my-account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class PrivacyComponent {

  constructor(private router: Router, private updateNumberUrlMyAccountService: UpdateNumberUrlMyAccountService){
  }

  onClickDeleteButton(){
    console.log("Delete");
  }
}
