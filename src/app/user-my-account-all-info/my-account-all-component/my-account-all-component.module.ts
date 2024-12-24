import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountAllComponentRoutingModule } from './my-account-all-component-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomePageModule } from '../../home-page/home-page.module';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    MyAccountAllComponentRoutingModule,
    HomePageModule,
    AllSvgModule
  ]
})
export class MyAccountAllComponentModule { }
