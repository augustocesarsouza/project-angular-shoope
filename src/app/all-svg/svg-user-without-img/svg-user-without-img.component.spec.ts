import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUserWithoutImgComponent } from './svg-user-without-img.component';

describe('SvgUserWithoutImgComponent', () => {
  let component: SvgUserWithoutImgComponent;
  let fixture: ComponentFixture<SvgUserWithoutImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgUserWithoutImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUserWithoutImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
