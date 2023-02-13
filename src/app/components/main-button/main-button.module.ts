import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MainButtonComponent} from '../main-button/main-button.component'
import {MaterialModule} from '../../material.module'

@NgModule({
  declarations: [MainButtonComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports: [MainButtonComponent,]
})
export class MainButtonModule { }
