import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { EachCategoryComponent } from '../each-category/each-category.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent, EachCategoryComponent],
      imports: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header and text', () => {
    const header = fixture.nativeElement.querySelector(".header-category");
    expect(header).not.toBeNull();
    expect(header.textContent).toBe("Categorias");
  });

  it('should render svg left', () => {
    const svgLeft = fixture.nativeElement.querySelector(".stardust-icon-arrow-left-bold");
    expect(svgLeft).not.toBeNull();
  });

  it('should render svg right', () => {
    const svgRight = fixture.nativeElement.querySelector(".icon-arrow-right");
    expect(svgRight).not.toBeNull();
  });
});
