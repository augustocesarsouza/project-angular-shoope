import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFlashDeals } from '../../login-and-register-user/interface/product-flash-deals';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: ProductFlashDeals[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsOfferFlashService {
  isTest = false;
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetAllProduct(){
    // if(this.isTest){
    //   return of({ data: [] });
    // }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/public/product-offer-flash/get-product-offer-flash-all`, options).pipe(take(1));
  }

  getAllByTagProductBy(userId: string, token: string, hourFlashOffer: string, tagProduct: string, pageNumber: number){
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


    return this._http.get<ResultData>(`${this.baseUrl}/product-offer-flash/get-all-by-tag-product/${hourFlashOffer}/${tagProduct}/${pageNumber}/10`, options).pipe(take(1));
  }
}
