import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondComponent } from './header-second.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderSecondComponent', () => {
  let component: HeaderSecondComponent;
  let fixture: ComponentFixture<HeaderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSecondComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg shopee', () => {
    const svgShopee = fixture.nativeElement.querySelector(".container-svg-shopee app-svg-shoope");
    expect(svgShopee).not.toBeNull();
  });

  it('should render input search shopee', () => {
    const inputSearch = fixture.nativeElement.querySelector(".container-input-search-shopee input");
    expect(inputSearch).not.toBeNull();
  });

  it('should render svg loupe', () => {
    const svgLoupe = fixture.nativeElement.querySelector(".container-input-search-shopee app-svg-loupe");
    expect(svgLoupe).not.toBeNull();
  });

  it('should render svg cart', () => {
    const svgCart = fixture.nativeElement.querySelector(".container-cart app-svg-cart");
    expect(svgCart).not.toBeNull();
  });

  it('should render span number cart', () => {
    const spanCart = fixture.nativeElement.querySelector(".container-cart span");
    expect(spanCart.textContent).toBe("1");
  });
});
