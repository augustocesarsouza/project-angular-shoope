import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductFirstComponent } from './image-product-first.component';

describe('ImageProductFirstComponent', () => {
  let component: ImageProductFirstComponent;
  let fixture: ComponentFixture<ImageProductFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageProductFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageProductFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
