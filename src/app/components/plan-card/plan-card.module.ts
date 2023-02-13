import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material.module'
import { PlanCardComponent } from './plan-card.component';


@NgModule({
  declarations: [PlanCardComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [PlanCardComponent]
})
export class PlanCardModule { }
