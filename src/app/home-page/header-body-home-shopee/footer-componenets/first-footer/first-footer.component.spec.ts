import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFooterComponent } from './first-footer.component';

describe('FirstFooterComponent', () => {
  let component: FirstFooterComponent;
  let fixture: ComponentFixture<FirstFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
