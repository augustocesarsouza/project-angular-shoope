import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductFlashDeals } from '../../../../login-and-register-user/interface/product-flash-deals';
import { ProductsOfferFlashService } from '../../../service/products-offer-flash.service';

@Component({
    selector: 'app-product-flash-deals',
    templateUrl: './product-flash-deals.component.html',
    styleUrl: './product-flash-deals.component.scss',
    standalone: false
})
export class ProductFlashDealsComponent implements OnInit, AfterViewInit {
  allProductFlashDeals!: ProductFlashDeals[];

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  constructor(private productsOfferFlashService: ProductsOfferFlashService){}

  ngOnInit(): void {
    this.productsOfferFlashService.GetAllProduct().subscribe({
      next: (success) => {
        const data = success.data;

        const array = Array(3).fill(data).flat();

        this.allProductFlashDeals = array;
      },
      error: error => {
        if(error.status === 400){
          console.log(error);

          // this.confirmEmail = false;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1200, behavior: 'smooth' });
    // const scrollRight = () => scrollElement?.scrollBy({ left: 1200, behavior: 'smooth' });


    const scrollRight = () => {
      console.log(scrollElement);
      scrollElement?.scrollBy({ left: 1200, behavior: 'smooth' });
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
  }
}
