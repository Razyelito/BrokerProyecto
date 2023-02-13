import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../../material.module'
import { EventosCardComponent } from './eventos-card.component';

@NgModule({
  declarations: [EventosCardComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [EventosCardComponent,]
})
export class EventosCardModule { }
