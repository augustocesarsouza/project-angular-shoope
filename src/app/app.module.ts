import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMainComponent } from './home-page/header-main/header-main.component';
import { HeaderFirstComponent } from './home-page/header-first/header-first.component';
import { HeaderSecondComponent } from './home-page/header-second/header-second.component';
import { DownloadAppFloatingComponent } from './home-page/download-app-floating/download-app-floating.component';
import { NotificationFloatingComponent } from './home-page/notification-floating/notification-floating.component';
import { LanguageFloatingComponent } from './home-page/language-floating/language-floating.component';
import { NameUserFloatingComponent } from './home-page/name-user-floating/name-user-floating.component';
import { AllSvgModule } from './all-svg/all-svg.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    DownloadAppFloatingComponent,
    NotificationFloatingComponent,
    LanguageFloatingComponent,
    NameUserFloatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AllSvgModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
