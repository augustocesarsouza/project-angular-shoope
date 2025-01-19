import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashOfferComponent } from './product-flash-offer.component';

describe('ProductFlashOfferComponent', () => {
  let component: ProductFlashOfferComponent;
  let fixture: ComponentFixture<ProductFlashOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
