import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Address } from '../../login-and-register-user/interface/address';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: Address;
}

export interface ResultDataArray {
  data: Address[];
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  getAddressByUserId(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.get<ResultDataArray>(`${this.baseUrl}/address/get-address-by-user-id/${userId}`, options).pipe(take(1));
  }

  createAddress(address: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.post<ResultData>(`${this.baseUrl}/public/address/create`, address, options).pipe(take(1));
  }

  updateAddress(address: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.put<ResultData>(`${this.baseUrl}/public/address/update`, address, options).pipe(take(1));
  }

  updateAddressDefault(address: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.put<ResultData>(`${this.baseUrl}/public/address/update-only-default-address`, address, options).pipe(take(1));
  }

  deleteAddress(addressId: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    return this._http.delete<ResultData>(`${this.baseUrl}/public/address/delete/${addressId}`, options).pipe(take(1));
  }
}
