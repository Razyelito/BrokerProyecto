import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetasPageRoutingModule } from './tarjetas-routing.module';

import { TarjetasPage } from './tarjetas.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { AfiliacionCardModule } from 'src/app/components/afiliacion-card/afiliacion-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetasPageRoutingModule,
    FooterModule,
    NavbarModule,
    SearchbarModule,
    AfiliacionCardModule
  ],
  declarations: [TarjetasPage]
})
export class TarjetasPageModule {}
