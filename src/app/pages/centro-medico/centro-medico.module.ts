import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroMedicoPageRoutingModule } from './centro-medico-routing.module';

import { CentroMedicoPage } from './centro-medico.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroMedicoPageRoutingModule,
    FooterModule,
    NavbarModule,
    SearchbarModule
  ],
  declarations: [CentroMedicoPage]
})
export class CentroMedicoPageModule {}
