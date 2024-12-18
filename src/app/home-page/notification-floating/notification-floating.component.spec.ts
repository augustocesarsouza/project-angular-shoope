import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFloatingComponent } from './notification-floating.component';

describe('NotificationFloatingComponent', () => {
  let component: NotificationFloatingComponent;
  let fixture: ComponentFixture<NotificationFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationFloatingComponent]
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
