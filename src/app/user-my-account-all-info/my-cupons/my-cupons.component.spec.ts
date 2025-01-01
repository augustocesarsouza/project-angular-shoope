import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCuponsComponent } from './my-cupons.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('MyCuponsComponent', () => {
  let component: MyCuponsComponent;
  let fixture: ComponentFixture<MyCuponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCuponsComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
