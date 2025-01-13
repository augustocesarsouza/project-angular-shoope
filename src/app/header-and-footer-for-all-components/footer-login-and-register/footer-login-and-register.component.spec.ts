import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoginAndRegisterComponent } from './footer-login-and-register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('FooterLoginAndRegisterComponent', () => {
  let component: FooterLoginAndRegisterComponent;
  let fixture: ComponentFixture<FooterLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLoginAndRegisterComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [AllSvgModule]
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
