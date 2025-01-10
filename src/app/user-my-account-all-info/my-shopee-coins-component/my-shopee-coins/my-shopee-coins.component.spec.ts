import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopeeCoinsComponent } from './my-shopee-coins.component';

describe('MyShopeeCoinsComponent', () => {
  let component: MyShopeeCoinsComponent;
  let fixture: ComponentFixture<MyShopeeCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyShopeeCoinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyShopeeCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
