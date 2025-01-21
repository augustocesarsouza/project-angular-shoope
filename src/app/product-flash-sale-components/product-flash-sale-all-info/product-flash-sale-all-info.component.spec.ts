import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleAllInfoComponent } from './product-flash-sale-all-info.component';

describe('ProductFlashSaleAllInfoComponent', () => {
  let component: ProductFlashSaleAllInfoComponent;
  let fixture: ComponentFixture<ProductFlashSaleAllInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleAllInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashSaleAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
