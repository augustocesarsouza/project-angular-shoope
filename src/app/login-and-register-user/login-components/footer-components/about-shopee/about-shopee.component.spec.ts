import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShopeeComponent } from './about-shopee.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutShopeeComponent', () => {
  let component: AboutShopeeComponent;
  let fixture: ComponentFixture<AboutShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutShopeeComponent],
      imports: [AllSvgModule, RouterTestingModule]
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
