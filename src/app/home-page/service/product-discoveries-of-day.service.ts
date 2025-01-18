import { Injectable } from '@angular/core';
import { ProductDiscoveriesOfTheDay } from '../../login-and-register-user/interface/product-discoveries-of-the-day';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

export interface ResultData {
  data: ProductDiscoveriesOfTheDay[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductDiscoveriesOfDayService {

  constructor(private _http: HttpClient) { }

  GetAllProductDiscoveriesOfDays(userId: string, token: string){
    // if(this.isTest){
    //   return of({ data: [] });
    // }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`/api/product-discoveries-of-day/get-all-product-discoveries-of-day`, options).pipe(take(1));
  }
}