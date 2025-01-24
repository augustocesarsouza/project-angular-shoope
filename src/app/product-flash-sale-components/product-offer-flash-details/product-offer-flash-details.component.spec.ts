import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferFlashDetailsComponent } from './product-offer-flash-details.component';

describe('ProductOfferFlashDetailsComponent', () => {
  let component: ProductOfferFlashDetailsComponent;
  let fixture: ComponentFixture<ProductOfferFlashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOfferFlashDetailsComponent]
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
