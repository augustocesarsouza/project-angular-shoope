import { Component, OnInit } from '@angular/core';
import { User } from '../../../../login-and-register-user/interface/user';
import { CodeSendEmailUserValidator, UserService } from '../../../../login-and-register-user/service/user.service';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';

@Component({
    selector: 'app-change-email',
    templateUrl: './change-email.component.html',
    styleUrl: './change-email.component.scss',
    standalone: false
})
export class ChangeEmailComponent implements OnInit {
  canClickSendCodeEmail = false;
    emailUser: string | null = null;
    user!: User;

    emailAlreadyRegisteredAnotherAccount = false;
    emailEqualEmailAlreadyRegisteredThisAccount = false;

    constructor(private userService: UserService, private router: Router){

    }

    ngOnInit(): void {
      const userResult = UserLocalStorage();

      if(userResult.isNullUserLocalStorage){
        localStorage.removeItem('user');
        this.router.navigate(['/buyer/login']);
        return;
      };


      if(!userResult.isNullUserLocalStorage){
        const user = userResult.user;

        if(user === null) return;

        this.user = user;
      }

    }

    onChangeInputInsertEmail = (event: Event) => {
      const buttonNext = document.querySelector(".button-next") as HTMLElement;
      const input = event.target as HTMLInputElement;
      // console.log(buttonNext);

      if (buttonNext === null) return;

      if (input !== null && input.value.length > 1 && input.value.includes('@')) {
        buttonNext.style.backgroundColor = '#ee4d2d';
        buttonNext.style.cursor = 'pointer';
        this.canClickSendCodeEmail = true;
        this.emailUser = input.value;
      } else {
        buttonNext.style.backgroundColor = '#facac0';
        buttonNext.style.cursor = 'not-allowed';
        this.canClickSendCodeEmail = false;
        this.emailUser = null;
      }
    };

    onClickSendCodeEmail = () => {
      if(!this.canClickSendCodeEmail) return;

      if (this.emailUser === null) return;

      const objSend = {
        name: this.user.name,
        email: this.emailUser,
      };

      const containerInputEmail = document.querySelector(".container-input-email") as HTMLElement;

      const email = this.emailUser;
      const token = this.user.token;
      const uuid = this.user.id;

      this.userService.updateEmailUser(objSend, uuid, token).subscribe({
        next: (success) => {
          // this.userObjState = success.data;
          const codeSendEmailUserValidator: CodeSendEmailUserValidator = success.data;

          if(codeSendEmailUserValidator.userAlreadyExist){
            this.emailAlreadyRegisteredAnotherAccount = true;

            containerInputEmail.style.borderColor = "red";
          }

          if(codeSendEmailUserValidator.emailAlreadyRegistered){
            this.emailEqualEmailAlreadyRegisteredThisAccount = true;
          }

          if (codeSendEmailUserValidator.codeSendToEmailSuccessfully) {
            this.router.navigate(['confirm-code-email'], { queryParams: { email: email } });
          }

          // Fazer a Troca Do Email
        },
        error: error => {
          if(error.status === 400){
            console.log(error);

            // this.confirmEmail = false;
          }
        }
      });

    };

    onClickCheckbox = () => {
      // setShowCheckbox((el) => !el);
    };
}
