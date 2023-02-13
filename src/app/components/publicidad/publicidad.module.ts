import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material.module'
import { PublicidadComponent } from './publicidad.component';


@NgModule({
  declarations: [PublicidadComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [PublicidadComponent]
})
export class PublicidadModule { }
