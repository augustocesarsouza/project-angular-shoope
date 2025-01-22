import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { Router } from '@angular/router';
import { FlashSaleCountdown, FlashSaleCountdownService } from '../../service-all-components/flash-sale-countdown.service';
import { countdownFlashSale } from '../../home-page/function-get-countdown-flash-sale/countdown-flash-sale';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import { ProductOfferFlashTypeService } from '../service/product-offer-flash-type.service';
import { User } from '../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { ProductOfferFlashType } from '../../login-and-register-user/interface/product-offer-flash-type';
import { objImgType, UpdateImgProductFlashSaleTypeService } from '../service/update-img-product-flash-sale-type.service';

@Component({
  selector: 'app-product-flash-sale-second-part',
  templateUrl: './product-flash-sale-second-part.component.html',
  styleUrl: './product-flash-sale-second-part.component.scss'
})
export class ProductFlashSaleSecondPartComponent implements OnInit, OnDestroy {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;
  user!: User;

  quantityStarRender = [0, 1, 2, 3, 4];
  flashSaleCountdown!: FlashSaleCountdown;
  productOfferFlashType!: ProductOfferFlashType[]

  quantityProduct = "1";
  settimeOutAny!: number;
  containerColorsProductDescriptionList!: NodeListOf<HTMLElement>;

  constructor(private router: Router, private flashSaleCountdownService: FlashSaleCountdownService,
    private productOfferFlashTypeService: ProductOfferFlashTypeService, private updateImgProductFlashSaleTypeService: UpdateImgProductFlashSaleTypeService
  ){}

  ngOnInit(): void {
    const flashSaleCountdownFunc = countdownFlashSale(this.flashSaleCountdownService);
    this.flashSaleCountdown = flashSaleCountdownFunc;

    const productsOfferFlashId = this.getFlashSaleProduct.productsOfferFlashDTO.id;

    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        this.user = user;

        this.productOfferFlashTypeService.GetAllProductOfferFlashTypeByProductsOfferFlashId(productsOfferFlashId, user.id, user.token).subscribe({
          next: (success) => {
            const data = success.data;
            this.productOfferFlashType = data;

            this.settimeOutAny = setTimeout(() => {
              const containerColorsProductDescription = document.querySelectorAll(".container-colors-product-description") as NodeListOf<HTMLElement>;
              this.containerColorsProductDescriptionList = containerColorsProductDescription;
            }, 50)as unknown as number;

          },
          error: error => {
            if(error.status === 400){
              console.log(error);
              // this.confirmEmail = false;
            }

            if(error.status === 403){
              localStorage.removeItem('user');
              this.router.navigate(['/buyer/login']);
              // this.confirmEmail = false;
            }
          }
        });
      }
    }
  }

  funcFormatTitleProduct = (productsOfferFlashTitle: string) => {
    let stringTitle = '';

    if (productsOfferFlashTitle.length < 120) {
      stringTitle = productsOfferFlashTitle;
    } else {
      stringTitle = productsOfferFlashTitle.slice(0, 120) + '...';
    }

    return stringTitle;
  };

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

  functionQuantitySold = (quantitySold: number): string => {
    if (quantitySold >= 1000) {
      const formattedValue = (quantitySold / 1000).toFixed(1).replace(".", ",");

      return `${formattedValue}mil`;
    }

    return quantitySold.toString();
  };


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

  onClickIncreaseQuantityOfProduct = () => {
    if(Number(this.quantityProduct) >= 1 && Number(this.quantityProduct) < this.getFlashSaleProduct.quantityPiece){
      const value = String(Number(this.quantityProduct) + 1);
      this.quantityProduct = value;
      return;
    }
  };

  onClickDecreaseQuantityOfProduct = () => {
    if(Number(this.quantityProduct) > 1){
      const value = String(Number(this.quantityProduct) - 1);
      this.quantityProduct = value;
      return;
    }else {
      this.quantityProduct = "1";
    }
  };

  onChangeInputNumber = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    const value = inputElement.value;

    if (/^\d*$/.test(value)) {
      const valueNumber = Number(value);

      if (valueNumber > this.getFlashSaleProduct.quantityPiece) {
        this.quantityProduct = this.getFlashSaleProduct.quantityPiece.toString();
        return;
      }

      // Permite apenas números ou vazio
      this.quantityProduct = value;
    }
  };

  onBlurInputNumber = () => {
    const value = parseInt(this.quantityProduct, 10);
    // setQuantityProduct(value > 0 ? value.toString() : '1');
    this.quantityProduct = value > 0 ? value.toString() : "1";
  };

  // const [whichColorWasClicked, setWhichColorWasClicked] = useState<ProductOptionImageProps | null>(
  //   null
  // );

  whichColorWasClicked: ProductOfferFlashType | null = null;
  clickedWhichColor = false;
  whichTypeWasClicked: objImgType = {
    id: '',
    imgClicked: '',
  };
  lastValueClicked = "";

  onClickWhichColorWasClicked = (el: ProductOfferFlashType, containerColorsProductDescription: HTMLDivElement) => {
    if (el === null) {
      // getOnMouseEnterAndLeaveColor(null);
      return;
    }

    this.containerColorsProductDescriptionList.forEach((el: HTMLElement) => {
      el.style.borderColor = "rgba(0, 0, 0, 0.11)";
    });

    if(this.whichTypeWasClicked.id === el.id){
      const obj = {
        id: "",
        imgClicked: "",
      }

      this.whichTypeWasClicked = obj;

      containerColorsProductDescription.style.borderColor = "rgba(0, 0, 0, 0.11)";
    }else {
      const obj = {
        id: el.id,
        imgClicked: el.imgProduct,
      }

      this.whichTypeWasClicked = obj;
      containerColorsProductDescription.style.borderColor = "rgb(238, 77, 45)";
    }

    if(this.whichTypeWasClicked.id.length > 0){
      const obj = {
        id: el.id,
        imgClicked: el.imgProduct,
      }

      this.updateImgProductFlashSaleTypeService.updateImgType(obj);
    }
  };

  onMouseEnterColor = (el: ProductOfferFlashType) => {
    const obj = {
      id: el.id,
      imgClicked: el.imgProduct,
    }

    this.updateImgProductFlashSaleTypeService.updateImgType(obj);

  };

  onMouseLeaveColor = () => {
    if(this.whichTypeWasClicked.id.length <= 0){
      this.updateImgProductFlashSaleTypeService.updateImgType(null);
    }else {
      this.updateImgProductFlashSaleTypeService.updateImgType(this.whichTypeWasClicked);
    }
  };

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
