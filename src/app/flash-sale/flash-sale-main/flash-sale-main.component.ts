import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjTimeFleshOffer } from '../../home-page/header-body-home-shopee/home-body-main/home-body-main.component';

@Component({
    selector: 'app-flash-sale-main',
    templateUrl: './flash-sale-main.component.html',
    styleUrl: './flash-sale-main.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class FlashSaleMainComponent implements OnInit {

  constructor(private router: Router){}

  // const [timeForCountdown, setTimeForCountdown] = useState<Date | null>(null);
  // const [objTimeFlashDeals, setObjTimeFlashDeals] = useState<ObjTimeFleshOffer | null>(null);

  timeForCountdown: Date | null = null;
  objTimeFlashDeals: ObjTimeFleshOffer | null = null;

  ngOnInit(): void {
    this.updateObjTimeFlashDeals.bind(this);
  }

  updateObjTimeFlashDeals(objTime: ObjTimeFleshOffer){
    this.objTimeFlashDeals = objTime;
  }
}
