import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponEachComponent } from './cupon-each.component';

describe('CuponEachComponent', () => {
  let component: CuponEachComponent;
  let fixture: ComponentFixture<CuponEachComponent>;

  const objCupons = {
    id: "914ded26-9702-4aa2-8a00-87d1e58f22dd",
    firstText: "Para você",
    secondText: "secondText1",
    thirdText: "thirdText1",
    dateValidateCupon: "2025-01-25T00:00:00",
    quantityCupons: 5,
    whatCuponNumber: 2,
    secondImg: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736443196/img-cupons/sg-11134004-23010-lk448laa7gmv1e_v0xopm.png"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuponEachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuponEachComponent);
    component = fixture.componentInstance;

    component.objCupons = objCupons;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg x', () => {
    const svg = fixture.nativeElement.querySelector('.container-svg-quantity-x svg');
    expect(svg).not.toBeNull();
  });

  it('should render span', () => {
    const span = fixture.nativeElement.querySelector('.container-svg-quantity-x span');
    expect(span.textContent).toBe(objCupons.quantityCupons.toString());
  });

  it('should render img cupon send src', () => {
    const img = fixture.nativeElement.querySelector('.img-cupon-send');
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728988707/img-shopee/br-11134004-7r98o-lsikizwd3q4ta6_phkhk8.png");
  });

  it('should render img cupon send alt', () => {
    const img = fixture.nativeElement.querySelector('.img-cupon-send');
    expect(img.alt).toBe("img-cupon");
  });

  it('should render secondImg src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-exclusive img');
    expect(img.src).toContain(objCupons.secondImg);
  });

  it('should render secondImg alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-exclusive img');
    expect(img.alt).toBe("Logo");
  });

  it('should render span-first-text', () => {
    const span = fixture.nativeElement.querySelector('.span-first-text');
    expect(span.textContent).toBe(objCupons.firstText);
  });

  it('should render h1-second-text', () => {
    const header = fixture.nativeElement.querySelector('.h1-second-text');
    expect(header.textContent).toBe(objCupons.secondText);
  });

  it('should render span-third-text', () => {
    const span = fixture.nativeElement.querySelector('.span-third-text');
    expect(span.textContent).toBe(objCupons.thirdText);
  });

  it('should render span first cupon', () => {
    const spanS = fixture.nativeElement.querySelectorAll('.container-cupon-bottom-first span');
    expect(spanS[0].textContent).toBe("Válido até: 25/01/2025");
  });

  it('should render span second cupon', () => {
    const spanS = fixture.nativeElement.querySelectorAll('.container-cupon-bottom-first span');
    expect(spanS[1].textContent).toBe("Condições");
  });

  it('should render button use', () => {
    const button = fixture.nativeElement.querySelector('.container-cupon-bottom-second button');
    expect(button.textContent).toBe("Usar");
  });
});

