import { Component, Input, OnInit } from '@angular/core';
import { ProductFlashDeals } from '../../../../login-and-register-user/interface/product-flash-deals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-flash-info',
  templateUrl: './product-flash-info.component.html',
  styleUrl: './product-flash-info.component.scss'
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
    // nav('/flash_sale', { state: { user: userLogged } });
    // this.router.navigate(['/flash_sale']);
  };
}
