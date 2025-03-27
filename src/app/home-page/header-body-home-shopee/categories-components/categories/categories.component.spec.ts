import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { EachCategoryComponent } from '../each-category/each-category.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { CategoriesService } from '../../../service/categories.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [CategoriesComponent, EachCategoryComponent],
    imports: [RouterTestingModule, AllSvgModule],
    providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())]
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
    const svgRight = fixture.nativeElement.querySelector(".container-arrow-right > div > svg");
    expect(svgRight).not.toBeNull();
  });
});
