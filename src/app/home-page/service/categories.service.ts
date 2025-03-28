import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../../login-and-register-user/interface/categories';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ResultData {
  data: Categories[];
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) { }

  GetAllCategories(userId: string, token: string){
    // if(this.isTest){
    //   return of({ data: [] });
    // }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'uid': userId
    });

    const options = {
      headers: headers,
    };

    // console.log(options);


    // return this._http.get<ResultData>(`/api/categories/get-all-categories`, options).pipe(take(1));
    return this._http.get<ResultData>(`${this.baseUrl}/categories/get-all-categories`, options).pipe(take(1));
  }
}
