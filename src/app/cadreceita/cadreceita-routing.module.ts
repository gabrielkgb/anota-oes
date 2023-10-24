import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadreceitaPage } from './cadreceita.page';

const routes: Routes = [
  {
    path: '',
    component: CadreceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadreceitaPageRoutingModule {}
