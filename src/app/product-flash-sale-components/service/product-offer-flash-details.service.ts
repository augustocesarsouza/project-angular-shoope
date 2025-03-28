import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ProductOfferFlashDetails } from '../../login-and-register-user/interface/product-offer-flash-details';
import { environmentDev } from '../../../environments/environment.prod';

export interface ResultData {
  data: ProductOfferFlashDetails;
}

@Injectable({
  providedIn: 'root'
})
export class ProductOfferFlashDetailsService {
  private baseUrl = environmentDev.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetByProductsOfferFlashId(productOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-offer-flash-details/get-by-products-offer-flash-id/${productOfferFlashId}`, options).pipe(take(1));
  }
}
