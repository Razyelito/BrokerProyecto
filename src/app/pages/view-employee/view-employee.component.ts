import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';

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

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  desvincular():void{
    Swal.fire("Se ha desvinculado al empleado",`${this.nombre}`, "success");
    this.router.navigate(['/employees'])

  }

}
