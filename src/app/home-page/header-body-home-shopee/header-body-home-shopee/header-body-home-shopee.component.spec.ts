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

  it('should render svg left', () => {
    fixture.detectChanges();

    const svgLeft = fixture.nativeElement.querySelector('.button-nav-left svg');
    expect(svgLeft).not.toBeNull();
  });

  it('should have 4 images in the first contianer top', () => {
    fixture.detectChanges();

    const containerImgsTop = fixture.nativeElement.querySelectorAll(".container-imgs-top");
    expect(containerImgsTop.length).toEqual(4);
  });

  it('should have 2 images in the second contianer top', () => {
    fixture.detectChanges();

    const containerSecondImgTop = fixture.nativeElement.querySelectorAll(".container-second-img-top");
    expect(containerSecondImgTop.length).toEqual(2);
  });

  it('should have 4 balls render', () => {
    fixture.detectChanges();

    const containerAllBall = fixture.nativeElement.querySelectorAll(".container-ball");
    expect(containerAllBall.length).toEqual(4);
  });

  it('should render svg right', () => {
    fixture.detectChanges();

    const svgRight = fixture.nativeElement.querySelector('.button-nav-right svg');
    expect(svgRight).not.toBeNull();
  });
});
