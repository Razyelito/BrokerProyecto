import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiplanPage } from './miplan.page';

const routes: Routes = [
  {
    path: '',
    component: MiplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiplanPageRoutingModule {}
