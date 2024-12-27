import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class GetUserPerfilService {
  private user = new BehaviorSubject<User | null>(null);

  user$ = this.user.asObservable();

   updateImgUser(user: User) {
    this.user.next(user);
   }

   get currentUser(): User | null {
    return this.user.getValue();
   }
}
