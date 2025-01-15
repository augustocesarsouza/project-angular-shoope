import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCategoryComponent } from './each-category.component';

describe('EachCategoryComponent', () => {
  let component: EachCategoryComponent;
  let fixture: ComponentFixture<EachCategoryComponent>;

  const category = {id: '5d13f588-45a0-485c-b90a-0a89246428cd', imgCategory: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva', altValue: 'category-women-clothing', title: 'Roupas Femininas'};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachCategoryComponent);
    component = fixture.componentInstance;

    component.category = category;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img and src', () => {
    const img = fixture.nativeElement.querySelector(".container-category-prop img");

    expect(img.src).toContain(category.imgCategory);
  });

  it('should render img and alt', () => {
    const img = fixture.nativeElement.querySelector(".container-category-prop img");

    expect(img.alt).toBe(category.altValue);
  });

  it('should render span title', () => {
    const span = fixture.nativeElement.querySelector(".container-category-prop span");

    expect(span.textContent).toBe(category.title);
  });
});
