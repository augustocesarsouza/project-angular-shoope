import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { PromotionUser } from '../../login-and-register-user/interface/promotion-user';
import { environment } from '../../../environments/environment.prod';

export interface ResultData {
  data: PromotionUser[];
}

@Injectable({
  providedIn: 'root'
})
export class PromotionUserService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  getByUserIdAll(userId: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/public/promotion-user/get-by-user-id-all-to-promotion-user/${userId}`, options).pipe(take(1));
  }
}
