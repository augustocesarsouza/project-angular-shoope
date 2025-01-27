import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../login-and-register-user/interface/user';
import { Router } from '@angular/router';
import { ProductFlashSaleReviewsService } from '../service/product-flash-sale-reviews.service';
import { ProductFlashSaleReview } from '../../login-and-register-user/interface/product-flash-sale-review';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';

@Component({
  selector: 'app-product-flesh-sale-reviews',
  templateUrl: './product-flesh-sale-reviews.component.html',
  styleUrl: './product-flesh-sale-reviews.component.scss'
})
export class ProductFleshSaleReviewsComponent implements OnInit, AfterViewInit {
  @Input() user!: User;
  @Input() productFlashSaleId!: string;
  @Input() getFlashSaleProduct!: FlashSaleProductAllInfo;

  @ViewChildren('containerStar') containerStars!: QueryList<ElementRef<HTMLDivElement>>;

  productFlashSaleReviewAll!: ProductFlashSaleReview[];
  quantityStarRender = [0, 1, 2, 3, 4];

  constructor(private router: Router, private productFlashSaleReviewsService: ProductFlashSaleReviewsService){}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    if(this.user){
      this.productFlashSaleReviewsService.GetAllProductFlashSaleReviewsByProductsOfferFlashId(this.productFlashSaleId, this.user.id, this.user.token).subscribe({
        next: (success) => {
          const data = success.data;
          this.productFlashSaleReviewAll = data;
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

  ngAfterViewInit(): void {
    this.getFlashSaleProductByProductFlashSaleId(this.getFlashSaleProduct);
  }

  // ProductFlashSaleReview - FAZER TEST DO BACKEND, E CONTINUAR FAZENDO FRONT

  getFlashSaleProductByProductFlashSaleId = (getFlashSaleProduct: FlashSaleProductAllInfo) => {
    const productReviewsRate = getFlashSaleProduct.productReviewsRate;

    const starWidths = [0, 0, 0, 0, 0];

    if (productReviewsRate === 0) {
      // Todas as estrelas sem preenchimento.
      starWidths.fill(0);
    } else {
      // Preenchendo estrelas com base no valor de productReviewsRate.
      for (let i = 0; i < 5; i++) {
        const minValue = i; // Valor mínimo para a estrela.
        const maxValue = i + 1; // Valor máximo para a estrela.

        if (productReviewsRate >= maxValue) {
          // Preenche totalmente a estrela.
          starWidths[i] = 100;
        } else if (productReviewsRate > minValue && productReviewsRate < maxValue) {
          // Preenche parcialmente a estrela.
          const fractionalPart = productReviewsRate - minValue;
          starWidths[i] = Math.round(fractionalPart * 100);
          break; // Nenhuma estrela além dessa será parcialmente preenchida.
        }
      }
    }

    // Aplicando o estilo calculado para cada estrela.
    this.containerStars.forEach((el, index) => {
      el.nativeElement.style.width = `${starWidths[index]}%`;
    });
  };

  onClickContainerStarEach = (whickContainerNumber: number) => {
    console.log(whickContainerNumber);

    // setWhichStarWasClicked(whickContainerNumber);
  };
}
