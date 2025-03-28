import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ProductOfferFlashDescription } from '../../login-and-register-user/interface/product-offer-flash-description';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: ProductOfferFlashDescription;
}

@Injectable({
  providedIn: 'root'
})
export class ProductOfferFlashDescriptionService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetByProductsOfferFlashIdDescription(productOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-offer-flash-description/get-by-products-offer-flash-id/${productOfferFlashId}`, options).pipe(take(1));
  }
}
