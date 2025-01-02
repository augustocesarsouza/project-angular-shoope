import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'cluster';
import { take } from 'rxjs';

export interface ResultData {
  data: Address;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient) { }

  createAddress(address: unknown){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer your-auth-token' // Se necessário
      });

      const options = {
        headers: headers,
      };

      // console.log(options);


      return this._http.post<ResultData>(`/api/public/address/create`, address, options).pipe(take(1));
    }
}
