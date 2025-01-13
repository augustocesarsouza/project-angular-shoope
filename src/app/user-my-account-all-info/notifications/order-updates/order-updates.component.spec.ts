import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpdatesComponent } from './order-updates.component';

describe('OrderUpdatesComponent', () => {
  let component: OrderUpdatesComponent;
  let fixture: ComponentFixture<OrderUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img src', () => {
    const img = fixture.nativeElement.querySelector('.container-img-no-order-update img');
    expect(img).not.toBeNull();

    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728819618/img-shopee/4e653cf704e352fd_bdm30f.png");
  });

  it('should render img alt', () => {
    const img = fixture.nativeElement.querySelector('.container-img-no-order-update img');
    expect(img).not.toBeNull();

    expect(img.alt).toBe("no-order-update");
  });

  it('should render header none update', () => {
    const header = fixture.nativeElement.querySelector('.container-main h1');

    expect(header.textContent).toBe("Nenhuma atualização de pedido ainda");
  });
});
