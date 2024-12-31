import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { CepService } from '../../../../login-and-register-user/service/cep.service';

interface AddressCep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
}

@Component({
  selector: 'app-modal-new-address',
  templateUrl: './modal-new-address.component.html',
  styleUrl: './modal-new-address.component.scss'
})
export class ModalNewAddressComponent implements OnInit, AfterViewInit, OnDestroy {
  token: string | null = null;
  user!: User;

  clickedEditAddress = false;

  showNumberOfTheUser = false;
  onMouseEnterOnMouseLeaveContainerNumberPhone = false;

  settimeOutArray: number[] = [];
  inputNumberTelephone!: HTMLInputElement;

  NameFullError: null | boolean = null;
  NumberPhoneError: null | boolean = null;
  cpfError: null | boolean = null;
  stateCityError: null | boolean = null;
  neighborhoodError: null | boolean = null;
  streetAvenueError: null | boolean = null;
  numberError: null | boolean = null;

  cpfInvalid = false;

  @ViewChild('divContainerInputNameFull') divContainerInputNameFull!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNumberPhone') divContainerNumberPhone!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerCep') divContainerCep!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerStateCity') divContainerStateCity!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNeighborhood') divContainerNeighborhood!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerStreetAvenue') divContainerStreetAvenue!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerNumber') divContainerNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('divContainerComplementReferences') divContainerComplementReferences!: ElementRef<HTMLDivElement>;

  @ViewChild('inputNameFull') inputNameFull!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNumberPhone') inputNumberPhone!: ElementRef<HTMLInputElement>;
  @ViewChild('inputCep') inputCep!: ElementRef<HTMLInputElement>;
  @ViewChild('inputStateCity') inputStateCity!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNeighborhood') inputNeighborhood!: ElementRef<HTMLInputElement>;
  @ViewChild('inputStreetAvenue') inputStreetAvenue!: ElementRef<HTMLInputElement>;
  @ViewChild('inputNumber') inputNumber!: ElementRef<HTMLInputElement>;
  @ViewChild('inputComplementReferences') inputComplementReferences!: ElementRef<HTMLInputElement>;

  @Input() changeValueNewAddress!: (newAddress: boolean) => void;

  constructor(private cepService: CepService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.token = user.token;
      this.user = user;
      // this.findByIdOnly(user);
    }
  }

  ngAfterViewInit(): void {
    const value: number = setTimeout(() => {
      const inputNumberTelephone = document.getElementById("input-number-telephone") as HTMLInputElement;
      this.inputNumberTelephone = inputNumberTelephone;

      const inputCepNewAddress = document.getElementById("input-cep-new-address") as HTMLInputElement;
      const inputNumber = document.getElementById("input-number") as HTMLInputElement;

      this.inputStateCity.nativeElement.classList.add("input-state-city-readonly");
      this.inputStateCity.nativeElement.readOnly = true;
      this.inputStateCity.nativeElement.style.cursor = "text";

      this.inputStateCity.nativeElement.addEventListener("focus", (event) => {
        event.preventDefault();
      });

      if(inputNumberTelephone){
        const mask = Inputmask({
          mask: '(+99) 99 99999 9999',
          placeholder: '(+__) __ _____ ____',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputNumberTelephone);
      }

      if(inputCepNewAddress){
        const mask = Inputmask({
          mask: '99999-999',
          placeholder: '_____-___',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputCepNewAddress);
      }

      if (inputNumber) {
        const mask = Inputmask({
          mask: '9999999999',
          placeholder: '',
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(inputNumber);
      }
    }, 50) as unknown as number;

    this.settimeOutArray.push(value);
  }

  onClickSaveHome = () => {
    console.log();
  }

  onClickSaveWork = () => {
    console.log();
  }

  onClickCancelNewAddress = () => {
    this.changeValueNewAddress(false);
  }

  onClickSendToDb = () => {
    this.changeColorContainer(this.divContainerInputNameFull.nativeElement);
    this.changeColorContainer(this.divContainerNumberPhone.nativeElement);
    this.changeColorContainer(this.divContainerCep.nativeElement);

    this.changeColorContainer(this.divContainerNeighborhood.nativeElement);
    this.changeColorContainer(this.divContainerStreetAvenue.nativeElement);
    this.changeColorContainer(this.divContainerNumber.nativeElement);

    if(this.NumberPhoneError === null || this.NameFullError === null || this.cpfError === null ||
       this.neighborhoodError === null || this.streetAvenueError === null || this.numberError === null){
      return;
    };
    if(this.NumberPhoneError === true || this.NameFullError === true || this.cpfError === true ||
       this.neighborhoodError === true || this.streetAvenueError === true || this.numberError === true
    ) {
      return;
    };

    const obj = {
      nameFull: this.inputNameFull.nativeElement.value,
      numberPhone: this.inputNumberPhone.nativeElement.value,
      cep: this.inputCep.nativeElement.value,
      stateCity: this.inputStateCity.nativeElement.value,
      neighborhood: this.inputNeighborhood.nativeElement.value,
      streetAvenue: this.inputStreetAvenue.nativeElement.value,
      number: this.inputNumber.nativeElement.value,
      complementReferences: this.inputComplementReferences.nativeElement.value,
    }

    console.log(obj);

  }

  onClickInputNumberCelPhone = () => {

    if(!(this.inputNumberTelephone.value === this.user.phone)){
      this.showNumberOfTheUser = true;
    }
  }

  onClickContainerModalInner = () => {
    if(this.onMouseEnterOnMouseLeaveContainerNumberPhone) return;

    this.showNumberOfTheUser = false;
  }

  onMouseEnterContainerNumberPhone = () => {
    this.onMouseEnterOnMouseLeaveContainerNumberPhone = true;
  }

  onMouseLeaveContainerNumberPhone = () => {
    this.onMouseEnterOnMouseLeaveContainerNumberPhone = false;
  }

  containerShowNumberPhoneUser = (divNumberPhone: HTMLDivElement, divContainerNumberPhone: HTMLDivElement) => {
    this.inputNumberTelephone.value = this.user.phone;

    this.showNumberOfTheUser = false;

    divNumberPhone.style.color = "rgba(0, 0, 0, 0.4)";
    divContainerNumberPhone.style.borderColor = "rgba(0, 0, 0, 0.14)";
    this.NumberPhoneError = false;
  }

  changeInputNameFull(e: Event, divNameInput: HTMLDivElement, divContainerInputNameFull: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 1){
      divNameInput.style.display = 'block';

      divContainerInputNameFull.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.NameFullError = false;
    }else {
      divNameInput.style.display = 'none';

      divContainerInputNameFull.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.NameFullError = true;
    }

    if(input.value.length <= 0){
      this.NameFullError = null;
    }
  }

  changeInputNumberPhone(e: Event, divNumberPhone: HTMLDivElement, divContainerNumberPhone: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    const cleanedValue = input.value.replace(/[()+_\s]/g, '');

    if(cleanedValue.length > 12){
      this.showNumberOfTheUser = false;
      this.NumberPhoneError = false;

      divNumberPhone.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerNumberPhone.style.borderColor = "rgba(0, 0, 0, 0.14)";
    }else {
      this.showNumberOfTheUser = true;
      this.NumberPhoneError = true;

      divNumberPhone.style.color = "#ff0000bd";
      divContainerNumberPhone.style.borderColor = "red";
    }

    if(input.value.length > 0){
      divNumberPhone.style.display = 'block';

      if(!(input.value === this.user.phone)){
        this.showNumberOfTheUser = true;
      }else {
        this.showNumberOfTheUser = false;
      }
    }else {
      divNumberPhone.style.display = 'none';
    }
  }

  async changeInputCep(e: Event, divCep: HTMLDivElement, divContainerCep: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divCep.style.display = 'none';
      divCep.style.color = "#ff0000bd";
      divContainerCep.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.cpfError = true;
    }else {
      divCep.style.display = 'block';

      const valueCep = input.value.replace(/[_]/g, "").replace(/\D/g, '');

      if(valueCep.length < 8){
        this.cpfInvalid = true;
      }

      const json = await this.cepService.consultaCEP(valueCep);

      if(json){
        if(json.erro){
          divCep.style.color = "#ff0000bd";
          divContainerCep.style.borderColor = "red";
          input.classList.add('placeholder-red');

          this.cpfInvalid = true;
          this.cpfError = true;
        }else {
          divCep.style.color = "rgba(0, 0, 0, 0.4)";
          divContainerCep.style.borderColor = "rgba(0, 0, 0, 0.14)";
          input.classList.remove('placeholder-red');

          this.cpfInvalid = false;
          this.cpfError = false;

          const addressValue: AddressCep = json;
          console.log(addressValue);

          const stateAndCity = `${addressValue.estado} - ${addressValue.localidade}`;

          const inputStateCity = this.inputStateCity.nativeElement as HTMLInputElement;

          inputStateCity.value = stateAndCity;
          inputStateCity.style.color = "#bbb";
          inputStateCity.readOnly = true;
          inputStateCity.style.cursor = "text";

          inputStateCity.addEventListener("focus", (event) => {
            event.preventDefault();
          });

          const firstElementDivStateCity = this.divContainerStateCity.nativeElement.firstChild as HTMLDivElement;
          firstElementDivStateCity.style.display = "block";

          this.inputNeighborhood.nativeElement.value = addressValue.bairro;

          const firstElementDivNeighborhood = this.divContainerNeighborhood.nativeElement.firstChild as HTMLDivElement;
          firstElementDivNeighborhood.style.display = "block";

          firstElementDivNeighborhood.style.color = "rgba(0, 0, 0, 0.4)";
          this.divContainerNeighborhood.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.14)";

          this.neighborhoodError = false;

          this.inputStreetAvenue.nativeElement.value = addressValue.logradouro;

          const firstElementDivStreetAvenue = this.divContainerStreetAvenue.nativeElement.firstChild as HTMLDivElement;
          firstElementDivStreetAvenue.style.display = "block";

          firstElementDivStreetAvenue.style.color = "rgba(0, 0, 0, 0.4)";
          this.divContainerStreetAvenue.nativeElement.style.borderColor = "rgba(0, 0, 0, 0.14)";

          this.streetAvenueError = false;
        }
      }else {
        this.cpfInvalid = true;
        this.cpfError = true;

        divCep.style.color = "#ff0000bd";
        divContainerCep.style.borderColor = "red";
        input.classList.add('placeholder-red');
      }
    }
  }

  changeInputStateCity(e: Event, divStateCity: HTMLDivElement, divContainerStateCity: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divStateCity.style.display = 'none';
      divStateCity.style.color = "#ff0000bd";
      divContainerStateCity.style.borderColor = "red";
      input.classList.add('placeholder-red');
    }else {
      divStateCity.style.display = 'block';

      if(input.value.length < 2){
        divStateCity.style.color = "#ff0000bd";
        divContainerStateCity.style.borderColor = "red";
        input.classList.add('placeholder-red');
      }else {
        divStateCity.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerStateCity.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');
      }
    }
  }

  changeInputNeighborhood(e: Event, divNeighborhood: HTMLDivElement, divContainerNeighborhood: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divNeighborhood.style.display = 'none';
      divNeighborhood.style.color = "#ff0000bd";
      divContainerNeighborhood.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.neighborhoodError = true;
    }else {
      divNeighborhood.style.display = 'block';

      if(input.value.length < 2){
        divNeighborhood.style.color = "#ff0000bd";
        divContainerNeighborhood.style.borderColor = "red";
        input.classList.add('placeholder-red');

        this.neighborhoodError = true;
      }else {
        divNeighborhood.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerNeighborhood.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');

        this.neighborhoodError = false;
      }
    }
  }

  changeInputStreetAvenue(e: Event, divStreetAvenue: HTMLDivElement, divContainerStreetAvenue: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divStreetAvenue.style.display = 'none';
      divStreetAvenue.style.color = "#ff0000bd";
      divContainerStreetAvenue.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.streetAvenueError = true;
    }else {
      divStreetAvenue.style.display = 'block';

      if(input.value.length < 2){
        divStreetAvenue.style.color = "#ff0000bd";
        divContainerStreetAvenue.style.borderColor = "red";
        input.classList.add('placeholder-red');

        this.streetAvenueError = true;
      }else {
        divStreetAvenue.style.color = "rgba(0, 0, 0, 0.4)";
        divContainerStreetAvenue.style.borderColor = "rgba(0, 0, 0, 0.14)";
        input.classList.remove('placeholder-red');

        this.streetAvenueError = false;
      }
    }
  }

  changeInputNumber(e: Event, divNumber: HTMLDivElement, divContainerNumber: HTMLDivElement){
    const input = e.target as HTMLInputElement;

    if(input.value.length <= 0){
      divNumber.style.display = 'none';
      divNumber.style.color = "#ff0000bd";
      divContainerNumber.style.borderColor = "red";
      input.classList.add('placeholder-red');

      this.numberError = true;
    }else {
      divNumber.style.display = 'block';

      divNumber.style.color = "rgba(0, 0, 0, 0.4)";
      divContainerNumber.style.borderColor = "rgba(0, 0, 0, 0.14)";
      input.classList.remove('placeholder-red');

      this.numberError = false;
    }
  }

  changeColorContainer(divContainer: HTMLDivElement){
    // divNumberPhone.style.color = "#ff0000bd";

    const input = divContainer.lastChild as HTMLInputElement;

    if(input.value.length <= 0){
      divContainer.style.borderColor = "#ff0000bd";
      input.classList.add('placeholder-red');
    }
  }

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((el) => {
      clearTimeout(el);
    })
  }
}
