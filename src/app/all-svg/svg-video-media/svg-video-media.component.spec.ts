import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgVideoMediaComponent } from './svg-video-media.component';

describe('SvgVideoMediaComponent', () => {
  let component: SvgVideoMediaComponent;
  let fixture: ComponentFixture<SvgVideoMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgVideoMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgVideoMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
