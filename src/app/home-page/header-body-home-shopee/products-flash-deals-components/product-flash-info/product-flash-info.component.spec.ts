import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlashInfoComponent } from './product-flash-info.component';

describe('ProductFlashInfoComponent', () => {
  let component: ProductFlashInfoComponent;
  let fixture: ComponentFixture<ProductFlashInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFlashInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFlashInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
