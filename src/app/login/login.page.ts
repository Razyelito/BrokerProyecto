import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../servicios/api-service.service'
import Swal from 'sweetalert2';
import { AlertController, LoadingController } from '@ionic/angular';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading:any;

  tipo_input='password'

  form_login = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    token: new FormControl(''),
  });

  constructor(private router: Router, public api_service: ApiService,public alertController: AlertController,private loadingCtrl: LoadingController) { }

  ngOnInit() {

    let data:any=localStorage.getItem('user');
    data=JSON.parse(data);
    console.log(data)

    if(data!=null){
      //this.alertaLogin()
      this.router.navigate(['main-client'])
      
    } 
  }

  async alertaLogin() {
    const alert = await this.alertController.create({
      header: 'Verificación',
      subHeader: 'Usted ya está logueado',
      message: '',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigate(['main-client'])
        },
      }],
    });
    await alert.present();
  }


  async loguearse() {
    console.log('bien')
    await this.showLoading();
    console.log(this.form_login.value)

    this.api_service.post_login(this.form_login.value).subscribe(data => {

      let respuesta: any = data;
      console.log(respuesta)

      if (respuesta["token"]) {
        this.form_login.value['token']=respuesta["token"]
        localStorage.setItem('user', JSON.stringify(this.form_login.value));
        this.loading.dismiss()
          this.alerta_exito();    
          //this.loading.dismiss()
          //this.alerta_user_invalido()
        
      } else {
        this.loading.dismiss()
        this.alerta_error()
      }

    },err => {
      this.loading.dismiss()
        this.alerta_error()
    })

  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
      spinner: 'circles',
    });

    this.loading.present();
  }

  alerta_exito() {
    Swal.fire({
      title: 'Éxito',
      text: 'Has iniciado sesión',
      icon: 'success',
      heightAuto: false
    }).then(() => {
      
      window.location.reload();
    })
  }
 
  alerta_user_invalido() {

    Swal.fire({
      title: 'Datos invalidos',
      text: 'Revise el usuario o la contraseña',
      icon: 'error',
      heightAuto: false
    })
  }

  alerta_error() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Credenciales invalidas',
      heightAuto: false
    })

  }

  event_password() {
    console.log('bien')
    
    if(this.tipo_input=='text'){
      this.tipo_input='password'
    }else{
      this.tipo_input='text'
    }

    console.log(this.tipo_input)
  }

}
