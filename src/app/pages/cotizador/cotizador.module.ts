import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizadorPageRoutingModule } from './cotizador-routing.module';

import { CotizadorPage } from './cotizador.page';

//importacion de componentes
import {NavbarModule} from '../../navbar/navbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizadorPageRoutingModule,ReactiveFormsModule,NavbarModule
  ],
  declarations: [CotizadorPage]
})
export class CotizadorPageModule {}
