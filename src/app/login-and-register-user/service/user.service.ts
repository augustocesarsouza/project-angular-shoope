import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  // sendTokenForEmail(emailOrCpf: string){
  //   return this.http.get(`/api/v1/public/user/send-token-email-change-password/${emailOrCpf}`).pipe(take(1));
  // }

  login(phone: string, password: string){
    return this._http.get(`/api/public/user/login/${phone}/${password}`).pipe(take(3));
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


    return this._http.post(`/api/public/user/create`, user, options).pipe(take(3));
  }
}
