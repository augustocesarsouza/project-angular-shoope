import { Component, Input } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
  selector: 'app-first-rate-avaliation',
  templateUrl: './first-rate-avaliation.component.html',
  styleUrl: './first-rate-avaliation.component.scss'
})
export class FirstRateAvaliationComponent {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  quantityStarRender = [0, 1, 2, 3, 4];

  funcFormatAvaliationQuantity = (avaliationQuantity: number) => {
    if (avaliationQuantity >= 1000) {
      // Divide por 1000 e formata com uma casa decimal

      const formattedQuantity = (avaliationQuantity / 1000).toFixed(1).replace('.', ',');
      return `${formattedQuantity}mil`;
    } else {
      // Retorna o número sem formatação especial
      return `${avaliationQuantity.toFixed(1).replace('.', ',')}`;
    }
  };

  functionQuantitySold = (quantitySold: number): string => {
    if (quantitySold >= 1000) {
      const formattedValue = (quantitySold / 1000).toFixed(1).replace(".", ",");

      return `${formattedValue}mil`;
    }

    return quantitySold.toString();
  };
}
