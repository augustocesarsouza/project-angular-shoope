import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgShoopeComponent } from './svg-shoope.component';

describe('SvgShoopeComponent', () => {
  let component: SvgShoopeComponent;
  let fixture: ComponentFixture<SvgShoopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgShoopeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgShoopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
