import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsComponent } from './follow-us.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';

describe('FollowUsComponent', () => {
  let component: FollowUsComponent;
  let fixture: ComponentFixture<FollowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowUsComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
