import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../../material.module'
import { IonicModule } from '@ionic/angular';
import { ReembolsoCardComponent } from './reembolso-card.component';


@NgModule({
  declarations: [ReembolsoCardComponent],
  imports: [
    CommonModule,MaterialModule,IonicModule
  ],exports: [ReembolsoCardComponent,]
})
export class ReembolsoCardModule { }
