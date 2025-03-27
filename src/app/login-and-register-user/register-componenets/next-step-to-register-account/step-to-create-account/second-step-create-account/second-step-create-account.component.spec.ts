import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepCreateAccountComponent } from './second-step-create-account.component';
import { AllSvgModule } from '../../../../../all-svg/all-svg.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from '../../../../service/user.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SecondStepCreateAccountComponent', () => {
  let component: SecondStepCreateAccountComponent;
  let fixture: ComponentFixture<SecondStepCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SecondStepCreateAccountComponent],
    imports: [AllSvgModule],
    providers: [UserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(SecondStepCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
