import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {
  userObjState!: User | null;
  showChangeEmailLink = false;
  emailUser = "";
  phoneToShowUser = "";
  genderChooseByUser = "";
  cpf: string | null = null;
  @ViewChildren('inputCheckbox') inputCheckboxs!: QueryList<ElementRef<HTMLElement>>;

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.userObjState = user;

      this.emailToShowToUserMyPerfil(user.email);
      this.phoneToShowToUserMyPerfil(user);
      this.cpfConfiguration(user);
    }
  }

  onClickInsertEmail = () => {
    // setShowInsertEmail(true);
    // setShowMyPerfil(false);
  };

  onClickChangeEmail = () => {
    // setShowChangeEmail(true);
    // setShowMyPerfil(false);
  };

  emailToShowToUserMyPerfil = (email: string) => {
    // email = "augustocesarsantana90@gmail.com";
    if (!email) return;


    if (email.length <= 0) {
      this.emailUser = "";

      return;
    }

    let emailNew = `${email[0]}${email[1]}`;

    const indexArroba = email.indexOf('@');

    for (let i = 0; i < indexArroba; i++) {
      if (i > 1) {
        emailNew += '*';
      }
    }

    emailNew += '@gmail.com';

    this.showChangeEmailLink = true;
    this.emailUser = emailNew;
  };

  // const [emailToShowUser, setEmailToShowUser] = useState('');

  phoneToShowToUserMyPerfil = (user: User) => {
    if (user && user.phone) {

      const phoneSlice = user.phone.slice(6);
      let phoneNew = '';

      for (let i = 0; i < phoneSlice.length; i++) {
        if (i >= 11) {
          phoneNew += phoneSlice[i];
        } else {
          phoneNew += '*';
        }
      }

      // setEmailToShowUser(emailNew);

      this.phoneToShowUser = phoneNew;
    }
  }

  onClickChangePhone = () => {
    // nav('/user/account/phone', { state: { user: userObj } });
  };

  clickChooseGender(gender: string){
    // const inputCheckbox = document.querySelector('.input-checkbox') as HTMLElement;

    this.inputCheckboxs.forEach((el, index) => {
      el.nativeElement.style.border = "2px solid rgba(0, 0, 0, .26)";
      const elCheckBox = el.nativeElement.firstChild as HTMLElement
      elCheckBox.style.background = "none";

      if(gender === 'm' && index === 0){
        el.nativeElement.style.border = "2px solid #ee4d2d";
        elCheckBox.style.background = "#ee4d2d";
      }

      if(gender === 'f' && index === 1){
        el.nativeElement.style.border = "2px solid #ee4d2d";
        elCheckBox.style.background = "#ee4d2d";
      }

      if(gender === 'o' && index === 2){
        el.nativeElement.style.border = "2px solid #ee4d2d";
        elCheckBox.style.background = "#ee4d2d";
      }
    });

    this.genderChooseByUser = gender;
    // background: ${props => props.$showCheckbox ? "#ee4d2d" : "none"};
    // border: 2px solid ${props => props.$showCheckbox ? "#ee4d2d" : "rgba(0, 0, 0, .26)"};
  }

  cpfConfiguration(user: User){
    if(user === null) return;

    if(!user.cpf) return;

    let cpf = user.cpf;
    cpf = "07285007102";
    let newCpf = '';

    for (let i = 0; i < cpf.length; i++) {
      if (i < 7) {
        newCpf += '*';
      }

      if (i === 2 || i === 5) {
        newCpf += '.';
      }

      if (i >= 7) {
        newCpf += cpf[i];
      }

      if (i === 8) {
        newCpf += '-';
      }
    }

    this.cpf = newCpf;
  }

  onClickFillCpfBirthdate(){
    // nav('/user/account/kyc', { state: { user: userObj } });
  }

  onClickSavePefil(){
    console.log();
  }
}

