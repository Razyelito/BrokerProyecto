import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReembolsosPage } from './reembolsos.page';

const routes: Routes = [
  {
    path: '',
    component: ReembolsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReembolsosPageRoutingModule {}
