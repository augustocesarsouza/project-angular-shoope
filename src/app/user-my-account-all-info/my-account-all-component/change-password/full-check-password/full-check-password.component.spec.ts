import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCheckPasswordComponent } from './full-check-password.component';

describe('FullCheckPasswordComponent', () => {
  let component: FullCheckPasswordComponent;
  let fixture: ComponentFixture<FullCheckPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullCheckPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullCheckPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
