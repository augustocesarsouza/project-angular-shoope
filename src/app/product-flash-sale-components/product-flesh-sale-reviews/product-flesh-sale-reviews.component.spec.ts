import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFleshSaleReviewsComponent } from './product-flesh-sale-reviews.component';

describe('ProductFleshSaleReviewsComponent', () => {
  let component: ProductFleshSaleReviewsComponent;
  let fixture: ComponentFixture<ProductFleshSaleReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFleshSaleReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFleshSaleReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
