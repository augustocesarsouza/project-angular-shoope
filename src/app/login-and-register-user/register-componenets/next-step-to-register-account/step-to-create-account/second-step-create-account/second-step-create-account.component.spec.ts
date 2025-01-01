import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepCreateAccountComponent } from './second-step-create-account.component';
import { AllSvgModule } from '../../../../../all-svg/all-svg.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../../service/user.service';

describe('SecondStepCreateAccountComponent', () => {
  let component: SecondStepCreateAccountComponent;
  let fixture: ComponentFixture<SecondStepCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStepCreateAccountComponent],
      imports: [AllSvgModule, HttpClientTestingModule],
      providers: [UserService],
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
