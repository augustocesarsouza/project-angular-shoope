import { Component, Input } from '@angular/core';
import { Address } from '../../../../login-and-register-user/interface/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-address-user',
  templateUrl: './view-address-user.component.html',
  styleUrl: './view-address-user.component.scss'
})
export class ViewAddressUserComponent {
  @Input() address!: Address[];
  @Input() clickInEditAddress!: (editAddress: Address) => void;
  addressToDelete!: Address;

  showModalDeleteAddress = false;

  constructor(private router: Router){
  }

  onClickEditAddress(el: Address){
    this.clickInEditAddress(el);
  }

  onClickDeleteAddress(el: Address){
    this.showModalDeleteAddress = true;

    this.addressToDelete = el;
  }

  onClickSetAsDefault(el: Address){
    this.address.map((address) => {
      if(address.defaultAddress === 1){
        address.defaultAddress = 0;
        return address;
      }

      if(el.id === address.id){
        address.defaultAddress = 1;
        return address;
      }

      return address;;
    });

    this.address = this.address
    .filter(address => address.defaultAddress === 1)
    .concat(
      this.address.filter(address => address.defaultAddress !== 1)
    );

    console.log(this.address);
  }

  onClickCancelDeleteAddress(){
    this.showModalDeleteAddress = false;
  }

  onClickDeleteAddressModal(){
    this.address = this.address.filter((address) => address.id !== this.addressToDelete.id);

    this.showModalDeleteAddress = false;
  }
}
