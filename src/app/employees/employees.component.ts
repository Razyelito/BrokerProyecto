import { Component, OnInit } from '@angular/core';
import {Empleado} from '../models/Empleado';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    empleados: Empleado[] = [
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"JUAN PEREZ"
        },
        {
            nombre:"Andres Gonzales"
        }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
