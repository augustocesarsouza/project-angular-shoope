import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItensBarComponent } from './category-itens-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ItensIconComponent } from '../itens-icon/itens-icon.component';

describe('CategoryItensBarComponent', () => {
  let component: CategoryItensBarComponent;
  let fixture: ComponentFixture<CategoryItensBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryItensBarComponent, ItensIconComponent],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryItensBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 category', () => {
    const containerCategoryItensBar = fixture.nativeElement.querySelector(".container-category-itens-bar");
    const itensIcons = containerCategoryItensBar.querySelectorAll("app-itens-icon");

    expect(itensIcons.length).toEqual(10);
  });
});
