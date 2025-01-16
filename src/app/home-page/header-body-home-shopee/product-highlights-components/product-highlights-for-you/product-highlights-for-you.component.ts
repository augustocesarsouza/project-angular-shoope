import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductHighlightService } from '../../../service/product-highlight.service';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { ProductHighlight } from '../../../../login-and-register-user/interface/product-highlight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-highlights-for-you',
  templateUrl: './product-highlights-for-you.component.html',
  styleUrl: './product-highlights-for-you.component.scss'
})
export class ProductHighlightsForYouComponent implements OnInit, AfterViewInit {
  allProductHighlight!: ProductHighlight[];

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private productHighlightService: ProductHighlightService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;
      const token = user.token;
      const userId = user.id;

      this.productHighlightService.GetAllProductHighlights(userId, token).subscribe({
        next: (success) => {
          const data = success.data;
          this.allProductHighlight = data;
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
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1200, behavior: 'auto' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 1200, behavior: 'auto' });

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
