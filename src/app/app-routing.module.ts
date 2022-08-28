import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployeesComponent } from './employees/employees.component';



const routes: Routes = [

  {path:'', redirectTo: 'login',pathMatch: 'full'},
  //{path:'**', redirectTo: 'login',pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LoginComponent},
  {path:'main',component: MainComponent},
  {path:'employees',component: EmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
