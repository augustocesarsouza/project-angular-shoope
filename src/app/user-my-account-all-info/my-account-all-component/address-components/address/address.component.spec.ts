import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressComponent],
      imports: [AllSvgModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main container and header', () => {
    fixture.detectChanges();

    // const container = fixture.nativeElement.querySelector('.container-main-address');
    const header = fixture.nativeElement.querySelector('.container-main-addresses h1');

    const spanElement = fixture.nativeElement.querySelector('.container-insert-address span');

    expect(header.textContent).toBe('Meus endereços');
    expect(spanElement.textContent).toBe('Inserir novo endereço');
  });

});
