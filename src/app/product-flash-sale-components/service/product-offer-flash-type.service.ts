import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOfferFlashType } from '../../login-and-register-user/interface/product-offer-flash-type';
import { take } from 'rxjs';
import { environmentDev } from '../../../environments/environment.prod';

export interface ResultData {
  data: ProductOfferFlashType[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductOfferFlashTypeService {
  private baseUrl = environmentDev.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetAllProductOfferFlashTypeByProductsOfferFlashId(productOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-offer-flash-type/get-all-product-offer-flash-type-by-products-offer-flash-id/${productOfferFlashId}`, options).pipe(take(1));
  }
}
