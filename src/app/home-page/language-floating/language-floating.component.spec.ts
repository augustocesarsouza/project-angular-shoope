import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFloatingComponent } from './language-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LanguageFloatingComponent', () => {
  let component: LanguageFloatingComponent;
  let fixture: ComponentFixture<LanguageFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageFloatingComponent);
    component = fixture.componentInstance;

    component.showContainerLenguage = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg arrow top', () => {
    const arrowTop = fixture.nativeElement.querySelector(".container-arrow-top svg");
    expect(arrowTop).not.toBeNull();
  });

  it('should render all span language', () => {
    const spanAll = fixture.nativeElement.querySelectorAll(".span-language");
    expect(spanAll.length).toEqual(2);
    expect(spanAll[0].textContent).toBe("Português - BR");;
    expect(spanAll[1].textContent).toBe("English");;
  });
});
