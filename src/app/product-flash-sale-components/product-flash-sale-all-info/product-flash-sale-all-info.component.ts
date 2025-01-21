import { Component, Input } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { ProductOptionImage } from '../../login-and-register-user/interface/product-option-image';

@Component({
  selector: 'app-product-flash-sale-all-info',
  templateUrl: './product-flash-sale-all-info.component.html',
  styleUrl: './product-flash-sale-all-info.component.scss'
})
export class ProductFlashSaleAllInfoComponent {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  // const [onMouseEnterMouseLeaveColor, setOnMouseEnterMouseLeaveColor] =
  //   useState<ProductOptionImageProps | null>(null);
  onMouseEnterMouseLeaveColor: ProductOptionImage | null = null;
}
