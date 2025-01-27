import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachReviewsInnerComponent } from './each-reviews-inner.component';

describe('EachReviewsInnerComponent', () => {
  let component: EachReviewsInnerComponent;
  let fixture: ComponentFixture<EachReviewsInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachReviewsInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachReviewsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
