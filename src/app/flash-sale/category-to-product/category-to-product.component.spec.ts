import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryToProductComponent } from './category-to-product.component';

describe('CategoryToProductComponent', () => {
  let component: CategoryToProductComponent;
  let fixture: ComponentFixture<CategoryToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryToProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render six spans', () => {
    const spanS = fixture.nativeElement.querySelectorAll(".container-category span");
    expect(spanS.length).toEqual(6);
  });

  it('should render all span category', () => {
    const spanS = fixture.nativeElement.querySelectorAll(".container-category span");
    spanS.forEach((span: HTMLSpanElement, i: number) => {
      if(i === 0){
        expect(span.textContent).toBe("Mais Populares");
      }

      if(i === 1){
        expect(span.textContent).toBe("Lojas Oficiais");
      }

      if(i === 2){
        expect(span.textContent).toBe("Top Ofertas");
      }

      if(i === 3){
        expect(span.textContent).toBe("Moda");
      }

      if(i === 4){
        expect(span.textContent).toBe("Beleza e Cuidado Pessoal");
      }

      if(i === 5){
        expect(span.textContent).toBe("Ofertas Internacionais");
      }
    })
  });

  it('should render span more', () => {
    const spanMore = fixture.nativeElement.querySelector(".span-more");
    expect(spanMore.textContent).toBe("Mais");
  });

  it('should render arrow bottom', () => {
    const svg = fixture.nativeElement.querySelector(".svg-arrow-bottom");
    expect(svg).not.toBeNull()
  });

  it('should render header length 12', () => {
    component = fixture.componentInstance;

    component.showContainerAfterArrowIsTop = true;
    fixture.detectChanges();

    const headerAll = fixture.nativeElement.querySelectorAll(".container-iten-more-offer-flesh h1");
    expect(headerAll.length).toEqual(12);
  });

  it('should render header first element', () => {
    component = fixture.componentInstance;

    component.showContainerAfterArrowIsTop = true;
    fixture.detectChanges();

    const headerAll = fixture.nativeElement.querySelectorAll(".container-iten-more-offer-flesh h1");
    expect(headerAll[0].textContent).toBe("Moda Infantil");
  });
});
