import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdatesComponent } from './order-updates.component';

describe('OrderUpdatesComponent', () => {
  let component: OrderUpdatesComponent;
  let fixture: ComponentFixture<OrderUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderUpdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
