import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { Address } from '../../../../login-and-register-user/interface/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  token: string | null = null;
  user!: User;

  newAddress = false;
  address: Address | null = null;
  addressArray: Address[] = [];
  addressEdit: Address | null = null;

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

    const address1 = {
      id: "22f4c5dc-07c7-4d1d-991a-da11cf71f0cd",
      fullName: "Augusto Cesar Souza Santana",
      phoneNumber: "(+55) 67 98114 5503",
      cep: "79083-590",
      stateCity: "Mato Grosso do Sul - Campo Grande",
      neighborhood: "Jardim Aero Rancho",
      street: "Rua Cajazeira",
      numberHome: "2420",
      complement: "",
      defaultAddress: 1,
      userId:  "573c597e-c95f-42fc-9b9c-47b79c5b99fc",
      userDTO: null
    }

    const address2 = {
      id: "08cb2554-b4c9-4c20-9609-296abeedf682",
      fullName: "Augusto Cesar",
      phoneNumber: "(+55) 67 98114 5503",
      cep: "79083-590",
      stateCity: "Mato Grosso do Sul - Campo Grande",
      neighborhood: "Jardim Aero Rancho",
      street: "Rua Cajazeira",
      numberHome: "2420",
      complement: "ascascas",
      defaultAddress: 0,
      userId:  "573c597e-c95f-42fc-9b9c-47b79c5b99fc",
      userDTO: null
    }

    this.address = address1;
    this.addressArray.push(address1, address2);
    this.changeValueNewAddress = this.changeValueNewAddress.bind(this);
    this.clickInEditAddress = this.clickInEditAddress.bind(this);
  }

  onClickContainerInsertAddress = () => {
    this.newAddress = true;
  }

  changeValueNewAddress(newAddress: boolean): void{

    if(!newAddress){
      this.addressEdit = null;
    }

    this.newAddress = newAddress;
  }

  clickInEditAddress(editAddress: Address): void{
    this.addressEdit = editAddress;
  }
}
