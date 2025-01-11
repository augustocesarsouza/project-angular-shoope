import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDealsAndCountdownComponent } from './flash-deals-and-countdown.component';

describe('FlashDealsAndCountdownComponent', () => {
  let component: FlashDealsAndCountdownComponent;
  let fixture: ComponentFixture<FlashDealsAndCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashDealsAndCountdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashDealsAndCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
