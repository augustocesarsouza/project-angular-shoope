import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChangeComponent } from './phone-change.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PhoneChangeComponent', () => {
  let component: PhoneChangeComponent;
  let fixture: ComponentFixture<PhoneChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PhoneChangeComponent],
    imports: [AllSvgModule],
    providers: [UserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PhoneChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
