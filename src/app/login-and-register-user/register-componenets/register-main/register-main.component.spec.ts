import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMainComponent } from './register-main.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { HeaderToLoginAndRegisterComponent } from '../../header-to-login-and-register/header-to-login-and-register.component';
import { BodyRegisterUserMainComponent } from '../body-register-user-main/body-register-user-main.component';
import { FooterLoginAndRegisterComponent } from '../../login-components/footer-login-and-register/footer-login-and-register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegisterMainComponent', () => {
  let component: RegisterMainComponent;
  let fixture: ComponentFixture<RegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMainComponent, HeaderToLoginAndRegisterComponent,
        BodyRegisterUserMainComponent, FooterLoginAndRegisterComponent
      ],
      imports: [AllSvgModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
