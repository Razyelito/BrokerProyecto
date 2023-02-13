import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisplanesPageRoutingModule } from './misplanes-routing.module';

import { MisplanesPage } from './misplanes.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MisPlanesCardModule } from 'src/app/components/misplanes-card/misplanes-card.module';
import { PublicidadModule } from 'src/app/components/publicidad/publicidad.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisplanesPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule,
    MisPlanesCardModule,
    PublicidadModule
  ],
  declarations: [MisplanesPage]
})
export class MisplanesPageModule {}
