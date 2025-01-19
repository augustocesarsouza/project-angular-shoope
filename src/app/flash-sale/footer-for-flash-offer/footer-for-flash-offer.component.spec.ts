import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForFlashOfferComponent } from './footer-for-flash-offer.component';

describe('FooterForFlashOfferComponent', () => {
  let component: FooterForFlashOfferComponent;
  let fixture: ComponentFixture<FooterForFlashOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterForFlashOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterForFlashOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
