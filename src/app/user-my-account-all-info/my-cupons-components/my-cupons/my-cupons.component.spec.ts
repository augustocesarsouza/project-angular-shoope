import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCuponsComponent, ObjQuantityCupons } from './my-cupons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MyCuponsComponent', () => {
  let component: MyCuponsComponent;
  let fixture: ComponentFixture<MyCuponsComponent>;

  const objQuantityCupons: ObjQuantityCupons[] = [];

  const obj1 = {
    id: "f9200fe0-e2be-47ef-84ed-a47430844b7c",
    nameTopCupon: "Todos",
    quantityCupons: 19,
    whichCupon: 1
  };

  const obj2 = {
    id: "e9591fd8-c01e-4f72-ad9c-420ae558b513",
    nameTopCupon: "Shopee",
    quantityCupons: 5,
    whichCupon: 2
  };

  objQuantityCupons.push(obj1);
  objQuantityCupons.push(obj2);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MyCuponsComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(MyCuponsComponent);
    component = fixture.componentInstance;

    component.objQuantityCupons = objQuantityCupons;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all span', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-second-spans span');
    expect(spans.length).toEqual(3);
  });

  it('should render span first', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-second-spans span');
    expect(spans[0].textContent).toBe("Pegue mais cupons");
  });

  it('should render span second', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-second-spans span');
    expect(spans[1].textContent).toBe("Ver histórico de cupons");
  });

  it('should render span third', () => {
    const spans = fixture.nativeElement.querySelectorAll('.container-second-spans span');
    expect(spans[2].textContent).toBe("Veja mais");
  });

  it('should render span add cupon', () => {
    const span = fixture.nativeElement.querySelector('.span-add-cupon');
    expect(span.textContent).toBe("Adicionar Cupom");
  });

  it('should render input insert code', () => {
    const input = fixture.nativeElement.querySelector('.container-input-insert-code-cupon input');
    expect(input).not.toBeNull();
  });

  it('should render button recover', () => {
    const button = fixture.nativeElement.querySelector('.container-button-rescue button');
    expect(button).not.toBeNull();
  });

  it('should render all itens', () => {
    const containerAll = fixture.nativeElement.querySelectorAll('.container-with-itens-obj-top');
    expect(containerAll.length).toEqual(2);
  });

  it('should render first iten', () => {
    const containerAll = fixture.nativeElement.querySelectorAll('.container-with-itens-obj-top');
    expect(containerAll[0].textContent.trim()).toBe(`${obj1.nameTopCupon} (${obj1.quantityCupons})`);
  });

  it('should render second iten', () => {
    const containerAll = fixture.nativeElement.querySelectorAll('.container-with-itens-obj-top');
    expect(containerAll[1].textContent.trim()).toBe(`${obj2.nameTopCupon} (${obj2.quantityCupons})`);
  });

  it('should render img without cupon', () => {
    component.showContainerWithoutCupon = true;
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('.container-without-cupon img');
    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736443191/img-cupons/CuponsNoneFound_xk3qe2.png");
  });

  it('should render alt without cupon', () => {
    component.showContainerWithoutCupon = true;
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('.container-without-cupon img');
    expect(img.alt).toBe("without-cupon");
  });

  it('should render header none cupon', () => {
    component.showContainerWithoutCupon = true;
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.container-without-cupon h1');
    expect(header.textContent).toBe("Nenhum cupom correspondente");
  });

  it('should render span redeem more coupons', () => {
    component.showContainerWithoutCupon = true;
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('.container-without-cupon span');
    expect(span.textContent).toBe("Resgate mais cupons e encontre-os aqui!");
  });

  it('should render button', () => {
    component.showContainerWithoutCupon = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.container-without-cupon button');
    expect(button.textContent).toBe("Pegue mais cupons");
  });

  it('should render header recommended', () => {
    const header = fixture.nativeElement.querySelector('.container-cupons-recommended h1');
    expect(header.textContent).toBe("Cupons Recomendados");
  });
});
