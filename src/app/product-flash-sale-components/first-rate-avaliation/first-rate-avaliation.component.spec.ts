import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRateAvaliationComponent } from './first-rate-avaliation.component';

describe('FirstRateAvaliationComponent', () => {
  let component: FirstRateAvaliationComponent;
  let fixture: ComponentFixture<FirstRateAvaliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstRateAvaliationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstRateAvaliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
