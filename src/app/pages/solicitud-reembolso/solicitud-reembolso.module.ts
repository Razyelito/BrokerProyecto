import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudReembolsoPageRoutingModule } from './solicitud-reembolso-routing.module';

import { SolicitudReembolsoPage } from './solicitud-reembolso.page';

import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudReembolsoPageRoutingModule,
    FooterModule,
    NavbarModule
  ],
  declarations: [SolicitudReembolsoPage]
})
export class SolicitudReembolsoPageModule {}
