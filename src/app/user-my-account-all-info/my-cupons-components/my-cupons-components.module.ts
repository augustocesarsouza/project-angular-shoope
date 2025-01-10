import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCuponsComponentsRoutingModule } from './my-cupons-components-routing.module';
import { MyCuponsComponent } from './my-cupons/my-cupons.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { EraseXComponent } from './erase-x/erase-x.component';
import { CuponEachComponent } from './cupon-each/cupon-each.component';


@NgModule({
  declarations: [
    MyCuponsComponent,
    EraseXComponent,
    CuponEachComponent
  ],
  imports: [
    CommonModule,
    MyCuponsComponentsRoutingModule,
    AllSvgModule
  ]
})
export class MyCuponsComponentsModule { }
