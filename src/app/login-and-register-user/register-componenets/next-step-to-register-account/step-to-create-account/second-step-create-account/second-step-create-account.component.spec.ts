import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepCreateAccountComponent } from './second-step-create-account.component';

describe('SecondStepCreateAccountComponent', () => {
  let component: SecondStepCreateAccountComponent;
  let fixture: ComponentFixture<SecondStepCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStepCreateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondStepCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
