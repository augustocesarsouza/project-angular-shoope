import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateNumberUrlMyAccountService {
  private numberUrl = new BehaviorSubject<number>(0);

  numberUrl$ = this.numberUrl.asObservable();

   updateImgUser(number: number) {
   this.numberUrl.next(number);
   }

   get currentUser(): number | null {
   return this.numberUrl.getValue();
   }
}
