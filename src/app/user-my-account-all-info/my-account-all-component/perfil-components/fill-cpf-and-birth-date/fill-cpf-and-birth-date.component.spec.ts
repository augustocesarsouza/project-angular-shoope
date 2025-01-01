import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCpfAndBirthDateComponent } from './fill-cpf-and-birth-date.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FillCpfAndBirthDateComponent', () => {
  let component: FillCpfAndBirthDateComponent;
  let fixture: ComponentFixture<FillCpfAndBirthDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillCpfAndBirthDateComponent],
      imports: [AllSvgModule, RouterTestingModule, HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillCpfAndBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
