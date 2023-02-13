import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material.module'
import { MisplanesCardComponent } from './misplanes-card.component';


@NgModule({
  declarations: [MisplanesCardComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [MisplanesCardComponent]
})
export class MisPlanesCardModule { }
