import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFloatingComponent } from './notification-floating.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationFloatingComponent', () => {
  let component: NotificationFloatingComponent;
  let fixture: ComponentFixture<NotificationFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationFloatingComponent],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFloatingComponent);
    component = fixture.componentInstance;

    component.showContainerNotification = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render container svg top', () => {
    const arrowTop = fixture.nativeElement.querySelector(".container-arrow-top svg");
    expect(arrowTop).not.toBeNull();
  });

  it('should render header notification', () => {
    const header = fixture.nativeElement.querySelector(".h1-notification-received");
    expect(header.textContent).toEqual("Notificações Recebida Recentemente");
  });

  it('should render img notification src', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    expect(containerImgNotification.length).toEqual(4);
  });

  it('should render img notification src first', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[0].querySelector("img");
    expect(imgNotification.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734544315/img-notificacoes-promocoes/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_mbtsoj_sngqg1.jpg");
  });

  it('should render img notification alt first', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[0].querySelector("img");
    expect(imgNotification.alt).toBe("img-notification-1");
  });

  it('should render img notification src second', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[1].querySelector("img");
    expect(imgNotification.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734544361/img-notificacoes-promocoes/sg-11134004-7rfgn-m3nrza71g657c3_tn_lxct0d.jpg");
  });

  it('should render img notification alt second', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[1].querySelector("img");
    expect(imgNotification.alt).toBe("img-notification-2");
  });

  it('should render img notification src third', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[2].querySelector("img");
    expect(imgNotification.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734544364/img-notificacoes-promocoes/sg-11134004-7rfho-m3mj7imfx5k81c_tn_v11dsp.jpg");
  });

  it('should render img notification alt third', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[2].querySelector("img");
    expect(imgNotification.alt).toBe("img-notification-3");
  });

  it('should render img notification src fourth', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[3].querySelector("img");
    expect(imgNotification.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1734544315/img-notificacoes-promocoes/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_mbtsoj_sngqg1.jpg");
  });

  it('should render img notification alt fourth', () => {
    const containerImgNotification = fixture.nativeElement.querySelectorAll(".container-img-notification");
    const imgNotification = containerImgNotification[3].querySelector("img");
    expect(imgNotification.alt).toBe("img-notification-4");
  });

  it('should render container-details-notification header', () => {
    const headerLastDaysCupon = fixture.nativeElement.querySelector(".container-details-notification h1");
    expect(headerLastDaysCupon.textContent).toBe("Últimos dias do seu cupom 👋");
  });

  it('should render container-details-notification span', () => {
    const span = fixture.nativeElement.querySelector(".container-details-notification span");
    expect(span.textContent).toBe("Agora é o momento para usar seu cupom de FRETE GRÁTIS sem valor mínimo. Aproveite já!");
  });

  it('should render container-details-notification header second', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[1].querySelector("h1");
    expect(header.textContent).toBe("Últimas horas do 12.12 🏃‍♂️");
  });

  it('should render container-details-notification span second', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[1].querySelector("span");
    expect(header.textContent).toBe("Smartwatch Haylou por R$183,99 + CUPONS liberados para você aproveitar a última liquidação do ano. Vem ver!");
  });

  it('should render container-details-notification header third', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[2].querySelector("h1");
    expect(header.textContent).toBe("12.12: Liquidação de Natal");
  });

  it('should render container-details-notification span third', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[2].querySelector("span");
    expect(header.textContent).toBe("Só hoje: Smart TV Samsung 50 UHD 4K por R$2.219,90 + Frete Grátis acima de R$10 e R$7 Milhões em Cupons. Não perca! 🎅");
  });

  it('should render container-details-notification header fourth', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[3].querySelector("h1");
    expect(header.textContent).toBe("Frete Grátis exclusivo para você 🤑");
  });

  it('should render container-details-notification span fourth', () => {
    const containerDetailsNotification = fixture.nativeElement.querySelectorAll(".container-details-notification");
    const header = containerDetailsNotification[3].querySelector("span");
    expect(header.textContent).toBe("Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉");
  });

  it('should render link see all', () => {
    const linkSeeAll = fixture.nativeElement.querySelector(".link-see-all");
    expect(linkSeeAll).not.toBeNull();
  });
});
