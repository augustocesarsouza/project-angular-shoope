import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../login-and-register-user/interface/user';
import { ProductOfferFlashSellerService } from '../service/product-offer-flash-seller.service';
import { ProductOfferFlashSeller } from '../../login-and-register-user/interface/product-offer-flash-seller';
import { UserSellerProduct } from '../../login-and-register-user/interface/user-seller-product';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-seller-product-offer-flash',
    templateUrl: './user-seller-product-offer-flash.component.html',
    styleUrl: './user-seller-product-offer-flash.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class UserSellerProductOfferFlashComponent implements OnInit {
  @Input() user!: User;
  @Input() productFlashSaleId!: string;

  productOfferFlashSeller!: ProductOfferFlashSeller;

  lastLoginDate = "";
  accountCreationDate = "";

  constructor(private router: Router, private productOfferFlashSellerService: ProductOfferFlashSellerService){}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    if(this.user){
      this.productOfferFlashSellerService.GetByProductsOfferFlashId(this.productFlashSaleId, this.user.id, this.user.token).subscribe({
        next: (success) => {
          const data = success.data;
          this.productOfferFlashSeller = data;

          this.editLastLoginAndAccountCreation(this.productOfferFlashSeller.userSellerProductDTO);
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

  editLastLoginAndAccountCreation(userSellerProductDTO: UserSellerProduct){
    const lastLogin = userSellerProductDTO.lastLogin;
    const accountCreationDate = userSellerProductDTO.accountCreationDate;

    if (lastLogin) {
      const lastLoginDate = parseISO(lastLogin);

      let timeDifference = formatDistanceToNow(lastLoginDate, { addSuffix: true, locale: ptBR });
      timeDifference = timeDifference.replace('há cerca de', 'Há ').replace(/\s+/g, ' ').trim();

      const timeFull = `Último login ${timeDifference}`;

      this.lastLoginDate = timeFull.trim();
    }

    if (accountCreationDate) {
      // let accountCreationDateNew = '2024-10-02T14:22:08.243937Z';
      const accountCreationDateDate = parseISO(accountCreationDate);

      let timeDifference = formatDistanceToNow(accountCreationDateDate, {
        addSuffix: true,
        locale: ptBR,
      });
      timeDifference = timeDifference.replace('há cerca de', '').replace(/\s+/g, ' ').trim();

      const timeAccountCreationDate = `${timeDifference} atrás`;

      // setAccountCreationDate(timeDifference);
      this.accountCreationDate = timeAccountCreationDate;
    }
  }

  // formatChatNow = (chatNow: string) => {
  //   const chatNowFormat = chatNow.slice(0, 12) + '...';

  //   return chatNowFormat;
  // };

  // formatViewPageStore = (string: string) => {
  //   const stringFormat = string.slice(0, 13) + '...';

  //   return stringFormat;
  // };

  formatReviews = (reviews: number) => {
    if (reviews > 1000) {
      // Divide por 1000, fixa 1 casa decimal e adiciona 'mil'
      return (reviews / 1000).toFixed(1).replace('.', ',') + 'mil';
    }

    return reviews.toString();
  };

  formatProducts = (products: number) => {
    if (products >= 1_000_000) {
      const millions = products / 1_000_000;

      return millions % 1 === 0
        ? `${millions.toFixed(0)}mi`
        : `${millions.toFixed(1).replace('.', ',')}mi`;
    } else if (products >= 1_000) {
      const thousands = products / 1_000;
      return thousands % 1 === 0
        ? `${thousands.toFixed(0)}mil`
        : `${thousands.toFixed(1).replace('.', ',')}mil`;
    }

    return products.toString();
  };

  formatFollowers = (followers: number) => {
    if (followers >= 1_000_000) {
      const millions = followers / 1_000_000;

      return millions % 1 === 0
        ? `${millions.toFixed(0)}mi`
        : `${millions.toFixed(1).replace('.', ',')}mi`;
    } else if (followers >= 1_000) {
      const thousands = followers / 1_000;
      return thousands % 1 === 0
        ? `${thousands.toFixed(0)}mil`
        : `${thousands.toFixed(1).replace('.', ',')}mil`;
    }

    return followers.toString();
  };
}
