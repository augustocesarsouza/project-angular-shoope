import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStepCreateAccountComponent } from './third-step-create-account.component';

describe('ThirdStepCreateAccountComponent', () => {
  let component: ThirdStepCreateAccountComponent;
  let fixture: ComponentFixture<ThirdStepCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdStepCreateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdStepCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
