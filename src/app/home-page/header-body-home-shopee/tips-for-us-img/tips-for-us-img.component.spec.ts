import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForUsImgComponent } from './tips-for-us-img.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TipsForUsImgComponent', () => {
  let component: TipsForUsImgComponent;
  let fixture: ComponentFixture<TipsForUsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsForUsImgComponent],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsForUsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img tips src', () => {
    const imgTips = fixture.nativeElement.querySelector(".container-tips-for-us-img-coupons img");

    expect(imgTips.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729775990/img-shopee/br-50009109-87fecf86b3c129e1e0762cc8f504cf5d_fvcmsv.jpg");
  });

  it('should render img tips alt', () => {
    const imgTips = fixture.nativeElement.querySelector(".container-tips-for-us-img-coupons img");

    expect(imgTips.alt).toBe("img-tips-for-using-coupons");
  });
});
