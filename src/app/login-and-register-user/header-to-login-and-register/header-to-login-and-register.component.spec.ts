import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToLoginAndRegisterComponent } from './header-to-login-and-register.component';

describe('HeaderToLoginAndRegisterComponent', () => {
  let component: HeaderToLoginAndRegisterComponent;
  let fixture: ComponentFixture<HeaderToLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderToLoginAndRegisterComponent]
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
