import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';


@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.css']
})
export class CambioContrasenaComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  actualizaContrasena(){
    Swal.fire("Se ha actualizado su contrasena", "success");
    this.router.navigate(['/main'])

  }

}
