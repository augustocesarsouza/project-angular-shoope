import { Component, Input } from '@angular/core';
import { Address } from '../../../../login-and-register-user/interface/address';
import { Router } from '@angular/router';
import { AddressService } from '../../../service/address.service';

@Component({
    selector: 'app-view-address-user',
    templateUrl: './view-address-user.component.html',
    styleUrl: './view-address-user.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ViewAddressUserComponent {
  @Input() address!: Address[];
  @Input() clickInEditAddress!: (editAddress: Address) => void;
  @Input() updateArrayAddressDefault!: (addressDefault: Address) => void;
  @Input() deleteAddress!: (addressDefault: Address) => void;
  addressToDelete!: Address;
  showModalDeleteAddress = false;

  constructor(private router: Router, private addressService: AddressService){
  }

  onClickEditAddress(el: Address){
    this.clickInEditAddress(el);
  }

  onClickDeleteAddress(el: Address){
    this.showModalDeleteAddress = true;

    this.addressToDelete = el;
  }

  onClickSetAsDefault(el: Address){
    const addressUpdateDefault = {
      id: el.id,
      defaultAddress: 1
    }

    this.addressService.updateAddressDefault(addressUpdateDefault).subscribe({
      next: (success) => {
        const address = success.data;

        this.updateArrayAddressDefault(address);
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

  onClickCancelDeleteAddress(){
    this.showModalDeleteAddress = false;
  }

  onClickDeleteAddressModal(){
    this.addressService.deleteAddress(this.addressToDelete.id).subscribe({
      next: (success) => {
        const address = success.data;

        this.deleteAddress(address);
        this.showModalDeleteAddress = false;
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
}
