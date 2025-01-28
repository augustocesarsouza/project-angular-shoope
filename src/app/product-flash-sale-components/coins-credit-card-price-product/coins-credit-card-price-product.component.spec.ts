import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsCreditCardPriceProductComponent } from './coins-credit-card-price-product.component';

describe('CoinsCreditCardPriceProductComponent', () => {
  let component: CoinsCreditCardPriceProductComponent;
  let fixture: ComponentFixture<CoinsCreditCardPriceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsCreditCardPriceProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinsCreditCardPriceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
