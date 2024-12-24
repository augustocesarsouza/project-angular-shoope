import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeIsWrongXComponent } from './code-is-wrong-x.component';

describe('CodeIsWrongXComponent', () => {
  let component: CodeIsWrongXComponent;
  let fixture: ComponentFixture<CodeIsWrongXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeIsWrongXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeIsWrongXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
