import { Component, OnInit,Input } from '@angular/core';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

    nombre:string='';
    apellido:string='';

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  addEmployee(){
    Swal.fire("Se ha creado al empleado",` ${this.nombre} ${this.apellido}`, "success");
    this.router.navigate(['/employees'])
  }

}
