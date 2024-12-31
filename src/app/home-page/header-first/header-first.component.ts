import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../login-and-register-user/interface/user';
import { UserLocalStorage } from '../../login-and-register-user/user-function/get-user-local-storage/user-local-storage';

@Component({
  selector: 'app-header-first',
  templateUrl: './header-first.component.html',
  styleUrl: './header-first.component.scss'
})
export class HeaderFirstComponent implements OnInit, OnDestroy {
  showContainerDownloadAppFloating = false;
  showContainerNotification = false;
  showContainerLenguage = false;
  showContainerNameUser = false;

  userLoggedIn = false;
  userLogged: User | null = null;

  settimeOutAny!: number;
  settimeOutNotification!: number;
  settimeOutLanguage!: number;
  settimeOutNameUser!: number;

  constructor(private router: Router){
  }

  ngOnInit(): void {

    const decryptedData = UserLocalStorage();

    if(!decryptedData.isNullUserLocalStorage){
      this.userLoggedIn = true;
      this.userLogged = decryptedData.user;
    }


    this.handleShowContainerChange = this.handleShowContainerChange.bind(this);
    this.handleShowContainerNotification = this.handleShowContainerNotification.bind(this);
    this.handleShowContainerLenguage = this.handleShowContainerLenguage.bind(this);
    this.handleShowContainerNameUser = this.handleShowContainerNameUser.bind(this);

    this.clearNotificationTimeout = this.clearNotificationTimeout.bind(this);
    this.clearLanguageTimeout = this.clearLanguageTimeout.bind(this);
    this.clearNameUserTimeout = this.clearNameUserTimeout.bind(this);
  }

  handleShowContainerChange(newValue: boolean){
    if(newValue){
      clearTimeout(this.settimeOutAny);
    }

    this.showContainerDownloadAppFloating = newValue;
  }

  handleShowContainerNotification(newValue: boolean){
    if(newValue){
      this.clearNotificationTimeout();
    }

    this.showContainerNotification = newValue;
  }

  handleShowContainerLenguage(newValue: boolean){
    if(newValue){
      this.clearLanguageTimeout();
    }

    this.showContainerLenguage = newValue;
  }

  handleShowContainerNameUser(newValue: boolean){
    if(newValue){
      this.clearNameUserTimeout();
    }

    this.showContainerNameUser = newValue;
  }

  onMouseEnterDownloadApp(){
    this.showContainerDownloadAppFloating = true;
  }

  onMouseLeaveDownloadApp(){
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      this.showContainerDownloadAppFloating = false;
    }, 100) as unknown as number;
  }

  onMouseEnterNotification(){
    this.showContainerNotification = true;
  }

  onMouseLeaveNotification(){
    this.clearNotificationTimeout();

    this.settimeOutNotification = setTimeout(() => {
      this.showContainerNotification = false;
    }, 100)as unknown as number;
  }

  clearNotificationTimeout() {
    if (this.settimeOutNotification) {
      clearTimeout(this.settimeOutNotification);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  onMouseEnterLanguage(){
    this.showContainerLenguage = true;
  }

  onMouseLeaveLanguage(){
    this.clearLanguageTimeout();

    this.settimeOutLanguage = setTimeout(() => {
      this.showContainerLenguage = false;
    }, 100)as unknown as number;
  }

  clearLanguageTimeout() {
    if (this.settimeOutLanguage) {
      clearTimeout(this.settimeOutLanguage);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  onMouseEnterNameUser(){
    this.showContainerNameUser = true;
  }

  onMouseLeaveNameUser(){
    this.clearNameUserTimeout();

    this.settimeOutNameUser = setTimeout(() => {
      this.showContainerNameUser = false;
    }, 50)as unknown as number;
  }

  onMouseEnterNameUserFloating(){
    // this.handleShowContainerNotification(true);
    this.clearNameUserTimeout();
    this.showContainerNameUser = true;
  }

  onMouseLeaveNameUserFloating(){
    // this.handleShowContainerNotification(false);
    this.showContainerNameUser = false;
  }

  onMouseEnterArrowTopFloatingNameUser(){
    this.clearNameUserTimeout();
  }

  clearNameUserTimeout() {
    if (this.settimeOutNameUser) {
      clearTimeout(this.settimeOutNameUser);
    }
  }

  clickEnterUser(){
    this.router.navigate(['/buyer/login']);
  }

  clickRegisterUser(){
    this.router.navigate(['/buyer/register']);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    clearTimeout(this.settimeOutNotification);
    clearTimeout(this.settimeOutLanguage);
    clearTimeout(this.settimeOutNameUser);
  }
}
