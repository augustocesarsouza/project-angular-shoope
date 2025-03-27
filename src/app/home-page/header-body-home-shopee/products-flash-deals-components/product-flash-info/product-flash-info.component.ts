import { Component, Input, OnInit } from '@angular/core';
import { ProductFlashDeals } from '../../../../login-and-register-user/interface/product-flash-deals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-flash-info',
    templateUrl: './product-flash-info.component.html',
    styleUrl: './product-flash-info.component.scss',
    standalone: false
})
export class ProductFlashInfoComponent implements OnInit {
  @Input() product!: ProductFlashDeals;

  price = "0,00";

  constructor(private router: Router){
  }

  ngOnInit(): void {
    const priceFixed = this.product.priceProduct.toFixed(2).replace('.', ',');
    this.price = priceFixed;
  }

  onClickContainerProductFlashSale = () => {
    // fazer o modulo com as rotas desse "flash_sale" tem quever como vai fazer
    // nav('/flash_sale', { state: { user: userLogged } });

    this.router.navigate(['/flash_sale']);
  };
}
