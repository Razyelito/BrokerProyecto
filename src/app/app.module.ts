import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialModule } from './material.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
