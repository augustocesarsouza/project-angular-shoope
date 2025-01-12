import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import CryptoJS from 'crypto-js';
import { FlashSaleCountdownService } from '../../../service-all-components/flash-sale-countdown.service';
import { ProductsOfferFlashService } from '../../service/products-offer-flash.service';
import { ProductFlashDeals } from '../../../login-and-register-user/interface/product-flash-deals';

export interface ObjTimeFleshOffer {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ObjTime {
  time: Date;
  inProgress: boolean;
}

@Component({
  selector: 'app-home-body-main',
  templateUrl: './home-body-main.component.html',
  styleUrl: './home-body-main.component.scss'
})
export class HomeBodyMainComponent implements OnInit, AfterViewInit {
  objTimeFlashDeals: ObjTimeFleshOffer | null = null;
  allProductFlashDeals!: ProductFlashDeals[];

  @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private flashSaleCountdownService: FlashSaleCountdownService, private productsOfferFlashService: ProductsOfferFlashService){}

  ngOnInit(): void {
    if (typeof document === 'undefined') return;

    this.productsOfferFlashService.GetAllProduct().subscribe({
      next: (success) => {
        const data = success.data;

        const array = Array(3).fill(data).flat();

        this.allProductFlashDeals = array;
      },
      error: error => {
        if(error.status === 400){
          console.log(error);

          // this.confirmEmail = false;
        }
      }
    });

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

    this.functionGetTheValueTimeFleshOffer(objsHoursFleshOffersFilter[1].time);
  }

  // @ViewChild('carouselCustom') carouselCustom!: ElementRef<HTMLDivElement>;
  // @ViewChild('containerArrowLeft') containerArrowLeft!: ElementRef<HTMLDivElement>;
  // @ViewChild('containerArrowRight') containerArrowRight!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    const scrollElement = this.carouselCustom.nativeElement;
    const containerLeft = this.containerArrowLeft.nativeElement;
    const containerRight = this.containerArrowRight.nativeElement;

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1200, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 1200, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }

  functionGetTheValueTimeFleshOffer = (time: Date) => {
    // const secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;
    const secretKey = environment.angularAppSecretKeyCountdown;

    if (secretKey === undefined || time === null) return;

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(time), secretKey).toString();
    localStorage.setItem('countdowntime', encrypted);

    const flashSaleCountdown = this.flashSaleCountdownService.FlashSaleCountdownFunc(time);

    this.objTimeFlashDeals = flashSaleCountdown;
  };
}
