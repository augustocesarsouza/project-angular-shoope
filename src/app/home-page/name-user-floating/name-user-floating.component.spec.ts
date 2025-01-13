import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserFloatingComponent } from './name-user-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NameUserFloatingComponent', () => {
  let component: NameUserFloatingComponent;
  let fixture: ComponentFixture<NameUserFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameUserFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameUserFloatingComponent);
    component = fixture.componentInstance;

    component.showContainerNameUser = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container svg header second all elements', () => {
    const arrowTop = fixture.nativeElement.querySelector(".container-arrow-top svg");
    expect(arrowTop).not.toBeNull();
  });

  it('should render span-my-account', () => {
    const spanMyAccount = fixture.nativeElement.querySelector(".span-my-account");
    expect(spanMyAccount.textContent).toBe("Minha Conta");
  });

  it('should render span-my-purchase', () => {
    const spanMyPurchase = fixture.nativeElement.querySelector(".span-my-purchase");
    expect(spanMyPurchase.textContent).toBe("Minha Compras");
  });

  it('should render span-exit', () => {
    const spanExit = fixture.nativeElement.querySelector(".span-exit");
    expect(spanExit.textContent).toBe("Sair");
  });
});
