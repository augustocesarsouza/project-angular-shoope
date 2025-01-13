import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppFloatingComponent } from './download-app-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DownloadAppFloatingComponent', () => {
  let component: DownloadAppFloatingComponent;
  let fixture: ComponentFixture<DownloadAppFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAppFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAppFloatingComponent);
    component = fixture.componentInstance;

    component.showContainerDownloadAppFloating = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img-qr-code src value', () => {
    const imgQrCode = fixture.nativeElement.querySelector(".img-qr-code");
    expect(imgQrCode.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734537041/img-download-app/f9c0cf5184864783_z0xwpz.png");
  });

  it('should render img-qr-code alt value', () => {
    const imgQrCode = fixture.nativeElement.querySelector(".img-qr-code");
    expect(imgQrCode.alt).toBe("img-qr-code");
  });

  it('should render app-store src value', () => {
    const imgAppStore = fixture.nativeElement.querySelector(".img-app-store");
    expect(imgAppStore.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734537045/img-download-app/135555214a82d8e1_mmbfga.png");
  });

  it('should render app-store alt value', () => {
    const imgAppStore = fixture.nativeElement.querySelector(".img-app-store");
    expect(imgAppStore.alt).toBe("img-app-store");
  });

  it('should render img-google-play src value', () => {
    const imgGooglePlay = fixture.nativeElement.querySelector(".img-google-play");
    expect(imgGooglePlay.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734537048/img-download-app/1fddd5ee3e2ead84_bcepnc.png");
  });

  it('should render img-google-play alt value', () => {
    const imgGooglePlay = fixture.nativeElement.querySelector(".img-google-play");
    expect(imgGooglePlay.alt).toBe("img-google-play");
  });
});
