import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComshareMainLastComponent } from './comshare-main-last.component';

describe('ComshareMainLastComponent', () => {
  let component: ComshareMainLastComponent;
  let fixture: ComponentFixture<ComshareMainLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComshareMainLastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComshareMainLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
