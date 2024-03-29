import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroMedicoPage } from './centro-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CentroMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroMedicoPageRoutingModule {}
