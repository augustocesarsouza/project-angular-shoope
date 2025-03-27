import { Component, Input } from '@angular/core';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
    selector: 'app-coins-credit-card-price-product',
    templateUrl: './coins-credit-card-price-product.component.html',
    styleUrl: './coins-credit-card-price-product.component.scss',
    standalone: false
})
export class CoinsCreditCardPriceProductComponent {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  functionForPriceWithDiscount = (
    productsOfferFlashDTO: ProductFlashDeals
  ): string => {
    const priceOrigianl =
      'R$' +
      productsOfferFlashDTO.priceProduct.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return priceOrigianl;
  };

  functionForPriceOriginal = (productsOfferFlashDTO: ProductFlashDeals): string => {
    const priceOriginal =
      productsOfferFlashDTO.priceProduct / (1 - productsOfferFlashDTO.discountPercentage / 100);

    const priceOrigianl =
      'R$' +
      priceOriginal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return priceOrigianl;
  };
}
