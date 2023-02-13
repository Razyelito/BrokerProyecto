import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosMedicosPageRoutingModule } from './centros-medicos-routing.module';

import { CentrosMedicosPage } from './centros-medicos.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CentrosCardModule } from 'src/app/components/centros-card/centros-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosMedicosPageRoutingModule,
    FooterModule,
    SearchbarModule,
    NavbarModule,
    CentrosCardModule
  ],
  declarations: [CentrosMedicosPage]
})
export class CentrosMedicosPageModule {}
