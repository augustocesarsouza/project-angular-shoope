import { Component, OnInit } from '@angular/core';
import { User } from '../../../login-and-register-user/interface/user';
import { ShopeeUpdateUserService } from '../../service/shopee-update-user.service';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { ShopeeUpdateUser } from '../../../login-and-register-user/interface/shopee-update-user';

@Component({
  selector: 'app-shopee-updates',
  templateUrl: './shopee-updates.component.html',
  styleUrl: './shopee-updates.component.scss'
})
export class ShopeeUpdatesComponent implements OnInit {
  userObjState!: User | null;
  shopeeUpdateUser!: ShopeeUpdateUser[];

  constructor(private router: Router, private shopeeUpdateUserService: ShopeeUpdateUserService){
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
        this.shopeeUpdateUserService.getByUserIdAll(user.id, user.token).subscribe({
          next: (success) => {
            const shopeeUpdateUser = success.data;
            console.log(shopeeUpdateUser);
            this.shopeeUpdateUser = shopeeUpdateUser;
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
