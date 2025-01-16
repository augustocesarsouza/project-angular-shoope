import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDiscoveriesOfTheDay } from '../../../../login-and-register-user/interface/product-discoveries-of-the-day';
import { GetDiscoveriesOfTheDayIsOutOfViewService } from '../../../service/get-discoveries-of-the-day-is-out-of-view.service';

@Component({
  selector: 'app-discoveries-of-the-day',
  templateUrl: './discoveries-of-the-day.component.html',
  styleUrl: './discoveries-of-the-day.component.scss'
})
export class DiscoveriesOfTheDayComponent implements OnInit, AfterViewInit {
  productDiscoveriesOfTheDay: ProductDiscoveriesOfTheDay[] = [];

  isOutOfView = false;

  @ViewChild('containerDiscoveriesOfTheDay') containerDiscoveriesOfTheDay!: ElementRef<HTMLDivElement>;
  @ViewChild('containerAllProductDiscoveriesOfTheDay') containerAllProductDiscoveriesOfTheDay!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private getDiscoveriesOfTheDayIsOutOfViewService: GetDiscoveriesOfTheDayIsOutOfViewService){}

  ngOnInit(): void {
    const obj = {
      id: "0ebe83f7-072b-4b63-b0cd-27439dfb72f6",
      title: "Fones De Ouvido Sem Fio TWS 5.4 Bluetooth Estéreo Com Toque Intra-Auriculares Baixo Esportivo À Prova D'água Microfone Embutido -M47",
      imgProduct: "http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/product-discoveries-of-day/egn95xjgukpjlgsyyqbm",
      imgPartBottom: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png",
      discountPercentage: 52,
      isAd: true,
      price: 42.99,
      quantitySold: 175.00
    };

    this.productDiscoveriesOfTheDay.push(obj);

    for (let i = 0; i < 59; i++) {
      this.productDiscoveriesOfTheDay.push(obj);
    }
  }

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    this.getDiscoveriesOfTheDayIsOutOfViewService.discoveries$.subscribe((value) => {
      if(value !== null){
        this.isOutOfView = value;

        this.updateContainerStyles(value);
      }
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { boundingClientRect, isIntersecting } = entry;

            // Detecta se a borda superior da div passou da viewport
            const isAboveViewport = boundingClientRect.top < 0 && !isIntersecting;

            if (isAboveViewport) {
              this.isOutOfView = false;
              this.updateContainerStyles(false);
            } else if (isIntersecting) {
              this.isOutOfView = true;
              this.updateContainerStyles(true);
            }
          });
        },
        {
          root: null, // Viewport como referência
          threshold: 0, // Detecta o início do elemento
          rootMargin: "0px 0px -1px 0px" // Ajusta o limite inferior para acionar exatamente quando o topo sai da tela
        }
      );

      if (this.containerAllProductDiscoveriesOfTheDay?.nativeElement) {
        observer.observe(this.containerAllProductDiscoveriesOfTheDay.nativeElement);
      }
    }
  }

  private updateContainerStyles(isOutOfView: boolean): void {
    const container = this.containerDiscoveriesOfTheDay.nativeElement;

    container.style.position = isOutOfView ? 'fixed' : 'static';
    container.style.opacity = isOutOfView ? '0.9' : '1';
    container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    // Exemplo de lógica adicional durante a transição
    if (isOutOfView) {
      console.log('Elemento fixado na posição superior.');
    } else {
      console.log('Elemento voltou ao fluxo normal da página.');
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
