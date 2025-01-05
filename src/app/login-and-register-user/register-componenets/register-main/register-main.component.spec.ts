import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMainComponent } from './register-main.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { BodyRegisterUserMainComponent } from '../body-register-user-main/body-register-user-main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterLoginAndRegisterComponent } from '../../../header-and-footer-for-all-components/footer-login-and-register/footer-login-and-register.component';
import { headerToAllComponentsComponent } from '../../../header-and-footer-for-all-components/header-to-all-components/header-to-login-and-register.component';

describe('RegisterMainComponent', () => {
  let component: RegisterMainComponent;
  let fixture: ComponentFixture<RegisterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMainComponent, headerToAllComponentsComponent,
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
