import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFloatingComponent } from './language-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LanguageFloatingComponent', () => {
  let component: LanguageFloatingComponent;
  let fixture: ComponentFixture<LanguageFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
