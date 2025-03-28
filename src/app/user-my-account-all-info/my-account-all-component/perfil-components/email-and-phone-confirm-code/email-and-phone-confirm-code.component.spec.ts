import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailAndPhoneConfirmCodeComponent } from './email-and-phone-confirm-code.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { ObjCodeUserPhoneToRegisterAccountService } from '../../../../login-and-register-user/service/obj-code-user-phone-to-register-account.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterLoginAndRegisterComponent } from '../../../../header-and-footer-for-all-components/footer-login-and-register/footer-login-and-register.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('EmailConfirmCodeComponent', () => {
  let component: EmailAndPhoneConfirmCodeComponent;
  let fixture: ComponentFixture<EmailAndPhoneConfirmCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [EmailAndPhoneConfirmCodeComponent, FooterLoginAndRegisterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [UserService, ObjCodeUserPhoneToRegisterAccountService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(EmailAndPhoneConfirmCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
