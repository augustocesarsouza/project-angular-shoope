import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensIconComponent } from './itens-icon.component';

describe('ItensIconComponent', () => {
  let component: ItensIconComponent;
  let fixture: ComponentFixture<ItensIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensIconComponent);
    component = fixture.componentInstance;

    component.img = "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509252/img-category-itens-bar/br-50009109-dbc842365ecfc06a6cf498e48c648104_xhdpi_w8cxqe.png";
    component.alt = "img-coin";
    component.title = "Moedas";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img src', () => {
    const imgIcon = fixture.nativeElement.querySelector(".container-img-icon img");

    expect(imgIcon.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509252/img-category-itens-bar/br-50009109-dbc842365ecfc06a6cf498e48c648104_xhdpi_w8cxqe.png");
  });

  it('should render img alt', () => {
    const imgIcon = fixture.nativeElement.querySelector(".container-img-icon img");

    expect(imgIcon.alt).toEqual("img-coin");
  });

  it('should render header title', () => {
    const header = fixture.nativeElement.querySelector(".header-title");

    expect(header.textContent).toEqual("Moedas");
  });
});
