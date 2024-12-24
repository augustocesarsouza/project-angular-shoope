import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSvgModule } from '../all-svg/all-svg.module';
import { FormsModule } from '@angular/forms';
import { DownloadAppFloatingComponent } from './download-app-floating/download-app-floating.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderFirstComponent } from './header-first/header-first.component';
import { HomeComponent } from './home/home.component';
import { LanguageFloatingComponent } from './language-floating/language-floating.component';
import { NameUserFloatingComponent } from './name-user-floating/name-user-floating.component';
import { NotificationFloatingComponent } from './notification-floating/notification-floating.component';
import { HeaderSecondComponent } from './header-second/header-second.component';

@NgModule({
  declarations: [
    DownloadAppFloatingComponent,
    HeaderMainComponent,
    HeaderFirstComponent,
    HomeComponent,
    HeaderSecondComponent,
    LanguageFloatingComponent,
    NameUserFloatingComponent,
    NotificationFloatingComponent
  ],
  exports: [
    DownloadAppFloatingComponent,
    HeaderMainComponent,
    HeaderFirstComponent,
    HomeComponent,
    HeaderSecondComponent,
    LanguageFloatingComponent,
    NameUserFloatingComponent,
    NotificationFloatingComponent
  ],
  imports: [
    CommonModule,
    AllSvgModule,
    FormsModule,
  ]
})
export class HomePageModule { }
