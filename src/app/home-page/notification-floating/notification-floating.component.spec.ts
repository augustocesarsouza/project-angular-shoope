import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFloatingComponent } from './notification-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationFloatingComponent', () => {
  let component: NotificationFloatingComponent;
  let fixture: ComponentFixture<NotificationFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
