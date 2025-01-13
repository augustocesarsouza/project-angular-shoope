import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordStepTwoComponent } from './verify-password-step-two.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAndFooterForAllComponentsModule } from '../../../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('VerifyPasswordStepTwoComponent', () => {
  let component: VerifyPasswordStepTwoComponent;
  let fixture: ComponentFixture<VerifyPasswordStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyPasswordStepTwoComponent],
      imports: [HttpClientModule, RouterTestingModule, HeaderAndFooterForAllComponentsModule, AllSvgModule]
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
