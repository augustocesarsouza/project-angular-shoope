import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackAccountsComponent } from './card-back-accounts.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('CardBackAccountsComponent', () => {
  let component: CardBackAccountsComponent;
  let fixture: ComponentFixture<CardBackAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBackAccountsComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBackAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header card credit', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.container-first h1');
    expect(header).not.toBeNull();
    expect(header.textContent.trim()).toBe('Cartão de Crédito');
  });

  it('should render svg more and button add more card credit', () => {
    fixture.detectChanges();

    const svgMore = fixture.nativeElement.querySelector('.container-button-add-new-card-credit svg');
    expect(svgMore).not.toBeNull();

    const buttonAddMore = fixture.nativeElement.querySelector('.container-button-add-new-card-credit button');
    expect(buttonAddMore).not.toBeNull();
    expect(buttonAddMore.textContent.trim()).toBe('Adicionar Novo Cartão de Crédito');
  });

  it('should render container with content yet dont have card', () => {
    fixture.detectChanges();

    const containerYetDontHaveCard = fixture.nativeElement.querySelector('.container-you-yet-dont-have-card');
    expect(containerYetDontHaveCard).not.toBeNull();
    expect(containerYetDontHaveCard.textContent.trim()).toBe('Você ainda não tem cartões cadastrados.');
  });

  it('should render container with content yet dont have bank account', () => {
    fixture.detectChanges();

    const containerBankAccount = fixture.nativeElement.querySelector('.container-you-yet-dont-have-bank-account');
    expect(containerBankAccount).not.toBeNull();
    expect(containerBankAccount.textContent.trim()).toBe('Você ainda não tem contas bancárias.');
  });


});
