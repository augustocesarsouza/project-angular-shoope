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
import { SvgNotificationComponent } from './all-svg/svg-notification/svg-notification.component';
import { SvgHelpComponent } from './all-svg/svg-help/svg-help.component';
import { SvgLanguageComponent } from './all-svg/svg-language/svg-language.component';
import { SvgArrowComponent } from './all-svg/svg-arrow/svg-arrow.component';
import { SvgUserWithoutImgComponent } from './all-svg/svg-user-without-img/svg-user-without-img.component';
import { SvgShoopeComponent } from './all-svg/svg-shoope/svg-shoope.component';
import { SvgLoupeComponent } from './all-svg/svg-loupe/svg-loupe.component';
import { SvgCartComponent } from './all-svg/svg-cart/svg-cart.component';
import { DownloadAppFloatingComponent } from './home-page/download-app-floating/download-app-floating.component';
import { NotificationFloatingComponent } from './home-page/notification-floating/notification-floating.component';
import { LanguageFloatingComponent } from './home-page/language-floating/language-floating.component';
import { NameUserFloatingComponent } from './home-page/name-user-floating/name-user-floating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
    HeaderFirstComponent,
    HeaderSecondComponent,
    SvgNotificationComponent,
    SvgHelpComponent,
    SvgLanguageComponent,
    SvgArrowComponent,
    SvgUserWithoutImgComponent,
    SvgShoopeComponent,
    SvgLoupeComponent,
    SvgCartComponent,
    DownloadAppFloatingComponent,
    NotificationFloatingComponent,
    LanguageFloatingComponent,
    NameUserFloatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
