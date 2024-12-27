import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppShopeeComponent } from './download-app-shopee.component';

describe('DownloadAppShopeeComponent', () => {
  let component: DownloadAppShopeeComponent;
  let fixture: ComponentFixture<DownloadAppShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAppShopeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadAppShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
