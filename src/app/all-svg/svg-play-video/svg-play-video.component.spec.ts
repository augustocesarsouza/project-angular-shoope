import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPlayVideoComponent } from './svg-play-video.component';

describe('SvgPlayVideoComponent', () => {
  let component: SvgPlayVideoComponent;
  let fixture: ComponentFixture<SvgPlayVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPlayVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPlayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
