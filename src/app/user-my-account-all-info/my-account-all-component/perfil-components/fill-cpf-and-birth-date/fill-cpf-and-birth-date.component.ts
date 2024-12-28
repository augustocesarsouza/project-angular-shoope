import { AfterViewInit, Component, OnInit } from '@angular/core';

import { eachYearOfInterval, format, getDaysInMonth, getMonth, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Inputmask from 'inputmask'
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../../login-and-register-user/interface/user';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fill-cpf-and-birth-date',
  templateUrl: './fill-cpf-and-birth-date.component.html',
  styleUrl: './fill-cpf-and-birth-date.component.scss'
})
export class FillCpfAndBirthDateComponent implements AfterViewInit, OnInit {
  user!: User | null;

  dayMes: number[] = [];
  years: string[] = [];
  selectMonth!: HTMLSelectElement;
  selectDayOfMonth!: HTMLSelectElement;
  selectYear!: HTMLSelectElement;
  birthday = "";

  inputCpfFillBirthday!: HTMLInputElement;
  buttonVerify!: HTMLButtonElement;

  changeOptions = false;
  changeOptionsYear = false;

  valueDay = "Data";
  valueMes = "Mês";
  valueYear = "Ano";
  valueCpf = "";
  countNumberCpf = 0;

  cpfParams: string | null = null;
  clickInputCpf = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute){}

   ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;
      this.user = user;
    }

    this.route.queryParams.subscribe(params => {
      const cpfParams = params['cpf'] || null;
      this.cpfParams = cpfParams;
    });
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const selectMonth = document.querySelector(".select-month") as HTMLSelectElement;
    this.selectMonth = selectMonth;
    const selectDayOfMonth = document.querySelector(".select-month-of-month") as HTMLSelectElement;
    this.selectDayOfMonth = selectDayOfMonth;
    const selectYear = document.querySelector(".select-year") as HTMLSelectElement;
    this.selectYear = selectYear;

    const inputCpfFillBirthday = document.getElementById('input-cpf-fill-birthday')as HTMLInputElement;
    this.inputCpfFillBirthday = inputCpfFillBirthday;

    const buttonVerify = document.querySelector('.button-verify')as HTMLButtonElement;
    this.buttonVerify = buttonVerify;

    if(this.cpfParams){
      this.configurationCpf(this.cpfParams);
    }

    if (inputCpfFillBirthday) {
      const mask = new Inputmask({
        mask: '***.***.*99-99',
        placeholder: '___.___.___-__',
        definitions: {
          '*': {
            validator: '[0-9*]', // Aceita números e o caractere '*'
            cardinality: 1,
          },
        },
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCpfFillBirthday);
    }


    if (selectDayOfMonth === null) return;
    if (selectMonth === null) return;
    if (selectYear === null) return;

    const day = parseInt(selectDayOfMonth.value);
    const month = selectMonth.value;
    const year = parseInt(selectYear.value);
    const numberMonth = this.getMonthNumber(month);

    if (numberMonth > 0 && day > 0 && year >= 1900) {
      let stringConcat = '';
      if (day <= 9 && numberMonth <= 9) {
        stringConcat = `0${day}/0${numberMonth}/${year}`;
        this.birthday = stringConcat;
        return;
      }

      if (day <= 9) {
        stringConcat = `0${day}/${numberMonth}/${year}`;
        this.birthday = stringConcat;
        return;
      } else if (numberMonth <= 9) {
        stringConcat = `${day}/0${numberMonth}/${year}`;
        this.birthday = stringConcat;
        return;
      }

      stringConcat = `${day}/${numberMonth}/${year}`;
      this.birthday = stringConcat;

    } else {
      this.birthday = "";
    }
  }

  configurationCpf = (cpf: string) => {
    let newCpf = '';

    for (let i = 0; i < cpf.length; i++) {
      if(i < 7){
        newCpf += '*';
      }


      if (i === 2 || i === 5) {
        newCpf += '.';
      }

      if(i >= 7){
        newCpf += cpf[i];
      }

      if(i === 8){
        newCpf += '-';
      }
    }

    this.inputCpfFillBirthday.value = newCpf;
  }

  getMonthNumber = (month: string) => {
    let numberMonth = 0;

    switch (month) {
      case 'Janeiro':
        numberMonth = 1;
        break;
      case 'Fevereiro':
        numberMonth = 2;
        break;
      case 'Março':
        numberMonth = 3;
        break;
      case 'Abril':
        numberMonth = 4;
        break;
      case 'Maio':
        numberMonth = 5;
        break;
      case 'Junho':
        numberMonth = 6;
        break;
      case 'Julho':
        numberMonth = 7;
        break;
      case 'Agosto':
        numberMonth = 8;
        break;
      case 'Setembro':
        numberMonth = 9;
        break;
      case 'Outubro':
        numberMonth = 10;
        break;
      case 'Novembro':
        numberMonth = 11;
        break;
      case 'Dezembro':
        numberMonth = 12;
        break;
      default:
        numberMonth = -1;
        break;
    }
    return numberMonth;
  };

  getMonthName = (month: number) => {
    let nameMonth = '';

    switch (month) {
      case 1:
        nameMonth = 'Janeiro';
        break;
      case 2:
        nameMonth = 'Fevereiro';
        break;
      case 3:
        nameMonth = 'Março';
        break;
      case 4:
        nameMonth = 'Abril';
        break;
      case 5:
        nameMonth = 'Maio';
        break;
      case 6:
        nameMonth = 'Junho';
        break;
      case 7:
        nameMonth = 'Julho';
        break;
      case 8:
        nameMonth = 'Agosto';
        break;
      case 9:
        nameMonth = 'Setembro';
        break;
      case 10:
        nameMonth = 'Outubro';
        break;
      case 11:
        nameMonth = 'Novembro';
        break;
      case 12:
        nameMonth = 'Dezembro';
        break;
      default:
        nameMonth = 'seila';
        break;
    }
    return nameMonth;
  };

  handleClickOption = () => {
    this.changeOptions = !this.changeOptions;

    if (this.selectDayOfMonth === null) return;
    if (this.selectMonth === null) return;
    if (this.selectYear === null) return;

    const dateActual = new Date().getFullYear();
    const mes = this.selectMonth.value;

    this.valueMes = mes;

    if(this.selectDayOfMonth.value === "Data"){
      this.valueDay = "1";
    }else {
      this.valueDay = this.selectDayOfMonth.value;
    }

    if(this.selectMonth.value === "Mês"){
      this.valueDay = "Data";
    }

    let countNumberCpf = 0;

    for (const el of this.valueCpf) {
      if(!Number.isNaN(Number(el))){
        countNumberCpf += 1;
      }
    }

    this.countNumberCpf = countNumberCpf;

    if(countNumberCpf >= 11 && this.valueDay !== "Data" && this.valueMes !== "Mês" && this.valueYear !== "Ano"){
      this.buttonVerify.style.opacity = "1";
      this.buttonVerify.style.cursor = "pointer";
    }

    if(this.valueDay === "Data" || this.valueMes === "Mês" || this.valueYear === "Ano"){
      this.buttonVerify.style.opacity = "0.7";
      this.buttonVerify.style.cursor = "not-allowed";
    }

    const data = parse(mes, 'MMMM', new Date(), { locale: ptBR });
    const numberOfMes = getMonth(data);

    const date = new Date(dateActual, numberOfMes, 1);
    const daysInMonth = getDaysInMonth(date);

    const array = [];

    for (let i = 1; i <= daysInMonth; i++) {
      array.push(i);
    }

    this.dayMes = array;

    const startPeriod = new Date(1900, 0, 1);
    const endPeriod = new Date();

    const yearsPeriod = eachYearOfInterval({ start: startPeriod, end: endPeriod });

    if (this.years.length > 0) return;

    yearsPeriod.forEach((year) => {
      if (this.years !== null) {
        this.years.push(format(year, 'yyyy'));
      }
    });
  };

  clickVerify = () => {
    if (this.selectMonth === null) return;
    if (this.selectDayOfMonth === null) return;
    if (this.selectYear === null) return;

    if (this.inputCpfFillBirthday === null) return;
    if (this.user === null) return;

    const inputDay = this.selectDayOfMonth;
    const inputMonth = this.selectMonth;
    const inputYear = this.selectYear;
    const inputCpf = this.inputCpfFillBirthday;

    let valueCpf = '';

    for (const input of inputCpf.value) {
      if (input !== '.') {
        valueCpf += input;
      }
    }

    valueCpf = valueCpf.replace(/\s+/g, '').replace(/_/g, '').replace(/-/g, '').trim();

    if(valueCpf.length <= 10 || this.valueDay === "Data" || this.valueMes === "Mês" || this.valueYear === "Ano" || valueCpf.includes("*"))return;


    const numberMonth = this.getMonthNumber(inputMonth.value);
    let birthDateString = '';

    if (inputDay.value.length <= 1) {
      if (numberMonth < 10) {
        birthDateString = `0${inputDay.value}/0${numberMonth}/${inputYear.value}`;
      } else {
        birthDateString = `0${inputDay.value}/${numberMonth}/${inputYear.value}`;
      }
    } else {
      birthDateString = `${inputDay.value}/${numberMonth}/${inputYear.value}`;
    }

    const userId = this.user.id;

    let userUpdate = null;

    userUpdate = {
      userId: userId,
      cpf: valueCpf,
      birthDate: birthDateString,
    };

    this.userService.updateCpfAndBirthDayUser(userUpdate, userId, this.user.token).subscribe({
      next: (success) => {
        const userUpdateReturn: User = success.data;
        console.log(userUpdateReturn);

        this.router.navigate(['/user/account/profile']);
        // nav('/user/account/profile', { state: { user: userObj, userUpdate: userUpdate } });
      },
      error: error => {
        console.log(error);

        if(error.status === 400){
          console.log(error);
          // this.confirmEmail = false;
        }

        if(error.status === 403){
          localStorage.removeItem('user');
          this.router.navigate(['/buyer/login']);
          // this.confirmEmail = false;
        }
      }
    });
  };

  clickContainerInputCpf = () => {

    if(!this.clickInputCpf){
      this.inputCpfFillBirthday.value = "";
    }

    this.clickInputCpf = true;

    if(this.clickInputCpf && this.inputCpfFillBirthday){
      const mask = new Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(this.inputCpfFillBirthday);
    }
  }

  handleClickOptionYear = () => {
    this.changeOptionsYear = !this.changeOptionsYear;

    this.valueYear = this.selectYear.value;
  };

  onMouseEnterSelectDay(){
    if (this.selectDayOfMonth === null) return;

    this.selectDayOfMonth.style.border = '1px solid red';
  }

  onMouseLeaveSelectDay(){
    if (this.selectDayOfMonth === null) return;

    this.selectDayOfMonth.style.border = '1px solid #00000024';
  }

  onMouseEnterSelectMonth = () => {
    if (this.selectMonth === null) return;

    this.selectMonth.style.border = '1px solid red';
  };

  onMouseLeaveSelectMonth = () => {
    if (this.selectMonth === null) return;

    this.selectMonth.style.border = '1px solid #00000024';
  };

  onMouseEnterSelectYear = () => {
    if (this.selectYear === null) return;

    this.selectYear.style.border = '1px solid red';
  };

  onMouseLeaveSelectYear = () => {
    if (this.selectYear === null) return;

    this.selectYear.style.border = '1px solid #00000024';
  };

  handleChange(e: Event): void {
    const select = e.target as HTMLSelectElement;
    const year = select.value;
    this.valueYear = year;
  }

  handleInputCpf(e: Event): void {
    const inputCpf = e.target as HTMLInputElement;

    const valueCpf = inputCpf.value;
    this.valueCpf = valueCpf;

    let countNunber = 0;

    for (const el of valueCpf) {
      if(!Number.isNaN(Number(el))){
        countNunber += 1;
      }
    }

    if (this.selectDayOfMonth === null) return;
    if (this.selectMonth === null) return;
    if (this.selectYear === null) return;

    const inputDay = this.selectDayOfMonth;
    const inputMonth = this.selectMonth;
    const inputYear = this.selectYear;

    // console.log(inputDay.value);


    if(countNunber >= 11 && inputDay.value !== "Data" && inputMonth.value !== "Mês" && inputYear.value !== "Ano"){
      this.buttonVerify.style.opacity = "1";
      this.buttonVerify.style.cursor = "pointer";
    }else {
      this.buttonVerify.style.opacity = "0.7";
      this.buttonVerify.style.cursor = "not-allowed";
    }
  }

  // const RefInputCpf = useRef<HTMLInputElement | null>(null);
  // const RefButtonNext = useRef<HTMLButtonElement | null>(null);
  // const refContainerInputEmail = useRef<HTMLDivElement | null>(null);

  onMouseEnterButtonNext = () => {
    if (this.buttonVerify === null) return;

    // this.buttonVerify.style.background = '#ee6449';
  };

  onMouseLeaveButtonNext = () => {
    if (this.buttonVerify === null) return;

    // this.buttonVerify.style.background = '#ee4d2d';
  };
}
