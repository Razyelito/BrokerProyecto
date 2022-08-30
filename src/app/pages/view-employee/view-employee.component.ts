import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

    cedula: string='11254897';
    nombre: string='Juan ';
    apellido: string='Perez';
    mail: string='correo@ejemplo.com';

  constructor() { }

  ngOnInit(): void {
  }

}
