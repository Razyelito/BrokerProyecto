import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';
import {FooterModule} from '../../components/footer/footer.module'
import {MaterialModule} from '../../material.module'

import {NavbarModule} from '../../navbar/navbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,FooterModule,MaterialModule,NavbarModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
