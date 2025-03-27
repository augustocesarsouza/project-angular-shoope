import { Component, Input } from '@angular/core';
import { ProductOfferFlashSeller } from '../../login-and-register-user/interface/product-offer-flash-seller';

@Component({
    selector: 'app-user-created-product-info',
    templateUrl: './user-created-product-info.component.html',
    styleUrl: './user-created-product-info.component.scss',
    standalone: false
})
export class UserCreatedProductInfoComponent {
  @Input() productOfferFlashSeller!: ProductOfferFlashSeller;
  @Input() lastLoginDate!: string;

  formatChatNow = (chatNow: string) => {
    const chatNowFormat = chatNow.slice(0, 12) + '...';

    return chatNowFormat;
  };

  formatViewPageStore = (string: string) => {
    const stringFormat = string.slice(0, 13) + '...';

    return stringFormat;
  };

}
