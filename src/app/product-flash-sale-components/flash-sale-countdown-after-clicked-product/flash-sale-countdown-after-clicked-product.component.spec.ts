import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleCountdownAfterClickedProductComponent } from './flash-sale-countdown-after-clicked-product.component';

describe('FlashSaleCountdownAfterClickedProductComponent', () => {
  let component: FlashSaleCountdownAfterClickedProductComponent;
  let fixture: ComponentFixture<FlashSaleCountdownAfterClickedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashSaleCountdownAfterClickedProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashSaleCountdownAfterClickedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
