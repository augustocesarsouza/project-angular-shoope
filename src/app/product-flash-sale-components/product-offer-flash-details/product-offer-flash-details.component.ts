import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../login-and-register-user/interface/user';
import { Router } from '@angular/router';
import { ProductOfferFlashDetailsService } from '../service/product-offer-flash-details.service';
import { ProductOfferFlashDetails } from '../../login-and-register-user/interface/product-offer-flash-details';

@Component({
    selector: 'app-product-offer-flash-details',
    templateUrl: './product-offer-flash-details.component.html',
    styleUrl: './product-offer-flash-details.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ProductOfferFlashDetailsComponent implements OnInit {
  @Input() user!: User;
  @Input() productFlashSaleId!: string;
  @Input() productCategories!: string[];

  productOfferFlashDetails!: ProductOfferFlashDetails;

  constructor(private router: Router, private productOfferFlashDetailsService: ProductOfferFlashDetailsService){}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    if(this.user){
      this.productOfferFlashDetailsService.GetByProductsOfferFlashId(this.productFlashSaleId, this.user.id, this.user.token).subscribe({
        next: (success) => {
          const data = success.data;
          this.productOfferFlashDetails = data;
          const detailsJson = JSON.parse(data.details);
          this.productOfferFlashDetails.detailsJson = detailsJson;
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

  getKeys(detailsJson: Record<string, unknown>): string[] {
    return Object.keys(detailsJson);
  }
}
