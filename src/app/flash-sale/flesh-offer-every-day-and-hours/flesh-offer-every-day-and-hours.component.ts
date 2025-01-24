import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashSaleCountdownService } from '../../service-all-components/flash-sale-countdown.service';
import { ObjTime, ObjTimeFleshOffer } from '../../home-page/header-body-home-shopee/home-body-main/home-body-main.component';
import { UserLocalStorage } from '../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { User } from '../../login-and-register-user/interface/user';
import { ProductsOfferFlashService } from '../../home-page/service/products-offer-flash.service';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';

@Component({
  selector: 'app-flesh-offer-every-day-and-hours',
  templateUrl: './flesh-offer-every-day-and-hours.component.html',
  styleUrl: './flesh-offer-every-day-and-hours.component.scss'
})
export class FleshOfferEveryDayAndHoursComponent implements OnInit {
  constructor(private router: Router, private flashSaleCountdownService: FlashSaleCountdownService,
    private productsOfferFlashService: ProductsOfferFlashService
  ){}

  user!: User;

  getAllProductHourProps: ProductFlashDeals[] = [];

  timeForCountdown: Date | null = null;
  objTimeFlashDeals: ObjTimeFleshOffer | null = null;

  allHoursFleshOffers: ObjTime[] = [];

  @Input() updateObjTimeFlashDeals!: (newValue: ObjTimeFleshOffer) => void;
  pageNumber = 0;

  hourFlashOffer = "09:00";
  tagProduct = "Mais_Populares";

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user){
        this.user = user;

        this.GetAllProductHour(this.hourFlashOffer);
      }
    }

    this.getAllHoursFleshOffers = this.getAllHoursFleshOffers.bind(this);
    this.getTagProductClicked = this.getTagProductClicked.bind(this);
    this.functionGetMoreProductPaginate = this.functionGetMoreProductPaginate.bind(this);

    const dateNow = new Date();

    const newDate1 = new Date();
    newDate1.setHours(5, 0, 0, 0);

    const newDate2 = new Date();
    newDate2.setHours(9, 0, 0, 0);

    const newDate3 = new Date();
    newDate3.setHours(11, 0, 0, 0);

    const newDate4 = new Date();
    newDate4.setHours(13, 0, 0, 0);

    const newDate5 = new Date();
    newDate5.setHours(15, 0, 0, 0);

    const newDate6 = new Date();
    newDate6.setHours(17, 0, 0, 0);

    const newDate7 = new Date();
    newDate7.setHours(19, 0, 0, 0);

    const newDate8 = new Date();
    newDate8.setHours(21, 0, 0, 0);

    const newDate9 = new Date();
    newDate9.setHours(23, 0, 0, 0);

    // const newDate10 = new Date();
    // newDate10.setDate(dayToday + 1);
    // newDate10.setHours(1, 0, 0, 0);

    // const newDate11 = new Date();
    // newDate11.setDate(dayToday + 1);
    // newDate11.setHours(3, 0, 0, 0);

    const objHours1 = {
      time: newDate1,
      inProgress: false,
    };

    const objHours2 = {
      time: newDate2,
      inProgress: false,
    };

    const objHours3 = {
      time: newDate3,
      inProgress: false,
    };

    const objHours4 = {
      time: newDate4,
      inProgress: false,
    };

    const objHours5 = {
      time: newDate5,
      inProgress: false,
    };

    const objHours6 = {
      time: newDate6,
      inProgress: false,
    };

    const objHours7 = {
      time: newDate7,
      inProgress: false,
    };

    const objHours8 = {
      time: newDate8,
      inProgress: false,
    };

    const objHours9 = {
      time: newDate9,
      inProgress: false,
    };

    // const objHours10 = {
    //   time: newDate10,
    //   inProgress: false,
    // };

    // const objHours11 = {
    //   time: newDate11,
    //   inProgress: false,
    // };

    //05:00 / 09:00 / 10:59, 11:00 12:59, 13:00  14:59, 15:00 16:59, 17:00 18:59, 19:00 20:59, 21:00, 23:00

    const objsHoursFleshOffers = [
      objHours1,
      objHours2,
      objHours3,
      objHours4,
      objHours5,
      objHours6,
      objHours7,
      objHours8,
      objHours9,
      // objHours10,
      // objHours11,
    ];

    // dateNow.setHours(dateNow.getHours() + 8);
    // dateNow = new Date('Fri Nov 08 2024 08:59:55 GMT-0400 (Horário Padrão do Amazonas)');
    // console.log(dateNow);

    // OQUE FALTA É APENAS ATUALIZAR AS DATAS QUE FICAR VENCIDADES NÃO CONSEGUI FAZER

    // Encontra o índice do primeiro horário após o horário atual
    let startIndex = objsHoursFleshOffers.findIndex(
      (obj) => obj.time.getTime() >= dateNow.getTime()
    );

    // Se o horário atual não tiver horário futuro correspondente, comece do primeiro horário
    if (startIndex === -1) {
      startIndex = 0;
    }

    // Ajusta para incluir o horário anterior ao índice encontrado
    startIndex = (startIndex - 1 + objsHoursFleshOffers.length) % objsHoursFleshOffers.length;

    const objsHoursFleshOffersFilter: ObjTime[] = [];

    // Adiciona 8 horários sequenciais, começando do anterior ao horário mais próximo ao atual
    for (let i = 0; i < 8; i++) {
      const index = (startIndex + i) % objsHoursFleshOffers.length;
      objsHoursFleshOffersFilter.push(objsHoursFleshOffers[index]);
    }

    objsHoursFleshOffersFilter[0].inProgress = true;

    this.allHoursFleshOffers = objsHoursFleshOffersFilter;

    this.functionGetTheValueTimeFleshOffer(objsHoursFleshOffersFilter[1].time);
  }

  functionGetTheValueTimeFleshOffer = (time: Date) => {
    // setTimeForCountdown(time);
    this.timeForCountdown = time;
    // let flashSaleCountdown = FlashSaleCountdownFunc(time);
    const flashSaleCountdown = this.flashSaleCountdownService.FlashSaleCountdownFunc(time);

    // setObjTimeFlashDeals(flashSaleCountdown)

    this.objTimeFlashDeals = flashSaleCountdown;
    this.updateObjTimeFlashDeals(flashSaleCountdown);
  };

  getAllHoursFleshOffers = (allHoursFleshOffers: ObjTime) => {
    const time = allHoursFleshOffers.time;

    const hours = time.getHours();
    const minutes = time.getMinutes();

    let dateFull = '';

    if (hours < 10 && minutes < 10) {
      dateFull = `0${hours}:0${minutes}`;
    }

    if (hours >= 10 && minutes < 10) {
      dateFull = `${hours}:0${minutes}`;
    }

    if (hours >= 10 && minutes >= 10) {
      dateFull = `${hours}:${minutes}`;
    }

    this.hourFlashOffer = dateFull;
    this.GetAllProductHour(dateFull);
  };

  getTagProductClicked = (tag: string) => {
    this.tagProduct = tag;

    this.onClickCategory(tag);
  }

  GetAllProductHour = async (dateFull: string) => {
    // console.log(dateFull);
    const valuePageNumber = 0;
    this.pageNumber = 1;

    const hourFlashOffer = dateFull;
    // hourFlashOffer = '09:00';

    if(this.user){
      this.productsOfferFlashService.getAllByTagProductBy(this.user.id, this.user.token,
        hourFlashOffer, this.tagProduct, valuePageNumber
      ).subscribe({
        next: (success) => {
          const data = success.data;
          this.getAllProductHourProps = data;
        },
        error: error => {
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
    }
  };

  onClickCategory = async (tag: string) => {
    const valuePageNumber = 0;

    if(this.user){
      this.productsOfferFlashService.getAllByTagProductBy(this.user.id, this.user.token,
        this.hourFlashOffer, tag, valuePageNumber).subscribe({
        next: (success) => {
          const data = success.data;
          this.getAllProductHourProps = [...data];
        },
        error: error => {
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
    }
  };

  functionGetMoreProductPaginate = (value: boolean) => {
    if (value) {
      // let pagenumberValue = 1;
      // setPageNumber((prev) => {
      //   const value = prev + 1;
      //   pagenumberValue = value;
      //   return value;
      // });

      this.pageNumber = this.pageNumber + 1;

      this.getAllByPageNumberProductCategory(this.pageNumber);
    }
  };

  getAllByPageNumberProductCategory = async (pageNumber: number) => {
    // if (objClickedCategory === 0) return;

    // let tagProduct = itensOfferFlesh[objClickedCategory - 1];
    // tagProduct = tagProduct.replace(/ /g, '_');

    if(this.user){
      this.productsOfferFlashService.getAllByTagProductBy(this.user.id, this.user.token,
        this.hourFlashOffer, this.tagProduct, pageNumber
      ).subscribe({
        next: (success) => {
          const data = success.data;
          console.log(data);

        },
        error: error => {
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
    }
  };
}
