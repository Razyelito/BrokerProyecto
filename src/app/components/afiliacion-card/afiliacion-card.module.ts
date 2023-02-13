import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../../material.module'
import { IonicModule } from '@ionic/angular';
import { AfiliacionCardComponent } from './afiliacion-card.component';

import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode'

@NgModule({
  declarations: [AfiliacionCardComponent],
  imports: [
    CommonModule,MaterialModule,IonicModule,NgxQRCodeModule
  ],exports: [AfiliacionCardComponent,]
})
export class AfiliacionCardModule { }
