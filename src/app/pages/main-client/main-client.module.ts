import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainClientPageRoutingModule } from './main-client-routing.module';

import { MainClientPage } from './main-client.page';

import {FooterModule} from '../../components/footer/footer.module';
import {MaterialModule} from '../../material.module';
import {MainButtonModule} from '../../components/main-button/main-button.module';
import {NavbarModule} from '../../navbar/navbar.module'

import {PublicidadModule} from 'src/app/components/publicidad/publicidad.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainClientPageRoutingModule,
    MaterialModule,
    MainButtonModule,
    NavbarModule,
    FooterModule,
    PublicidadModule
  ],
  declarations: [MainClientPage]
})
export class MainClientPageModule {}
