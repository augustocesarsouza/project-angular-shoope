import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsShopeeComponent } from './rights-shopee.component';

describe('RightsShopeeComponent', () => {
  let component: RightsShopeeComponent;
  let fixture: ComponentFixture<RightsShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightsShopeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightsShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
