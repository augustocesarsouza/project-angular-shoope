import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepToCreateAccountMainComponent } from './step-to-create-account-main.component';

describe('StepToCreateAccountMainComponent', () => {
  let component: StepToCreateAccountMainComponent;
  let fixture: ComponentFixture<StepToCreateAccountMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepToCreateAccountMainComponent]
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
