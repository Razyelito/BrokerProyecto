import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../../material.module'
import { IonicModule } from '@ionic/angular';
import { TipCardComponent } from './tip-card.component';

@NgModule({
  declarations: [TipCardComponent],
  imports: [
    CommonModule,MaterialModule,IonicModule
  ],exports: [TipCardComponent,]
})
export class TipCardModule { }
