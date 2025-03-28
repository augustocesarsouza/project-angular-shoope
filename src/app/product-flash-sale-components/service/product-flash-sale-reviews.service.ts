import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFlashSaleReview } from '../../login-and-register-user/interface/product-flash-sale-review';
import { take } from 'rxjs';
import { environmentDev } from '../../../environments/environment.prod';

export interface ResultData {
  data: ProductFlashSaleReview[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductFlashSaleReviewsService {
  private baseUrl = environmentDev.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetAllProductFlashSaleReviewsByProductsOfferFlashId(productOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-flash-sale-reviews/get-all-product-flash-sale-reviews-by-product-flash-sale-id/${productOfferFlashId}`, options).pipe(take(1));
  }
}
