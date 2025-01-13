import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseComponentsComponent } from './purchase-components.component';

describe('PurchaseComponentsComponent', () => {
  let component: PurchaseComponentsComponent;
  let fixture: ComponentFixture<PurchaseComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseComponentsComponent);
    component = fixture.componentInstance;

    component.whichWasClickedTopLayer = "1";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span all', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-all');
    expect(span.textContent).toBe('Tudo');
  });

  it('should render span to pay', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-to-pay');
    expect(span.textContent).toBe('A Pagar');
  });

  it('should render span preparing', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-preparing');
    expect(span.textContent).toBe('Preparando');
  });

  it('should render span on track', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-on-track');
    expect(span.textContent).toBe('A caminho');
  });

  it('should render span finished', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-finished');
    expect(span.textContent).toBe('Finalizado');
  });

  it('should render span cancelled', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-cancelled');
    expect(span.textContent).toBe('Cancelado');
  });

  it('should render span return-refund', () => {
    const span = fixture.nativeElement.querySelector('.span-from-purchase-return-refund');
    expect(span.textContent).toBe('Devolução/Reemb...');
  });

  it('should render svg search', () => {
    const inputSearchWithoutItens = fixture.nativeElement.querySelector('.container-input-search svg');
    expect(inputSearchWithoutItens).not.toBeNull();
  });

  it('should render container img without itens', () => {
    const containerImg = fixture.nativeElement.querySelector('.container-img');

    const backgroundImage = window.getComputedStyle(containerImg).backgroundImage;

    expect(backgroundImage).toContain('url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/5fafbb923393b712b964.png")');
  });

  it('should render header no orders yet', () => {
    const headerNoOrdersYet = fixture.nativeElement.querySelector('.header-no-orders-yet');
    expect(headerNoOrdersYet.textContent.trim()).toBe("Ainda não há pedidos");
  });
});
