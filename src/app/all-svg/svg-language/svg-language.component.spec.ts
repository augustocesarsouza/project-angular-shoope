import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLanguageComponent } from './svg-language.component';

describe('SvgLanguageComponent', () => {
  let component: SvgLanguageComponent;
  let fixture: ComponentFixture<SvgLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLanguageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
