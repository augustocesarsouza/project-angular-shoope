import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDiscoveriesOfTheDay } from '../../../../login-and-register-user/interface/product-discoveries-of-the-day';
import { GetDiscoveriesOfTheDayIsOutOfViewService } from '../../../service/get-discoveries-of-the-day-is-out-of-view.service';
import { ProductDiscoveriesOfDayService } from '../../../service/product-discoveries-of-day.service';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-discoveries-of-the-day',
  templateUrl: './discoveries-of-the-day.component.html',
  styleUrl: './discoveries-of-the-day.component.scss'
})
export class DiscoveriesOfTheDayComponent implements OnInit, AfterViewInit {
  productDiscoveriesOfTheDay: ProductDiscoveriesOfTheDay[] = [];

  isOutOfView = false;
  valorEstaParaBaixo = false;

  @ViewChild('containerDiscoveriesOfTheDay') containerDiscoveriesOfTheDay!: ElementRef<HTMLDivElement>;
  @ViewChild('containerAllProductDiscoveriesOfTheDay') containerAllProductDiscoveriesOfTheDay!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private productDiscoveriesOfDayService: ProductDiscoveriesOfDayService,
    private getDiscoveriesOfTheDayIsOutOfViewService: GetDiscoveriesOfTheDayIsOutOfViewService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;
      const token = user.token;
      const userId = user.id;

      this.productDiscoveriesOfDayService.GetAllProductDiscoveriesOfDays(userId, token).subscribe({
        next: (success) => {
          const data = success.data;

          // for (let i = 0; i < 60; i++) {
          //   this.productDiscoveriesOfTheDay.push(data[0]);
          // }

          this.productDiscoveriesOfTheDay = data;
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

    this.getDiscoveriesOfTheDayIsOutOfViewService.discoveries$.subscribe((value) => {
      if(value !== null){
        // this.isOutOfView = value;
        if(value){
          this.isOutOfView = true;
        }else {
          this.isOutOfView = false;
        }

        this.updateContainerStyles(value);

      }
    });

    if ('IntersectionObserver' in window) {
      let downButtonSeeMore = false;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { boundingClientRect, isIntersecting } = entry;

            // Detecta se a borda superior da div passou da viewport
            const isAboveViewport = boundingClientRect.top < 0 && !isIntersecting;

            if (isAboveViewport) {
              downButtonSeeMore = true;

              this.isOutOfView = false;

              if(!this.isOutOfView){
                this.updateContainerStyles(false);
              }
            } else if (isIntersecting) {
              if(downButtonSeeMore){
                this.isOutOfView = true;
                this.updateContainerStyles(true);
                downButtonSeeMore = false;
              }
            }
          });
        },
        {
          root: null, // Viewport como referência
          threshold: 0, // Detecta o início do elemento
          rootMargin: "0px 0px -1px 0px" // Ajusta o limite inferior para acionar exatamente quando o topo sai da tela
        }
      );

      setTimeout(() => {
        if (this.containerAllProductDiscoveriesOfTheDay?.nativeElement) {
          observer.observe(this.containerAllProductDiscoveriesOfTheDay.nativeElement);
        }
      }, 50);
    }
  }

  private updateContainerStyles(isOutOfView: boolean): void {
    const container = this.containerDiscoveriesOfTheDay.nativeElement;

    container.style.position = isOutOfView ? 'fixed' : 'static';
    container.style.opacity = isOutOfView ? '0.9' : '1';
    container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    if (isOutOfView) {
      // Elemento fixado na posição superior.
    } else {
      // Elemento voltou ao fluxo normal da página.
    }
  }

  spanTitle = (string: string) => {
    const stringChange = string.slice(0, 41) + '...';

    return stringChange;
  };

  spanPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price);

    return formattedPrice;
  };

  spanQuantitySold = (quantity: number) => {
    if (quantity >= 1000) {
      let formatted = (quantity / 1000).toFixed(quantity % 1000 === 0 ? 0 : 1);
      formatted = formatted.replace('.', ',');
      return `${formatted}mil`;
    }

    return quantity.toString();
  };
}
