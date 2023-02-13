import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoMedicoPage } from './evento-medico.page';

const routes: Routes = [
  {
    path: '',
    component: EventoMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoMedicoPageRoutingModule {}
