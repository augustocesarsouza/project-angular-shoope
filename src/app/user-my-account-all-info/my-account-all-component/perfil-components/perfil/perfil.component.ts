import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { GetUserPerfilService } from '../../../../login-and-register-user/service/get-user-perfil.service';
import { environment } from '../../../../../environments/environment';
import CryptoJS from 'crypto-js';
import { UserService } from '../../../../login-and-register-user/service/user.service';

interface UserToLocalStorage {
  id: string;
  name: string;
  phone: string;
  token: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit, AfterViewInit, OnDestroy {
  userObjState!: User | null;
  showChangeEmailLink = false;
  nameUser = "";
  emailUser = "";
  newPhoneUser = "";
  genderChooseByUser = "";
  phoneToShowUser = "";
  emailToShowUser = "";
  birthDateShowUser = "";
  cpfShowUser = "";
  base64StringImage: string | null = null;
  cpf: string | null = null;
  @ViewChildren('inputCheckbox') inputCheckboxs!: QueryList<ElementRef<HTMLElement>>;

  settimeOutGender!: NodeJS.Timeout;
  settimeOutFindByIdOnly!: NodeJS.Timeout;
  token: string | null = null;

  constructor(private userService: UserService, private getUserPerfilService: GetUserPerfilService, private router: Router){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.token = user.token;

      this.findByIdOnly(user);
    }
  }

  ngAfterViewInit(): void {
    console.log();
  }

  findByIdOnly(user: User){
    const userId = user.id;
    this.userService.findByIdOnly(userId, user.token).subscribe({
      next: (success) => {
        const userFind: User = success.data;
        console.log(userFind);

        const userToLocalStorage = {
          id: userFind.id,
          name: userFind.name,
          phone: userFind.phone,
          token: user.token,
        }

        this.updateLocalStorage(userToLocalStorage);

        this.userObjState = userFind;
        this.newPhoneUser = userFind.phone;
        this.nameUser = userFind.name;
        this.emailUser = userFind.email;

        this.getUserPerfilService.updateImgUser(userFind);

        this.emailToShowToUserMyPerfil(userFind.email);

        this.phoneToShowToUserMyPerfil(userFind.phone);

        this.cpfConfiguration(userFind);
        this.birthDayConfiguration(userFind);

        this.settimeOutGender = setTimeout(() => {
          this.clickChooseGender(userFind.gender);
        }, 10);
      },
      error: error => {
        console.log(error);

        if(error.status === 400){
          console.log(error);
          // this.confirmEmail = false;
        }

        if(error.status === 403){
          localStorage.removeItem('user');
          this.router.navigate(['/buyer/login']);
          // this.confirmEmail = false;
        }
      }
    });
  }

  onClickInsertEmail = () => {
    // setShowInsertEmail(true);
    // setShowMyPerfil(false);
    this.router.navigate(['/user/account/email']);
  };

  onClickChangeEmail = () => {
    // setShowChangeEmail(true);
    // setShowMyPerfil(false);
    this.router.navigate(['/user/account/change-email']);
  };

  emailToShowToUserMyPerfil = (email: string) => {
    // email = "augustocesarsantana90@gmail.com";
    if (!email) return;

    if (email.length <= 0) {
      this.emailToShowUser = "";

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
    this.emailToShowUser = emailNew;
  };

  // const [emailToShowUser, setEmailToShowUser] = useState('');

  phoneToShowToUserMyPerfil = (phone: string) => {
    let phoneNew = '';
    if (phone) {
      const phoneSlice = phone.slice(6);

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
    // nav('/user/account/phone');
    this.router.navigate(['/user/account/phone']);
  };

  clickChooseGender(gender: string){
    this.genderChooseByUser = gender;

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
    // background: ${props => props.$showCheckbox ? "#ee4d2d" : "none"};
    // border: 2px solid ${props => props.$showCheckbox ? "#ee4d2d" : "rgba(0, 0, 0, .26)"};
  }

  cpfConfiguration(user: User){
    if(user === null) return;

    if(!user.cpf) return;

    const cpf = user.cpf;
    this.cpf = cpf;
    // cpf = "07285007102";
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

    this.cpfShowUser = newCpf;
  }

  birthDayConfiguration(user: User){
    if(user === null) return;

    if(!user.birthDate) return;

    const birthDate = user.birthDate;

    const birthDateInner = birthDate.split("T")[0];
    const birthDateYearMonthDate = birthDateInner.split("-");
    const birthDateInConfigBrazil = `${birthDateYearMonthDate[2]}-${birthDateYearMonthDate[1]}-${birthDateYearMonthDate[0]}`;

    let birthDateConfig = "";

    for (const el of birthDateInConfigBrazil) {
      if(el !== "-"){
        birthDateConfig += "*";
      }

      if(el === "-"){
        birthDateConfig += ".";
      }
    }

    this.birthDateShowUser = birthDateConfig;
  }


  onClickFillCpfBirthdate(){
    // nav('/user/account/kyc', { state: { user: userObj } });
    this.router.navigate(['/user/account/kyc'], { queryParams: { cpf: null } });
  }

  onClickChangeCpfBirthdate(){
    this.router.navigate(['/user/account/kyc'], { queryParams: { cpf: this.cpf } });
  }

  onClickSavePefil(event: MouseEvent){
    event.preventDefault();

    if(this.userObjState === null) return;

    const userUpdate = {
      userId: this.userObjState.id,
      name: this.nameUser,
      email: this.emailUser,
      gender: this.genderChooseByUser,
      phone: this.newPhoneUser,
      cpf: this.cpf,
      birthDate: '',
      base64StringImage: this.base64StringImage,
    };

    this.userService.updateUserAll(userUpdate).subscribe({
      next: (success) => {
        this.userObjState = success.data;

        if(this.token === null) return;

        const userToLocalStorage = {
          id: success.data.id,
          name: success.data.name,
          phone: success.data.phone,
          token: this.token,
        }

        this.updateLocalStorage(userToLocalStorage);

        this.base64StringImage = null;
      },
      error: error => {
        if(error.status === 400){
          console.log(error);

          // this.confirmEmail = false;
        }
      }
    });
  }

  onClickButtonSelectionImage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target.files === null || target.files.length <= 0) return;

      const file = target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64String = reader.result as string;
        this.base64StringImage = base64String;
      };

      reader.onerror = (error) => {
        console.error('Erro ao ler o arquivo:', error);
      };
    });

    fileInput.click();
  };

  changeInputName(e: Event){
    const input = e.target as HTMLInputElement;

    if(input.value.length > 0){
      this.nameUser = input.value;
    }
  }

  updateLocalStorage(userToLocalStorage: UserToLocalStorage){


    const secretKey = environment.angularAppSecretKeyUser;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userToLocalStorage), secretKey).toString();
    localStorage.setItem('user', encrypted);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutGender);
    clearTimeout(this.settimeOutFindByIdOnly);
  }
}