import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashDealsComponent } from './product-flash-deals.component';

describe('ProductFlashDealsComponent', () => {
  let component: ProductFlashDealsComponent;
  let fixture: ComponentFixture<ProductFlashDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashDealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
