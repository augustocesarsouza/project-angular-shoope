import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserFloatingComponent } from './name-user-floating.component';

describe('NameUserFloatingComponent', () => {
  let component: NameUserFloatingComponent;
  let fixture: ComponentFixture<NameUserFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameUserFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameUserFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
