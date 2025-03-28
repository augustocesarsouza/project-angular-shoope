import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../login-and-register-user/interface/user';
import { ProductOfferFlashDescriptionService } from '../service/product-offer-flash-description.service';
import { Router } from '@angular/router';
import { ProductOfferFlashDescription } from '../../login-and-register-user/interface/product-offer-flash-description';

@Component({
    selector: 'app-product-offer-flash-description',
    templateUrl: './product-offer-flash-description.component.html',
    styleUrl: './product-offer-flash-description.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ProductOfferFlashDescriptionComponent implements OnInit  {
  @Input() user!: User;
  @Input() productFlashSaleId!: string;

  productOfferFlashDescription!: ProductOfferFlashDescription;

  constructor(private router: Router, private productOfferFlashDescriptionService: ProductOfferFlashDescriptionService){}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    if(this.user){
      this.productOfferFlashDescriptionService.GetByProductsOfferFlashIdDescription(this.productFlashSaleId, this.user.id, this.user.token).subscribe({
        next: (success) => {
          const data = success.data;
          this.productOfferFlashDescription = data;
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

  formatDescription(description: string): string {
    return description.replace(/\n/g, '<br>');
  }
}
