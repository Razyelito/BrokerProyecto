import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(public api_service: ApiService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {


  }

  check_login() {
    let data: any = localStorage.getItem('user');
    data = JSON.parse(data);
    console.log(data)

    if (data == null) {
      return -1
    }

    return 0
  }

  async recuperar_password() {

    let valor = this.check_login();
    if (valor == -1) {
      this.alertaLogin()

    } else {

      let datalocal: any = localStorage.getItem('user')
      let dataParse = JSON.parse(datalocal)
      let username=dataParse['user']

      console.log(username)
      let objeto_ids:any=await this.api_service.get_obtener_data_usuario(username)
      console.log(objeto_ids)


      console.log(username)

      this.api_service.post_recuperar_password({ 'user': username }).subscribe(data => {
        let respuesta: any = data;
        console.log(respuesta)
      })

      this.alerta_exito()
    }

  }

  cambiarPassword() {
    let valor = this.check_login();
    if (valor == -1) {
      this.alertaLogin()
    } else {
      this.router.navigate(['/cambio-contrasena'])
    }

  }

  alerta_exito() {

    Swal.fire(
      {
        title: 'Éxito',
        text: 'Revisa tu correo electrónico',
        icon: 'success',
        heightAuto: false
      }
    )
  }

  async alertaLogin() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Usted no está logueado',
      message: '',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigate(['login'])
        },
      }],
    });
    await alert.present();
  }

}
