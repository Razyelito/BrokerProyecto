import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasPageRoutingModule } from './ofertas-routing.module';

import { OfertasPage } from './ofertas.page';

import {NavbarModule} from '../../navbar/navbar.module';
import {OfertaCardModule} from '../../components/oferta-card/oferta-card.module'
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasPageRoutingModule,
    NavbarModule,
    OfertaCardModule,
    FooterModule,
    SearchbarModule
  ],
  declarations: [OfertasPage]
})
export class OfertasPageModule {}
