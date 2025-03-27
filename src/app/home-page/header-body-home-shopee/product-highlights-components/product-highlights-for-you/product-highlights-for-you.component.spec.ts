import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightsForYouComponent } from './product-highlights-for-you.component';
import { ProductHighlightsInfoComponent } from '../product-highlights-info/product-highlights-info.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductHighlightService } from '../../../service/product-highlight.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductHighlightsForYouComponent', () => {
  let component: ProductHighlightsForYouComponent;
  let fixture: ComponentFixture<ProductHighlightsForYouComponent>;

  const mockProductHighlightService = {
      GetAllProductHighlights: jasmine.createSpy('GetAllProductHighlights').and.returnValue(of({ data:
        [{
        id: 'f0581207-7fbb-4db8-b127-3b8ba2fac5e6',
        title: "title1",
        imgProduct: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg',
        imgTop: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png",
        quantitySold: 50.0
      }, {
        id: 'f9281207-7fbb-4db8-b127-3b8ba2fac5e6',
        title: "title2",
        imgProduct: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-flash-deals/ewbstgil2p3bbpai92rk.jpg',
        imgTop: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png",
        quantitySold: 10.0
      }] }))
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProductHighlightsForYouComponent, ProductHighlightsInfoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterTestingModule, AllSvgModule],
    providers: [{
            provide: ProductHighlightService, useValue: mockProductHighlightService
        }, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductHighlightsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header highlight for you', () => {
    const header = fixture.nativeElement.querySelector(".container-highlights-for-you > h1");
    expect(header).not.toBeNull();

    expect(header.textContent).toBe("Destaques para você");
  });

  it('should render svg left', () => {
    const svgLeft = fixture.nativeElement.querySelector(".container-arrow-left > div > svg");
    expect(svgLeft).not.toBeNull();
  });

  it('should render svg right', () => {
    const svgRight = fixture.nativeElement.querySelector(".container-arrow-right > div > svg");
    expect(svgRight).not.toBeNull();
  });
});
