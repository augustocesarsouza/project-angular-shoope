import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShopeeComponent } from './about-shopee.component';

describe('AboutShopeeComponent', () => {
  let component: AboutShopeeComponent;
  let fixture: ComponentFixture<AboutShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutShopeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
