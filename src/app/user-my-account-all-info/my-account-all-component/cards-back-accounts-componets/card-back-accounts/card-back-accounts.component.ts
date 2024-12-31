import { Component, OnInit } from '@angular/core';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-back-accounts',
  templateUrl: './card-back-accounts.component.html',
  styleUrl: './card-back-accounts.component.scss'
})
export class CardBackAccountsComponent implements OnInit {
  token: string | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.token = user.token;

      // this.findByIdOnly(user);
    }
  }
}
