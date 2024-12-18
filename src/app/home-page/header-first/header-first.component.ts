import { Component } from '@angular/core';

@Component({
  selector: 'app-header-first',
  templateUrl: './header-first.component.html',
  styleUrl: './header-first.component.scss'
})
export class HeaderFirstComponent {
  showContainerDownloadAppFloating = false;
  showContainerNotification = false;

  settimeOutAny: any
  settimeOutNotification: any

  constructor(){
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

  onMouseEnterDownloadAppFloating(){
    clearTimeout(this.settimeOutAny);
    this.showContainerDownloadAppFloating = true;
  }

  onMouseLeaveDownloadAppFloating(){
    this.showContainerDownloadAppFloating = false;
  }

  onMouseEnterNotification(){
    this.showContainerNotification = true;
  }

  onMouseLeaveNotification(){
    clearTimeout(this.settimeOutNotification);

    this.settimeOutNotification = setTimeout(() => {
      this.showContainerNotification = false;
    }, 100);
  }

  onMouseEnterNotificationFloating(){
    clearTimeout(this.settimeOutNotification);
    this.showContainerNotification = true;
  }

  onMouseLeaveNotificationFloating(){
    console.log("onMouseLeaveNotificationFloating");

    this.showContainerNotification = false;
  }

  onMouseEnterArrowTopFloating(){
    clearTimeout(this.settimeOutNotification);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    clearTimeout(this.settimeOutNotification);
  }
}
