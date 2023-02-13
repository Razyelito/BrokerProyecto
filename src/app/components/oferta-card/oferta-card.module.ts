import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OfertaCardComponent} from '../oferta-card/oferta-card.component';
import {MaterialModule} from '../../material.module'

@NgModule({
  declarations: [OfertaCardComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [OfertaCardComponent]
})
export class OfertaCardModule { }
