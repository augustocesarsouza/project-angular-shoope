import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBodyHomeShopeeComponent } from './header-body-home-shopee.component';

describe('HeaderBodyHomeShopeeComponent', () => {
  let component: HeaderBodyHomeShopeeComponent;
  let fixture: ComponentFixture<HeaderBodyHomeShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBodyHomeShopeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBodyHomeShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
