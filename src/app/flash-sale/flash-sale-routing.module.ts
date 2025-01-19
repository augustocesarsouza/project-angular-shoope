import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashSaleMainComponent } from './flash-sale-main/flash-sale-main.component';

const routes: Routes = [
  { path: '', component: FlashSaleMainComponent,
    // children: [
    //   { path: 'perfil', component: PerfilComponent },
    //   { path: '', redirectTo: 'perfil', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'perfil' }
    // ]
   },
  // { path: 'perfil', component: PerfilComponent },
  {path: '', pathMatch: 'full', redirectTo: ''},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashSaleRoutingModule { }
