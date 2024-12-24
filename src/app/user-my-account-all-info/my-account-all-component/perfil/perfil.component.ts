import { Component, OnInit } from '@angular/core';
import { User } from '../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {
  userObjState!: User | null;

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;
      this.userObjState = user;
      console.log(this.userObjState);

    }
  }
}
