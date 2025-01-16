import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightsForYouComponent } from './product-highlights-for-you.component';

describe('ProductHighlightsForYouComponent', () => {
  let component: ProductHighlightsForYouComponent;
  let fixture: ComponentFixture<ProductHighlightsForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductHighlightsForYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductHighlightsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
