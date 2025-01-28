import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { GetUserPerfilService } from '../../../../login-and-register-user/service/get-user-perfil.service';
import { environment } from '../../../../../environments/environment';
import CryptoJS from 'crypto-js';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { UpdateNumberUrlMyAccountService } from '../../../../login-and-register-user/service/update-number-url-my-account.service';

interface UserToLocalStorage {
  id: string;
  name: string;
  phone: string;
  token: string;
}

@Component({ // VERIFICAR AS OUTRAS VALIDAÇÃO DO MEU PERFIL O RESTO QUE FALTA DO "FORMULARIO" JÁ FIZ, Nome de Usuario
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

  settimeOutArray: number[] = [];

  token: string | null = null;

  allowSavePerfil = true;
  errorNameUser = false;
  buttonSavePerfil!: HTMLButtonElement;
  inputNameUser!: HTMLInputElement;

  constructor(private userService: UserService, private getUserPerfilService: GetUserPerfilService, private updateNumberUrlMyAccountService: UpdateNumberUrlMyAccountService,
    private router: Router){}

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

      this.token = user.token;

      this.findByIdOnly(user);
    }
  }

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    const value = setTimeout(() => {
      const buttonSavePerfil = document.querySelector(".button-save-perfil")as HTMLButtonElement;
      this.buttonSavePerfil = buttonSavePerfil;

      const inputNameUser = document.querySelector(".input-name-user") as HTMLInputElement;
      this.inputNameUser = inputNameUser;
    }, 100) as unknown as number;

    this.settimeOutArray.push(value);

    const spanPerfilFromMyAccount = document.querySelector("#span-perfil-from-my-account") as HTMLSpanElement;
    const spanCardAndBankAccountsFromMyAccount = document.querySelector("#span-card-and-bank-accounts-from-my-account") as HTMLSpanElement;
    const spanAddressFromMyAccount = document.querySelector("#span-address-from-my-account") as HTMLSpanElement;
    const spanChangePasswordFromMyAccount = document.querySelector("#span-change-password-from-my-account") as HTMLSpanElement;
    const spanCookiePreferencesFromMyAccount = document.querySelector("#span-cookie-preferences-from-my-account") as HTMLSpanElement;
    const spanPrivacySettingsFromMyAccount = document.querySelector("#span-privacy-settings-from-my-account") as HTMLSpanElement;

    if(!spanPerfilFromMyAccount || !spanCardAndBankAccountsFromMyAccount || !spanAddressFromMyAccount || !spanChangePasswordFromMyAccount || !spanCookiePreferencesFromMyAccount || !spanPrivacySettingsFromMyAccount) return;

    spanCardAndBankAccountsFromMyAccount.style.color = "rgba(0, 0, 0, 0.65)";
    spanAddressFromMyAccount.style.color = "rgba(0, 0, 0, 0.65)";
    spanChangePasswordFromMyAccount.style.color = "rgba(0, 0, 0, 0.65)";
    spanCookiePreferencesFromMyAccount.style.color = "rgba(0, 0, 0, 0.65)";
    spanPrivacySettingsFromMyAccount.style.color = "rgba(0, 0, 0, 0.65)";

    const numberUrl = this.updateNumberUrlMyAccountService.currentUser;
    if(numberUrl === 0){
      spanPerfilFromMyAccount.style.color = "#ee4d2d";
    }
  }

  findByIdOnly(user: User){
    const userId = user.id;
    this.userService.findByIdOnly(userId, user.token).subscribe({
      next: (success) => {
        const userFind: User = success.data;

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


        const value = setTimeout(() => {
          this.clickChooseGender(userFind.gender);
        }, 10) as unknown as number;

        this.settimeOutArray.push(value);
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

    if(this.userObjState === null || !this.allowSavePerfil) return;

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

      const regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9._]{5,30}$/;

      if(regex.test(input.value)){
        this.allowSavePerfil = true;
        this.errorNameUser = false;

        this.buttonSavePerfilAndInputNameNoError();
      }else {
        this.allowSavePerfil = false;
        this.errorNameUser = true;

        this.buttonSavePerfilAndInputNameError();
      }
    }else {
      this.allowSavePerfil = false;
      this.errorNameUser = true;

      this.buttonSavePerfilAndInputNameError();
    }
  }

  buttonSavePerfilAndInputNameNoError(){
    this.inputNameUser.style.borderColor = "rgba(0, 0, 0, 0.1490196078)";

    this.buttonSavePerfil.style.opacity = "1";
    this.buttonSavePerfil.style.cursor = "pointer";
  }

  buttonSavePerfilAndInputNameError(){
    this.inputNameUser.style.borderColor = "red";

    this.buttonSavePerfil.style.opacity = "0.7";
    this.buttonSavePerfil.style.cursor = "not-allowed";
  }

  updateLocalStorage(userToLocalStorage: UserToLocalStorage){
    const secretKey = environment.angularAppSecretKeyUser;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userToLocalStorage), secretKey).toString();
    localStorage.setItem('user', encrypted);
  }

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((timeoutId) => clearTimeout(timeoutId));
  }
}
