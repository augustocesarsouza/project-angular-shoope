import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryToProductComponent } from './category-to-product.component';

describe('CategoryToProductComponent', () => {
  let component: CategoryToProductComponent;
  let fixture: ComponentFixture<CategoryToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryToProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
