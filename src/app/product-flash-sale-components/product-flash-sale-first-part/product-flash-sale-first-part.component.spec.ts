import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashSaleFirstPartComponent } from './product-flash-sale-first-part.component';

describe('ProductFlashSaleFirstPartComponent', () => {
  let component: ProductFlashSaleFirstPartComponent;
  let fixture: ComponentFixture<ProductFlashSaleFirstPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashSaleFirstPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashSaleFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
