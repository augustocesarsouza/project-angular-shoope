import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightsInfoComponent } from './product-highlights-info.component';

describe('ProductHighlightsInfoComponent', () => {
  let component: ProductHighlightsInfoComponent;
  let fixture: ComponentFixture<ProductHighlightsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductHighlightsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductHighlightsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
