import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { Address } from '../../../../login-and-register-user/interface/address';
import { AddressService } from '../../../service/address.service';

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

  constructor(private router: Router, private addressService: AddressService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.token = user.token;
      this.user = user;
      // this.findByIdOnly(user);

      const userId = user.id;
      const token = user.token;

      this.addressService.getAddressByUserId(userId, token).subscribe({
        next: (success) => {
          const address = success.data;

          this.addressArray = address;
          console.log(address);

          // this.changeValueNewAddress(false);
        },
        error: error => {
          if(error.status === 400){
            console.log(error);
            // this.confirmEmail = false;
          }

          if(error.status === 403){
            localStorage.removeItem('user');
            this.router.navigate(['/buyer/login']);
            // this.confirmEmail = false;
          }
        }
      });
    }

    this.changeValueNewAddress = this.changeValueNewAddress.bind(this);
    this.createNewAddress = this.createNewAddress.bind(this);
    this.updateArrayAddress = this.updateArrayAddress.bind(this);
    this.updateArrayAddressDefault = this.updateArrayAddressDefault.bind(this);
    this.deleteAddress = this.deleteAddress.bind(this);
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

  createNewAddress(newAddress: Address): void{
    this.addressArray.push(newAddress);
  }

  updateArrayAddress(addressToUpdate: Address){
    // const newArrayAddress = this.addressArray.filter((el) => el.id !== addressToUpdate.id);
    // newArrayAddress.push(addressToUpdate);

    // this.addressArray = newArrayAddress
    // .filter(address => address.defaultAddress === 1)
    // .concat(
    //   newArrayAddress.filter(address => address.defaultAddress !== 1)
    // );

    this.addressArray = this.addressArray
    .map(address => address.id === addressToUpdate.id ? addressToUpdate : address)
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }

  updateArrayAddressDefault(addressDefault: Address){
    this.addressArray = this.addressArray
    .map((address => {
      if(address.id === addressDefault.id){
        return addressDefault;
      } else {
        address.defaultAddress = 0;
        return address;
      }
    }))
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }

  deleteAddress(addressToDelete: Address){
    this.addressArray = this.addressArray.filter(address => address.id !== addressToDelete.id)
    .sort((a, b) => b.defaultAddress - a.defaultAddress)
  }
}
