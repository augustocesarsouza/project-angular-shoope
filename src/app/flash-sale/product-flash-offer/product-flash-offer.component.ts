import { Component, Input } from '@angular/core';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';

@Component({
  selector: 'app-product-flash-offer',
  templateUrl: './product-flash-offer.component.html',
  styleUrl: './product-flash-offer.component.scss'
})
export class ProductFlashOfferComponent {
  // getAllProductHourProps: ProductFlashDeals[] = [];
  @Input() getAllProductHourProps!: ProductFlashDeals[];

  functionForPriceOriginal = (obj: ProductFlashDeals): string => {
    const priceOriginal = obj.priceProduct / (1 - obj.discountPercentage / 100);

    return (
      'R$' +
      priceOriginal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  functionTitleFormat = (title: string): string => {
    const priceOriginal = title.slice(0, 50) + '...';

    return priceOriginal;
  };

  functionForPriceMainWithDiscount = (priceProduct: number): string => {
    const priceOriginal = priceProduct;

    return priceOriginal.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };


  onClickContainerProductFlashOffer = (id: string) => {
    // const secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;

    // if (secretKey === undefined || timeForCountdown === null) return;

    // const encrypted = CryptoJS.AES.encrypt(JSON.stringify(timeForCountdown), secretKey).toString();
    // localStorage.setItem('countdowntime', encrypted);

    // window.open(`/flash_sale_product/${id}`, '_blank');
    console.log(id);
  };
}
