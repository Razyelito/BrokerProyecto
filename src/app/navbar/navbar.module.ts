import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavbarComponent} from './navbar.component'
import { MaterialModule} from '../material.module'
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,MaterialModule,IonicModule
  ],exports: [NavbarComponent]
})
export class NavbarModule { }
