import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCheckPasswordComponent } from './full-check-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAndFooterForAllComponentsModule } from '../../../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('FullCheckPasswordComponent', () => {
  let component: FullCheckPasswordComponent;
  let fixture: ComponentFixture<FullCheckPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullCheckPasswordComponent],
      imports: [HttpClientModule, RouterTestingModule, HeaderAndFooterForAllComponentsModule, AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCheckPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
