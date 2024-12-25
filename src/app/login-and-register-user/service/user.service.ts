import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../interface/user';

export interface ResultData {
  data: User;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  // sendTokenForEmail(emailOrCpf: string){
  //   return this.http.get(`/api/v1/public/user/send-token-email-change-password/${emailOrCpf}`).pipe(take(1));
  // }

  findByIdOnly(userId: string){
    return this._http.get<ResultData>(`/api/public/user/find-by-id-to-address/${userId}`).pipe(take(3));
  }

  login(phone: string, password: string){
    return this._http.get<ResultData>(`/api/public/user/login/${phone}/${password}`).pipe(take(3));
  }

  createAccount(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    console.log(options);


    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(3));
  }

  updateUserAll(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`/api/public/user/update-all-info`, user, options).pipe(take(3));
  }
}
