import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainClientComponent } from './pages/main-client/main-client.component';
import { EmployeesComponent } from './employees/employees.component';
import {AddEmployeeComponent} from './pages/add-employee/add-employee.component'
import {ViewEmployeeComponent} from './pages/view-employee/view-employee.component'

import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component'
import {CambioContrasenaComponent} from './pages/cambio-contrasena/cambio-contrasena.component'
import {CuentaComponent} from './pages/cuenta/cuenta.component'
import {LandingComponent} from './pages/landing/landing.component'



const routes: Routes = [

  {path:'', redirectTo: 'login',pathMatch: 'full'},
  //{path:'**', redirectTo: 'login',pathMatch: 'full'},
  {path:'landing', component: LandingComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LoginComponent},
  {path:'main',component: MainComponent},
  {path:'main/client',component: MainClientComponent},
  {path:'employees',component: EmployeesComponent},
  {path:'add_employee',component: AddEmployeeComponent},
  {path:'view_employee',component: ViewEmployeeComponent},
  {path:'recover_password',component: RecoverPasswordComponent},
  {path:'cuenta',component: CuentaComponent},
  {path:'change_password',component: CambioContrasenaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
