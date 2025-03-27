import { Component, Input } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
    selector: 'app-comshare-main-last',
    templateUrl: './comshare-main-last.component.html',
    styleUrl: './comshare-main-last.component.scss',
    standalone: false
})
export class ComshareMainLastComponent {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  funcFormatFavoriteQuantity = (favoriteQuantity: number) => {
    if (favoriteQuantity >= 1000) {
      // Divide por 1000 e formata com uma casa decimal

      const formattedQuantity = (favoriteQuantity / 1000).toFixed(1).replace('.', ',');
      return `Favoritar (${formattedQuantity}mil)`;
    } else {
      // Retorna o número sem formatação especial
      return `Favoritar (${favoriteQuantity.toFixed(1).replace('.', ',')}mil)`;
    }
  };
}
