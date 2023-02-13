import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainClientPage } from './main-client.page';

const routes: Routes = [
  {
    path: '',
    component: MainClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainClientPageRoutingModule {}
