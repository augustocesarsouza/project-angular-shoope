import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordComponent } from './verify-password.component';
import { HeaderAndFooterForAllComponentsModule } from '../../../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('VerifyPasswordComponent', () => {
  let component: VerifyPasswordComponent;
  let fixture: ComponentFixture<VerifyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyPasswordComponent],
      imports: [HeaderAndFooterForAllComponentsModule, AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
