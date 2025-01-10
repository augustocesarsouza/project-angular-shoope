import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../my-account-all-component/perfil-components/profile/profile.component';
import { MyShopeeCoinsComponent } from './my-shopee-coins/my-shopee-coins.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: '', component: MyShopeeCoinsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' }
    ]
   },
  // { path: 'perfil', component: PerfilComponent },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyShopeeCoinsComponentRoutingModule { }
