import { Component, Input } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
    selector: 'app-product-flash-sale-all-info',
    templateUrl: './product-flash-sale-all-info.component.html',
    styleUrl: './product-flash-sale-all-info.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ProductFlashSaleAllInfoComponent {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;
}
