import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondComponent } from './header-second.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderSecondComponent', () => {
  let component: HeaderSecondComponent;
  let fixture: ComponentFixture<HeaderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSecondComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
