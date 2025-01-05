import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgShieldShopeeComponent } from './svg-shield-shopee.component';

describe('SvgShieldShopeeComponent', () => {
  let component: SvgShieldShopeeComponent;
  let fixture: ComponentFixture<SvgShieldShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgShieldShopeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgShieldShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
