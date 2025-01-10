import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseXComponent } from './erase-x.component';

describe('EraseXComponent', () => {
  let component: EraseXComponent;
  let fixture: ComponentFixture<EraseXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EraseXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EraseXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
