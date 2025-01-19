import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshOfferEveryDayAndHoursComponent } from './flesh-offer-every-day-and-hours.component';

describe('FleshOfferEveryDayAndHoursComponent', () => {
  let component: FleshOfferEveryDayAndHoursComponent;
  let fixture: ComponentFixture<FleshOfferEveryDayAndHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleshOfferEveryDayAndHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FleshOfferEveryDayAndHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
