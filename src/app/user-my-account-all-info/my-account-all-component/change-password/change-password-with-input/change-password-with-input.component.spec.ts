import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordWithInputComponent } from './change-password-with-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('ChangePasswordWithInputComponent', () => {
  let component: ChangePasswordWithInputComponent;
  let fixture: ComponentFixture<ChangePasswordWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordWithInputComponent],
      imports: [HttpClientModule, RouterTestingModule, AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
