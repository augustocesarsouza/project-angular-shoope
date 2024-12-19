import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegisterUserMainComponent } from './body-register-user-main.component';

describe('BodyRegisterUserMainComponent', () => {
  let component: BodyRegisterUserMainComponent;
  let fixture: ComponentFixture<BodyRegisterUserMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyRegisterUserMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyRegisterUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
