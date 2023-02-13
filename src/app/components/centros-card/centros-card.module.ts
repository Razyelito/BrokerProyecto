import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../../material.module'
import { CentrosCardComponent } from './centros-card.component';

@NgModule({
  declarations: [CentrosCardComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [CentrosCardComponent,]
})
export class CentrosCardModule { }
