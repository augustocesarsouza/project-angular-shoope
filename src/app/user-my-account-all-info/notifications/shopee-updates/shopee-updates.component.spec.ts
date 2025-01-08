import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeeUpdatesComponent } from './shopee-updates.component';

describe('ShopeeUpdatesComponent', () => {
  let component: ShopeeUpdatesComponent;
  let fixture: ComponentFixture<ShopeeUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopeeUpdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopeeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
