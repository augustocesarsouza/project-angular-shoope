import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLocalStorage } from '../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../login-and-register-user/interface/user';
import { FlashSaleProductAllInfoService } from '../service/flash-sale-product-all-info.service';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
    selector: 'app-product-flash-sale-main',
    templateUrl: './product-flash-sale-main.component.html',
    styleUrl: './product-flash-sale-main.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ProductFlashSaleMainComponent implements OnInit {
  productFlashSaleId!: string;
  user!: User;
  getFlashSaleProduct!: FlashSaleProductAllInfo;
  productCategories = ['Shopee', 'Saúde', 'Cuidados Pessoais','Cuidados Bucais'];

  constructor(private router: Router, private route: ActivatedRoute, private flashSaleProductAllInfoService: FlashSaleProductAllInfoService) {}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        this.user = user;

        this.route.paramMap.subscribe(params => {
          this.productFlashSaleId = params.get('id')!;
        });

        this.getFlashSaleProductByProductFlashSaleId(this.productFlashSaleId, user);
      }
    }
  }

  getFlashSaleProductByProductFlashSaleId = async (
    productFlashSaleId: string,
    user: User
  ) => {

    this.flashSaleProductAllInfoService.GetFlashSaleProductByProductFlashSaleId(productFlashSaleId, user.id, user.token).subscribe({
      next: (success) => {
        const data = success.data;
        this.getFlashSaleProduct = data;
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
  };
}
