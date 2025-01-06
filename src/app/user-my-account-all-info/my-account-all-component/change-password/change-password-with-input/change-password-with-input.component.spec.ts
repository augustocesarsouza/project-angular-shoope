import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordWithInputComponent } from './change-password-with-input.component';

describe('ChangePasswordWithInputComponent', () => {
  let component: ChangePasswordWithInputComponent;
  let fixture: ComponentFixture<ChangePasswordWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePasswordWithInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangePasswordWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
