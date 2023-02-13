import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsPageRoutingModule } from './tips-routing.module';

import { TipsPage } from './tips.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { TipCardModule } from 'src/app/components/tip-card/tip-card.module';
import { PublicidadModule } from 'src/app/components/publicidad/publicidad.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule,
    TipCardModule,
    PublicidadModule
  ],
  declarations: [TipsPage]
})
export class TipsPageModule {}
