import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSellerProductOfferFlashComponent } from './user-seller-product-offer-flash.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ProductOfferFlashSellerService } from '../service/product-offer-flash-seller.service';
import { of } from 'rxjs';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

describe('UserSellerProductOfferFlashComponent', () => {
  let component: UserSellerProductOfferFlashComponent;
  let fixture: ComponentFixture<UserSellerProductOfferFlashComponent>;

  const user = {
    id: '123',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    birthDate: '1990-01-01',
    gender: 'M',
    token: 'tokenabc123',
    confirmEmail: 1,
    userImage: 'image.jpg'
  }

  const data = {
    id: "44a969bf-d6b5-4f78-9f93-05a712ca55f6",
    productsOfferFlashId: "8bef0a5c-fd6e-4f8b-a698-23216155b482",
    userSellerProductDTO: {
      accountCreationDate: "2025-01-23T12:20:00.901784Z",
      chatResponseRate: 100,
      followers: 92300,
      id: "2f5aa306-82a8-4550-9fbe-69683d1e7178",
      imgFloating:
        "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1737626566/img-user-sold-product/eafc82fc786e2cf9ba66_l4ykb8.png",
      imgProfile:
        "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1737634821/img-user-sold-product-only-img-java/emhtl8vqdjyfr4jvbtdy.jpg",
      lastLogin: "2025-01-23T12:20:00.901784Z",
      name: "Yihan.store",
      quantityOfProductSold: 1500,
      reviews: 359100,
      usuallyRespondsToChatIn: "dentro de minutos",
    },
    userSellerProductId: "2f5aa306-82a8-4550-9fbe-69683d1e7178",
  };

  const mockProductOfferFlashSellerService = {
    GetByProductsOfferFlashId: jasmine.createSpy('GetByProductsOfferFlashId')
              .and.returnValue(of({ data: data}))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSellerProductOfferFlashComponent],
      imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{
          provide: ProductOfferFlashSellerService, useValue: mockProductOfferFlashSellerService
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSellerProductOfferFlashComponent);
    component = fixture.componentInstance;

    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img user seller', () => {
    const img = fixture.nativeElement.querySelector('.img-profile-user-seller');
    expect(img.src.trim()).toContain(data.userSellerProductDTO.imgProfile);
  });

  it('should render img official floating', () => {
    const img = fixture.nativeElement.querySelector('.img-user-official-floating');
    expect(img.src.trim()).toContain(data.userSellerProductDTO.imgFloating);
  });

  it('should render header name user seller', () => {
    const h1 = fixture.nativeElement.querySelector('.header-name-user-and-last-login-user h1');
    expect(h1.textContent).toBe(data.userSellerProductDTO.name);
  });

  it('should render span last login user', () => {
    const span = fixture.nativeElement.querySelector('.header-name-user-and-last-login-user span');

    const lastLogin = data.userSellerProductDTO.lastLogin;
    const lastLoginDate = parseISO(lastLogin);

    let timeDifference = formatDistanceToNow(lastLoginDate, { addSuffix: true, locale: ptBR });
    timeDifference = timeDifference.replace('há cerca de', 'Há ').replace(/\s+/g, ' ').trim();

    const timeFull = `Último login ${timeDifference}`;

    expect(span.textContent.trim()).toBe(timeFull.trim());
  });

  it('should render svg message talk now', () => {
    const svg = fixture.nativeElement.querySelector('.container-svg-talk-now svg');
    expect(svg).not.toBeNull();
  });

  it('should render span talk now', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-talk-now span');
    expect(span.textContent).toBe("Conversar Ag...");
  });

  it('should render svg see page', () => {
    const svg = fixture.nativeElement.querySelector('.container-svg-see-page-of-the-store svg');
    expect(svg).not.toBeNull();
  });

  it('should render span see page', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-see-page-of-the-store span');
    expect(span.textContent).toBe("Ver Página Da...");
  });

  it('should render span reviews first', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-reviews span');
    expect(spans[0].textContent.trim()).toBe("Avaliações");
  });

  it('should render span reviews second', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-reviews span');
    expect(spans[1].textContent.trim()).toBe("359,1mil");
  });

  it('should render span first chat-response-rate', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-chat-response-rate span');
    expect(spans[0].textContent.trim()).toBe("Taxa de resposta do chat");
  });

  it('should render span second chat-response-rate', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-chat-response-rate span');
    expect(spans[1].textContent.trim()).toBe("100%");
  });

  it('should render span first store-shopee', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-store-shopee span');
    expect(spans[0].textContent.trim()).toBe("Loja Shopee desde");
  });

  it('should render span second store-shopee', () => {
    const span = fixture.nativeElement.querySelector('.span-account-creation-date');
    const accountCreationDate = data.userSellerProductDTO.accountCreationDate;

    const accountCreationDateDate = parseISO(accountCreationDate);

    let timeDifference = formatDistanceToNow(accountCreationDateDate, {
      addSuffix: true,
      locale: ptBR,
    });
    timeDifference = timeDifference.replace('há cerca de', '').replace(/\s+/g, ' ').trim();

    const timeAccountCreationDate = `${timeDifference} atrás`;

    expect(span.textContent.trim()).toBe(timeAccountCreationDate);
  });

  it('should render span first product', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-products-and-quantity span');
    expect(spans[0].textContent.trim()).toBe("Produtos");
  });

  it('should render span second quantity product sold', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-products-and-quantity span');
    expect(spans[1].textContent.trim()).toBe("1,5mil");
  });

  it('should render span first reponds-to-chat', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-reponds-to-chat span');
    expect(spans[0].textContent.trim()).toBe("Geralmente responde o chat em");
  });

  it('should render span second reponds-to-chat', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-reponds-to-chat span');
    expect(spans[1].textContent.trim()).toBe(data.userSellerProductDTO.usuallyRespondsToChatIn);
  });

  it('should render span first followers', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-followers span');
    expect(spans[0].textContent.trim()).toBe("Seguidores");
  });

  it('should render span second followers', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-followers span');
    expect(spans[1].textContent.trim()).toBe("92,3mil");
  });
});
