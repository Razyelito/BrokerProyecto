import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUcPageRoutingModule } from './contact-uc-routing.module';
import { ContactUcPage } from './contact-uc.page';

import {MaterialModule} from '../../material.module'

//importar navbar
import {NavbarModule} from '../../navbar/navbar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUcPageRoutingModule,
    MaterialModule,NavbarModule
  ],
  declarations: [ContactUcPage]
})
export class ContactUcPageModule {}
