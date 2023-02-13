import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudReembolsoPage } from './solicitud-reembolso.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudReembolsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudReembolsoPageRoutingModule {}
