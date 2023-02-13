import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosMedicosPage } from './eventos-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosMedicosPageRoutingModule {}
