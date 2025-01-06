import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLockComponent } from './svg-lock.component';

describe('SvgLockComponent', () => {
  let component: SvgLockComponent;
  let fixture: ComponentFixture<SvgLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
