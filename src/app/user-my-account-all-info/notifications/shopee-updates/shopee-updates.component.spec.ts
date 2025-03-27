import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeeUpdatesComponent } from './shopee-updates.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShopeeUpdateUser } from '../../../login-and-register-user/interface/shopee-update-user';
import { shopeeUpdate } from '../../../login-and-register-user/interface/shopee-update';

describe('ShopeeUpdatesComponent', () => {
  let component: ShopeeUpdatesComponent;
  let fixture: ComponentFixture<ShopeeUpdatesComponent>;

  const shopeeUpdateObj: shopeeUpdate = {
    id: "2323223",
    date: "2024-12-27T06:31:00",
    description: "Seu email foi adicionado em Campo Grande, BR, pelo dispositivo desktop as 27-12-2024 07:31. Se essa alteração não foi feita por você, entre em contato com o Atendimento ao Cliente imediatamente.",
    img: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736339116/img-shopee/ltzchkehrw5dk8vulds4.jpg",
    title: "Alerta de Cadastro de Email",
  }

  const obj = {
    id: "",
    shopeeUpdateId: "",
    shopeeUpdateDTO: shopeeUpdateObj,
    userId: "",
    userDTO: null,
  }

  const shopeeUpdateUser: ShopeeUpdateUser[] = [];
  shopeeUpdateUser.push(obj);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ShopeeUpdatesComponent],
    imports: [RouterTestingModule, AllSvgModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(ShopeeUpdatesComponent);
    component = fixture.componentInstance;

    component.shopeeUpdateUser = shopeeUpdateUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-inner img');
    expect(img).not.toBeNull();

    expect(img.src).toContain(shopeeUpdateObj.img);
  });

  it('should render img alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-inner img');
    expect(img).not.toBeNull();

    expect(img.alt).toBe(shopeeUpdateObj.title);
  });

  it('should render header title', () => {
    const h1 = fixture.nativeElement.querySelector('.header-title');
    expect(h1.textContent).toBe(shopeeUpdateObj.title);
  });

  it('should render all span', () => {
    const SpanS = fixture.nativeElement.querySelectorAll('.container-description-imgs-date span');
    expect(SpanS.length).toEqual(2);
  });

  it('should render span description', () => {
    const SpanS = fixture.nativeElement.querySelectorAll('.container-description-imgs-date span');
    expect(SpanS[0].textContent).toBe(shopeeUpdateObj.description);
  });

  it('should render span date validate', () => {
    const SpanS = fixture.nativeElement.querySelectorAll('.container-description-imgs-date span');
    expect(SpanS[1].textContent).toBe("27/12/2024 06:31");
  });

  it('should render button see details', () => {
    const button = fixture.nativeElement.querySelector('.container-button-detail button');
    expect(button.textContent).toBe("Ver Detalhes");
  });
});
