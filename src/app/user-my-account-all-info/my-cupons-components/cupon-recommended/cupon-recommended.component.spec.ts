import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponRecommendedComponent } from './cupon-recommended.component';

describe('CuponRecommendedComponent', () => {
  let component: CuponRecommendedComponent;
  let fixture: ComponentFixture<CuponRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuponRecommendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuponRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
