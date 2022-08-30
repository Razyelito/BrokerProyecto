import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployeesComponent } from './employees/employees.component';
import {AddEmployeeComponent} from './pages/add-employee/add-employee.component'
import {ViewEmployeeComponent} from './pages/view-employee/view-employee.component'



const routes: Routes = [

  {path:'', redirectTo: 'login',pathMatch: 'full'},
  //{path:'**', redirectTo: 'login',pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LoginComponent},
  {path:'main',component: MainComponent},
  {path:'employees',component: EmployeesComponent},
  {path:'Add_Employee',component: AddEmployeeComponent},
  {path:'View_Employee',component: ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
