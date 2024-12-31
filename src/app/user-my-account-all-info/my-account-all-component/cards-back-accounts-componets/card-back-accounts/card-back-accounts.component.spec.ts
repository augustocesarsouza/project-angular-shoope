import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackAccountsComponent } from './card-back-accounts.component';

describe('CardBackAccountsComponent', () => {
  let component: CardBackAccountsComponent;
  let fixture: ComponentFixture<CardBackAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBackAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBackAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
