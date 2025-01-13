import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponRecommendedComponent } from './cupon-recommended.component';

describe('CuponRecommendedComponent', () => {
  let component: CuponRecommendedComponent;
  let fixture: ComponentFixture<CuponRecommendedComponent>;

  const obj = {
    id: '1',
    titleCupon: 'Mock Title',
    valueCupon: 100,
    offPrice: '20%',
    showImgHeighlight: true,
    offDescription: 'Special discount',
    imgCupon: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-loiy1pd722mk3c',
    imgAltCupon: 'Mock Alt Text',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuponRecommendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuponRecommendedComponent);
    component = fixture.componentInstance;

    component.obj = obj;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img cupon src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-cupon img');
    expect(img.src).toContain(obj.imgCupon);
  });

  it('should render img cupon alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-cupon img');
    expect(img.alt).toBe(obj.imgAltCupon);
  });

  it('should render all spans', () => {
    const spanS = fixture.nativeElement.querySelectorAll('.container-info-cupon span');
    expect(spanS.length).toEqual(2);
  });

  it('should render first span info cupon', () => {
    const spanS = fixture.nativeElement.querySelectorAll('.container-info-cupon span');
    expect(spanS[0].textContent).toBe(obj.titleCupon);
  });

  it('should render second span info cupon', () => {
    const spanS = fixture.nativeElement.querySelectorAll('.container-info-cupon span');
    expect(spanS[1].textContent.trim()).toBe('R$100.00');
  });

  it('should render header price', () => {
    const header = fixture.nativeElement.querySelector('.container-off-and-button h1');
    expect(header.textContent).toBe(obj.offPrice);
  });

  it('should render span description', () => {
    const offDescription = obj.offDescription.slice(0, 11) + '...';
    component.offDescription = offDescription;

    fixture.detectChanges();

    const spanDescription = fixture.nativeElement.querySelector('.container-off-and-button span');
    expect(spanDescription.textContent).toBe(offDescription);
  });

  it('should render button active', () => {
    const button = fixture.nativeElement.querySelector('.container-off-and-button button');
    expect(button.textContent).toBe("Ativar");
  });
});
