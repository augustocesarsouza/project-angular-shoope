import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HeaderToLoginAndRegisterComponent } from '../login-and-register-user/header-to-login-and-register/header-to-login-and-register.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('headerToAllComponentsComponent', () => {
  let component: HeaderToLoginAndRegisterComponent;
  let fixture: ComponentFixture<HeaderToLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderToLoginAndRegisterComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderToLoginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});