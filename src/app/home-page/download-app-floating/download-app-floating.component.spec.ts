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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
