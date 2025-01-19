import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshOfferEveryDayComponent } from './flesh-offer-every-day.component';

describe('FleshOfferEveryDayComponent', () => {
  let component: FleshOfferEveryDayComponent;
  let fixture: ComponentFixture<FleshOfferEveryDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleshOfferEveryDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FleshOfferEveryDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
