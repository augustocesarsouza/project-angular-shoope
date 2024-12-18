import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFloatingComponent } from './language-floating.component';

describe('LanguageFloatingComponent', () => {
  let component: LanguageFloatingComponent;
  let fixture: ComponentFixture<LanguageFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
