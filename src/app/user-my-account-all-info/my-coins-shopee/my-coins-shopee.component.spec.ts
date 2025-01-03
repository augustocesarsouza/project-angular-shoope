import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoinsShopeeComponent } from './my-coins-shopee.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('MyCoinsShopeeComponent', () => {
  let component: MyCoinsShopeeComponent;
  let fixture: ComponentFixture<MyCoinsShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCoinsShopeeComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoinsShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
