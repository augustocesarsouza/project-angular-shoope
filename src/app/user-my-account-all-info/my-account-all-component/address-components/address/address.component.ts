import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  token: string | null = null;
  user!: User;

  newAddress = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.token = user.token;
      this.user = user;
      // this.findByIdOnly(user);
    }

    this.changeValueNewAddress = this.changeValueNewAddress.bind(this);
  }

  onClickContainerInsertAddress = () => {
    this.newAddress = true;
  }

  changeValueNewAddress(newAddress: boolean): void{
    this.newAddress = newAddress;
  }
}
