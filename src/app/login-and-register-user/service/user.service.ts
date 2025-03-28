import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../interface/user';
import { UserLogin } from '../interface/user-login';
import { environment } from '../../../environments/environment.prod';

export interface ResultData {
  data: User;
}

export interface ResultLoginUserData {
  data: UserLogin;
}

export interface ResultChangePasswordData {
  data: ChangePassword;
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

export interface ChangePassword {
  passwordUpdateSuccessfully: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BASE_URL || '/api';
  // Arrumar isso para ver porque ele nao está fazendo as requeisição
  // Testa o postman fazer get amanha para ver se vai funcicionar porque aqui ele nao tras nada testao back puchando no POSTMAN

  constructor(private _http: HttpClient) { }

  findByIdOnly(userId: string, token: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    return this._http.get<ResultData>(`${this.baseUrl}/user/find-by-id-to-address/${userId}`, { headers }).pipe(take(1));
  }

  login(phone: string, password: string){
    return this._http.get<ResultData>(`${this.baseUrl}/public/user/login/${phone}/${password}`).pipe(take(1));
  }

  verifyPassword(phone: string, password: string){
    return this._http.get<ResultLoginUserData>(`${this.baseUrl}/public/user/verify-password/${phone}/${password}`).pipe(take(1));
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


    return this._http.post<ResultData>(`${this.baseUrl}/public/user/create`, user, options).pipe(take(1));
  }

  updateUserPassword(userChangePasswordDTO: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    // Colocar "Bearer" token e validar se der error o token tiver sem validação vai lançar error

    return this._http.put<ResultChangePasswordData>(`${this.baseUrl}/public/user/update-user-password`, userChangePasswordDTO, options).pipe(take(1));
  }

  verifyCodeUser(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.post<ResultData>(`${this.baseUrl}/public/user/verify`, user, options).pipe(take(1));
  }

  updateUserAll(user: unknown){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this._http.put<ResultData>(`${this.baseUrl}/public/user/update-all-info`, user, options).pipe(take(1));
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

    return this._http.post<ResultUpdateEmailData>(`${this.baseUrl}/user/confirm-email-send-code`, user, options).pipe(take(1));
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

    return this._http.post<ResultCodeSendToPhoneData>(`${this.baseUrl}/public/user/send-code-phone`, objSend, options).pipe(take(1));
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

    return this._http.put<ResultData>(`${this.baseUrl}/user/update-cpf-and-birthday-user`, user, options).pipe(take(1));
  }
}
