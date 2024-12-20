import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepToCreateAccountComponent } from './step-to-create-account.component';

describe('StepToCreateAccountComponent', () => {
  let component: StepToCreateAccountComponent;
  let fixture: ComponentFixture<StepToCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepToCreateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepToCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
