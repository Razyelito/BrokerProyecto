import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiplanPageRoutingModule } from './miplan-routing.module';

import { MiplanPage } from './miplan.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiplanPageRoutingModule,
    FooterModule,
    NavbarModule
  ],
  declarations: [MiplanPage]
})
export class MiplanPageModule {}
