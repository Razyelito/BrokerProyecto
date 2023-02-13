import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from './searchbar.component';
import {MaterialModule} from '../../material.module'
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,MaterialModule,IonicModule
  ],exports: [SearchbarComponent,]
})
export class SearchbarModule { }
