import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferFlashDetailsComponent } from './product-offer-flash-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('ProductOfferFlashDetailsComponent', () => {
  let component: ProductOfferFlashDetailsComponent;
  let fixture: ComponentFixture<ProductOfferFlashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOfferFlashDetailsComponent],
       imports: [AllSvgModule, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOfferFlashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
