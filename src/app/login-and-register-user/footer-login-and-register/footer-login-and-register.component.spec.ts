import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoginAndRegisterComponent } from './footer-login-and-register.component';

describe('FooterLoginAndRegisterComponent', () => {
  let component: FooterLoginAndRegisterComponent;
  let fixture: ComponentFixture<FooterLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLoginAndRegisterComponent]
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
