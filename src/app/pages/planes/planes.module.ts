import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesPageRoutingModule } from './planes-routing.module';

import { PlanesPage } from './planes.page';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { PlanCardModule } from 'src/app/components/plan-card/plan-card.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesPageRoutingModule,
    NavbarModule,
    FooterModule,
    SearchbarModule,
    PlanCardModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}
