import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppFloatingComponent } from './download-app-floating.component';

describe('DownloadAppFloatingComponent', () => {
  let component: DownloadAppFloatingComponent;
  let fixture: ComponentFixture<DownloadAppFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAppFloatingComponent]
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
