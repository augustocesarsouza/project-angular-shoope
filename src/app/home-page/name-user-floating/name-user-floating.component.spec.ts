import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserFloatingComponent } from './name-user-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NameUserFloatingComponent', () => {
  let component: NameUserFloatingComponent;
  let fixture: ComponentFixture<NameUserFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameUserFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameUserFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
