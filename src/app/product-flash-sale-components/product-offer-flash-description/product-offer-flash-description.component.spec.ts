import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferFlashDescriptionComponent } from './product-offer-flash-description.component';

describe('ProductOfferFlashDescriptionComponent', () => {
  let component: ProductOfferFlashDescriptionComponent;
  let fixture: ComponentFixture<ProductOfferFlashDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOfferFlashDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOfferFlashDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
