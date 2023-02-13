import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosMedicosPageRoutingModule } from './eventos-medicos-routing.module';

import { EventosMedicosPage } from './eventos-medicos.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { EventosCardModule } from 'src/app/components/eventos-card/eventos-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosMedicosPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule,
    EventosCardModule
  ],
  declarations: [EventosMedicosPage]
})
export class EventosMedicosPageModule {}
