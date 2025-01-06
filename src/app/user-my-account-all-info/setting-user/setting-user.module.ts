import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingUserRoutingModule } from './setting-user-routing.module';
import { PrivacyComponent } from './privacy-components/privacy/privacy.component';


@NgModule({
  declarations: [
  
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SettingUserRoutingModule
  ]
})
export class SettingUserModule { }
