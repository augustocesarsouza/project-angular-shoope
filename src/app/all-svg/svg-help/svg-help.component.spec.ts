import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHelpComponent } from './svg-help.component';

describe('SvgHelpComponent', () => {
  let component: SvgHelpComponent;
  let fixture: ComponentFixture<SvgHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
