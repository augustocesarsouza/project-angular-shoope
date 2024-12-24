import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: '**', redirectTo: 'perfil' }
    ]
   },
  // { path: 'perfil', component: PerfilComponent },
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountAllComponentRoutingModule { }
