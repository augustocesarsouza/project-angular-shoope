import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChangeComponent } from './phone-change.component';

describe('PhoneChangeComponent', () => {
  let component: PhoneChangeComponent;
  let fixture: ComponentFixture<PhoneChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
