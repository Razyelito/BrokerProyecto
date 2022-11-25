import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialModule } from './material.module';
import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ListImageNameUserComponent } from './components/list-image-name-user/list-image-name-user.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { GeneralBtnComponent } from './components/general-btn/general-btn.component';
import { ViewEmployeeComponent } from './pages/view-employee/view-employee.component';
import { MainClientComponent } from './pages/main-client/main-client.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { CambioContrasenaComponent } from './pages/cambio-contrasena/cambio-contrasena.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { LandingBtnComponent } from './components/landing-btn/landing-btn.component';
import { OfertaCardComponent } from './components/oferta-card/oferta-card.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { ContactUCComponent } from './pages/contact-uc/contact-uc.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { CotizadorComponent } from './pages/cotizador/cotizador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    SearchbarComponent,
    UsersComponent,
    EmployeesComponent,
    MainButtonComponent,
    ListImageNameUserComponent,
    AddEmployeeComponent,
    GeneralBtnComponent,
    ViewEmployeeComponent,
    MainClientComponent,
    CuentaComponent,
    CambioContrasenaComponent,
    RecoverPasswordComponent,
    LandingComponent,
    PublicidadComponent,
    LandingBtnComponent,
    OfertaCardComponent,
    OfertasComponent,
    ContactUCComponent,
    FooterComponent,
    PlanesComponent,
    PlanCardComponent,
    ContactInfoComponent,
    CotizadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
