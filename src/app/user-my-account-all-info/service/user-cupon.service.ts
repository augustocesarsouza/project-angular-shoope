import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCupon } from '../../login-and-register-user/interface/user-cupon';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: UserCupon[];
}

@Injectable({
  providedIn: 'root'
})
export class UserCuponService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetAllCuponByUserId(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/user-cupon/get-all-cupon-by-user-id/${userId}`, options).pipe(take(1));
  }
}
