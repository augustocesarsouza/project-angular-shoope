import { Component, OnInit} from '@angular/core';
import {  PromotionUserService } from '../../service/promotion-user.service';
import { User } from '../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { PromotionUser } from '../../../login-and-register-user/interface/promotion-user';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss'
})
export class PromotionComponent implements OnInit {
  userObjState!: User | null;
  promotionUser!: PromotionUser[];

  constructor(private router: Router, private promotionUserService: PromotionUserService){
  }

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(userResult.isNullUserLocalStorage){
      localStorage.removeItem('user');
      this.router.navigate(['/buyer/login']);
      return;
    };


    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      this.userObjState = user;

      if(user){
        this.promotionUserService.getByUserIdAll(user.id).subscribe({
          next: (success) => {
            const promotionUser = success.data;
            console.log(promotionUser);


            this.promotionUser = promotionUser;
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
    }
  }

  formatDateUser(data: string){
    const dateFormat = data.split("T");
    const arrayDate = dateFormat[0].split("-");
    const dateFormatBrazil = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
    const arrayHour = dateFormat[1].split("-");
    const arrayHourSplitTwoPoint = arrayHour[0].split(":");
    const hourFormatBrazil = `${arrayHourSplitTwoPoint[0]}:${arrayHourSplitTwoPoint[1]}`;

    const stringDateFormatBrazilAndHour = `${dateFormatBrazil} ${hourFormatBrazil}`;

    return stringDateFormatBrazilAndHour;
  }
}
