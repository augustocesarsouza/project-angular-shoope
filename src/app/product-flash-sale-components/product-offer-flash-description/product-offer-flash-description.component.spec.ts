import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferFlashDescriptionComponent } from './product-offer-flash-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { ProductOfferFlashDescriptionService } from '../service/product-offer-flash-description.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductOfferFlashDescriptionComponent', () => {
  let component: ProductOfferFlashDescriptionComponent;
  let fixture: ComponentFixture<ProductOfferFlashDescriptionComponent>;

  const productOfferFlashDescription = {
    descriptions: "****UTILIZE UM CARREGADOR DE CELULAR NA AMPERAGEM CORRETA PARA O FUNCIONAMENTO. APENAS FUNCIONA NA TOMADA***\n\n10000 Jogos Classicos Video Game Console Sem Fio Retro 4K HD Saida TV\n\nCaracterísticas:\n1 - suporte saída HDMI: Este Console de videogame usa interface HDMI em vez de interface USB, você pode conectá-lo em TVs, monitores de computador, projetores com interface HDMI para trazer uma tela HD 4K\n2 - 2.4g Controlador Dual wireless Gamepad: Este Console de videogame tem dois gamepads sem fio, simples e conveniente, você pode experimentar a diversão do jogo com seus amigos, parceiros e crianças\n3 - alta configuração. Cpu: córtex de núcleo duplo-A7.\n4 - fornece Jogos Divertidos: O Console de jogos suporta um ou dois jogadores, joga jogos, tornando você mais agradável com seus filhos ou amigos, e é um Console de videogame HD portátil, este Console de videogame construído- Em muitos jogos clássicos retrô, versões de jogo 3000 e 10000, você pode escolher de acordo com suas próprias necessidades.\n5 - formatos de jogos múltiplos de suporte: Este suporte para Console de videogame para MAME, forSFC, para FC, para GB, para GBA, para MD\n6 - suporte Jogos de download por si mesmo: Se você tiver outros jogos mais interessantes, você pode baixar o arquivo online e copiá-lo para o cartão de memória\n\nEspecificações:\nSistema operacional: Sistema de fonte de retroarquivamento Linux\nIdioma: Suporte Multi-línguas\nTipos compativeis: MAME/FC/FBA/GB/GBC/MD/SFC/SMC/\nCpu: GB2\nRam Sd: DDR3 256M\nFlash: 128M\nMaterial: ABS\nCor: preto",
    id: "56b73fd6-8266-4d72-bd86-3226c50799c4",
    productsOfferFlashId: "8bef0a5c-fd6e-4f8b-a698-23216155b482"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProductOfferFlashDescriptionComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [ProductOfferFlashDescriptionService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProductOfferFlashDescriptionComponent);
    component = fixture.componentInstance;

    component.productOfferFlashDescription = productOfferFlashDescription;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header description', () => {
    const h1 = fixture.nativeElement.querySelector('.container-main-description > h1');
    expect(h1.textContent.trim()).toBe("Descrição do produto");
  });
});
