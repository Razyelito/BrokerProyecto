import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioContrasenaPageRoutingModule } from './cambio-contrasena-routing.module';

import { CambioContrasenaPage } from './cambio-contrasena.page';

import {FooterModule} from '../../components/footer/footer.module'
import {MaterialModule} from '../../material.module'
import {NavbarModule} from '../../navbar/navbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioContrasenaPageRoutingModule,NavbarModule,MaterialModule,FooterModule
  ],
  declarations: [CambioContrasenaPage]
})
export class CambioContrasenaPageModule {}
