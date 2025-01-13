import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img src', () => {
    const img = fixture.nativeElement.querySelector('.container-none-update img');
    expect(img).not.toBeNull();

    expect(img.src).toContain("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728827788/img-shopee/71532df534188bbb_nru33m.png");
  });

  it('should render img alt', () => {
    const img = fixture.nativeElement.querySelector('.container-none-update img');

    expect(img.alt).toBe("img-none-update-yet");
  });

  it('should render header', () => {
    const h1 = fixture.nativeElement.querySelector('.container-main h1');

    expect(h1.textContent).toBe("Nenhuma atualização ainda");
  });

});
