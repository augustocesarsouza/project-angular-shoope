import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleMainComponent } from './product-flash-sale-main.component';

describe('ProductFlashSaleMainComponent', () => {
  let component: ProductFlashSaleMainComponent;
  let fixture: ComponentFixture<ProductFlashSaleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashSaleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
