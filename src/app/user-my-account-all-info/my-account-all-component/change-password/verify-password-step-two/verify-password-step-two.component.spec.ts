import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordStepTwoComponent } from './verify-password-step-two.component';

describe('VerifyPasswordStepTwoComponent', () => {
  let component: VerifyPasswordStepTwoComponent;
  let fixture: ComponentFixture<VerifyPasswordStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyPasswordStepTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyPasswordStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
