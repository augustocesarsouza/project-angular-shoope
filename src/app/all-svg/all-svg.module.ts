import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgArrowComponent } from './svg-arrow/svg-arrow.component';
import { SvgCartComponent } from './svg-cart/svg-cart.component';
import { SvgHelpComponent } from './svg-help/svg-help.component';
import { SvgLanguageComponent } from './svg-language/svg-language.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgNotificationComponent } from './svg-notification/svg-notification.component';
import { SvgShoopeComponent } from './svg-shoope/svg-shoope.component';
import { SvgUserWithoutImgComponent } from './svg-user-without-img/svg-user-without-img.component';
import { SvgEyeCloseComponent } from './svg-eye-close/svg-eye-close.component';
import { SvgEyeOpenComponent } from './svg-eye-open/svg-eye-open.component';
import { SvgCheckComponent } from './svg-check/svg-check.component';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SvgArrowRegisterComponent } from './svg-arrow-register/svg-arrow-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SvgArrowComponent, SvgCartComponent, SvgHelpComponent, SvgLanguageComponent, SvgLoupeComponent, SvgNotificationComponent, SvgShoopeComponent, SvgUserWithoutImgComponent, SvgEyeCloseComponent, SvgEyeOpenComponent, SvgCheckComponent, SvgExitComponent, SvgArrowRegisterComponent],
  exports: [SvgArrowComponent, SvgCartComponent, SvgHelpComponent, SvgLanguageComponent, SvgLoupeComponent, SvgNotificationComponent, SvgShoopeComponent, SvgUserWithoutImgComponent, SvgEyeCloseComponent, SvgEyeOpenComponent, SvgCheckComponent, SvgExitComponent, SvgArrowRegisterComponent]

})
export class AllSvgModule { }
