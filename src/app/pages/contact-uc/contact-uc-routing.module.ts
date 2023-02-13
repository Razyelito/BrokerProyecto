import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUcPage } from './contact-uc.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUcPageRoutingModule {}
