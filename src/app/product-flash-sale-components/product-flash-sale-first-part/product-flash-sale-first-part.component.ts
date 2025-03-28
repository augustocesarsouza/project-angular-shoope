import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { Router } from '@angular/router';
import { ProductOptionImage } from '../../login-and-register-user/interface/product-option-image';
import { ProductOptionImageBottomService } from '../service/product-option-image-bottom.service';
import { UserLocalStorage } from '../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../login-and-register-user/interface/user';
import { ProductOptionImageBottom } from '../../login-and-register-user/interface/product-option-image-bottom';
import { UpdateImgProductFlashSaleTypeService } from '../service/update-img-product-flash-sale-type.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-flash-sale-first-part',
    templateUrl: './product-flash-sale-first-part.component.html',
    styleUrl: './product-flash-sale-first-part.component.scss',
      // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class ProductFlashSaleFirstPartComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;
  settimeOutAny!: number;

  user!: User;

  // const [productImgMain, setProductImgMain] = useState<ProductOptionImageProps | null>(null);
  productImgMain: string | null = null;
  lastImgSelect: string | null = null;

  // const [newProductOptionImageAll, setNewProductOptionImageAll] = useState<
  //   ProductOptionImageProps[] | null
  // >(null);
  newProductOptionImageAll: ProductOptionImage[] | null = null;

  // const [clickImgProduct, setClickImgProduct] = useState<ProductOptionImageProps | null>(null);
  clickImgProduct: string | null = null;
  productOptionImageAll!: ProductOptionImageBottom;
  startIndex = 0;

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;
  private subscriptionService!: Subscription;

  constructor(private router: Router, private productOptionImageBottomService: ProductOptionImageBottomService,
    private updateImgProductFlashSaleTypeService: UpdateImgProductFlashSaleTypeService
  ){}

  ngOnInit(): void {
    if(this.getFlashSaleProduct.productsOfferFlashDTO){
      this.productImgMain = this.getFlashSaleProduct.productsOfferFlashDTO.imgProduct;
      this.lastImgSelect = this.getFlashSaleProduct.productsOfferFlashDTO.imgProduct;
    }

    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        this.user = user;
        if(this.getFlashSaleProduct.productsOfferFlashDTO){
          this.getByListFlashSaleProductImageAllId(this.getFlashSaleProduct.productsOfferFlashDTO.id, user);
        }
      }
    }

    this.subscriptionService = this.updateImgProductFlashSaleTypeService.imgType$.subscribe((obj) => {
      if(obj === null){
        this.productImgMain = this.lastImgSelect
      }else {
        this.productImgMain = obj.imgClicked;
      }
    });
  }

  ngAfterViewInit(): void {
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      if(typeof window === 'undefined')return;

      const scrollElement = this.carouselCustom.nativeElement;
      const containerLeft = this.containerArrowLeft.nativeElement;
      const containerRight = this.containerArrowRight.nativeElement;

      const scrollLeft = () => {
        scrollElement?.scrollBy({ left: -90, behavior: 'auto' });
      };
      const scrollRight = () => {
        scrollElement?.scrollBy({ left: 90, behavior: 'auto' });
      };

      const updateArrowsVisibility = () => {
        if (scrollElement) {
          let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

          if (maxScrollLeft === 0) {
            maxScrollLeft = 10;
          }

          containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
          containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
        }
      };

      containerLeft?.addEventListener('click', scrollLeft);
      containerRight?.addEventListener('click', scrollRight);
      scrollElement?.addEventListener('scroll', updateArrowsVisibility);
      window.addEventListener('resize', updateArrowsVisibility);

      updateArrowsVisibility();

      const containerImgProductBottom = document.querySelectorAll(".container-img-product-bottom") as NodeListOf<HTMLElement>;
      containerImgProductBottom[0].style.border = "1px solid red";
    }, 100)as unknown as number;
  }

  getByListFlashSaleProductImageAllId = async (
      productFlashSaleId: string,
      user: User
    ) => {

    this.productOptionImageBottomService.GetByListFlashSaleProductImageAllId(productFlashSaleId, user.id, user.token).subscribe({
      next: (success) => {
        const data = success.data;

        data.listImageUrlBottom = data.listImageUrlBottom.concat(data.listImageUrlBottom);

        this.productOptionImageAll = data;
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
  };

  onClickImgsProductPartBottom = (productImg: string) => {
    this.newProductOptionImageAll = null;

    this.clickImgProduct = productImg;
    document.body.style.overflowY = 'hidden';
  };

  onMouseEnterImgProductBottom = (ContainerimgPartBottom: HTMLDivElement, productImg: string) => {
    this.productImgMain = productImg;
    this.lastImgSelect = productImg;

    const containerImgProductBottom = document.querySelectorAll(".container-img-product-bottom") as NodeListOf<HTMLElement>;

    containerImgProductBottom.forEach((el) => {
      el.style.border = "1px solid rgb(255, 255, 255)";

    });

    ContainerimgPartBottom.style.border = "1px solid red";
  };

  onMouseLeaveImgProductBottom = () => {
    const obj = this.updateImgProductFlashSaleTypeService.currentImgType;

    if(obj && obj.id.length > 0){
      this.productImgMain = obj.imgClicked;
    }
  };

  onClickArrowRight(){
    //
  }

  onClickArrowLeft(){
    this.startIndex = this.startIndex - 1;
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    if (this.subscriptionService) {
      this.subscriptionService.unsubscribe();
    }
  }
}
