import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugerenciasPageRoutingModule } from './sugerencias-routing.module';

import { SugerenciasPage } from './sugerencias.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugerenciasPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule
  ],
  declarations: [SugerenciasPage]
})
export class SugerenciasPageModule {}
