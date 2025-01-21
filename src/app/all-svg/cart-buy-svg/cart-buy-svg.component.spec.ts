import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBuySvgComponent } from './cart-buy-svg.component';

describe('CartBuySvgComponent', () => {
  let component: CartBuySvgComponent;
  let fixture: ComponentFixture<CartBuySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartBuySvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartBuySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
