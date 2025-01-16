import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductHighlight } from '../../login-and-register-user/interface/product-highlight';
import { take } from 'rxjs';

export interface ResultData {
  data: ProductHighlight[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductHighlightService {

  constructor(private _http: HttpClient) { }

  GetAllProductHighlights(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultData>(`/api/product-highlight/get-all-product-highlights`, options).pipe(take(1));
  }
}
