import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepCreateAccountComponent } from './first-step-create-account.component';
import { AllSvgModule } from '../../../../../all-svg/all-svg.module';

describe('FirstStepCreateAccountComponent', () => {
  let component: FirstStepCreateAccountComponent;
  let fixture: ComponentFixture<FirstStepCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstStepCreateAccountComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
