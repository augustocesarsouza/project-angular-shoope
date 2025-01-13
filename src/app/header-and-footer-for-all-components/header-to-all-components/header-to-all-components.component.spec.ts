import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { headerToAllComponentsComponent } from './header-to-login-and-register.component';

describe('headerToAllComponentsComponent', () => {
  let component: headerToAllComponentsComponent;
  let fixture: ComponentFixture<headerToAllComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [headerToAllComponentsComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(headerToAllComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
