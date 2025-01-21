import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleSecondPartComponent } from './product-flash-sale-second-part.component';

describe('ProductFlashSaleSecondPartComponent', () => {
  let component: ProductFlashSaleSecondPartComponent;
  let fixture: ComponentFixture<ProductFlashSaleSecondPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleSecondPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashSaleSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
