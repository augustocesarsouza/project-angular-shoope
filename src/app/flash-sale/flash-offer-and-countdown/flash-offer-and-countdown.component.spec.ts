import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashOfferAndCountdownComponent } from './flash-offer-and-countdown.component';

describe('FlashOfferAndCountdownComponent', () => {
  let component: FlashOfferAndCountdownComponent;
  let fixture: ComponentFixture<FlashOfferAndCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashOfferAndCountdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashOfferAndCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
