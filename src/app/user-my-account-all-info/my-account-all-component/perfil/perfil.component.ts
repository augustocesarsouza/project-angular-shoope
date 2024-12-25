import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';
import { UserService } from '../../../login-and-register-user/service/user.service';

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
  base64StringImage = "";
  cpf: string | null = null;
  @ViewChildren('inputCheckbox') inputCheckboxs!: QueryList<ElementRef<HTMLElement>>;

  settimeOutGender!: NodeJS.Timeout;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    const userResult = UserLocalStorage();

    if(!userResult.isNullUserLocalStorage){
      const user = userResult.user;

      if(user === null) return;

      this.findByIdOnly(user.id);
    }
  }

  ngAfterViewInit(): void {
    console.log();
  }

  async findByIdOnly(userId: string){

    this.userService.findByIdOnly(userId).subscribe({
      next: (success) => {
        const user: User = success.data;

        this.userObjState = user;
        this.nameUser = user.name;

        this.newPhoneUser = user.phone;

        if(user.gender){
          this.genderChooseByUser = user.gender;
        }

        if(user.email){
          this.emailUser = user.email;
        }

        this.emailToShowToUserMyPerfil(user.email);
        this.phoneToShowToUserMyPerfil(user);
        this.cpfConfiguration(user);


        this.settimeOutGender = setTimeout(() => {
          this.clickChooseGender(user.gender);
        }, 10);
      },
      error: error => {
        if(error.status === 400){
          console.log(error);


          // this.confirmEmail = false;
        }
      }
    });
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

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutGender);
  }
}
