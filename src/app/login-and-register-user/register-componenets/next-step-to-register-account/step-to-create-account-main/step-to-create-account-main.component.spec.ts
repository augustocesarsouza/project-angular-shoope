import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepToCreateAccountMainComponent } from './step-to-create-account-main.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { FirstStepCreateAccountComponent } from '../step-to-create-account/first-step-create-account/first-step-create-account.component';
import { SecondStepCreateAccountComponent } from '../step-to-create-account/second-step-create-account/second-step-create-account.component';
import { ThirdStepCreateAccountComponent } from '../step-to-create-account/third-step-create-account/third-step-create-account.component';

describe('StepToCreateAccountMainComponent', () => {
  let component: StepToCreateAccountMainComponent;
  let fixture: ComponentFixture<StepToCreateAccountMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepToCreateAccountMainComponent, FirstStepCreateAccountComponent,
        SecondStepCreateAccountComponent, ThirdStepCreateAccountComponent
      ],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepToCreateAccountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
