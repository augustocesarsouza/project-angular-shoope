import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../interface/user';

export interface ResultData {
  data: User;
}

export interface CodeSendToPhone {
  phone: string;
  code: string;
  codeSendToPhone: boolean;
  phoneAlreadyRegistered: boolean;
}

export interface CodeSendEmailUserValidator {
  name: string;
  email: string;
  code: string;
  codeSendToEmailSuccessfully: boolean;
  userAlreadyExist: boolean;
  emailAlreadyRegistered: boolean;
}

export interface ResultUpdateEmailData {
  data: CodeSendEmailUserValidator;
}

export interface ResultCodeSendToPhoneData {
  data: CodeSendToPhone;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  findByIdOnly(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    return this._http.get<ResultData>(`/api/user/find-by-id-to-address/${userId}`, { headers }).pipe(take(1));
  }

  login(phone: string, password: string){
    return this._http.get<ResultData>(`/api/public/user/login/${phone}/${password}`).pipe(take(1));
  }

  createAccount(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // Colocar "Bearer" token e validar se der error o token tiver sem validação vai lançar error

    console.log(options);


    return this._http.post<ResultData>(`/api/public/user/create`, user, options).pipe(take(1));
  }

  verifyCodeUser(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`/api/public/user/verify`, user, options).pipe(take(1));
  }

  updateUserAll(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`/api/public/user/update-all-info`, user, options).pipe(take(1));
  }

  updateEmailUser(user: unknown, uuid: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Se necessário
      'uid': uuid
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultUpdateEmailData>(`/api/user/confirm-email-send-code`, user, options).pipe(take(1));
  }

  sendCodePhone(objSend: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
      // 'uid': uuid
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultCodeSendToPhoneData>(`/api/public/user/send-code-phone`, objSend, options).pipe(take(1));
  }

  updateCpfAndBirthDayUser(user: unknown, uuid: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Se necessário
      'uid': uuid
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`/api/user/update-cpf-and-birthday-user`, user, options).pipe(take(1));
  }
}
