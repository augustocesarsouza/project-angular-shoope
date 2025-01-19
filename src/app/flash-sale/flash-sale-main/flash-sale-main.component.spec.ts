import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleMainComponent } from './flash-sale-main.component';

describe('FlashSaleMainComponent', () => {
  let component: FlashSaleMainComponent;
  let fixture: ComponentFixture<FlashSaleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashSaleMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashSaleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
