import { Component, Input } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
    selector: 'app-image-product-first',
    templateUrl: './image-product-first.component.html',
    styleUrl: './image-product-first.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ImageProductFirstComponent {
  @Input() productImgMain!: string;
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  onClickClickImgProduct = (productImgMain: string | null) => {
    if (productImgMain === null) return;

    // if (productImgMain.optionType.length <= 0) {
    //   // setNewProductOptionImageAll(null);
    //   this.newProductOptionImageAll = null;
    // }

    // if (productImgMain.optionType.length > 0) {
    //   const uuidProduct = uuidv4();

    //   const productClicked = {
    //     id: uuidProduct,
    //     imageUrl: productImgMain.imageUrl,
    //     imgAlt: productImgMain.imgAlt,
    //     optionType: '',
    //     titleOptionType: productImgMain.titleOptionType,
    //   };
    //   productClicked.id = uuidProduct;

    //   // setClickImgProduct(productClicked);

    //   // const array = [...productOptionImageAll];
    //   // array.push(productClicked);
    //   // setNewProductOptionImageAll(array);
    //   return;
    // }

    // setClickImgProduct(productImgMain);
    // this.clickImgProduct = productImgMain;
    document.body.style.overflowY = 'hidden';
  };

}
