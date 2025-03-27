import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { GetUserPerfilService } from '../../../../login-and-register-user/service/get-user-perfil.service';
import { User } from '../../../../login-and-register-user/interface/user';
import { RouterTestingModule } from '@angular/router/testing';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PerfilComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [UserService, GetUserPerfilService, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const userObj: User = {
      id: "eaf93fa8-955c-408b-888a-d031ead2f6f2",
      name: "name1",
      email: "email1@example.com",
      phone: "(+55) 67 98114 5503",
      cpf: "23232323232",
      birthDate: "1912-12-05 00:00:00.000",
      gender: "m",
      token: "token1",
      confirmEmail: 0,
      userImage: null,
    };

    component.userObjState = userObj;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header my profile', () => {
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.container-only-perfil h1');
    expect(header).not.toBeNull();
    expect(header.textContent.trim()).toBe('Meu perfil');
  });

  it('should render span Manage and secure your account', () => {
    fixture.detectChanges();

    const spanManageSecureAccount = fixture.nativeElement.querySelector('.container-only-perfil span');
    expect(spanManageSecureAccount).not.toBeNull();
    expect(spanManageSecureAccount.textContent.trim()).toBe('Gerenciar e proteger sua conta');
  });

  it('should render info form name and input name', () => {
    fixture.detectChanges();

    const labelUserName = fixture.nativeElement.querySelector('label[for="username"]');
    expect(labelUserName).not.toBeNull();
    expect(labelUserName.textContent.trim()).toBe('Nome de usuário');

    const inputNameUser = fixture.nativeElement.querySelector('.input-name-user');
    expect(inputNameUser).not.toBeNull();
  });

  it('should render errorNameUser is false', () => {
    component.errorNameUser = false;
    fixture.detectChanges();

    const spanErrorNameUserIsFalse = fixture.nativeElement.querySelector('.span-without-error-user');
    expect(spanErrorNameUserIsFalse).not.toBeNull();
    expect(spanErrorNameUserIsFalse.textContent.trim()).toBe('Nome do usuário pode ser alterado apenas uma vez.');
  });

  it('should render errorNameUser is true', () => {
    component.errorNameUser = true;
    fixture.detectChanges();

    const spanErrorNameUserIsTrue = fixture.nativeElement.querySelector('.span-error-message-user-invalid');
    expect(spanErrorNameUserIsTrue).not.toBeNull();
    expect(spanErrorNameUserIsTrue.textContent.trim()).toBe('O nome de usuário deve ter 5 a 30 caracteres com pelo menos uma letra (a-z). Você pode incluir números (0-9), pontos (.), e sublinhados (_).');
  });

  it('should render info form name label input', () => {
    fixture.detectChanges();

    const labelName = fixture.nativeElement.querySelector('label[for="name"]');
    expect(labelName).not.toBeNull();
    expect(labelName.textContent.trim()).toBe('Nome');

    const inputNameUser = fixture.nativeElement.querySelector('#input-name-user');
    expect(inputNameUser).not.toBeNull();
  });

  it('should render info form email label input span', () => {
    fixture.detectChanges();

    const labelEmail = fixture.nativeElement.querySelector('label[for="email"]');
    expect(labelEmail).not.toBeNull();
    expect(labelEmail.textContent.trim()).toBe('Email');
  });

  it('should render when showChangeEmailLink is true', () => {
    const emailUser = "augusto@gmail.com";
    component.showChangeEmailLink = true;
    component.emailToShowUser = emailUser;
    fixture.detectChanges();

    const labelEmail = fixture.nativeElement.querySelector('label[for="email"]');
    expect(labelEmail).not.toBeNull();
    expect(labelEmail.textContent.trim()).toBe('Email');

    const spanEmailUser = fixture.nativeElement.querySelector('#span-email-user');
    expect(spanEmailUser).not.toBeNull();
    expect(spanEmailUser.textContent.trim()).toBe(emailUser);

    const linkChangeEmail = fixture.nativeElement.querySelector('#link-change-email');
    expect(linkChangeEmail).not.toBeNull();
    expect(linkChangeEmail.textContent.trim()).toBe("Trocar");
  });

  it('should render when showChangeEmailLink is false', () => {
    component.showChangeEmailLink = false;
    fixture.detectChanges();

    const linkChangeEmail = fixture.nativeElement.querySelector('#link-insert-email');
    expect(linkChangeEmail).not.toBeNull();
    expect(linkChangeEmail.textContent.trim()).toBe("Inserir");
  });

  it('should render info form number phone', () => {
    fixture.detectChanges();

    const labelNumberPhone = fixture.nativeElement.querySelector('label[for="number-phone"]');
    expect(labelNumberPhone).not.toBeNull();
    expect(labelNumberPhone.textContent.trim()).toBe('Número de telefone');
  });

  it('should render phoneToShowUser is greater than 0', () => {
    const phoneToShowUser = "***********03";
    component.phoneToShowUser = phoneToShowUser;
    fixture.detectChanges();

    const containerPhoneToShowUser = fixture.nativeElement.querySelector('#container-phone-to-show-user');
    expect(containerPhoneToShowUser).not.toBeNull();
    expect(containerPhoneToShowUser.textContent.trim()).toBe(phoneToShowUser);

    const linkChangePhone = fixture.nativeElement.querySelector('#link-change-phone');
    expect(linkChangePhone).not.toBeNull();
    expect(linkChangePhone.textContent.trim()).toBe("Trocar");
  });

  it('should render phoneToShowUser is less than 0', () => {
    const phoneToShowUser = "";
    component.phoneToShowUser = phoneToShowUser;
    fixture.detectChanges();

    const linkInsertPhone = fixture.nativeElement.querySelector('#link-insert-phone');
    expect(linkInsertPhone).not.toBeNull();
    expect(linkInsertPhone.textContent.trim()).toBe("Inserir");
  });

  it('should render info form label gender', () => {
    fixture.detectChanges();

    const labelGender = fixture.nativeElement.querySelector('label[for="gender"]');
    expect(labelGender).not.toBeNull();
    expect(labelGender.textContent.trim()).toBe('Sexo');
  });

  it('should render input checkbox Gender M and Gender F and Gender O', () => {
    fixture.detectChanges();

    const inputCheckboxGenderM = fixture.nativeElement.querySelector('#input-checkbox-gender-m');
    expect(inputCheckboxGenderM).not.toBeNull();

    const spanGenderUserM = fixture.nativeElement.querySelector('#span-gender-user-m');
    expect(spanGenderUserM).not.toBeNull();
    expect(spanGenderUserM.textContent.trim()).toBe('masculino');

    const inputCheckboxGenderF = fixture.nativeElement.querySelector('#input-checkbox-gender-f');
    expect(inputCheckboxGenderF).not.toBeNull();

    const spanGenderUserF = fixture.nativeElement.querySelector('#span-gender-user-f');
    expect(spanGenderUserF).not.toBeNull();
    expect(spanGenderUserF.textContent.trim()).toBe('feminino');

    const inputCheckboxGenderO = fixture.nativeElement.querySelector('#input-checkbox-gender-o');
    expect(inputCheckboxGenderO).not.toBeNull();

    const spanGenderUserO = fixture.nativeElement.querySelector('#span-gender-user-o');
    expect(spanGenderUserO).not.toBeNull();
    expect(spanGenderUserO.textContent.trim()).toBe('Outros');
  });

  it('should render form info cpf birth date', () => {
    const cpfShowUser = "***.***.*32-32";
    const birthDateShowUser = "**.**.****";
    component.cpfShowUser = cpfShowUser;
    component.birthDateShowUser = birthDateShowUser;
    fixture.detectChanges();

    const labelCpfBirthDate = fixture.nativeElement.querySelector('label[for="cpf-birth-date"]');
    expect(labelCpfBirthDate).not.toBeNull();
    expect(labelCpfBirthDate.textContent.trim()).toBe('CPF/Data de nascimento');

    const spanCpfShowUser = fixture.nativeElement.querySelector('#span-cpf-show-user');
    expect(spanCpfShowUser).not.toBeNull();
    expect(spanCpfShowUser.textContent.trim()).toBe(cpfShowUser);

    const spanSlash = fixture.nativeElement.querySelector('#span-slash');
    expect(spanSlash).not.toBeNull();
    expect(spanSlash.textContent.trim()).toBe("/");

    const spanBirthDateShowUser = fixture.nativeElement.querySelector('#span-birth-date-show-user');
    expect(spanBirthDateShowUser).not.toBeNull();
    expect(spanBirthDateShowUser.textContent.trim()).toBe(birthDateShowUser);
  });

  it('should render cep is null', () => {
    const cpf = null;
    component.cpf = cpf;
    fixture.detectChanges();

    const linkFillNow = fixture.nativeElement.querySelector('#link-fill-now');
    expect(linkFillNow).not.toBeNull();
    expect(linkFillNow.textContent.trim()).toBe("Preencher agora");
  });

  it('should render cep isnt null', () => {
    const cpf = "23232323232";
    component.cpf = cpf;
    fixture.detectChanges();

    const linkChangeCpf = fixture.nativeElement.querySelector('#link-change-cpf');
    expect(linkChangeCpf).not.toBeNull();
    expect(linkChangeCpf.textContent.trim()).toBe("Alterar");
  });

  it('should render button save perfil', () => {
    fixture.detectChanges();

    const buttonSavePerfil = fixture.nativeElement.querySelector('.button-save-perfil');
    expect(buttonSavePerfil).not.toBeNull();
    expect(buttonSavePerfil.textContent.trim()).toBe("Gravar");
  });

  it('should render img user', () => {
    const userImage = "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1733331199/img-user/kvsoflx6n7jgebpkpn4m.avif";

    const userObj: User = {
      id: "eaf93fa8-955c-408b-888a-d031ead2f6f2",
      name: "name1",
      email: "email1@example.com",
      phone: "(+55) 67 98114 5503",
      cpf: "23232323232",
      birthDate: "1912-12-05 00:00:00.000",
      gender: "m",
      token: "token1",
      confirmEmail: 0,
      userImage: userImage,
    };

    component.userObjState = userObj;

    fixture.detectChanges();

    const imgUserProfile = fixture.nativeElement.querySelector('#img-user-profile');
    const srcImg = imgUserProfile.getAttribute('src');

    expect(imgUserProfile).not.toBeNull();
    expect(srcImg.trim()).toBe(userImage);

    const buttonSelectImg = fixture.nativeElement.querySelector('#button-select-img');
    expect(buttonSelectImg).not.toBeNull();
    expect(buttonSelectImg.textContent.trim()).toBe("Selecionar a Imagem");

    const container = fixture.nativeElement.querySelector('.container-span-info-about-select-image');
    expect(container).not.toBeNull();

    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(2);

    expect(spans[0].textContent.trim()).toBe('Tamanho do arquivo: no máximo 1 MB');
    expect(spans[1].textContent.trim()).toBe('Extensão de arquivo: .JPEG, .PNG');
  });

  it('should render svg body user', () => {
    fixture.detectChanges();

    const svgBodyUser = fixture.nativeElement.querySelector('.container-img-user-1 svg');
    expect(svgBodyUser).not.toBeNull();
  });

  it('should render base64StringImage greater than 0', () => {
    const base64StringImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...";

    component.base64StringImage = base64StringImage;
    fixture.detectChanges();

    const imgUserBase64 = fixture.nativeElement.querySelector('#img-user-base-64');
    const srcImg = imgUserBase64.getAttribute('src');

    expect(imgUserBase64).not.toBeNull();
    expect(srcImg.trim()).toBe(base64StringImage);
  });
});
//
