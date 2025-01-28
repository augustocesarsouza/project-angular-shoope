import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopeeUpdateUser } from '../../login-and-register-user/interface/shopee-update-user';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

export interface ResultData {
  data: ShopeeUpdateUser[];
}

@Injectable({
  providedIn: 'root'
})
export class ShopeeUpdateUserService {
  private baseUrl = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  getByUserIdAll(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`/api/shopee-update-user/get-by-user-id-all/${userId}`, options).pipe(take(1));
  }
}
