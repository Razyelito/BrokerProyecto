import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoMedicoPageRoutingModule } from './evento-medico-routing.module';

import { EventoMedicoPage } from './evento-medico.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoMedicoPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule
  ],
  declarations: [EventoMedicoPage]
})
export class EventoMedicoPageModule {}
