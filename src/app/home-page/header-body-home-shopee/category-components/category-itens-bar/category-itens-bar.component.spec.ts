import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItensBarComponent } from './category-itens-bar.component';

describe('CategoryItensBarComponent', () => {
  let component: CategoryItensBarComponent;
  let fixture: ComponentFixture<CategoryItensBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryItensBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryItensBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
