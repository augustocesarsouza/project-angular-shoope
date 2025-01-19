import { Component, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import { functionForPriceMainWithDiscount, functionForPriceOriginal, functionTitleFormat } from './function-product-flash-offer';

@Component({
  selector: 'app-product-flash-offer',
  templateUrl: './product-flash-offer.component.html',
  styleUrl: './product-flash-offer.component.scss'
})
export class ProductFlashOfferComponent implements OnDestroy, OnChanges {
  // getAllProductHourProps: ProductFlashDeals[] = [];
  @Input() getAllProductHourProps!: ProductFlashDeals[];
  @ViewChildren('containerBackgroundUp') containerBackgroundUpAll!: QueryList<ElementRef<HTMLElement>>;

  settimeOutAny!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getAllProductHourProps']) {
      // console.log('Novo array recebido:', this.getAllProductHourProps);
      this.updateView();
    }
  }

  updateView(): void {
    this.changeValuePopularityPercentage();
  }

  changeValuePopularityPercentage = () => {
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      const array = this.containerBackgroundUpAll.toArray();

      array.forEach((element, index) => {
        element.nativeElement.style.width = this.getAllProductHourProps[index].popularityPercentage.toString() + "%";

      });

    }, 100)as unknown as number;
  }

  functionForPriceOriginal = (obj: ProductFlashDeals): string => {
    return functionForPriceOriginal(obj);
  };

  functionTitleFormat = (title: string): string => {
    return functionTitleFormat(title);
  };

  functionForPriceMainWithDiscount = (priceProduct: number): string => {
    return functionForPriceMainWithDiscount(priceProduct);
  };


  onClickContainerProductFlashOffer = (id: string) => {
    // const secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;

    // if (secretKey === undefined || timeForCountdown === null) return;

    // const encrypted = CryptoJS.AES.encrypt(JSON.stringify(timeForCountdown), secretKey).toString();
    // localStorage.setItem('countdowntime', encrypted);

    // window.open(`/flash_sale_product/${id}`, '_blank');
    console.log(id);
  };

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
