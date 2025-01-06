import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent {
  showArrowTop = false;
  quantityColorOrange = 0;

  containerCheckboxBackgroundColorOrange = 'rgb(238, 77, 45)';
  containerCheckboxBackgroundColorWhite = 'rgba(0, 0, 0, .14)';
  containerCheckboxBackgroundColorWhite2 = '#fff';

  wasClickedAllCookies = false;

  @ViewChild('containerAcceptAllCoockies') containerAcceptAllCoockies!: ElementRef<HTMLDivElement>;
  @ViewChildren('containerCheckoutInner') containerCheckoutInner!: QueryList<ElementRef<HTMLDivElement>>;

  onClickContainerCheckout = (
    event: Event,
    containerNumber: number| null
  ) => {
    // Aqui tem que criar no banco de dados criar a Table "Preferências de cookies"
    if(containerNumber === null){
      this.wasClickedAllCookies = !this.wasClickedAllCookies;
      this.quantityColorOrange = 0;

      if(this.wasClickedAllCookies){
        this.changeContainerColorTrue(this.containerAcceptAllCoockies.nativeElement);

        this.containerCheckoutInner.forEach((el) => {
          this.changeContainerColorTrue(el.nativeElement);

          this.quantityColorOrange = this.quantityColorOrange + 1;
        });
      }else {
        this.changeContainerColorFalse(this.containerAcceptAllCoockies.nativeElement);

        this.containerCheckoutInner.forEach((el) => {
          this.changeContainerColorFalse(el.nativeElement);

          if(this.quantityColorOrange > 0){
            this.quantityColorOrange = this.quantityColorOrange - 1;
          }
        });
      }
    }

    if(containerNumber !== null){
      this.containerCheckoutInner.forEach((el, index) => {
        if(containerNumber === index){
          if(el.nativeElement.style.backgroundColor === this.containerCheckboxBackgroundColorOrange){
            this.changeContainerColorFalse(el.nativeElement);

            this.quantityColorOrange = this.quantityColorOrange - 1;
            this.wasClickedAllCookies = false;
          }else {
            this.changeContainerColorTrue(el.nativeElement);

            this.quantityColorOrange = this.quantityColorOrange + 1;
          }
        }
      });
    }

    if(this.quantityColorOrange < 4){
      this.changeContainerColorFalse(this.containerAcceptAllCoockies.nativeElement);
    }else {
      this.changeContainerColorTrue(this.containerAcceptAllCoockies.nativeElement);
    }

    console.log(this.quantityColorOrange);
  }

  changeContainerColorTrue(container: HTMLDivElement){
    container.style.backgroundColor = this.containerCheckboxBackgroundColorOrange;
    container.style.borderColor = this.containerCheckboxBackgroundColorWhite;
  }

  changeContainerColorFalse(container: HTMLDivElement){
    container.style.backgroundColor = this.containerCheckboxBackgroundColorWhite2;
    container.style.borderColor = this.containerCheckboxBackgroundColorWhite;
  }

  onClickContainerSeeMore = () => {
    // setShowArrowTop((prev) => !prev);
    this.showArrowTop = !this.showArrowTop;
  };

  changeContainerCheckoutClickingAcceptAllCookies = (container: HTMLDivElement) => {
    if (container.style.backgroundColor === this.containerCheckboxBackgroundColorWhite2) {
      container.style.backgroundColor = this.containerCheckboxBackgroundColorOrange;
      container.style.borderColor = this.containerCheckboxBackgroundColorOrange;
      this.quantityColorOrange = this.quantityColorOrange + 1;
    }
  };
}
