import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCpfAndBirthDateComponent } from './fill-cpf-and-birth-date.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('FillCpfAndBirthDateComponent', () => {
  let component: FillCpfAndBirthDateComponent;
  let fixture: ComponentFixture<FillCpfAndBirthDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [FillCpfAndBirthDateComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [UserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
