import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionComponent } from './promotion.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PromotionUser } from '../../../login-and-register-user/interface/promotion-user';
import { Promotion } from '../../../login-and-register-user/interface/promotion';

// export interface PromotionUser {
//   id: string;
//   promotionId: string;
//   promotionDTO: Promotion | null;
//   userId: string;
//   userDTO: User | null;
// }

// export interface Promotion {
//   id: string;
//   whatIsThePromotion: number;
//   title: string;
//   description: string;
//   date: string;
//   img: string;
//   listImgInner: string[];
// }




describe('PromotionComponent', () => {
  let component: PromotionComponent;
  let fixture: ComponentFixture<PromotionComponent>;

  const listImgInner = [];
  listImgInner.push("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736254960/img-shopee/oeqxscjdbep2wa3ua4gy.jpg", "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736254962/img-shopee/w3vtulbxrojt7mw0kyie.jpg", "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736254964/img-shopee/cy49rdpiwwcn3hffjsx8.jpg");

  const promotionDTO: Promotion = {
    id: "",
    date: "1999-10-05T15:00:00",
    description: "Veja os campeões de vendas de Kit Cuecas. Você vai adorar! 👉",
    img: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736254958/img-shopee/cvgk9daqkqugea6jvly4.jpg",
    listImgInner: listImgInner,
    title: "Os favoritos do momento estão aqui!",
    whatIsThePromotion: 2,
  }

  const promotionUser: PromotionUser = {
    id: "",
    promotionId: "",
    promotionDTO: promotionDTO,
    userId: "",
    userDTO: null
  }

  const promotionUserArray: PromotionUser[] = [];
  promotionUserArray.push(promotionUser);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PromotionComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(PromotionComponent);
    component = fixture.componentInstance;

    component.promotionUser = promotionUserArray;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-inner img');
    expect(img).not.toBeNull();

    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736254958/img-shopee/cvgk9daqkqugea6jvly4.jpg");
  });

  it('should render img alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-inner img');
    expect(img).not.toBeNull();

    expect(img.alt).toBe("Os favoritos do momento estão aqui!");
  });

  it('should render header-title', () => {
    const headerTitle = fixture.nativeElement.querySelector('.header-title');
    expect(headerTitle.textContent).toBe("Os favoritos do momento estão aqui!");
  });

  it('should render span-description', () => {
    const spanDescription = fixture.nativeElement.querySelector('.span-description');
    expect(spanDescription.textContent).toBe("Veja os campeões de vendas de Kit Cuecas. Você vai adorar! 👉");
  });

  it('should render alt-img-of-list', () => {
    const imgOfList = fixture.nativeElement.querySelectorAll('.img-of-list');
    expect(imgOfList.length).toEqual(listImgInner.length);
  });

  it('should render span-date-validate-cupon', () => {
    const spanDateValidateCupon = fixture.nativeElement.querySelector('.span-date-validate-cupon');
    expect(spanDateValidateCupon.textContent).toBe("05/10/1999 15:00");
  });

  it('should render button see details', () => {
    const button = fixture.nativeElement.querySelector('.container-button-detail button');
    expect(button.textContent).toBe("Ver Detalhes");
  });
});
