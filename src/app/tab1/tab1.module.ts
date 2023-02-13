import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

//componentes importados


import {LandingBtnComponent} from '../components/landing-btn/landing-btn.component';
import { CarruselComponent} from '../components/carrusel/carrusel.component';


//material
import { MaterialModule } from '../material.module';
import {NavbarModule} from '../navbar/navbar.module'
import {FooterModule} from '../components/footer/footer.module'
import {PublicidadModule} from 'src/app/components/publicidad/publicidad.module'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MaterialModule,NavbarModule,FooterModule,PublicidadModule
  ],
  declarations: [Tab1Page,LandingBtnComponent,CarruselComponent,]
})
export class Tab1PageModule {}
