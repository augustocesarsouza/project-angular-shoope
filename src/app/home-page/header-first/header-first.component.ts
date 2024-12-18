import { Component } from '@angular/core';

@Component({
  selector: 'app-header-first',
  templateUrl: './header-first.component.html',
  styleUrl: './header-first.component.scss'
})
export class HeaderFirstComponent {
  showContainerDownloadAppFloating = false;
  showContainerNotification = false;
  showContainerLenguage = false;
  showContainerNameUser = false;

  settimeOutAny: any
  settimeOutNotification: any
  settimeOutLanguage: any
  settimeOutNameUser: any

  constructor(){
  }

  ngOnInit(): void {
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
    }, 100);
  }

  onMouseEnterNotification(){
    this.showContainerNotification = true;
  }

  onMouseLeaveNotification(){
    this.clearNotificationTimeout();

    this.settimeOutNotification = setTimeout(() => {
      this.showContainerNotification = false;
    }, 100);
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
    }, 100);
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
    }, 50);
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

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    clearTimeout(this.settimeOutNotification);
    clearTimeout(this.settimeOutLanguage);
    clearTimeout(this.settimeOutNameUser);

  }
}
