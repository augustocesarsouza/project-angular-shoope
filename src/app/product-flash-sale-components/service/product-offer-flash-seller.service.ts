import { Injectable } from '@angular/core';
import { ProductOfferFlashSeller } from '../../login-and-register-user/interface/product-offer-flash-seller';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { environmentDev } from '../../../environments/environment.prod';

export interface ResultData {
  data: ProductOfferFlashSeller;
}

@Injectable({
  providedIn: 'root'
})
export class ProductOfferFlashSellerService {
  private baseUrl = environmentDev.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetByProductsOfferFlashId(productsOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-offer-flash-seller/get-by-products-offer-flash-id/${productsOfferFlashId}`, options).pipe(take(1));
  }
}
