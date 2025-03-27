import { AfterViewInit, Component, ElementRef, Input, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category-to-product',
    templateUrl: './category-to-product.component.html',
    styleUrl: './category-to-product.component.scss',
    standalone: false
})
export class CategoryToProductComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('containerCategory') containerCategory!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('svgArrowBottom') svgArrowBottom!: ElementRef<HTMLElement>;
  @Input() getTagProductClicked!: (tag: string) => void;
  showContainerAfterArrowIsTop = false;

  itensOfferFlesh = [
    'Mais Populares',
    'Lojas Oficiais',
    'Top Ofertas',
    'Moda',
    'Beleza e Cuidado Pessoal',
    'Ofertas Internacionais',
  ];

  itensMoreOfferFlesh = [
    'Moda Infantil',
    'Mercado e Pets',
    'Casa e Cozinha',
    'Brinquedos',
    'Eletrônicos',
    'Cuidados para o Bebê',
    'Livros e Papelaria',
    'Computadores e Acessórios',
    'Celulares e Dispositivos',
    'Auto & Moto',
    'Esportes e Lazer',
    'Mais Ofertas Locais',
  ];

  hourFlashOffer = "05:00";

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    this.containerCategory.toArray()[0].nativeElement.style.borderBottom = "4px solid rgb(238, 77, 45)";
    this.containerCategory.toArray()[0].nativeElement.style.color = "rgb(238, 77, 45)";
  }

  onClickCategory = async (value: number) => {
    if (value === -1) return;

    let tagProduct = this.itensOfferFlesh[value];
    tagProduct = tagProduct.replace(/ /g, '_');
    this.getTagProductClicked(tagProduct);

    this.containerCategory.toArray().forEach((el) => {
      el.nativeElement.style.borderBottom = "1px solid #00000017";
      el.nativeElement.style.color = "black";
    })

    this.containerCategory.toArray()[value].nativeElement.style.borderBottom = "4px solid rgb(238, 77, 45)";
    this.containerCategory.toArray()[value].nativeElement.style.color = "rgb(238, 77, 45)";
  };

  valueSetTimeOutShowContainer!: number;

  onClickNewItenMoreOfferFlesh = (iten: string) => {
    const newArray = [...this.itensMoreOfferFlesh];

    if (iten === 'Ofertas Internacionais') {
      const indexOfferInternational = newArray.findIndex((el) => el === iten);

      const elementLastItensOffer = this.itensOfferFlesh[this.itensOfferFlesh.length - 1];

      newArray[indexOfferInternational] = elementLastItensOffer;
    } else {
      if (this.itensOfferFlesh[this.itensOfferFlesh.length - 1] !== 'Ofertas Internacionais') {
        const indexPosition = newArray.findIndex((el) => el === 'Ofertas Internacionais');
        const itenIndexOfferInterncation = newArray[indexPosition];

        const indexItenClicked = newArray.findIndex((el) => el === iten);
        newArray[indexItenClicked] = itenIndexOfferInterncation;

        const lastElementItensOfferFlehs = this.itensOfferFlesh[this.itensOfferFlesh.length - 1];

        if (indexPosition !== -1) {
          newArray[indexPosition] = lastElementItensOfferFlehs;
        }
      } else {
        const indexPosition = newArray.findIndex((el) => el === iten);
        const lastElementItensOfferFlehs = this.itensOfferFlesh[this.itensOfferFlesh.length - 1];

        if (indexPosition !== -1) {
          newArray[indexPosition] = lastElementItensOfferFlehs;
        }
      }
    }

    this.itensMoreOfferFlesh = newArray;

    const newArrayOfferFlesh = [...this.itensOfferFlesh];
    newArrayOfferFlesh[newArrayOfferFlesh.length - 1] = iten;

    this.itensOfferFlesh = newArrayOfferFlesh;

    // setShowContainerAfterArrowIsTop(false);
    this.showContainerAfterArrowIsTop = false;
    // onClickCategory(itensOfferFlesh.length);
  };

  onMouseEnterContainerCategoryMore = () => {
    if (this.svgArrowBottom === null) return;
    clearTimeout(this.valueSetTimeOutShowContainer);

    const svg = this.svgArrowBottom.nativeElement;

    svg.style.rotate = '180deg';

    // setShowContainerAfterArrowIsTop(true);
    this.showContainerAfterArrowIsTop = true;
  };

  onMouseLeaveEnterContainerCategoryMore = () => {
    if (this.svgArrowBottom === null) return;

    const svg = this.svgArrowBottom.nativeElement;

    svg.style.rotate = '0deg';
    // setShowContainerAfterArrowIsTop(false);

    this.valueSetTimeOutShowContainer = setTimeout(() => {
      this.showContainerAfterArrowIsTop = false;
    }, 20) as unknown as number;
  };

  onMouseEnterContainerItensMoreOfferFlesh = () => {
    if (this.svgArrowBottom === null) return;

    clearTimeout(this.valueSetTimeOutShowContainer);

    const svg = this.svgArrowBottom.nativeElement;

    svg.style.rotate = '180deg';
    this.showContainerAfterArrowIsTop = true;
  };

  onMouseLeaveContainerItensMoreOfferFlesh = () => {
    if (this.svgArrowBottom === null) return;

    const svg = this.svgArrowBottom.nativeElement;

    svg.style.rotate = '0deg';
    this.showContainerAfterArrowIsTop = false;
  };

  ngOnDestroy(): void {
    clearTimeout(this.valueSetTimeOutShowContainer);
  }
}
