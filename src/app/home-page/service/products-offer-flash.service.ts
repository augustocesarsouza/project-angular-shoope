import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import { of, take } from 'rxjs';

export interface ResultData {
  data: ProductFlashDeals[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsOfferFlashService {
  isTest = false;

  constructor(private _http: HttpClient) { }

  GetAllProduct(){
    if(this.isTest){
      return of({ data: [] });
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`/api/public/product-offer-flash/get-product-offer-flash-all`, options).pipe(take(1));
  }

}