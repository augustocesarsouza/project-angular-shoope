import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { FlashSaleProductAllInfo } from '../../login-and-register-user/interface/flash-sale-product-all-info';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: FlashSaleProductAllInfo;
}

@Injectable({
  providedIn: 'root'
})
export class FlashSaleProductAllInfoService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetFlashSaleProductByProductFlashSaleId(productOfferFlashId: string, userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`${this.baseUrl}/flash-sale-product-all-info/get-flash-sale-product-by-product-flash-sale-id/${productOfferFlashId}`, options).pipe(take(1));
  }
}
