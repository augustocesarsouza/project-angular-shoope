import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOptionImageBottom } from '../../login-and-register-user/interface/product-option-image-bottom';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

export interface ResultData {
  data: ProductOptionImageBottom;
}

@Injectable({
  providedIn: 'root'
})
export class ProductOptionImageBottomService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetByListFlashSaleProductImageAllId(productsOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/product-option-image-bottom/get-by-list-flash-sale-product-image-all-id/${productsOfferFlashId}`, options).pipe(take(1));
  }
}
