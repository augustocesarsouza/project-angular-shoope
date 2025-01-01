import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoginAndRegisterComponent } from './footer-login-and-register.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { MyAccountAllComponentModule } from '../my-account-all-component/my-account-all-component.module';
import { UserMyAccountAllInfoModule } from '../user-my-account-all-info.module';

describe('FooterLoginAndRegisterComponent', () => {
  let component: FooterLoginAndRegisterComponent;
  let fixture: ComponentFixture<FooterLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLoginAndRegisterComponent],
      imports: [AllSvgModule, MyAccountAllComponentModule, UserMyAccountAllInfoModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLoginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
