import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../servicios/api-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.page.html',
  styleUrls: ['./cambio-contrasena.page.scss'],
})
export class CambioContrasenaPage implements OnInit {

  form_password=new FormGroup({
    password: new FormControl('', Validators.required),
    nuevo_password: new FormControl('', Validators.required),
    confirmar_password: new FormControl('', Validators.required),
  });;

  loading:any;

  constructor(private router: Router,public api_service: ApiService,private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async actualizar_password(){
    await this.showLoading();

    console.log(this.form_password.value)

    let info_user:any=localStorage.getItem('user')
    let info_user_parse=JSON.parse(info_user)

    let username=info_user_parse['user']
    let password_escrito=this.form_password.value.password;
    let password_nuevo=this.form_password.value.nuevo_password;
    let password_confirmar=this.form_password.value.confirmar_password;

    console.log(username)
    console.log(password_escrito)
    console.log(password_nuevo)
    console.log(password_confirmar)

    if(password_nuevo==password_confirmar){
      this.api_service.post_update_password({'user':username,'password': password_escrito, 'new_password':password_nuevo  }).subscribe(data=>{
        console.log(data)
        let my_data:any=data;
        if(my_data['resp']=='exito'){
          this.loading.dismiss()
          this.alerta_exito()
        }else{
          this.loading.dismiss()
          this.alerta_password_invalido();
        }
      })

    }else{
      this.loading.dismiss()
      this.alerta_nuevo_password_invalido()
    }

    


    
    // if(this.form_password.value.password!=password_actual){
    //   console.log('password incorrecto')
    //   this.loading.dismiss()
    //   this.alerta_password_invalido()
    // }else if(this.form_password.value.confirmar_password!=this.form_password.value.nuevo_password){
    //   this.loading.dismiss()
    //   this.alerta_nuevo_password_invalido()
    // }else{
    //   this.api_service.post_update_password({'user':user,'password': this.form_password.value.nuevo_password }).subscribe(data => {
        
    //     let respuesta:any=data;
    //     console.log(respuesta)

    //     if(respuesta["resp"] == 'exito'){
    //       this.loading.dismiss()
    //       this.alerta_exito()
    //       info_user_parse['claveusuario']=this.form_password.value.nuevo_password
    //       localStorage.setItem('user',JSON.stringify(info_user_parse))
    //     }else{
    //       this.loading.dismiss()
    //       this.alerta_error_desconocido();
    //     }
    //   })
    // }

  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Actualizando password...',
      spinner: 'circles',
    });

    this.loading.present();
  }

  alerta_exito() {
    Swal.fire(
      {title: 'Éxito', icon: 'success',text: 'Contraseña actualizada',heightAuto: false}
      
    ).then(() => {
      window.location.reload();
  })
}

  alerta_password_invalido() {
    Swal.fire({
      icon: 'error',
      title: 'Contraseña inválida',
      text: 'Verifique la contraseña ingresada',
      heightAuto: false
    })
  }

  alerta_nuevo_password_invalido() {
    Swal.fire({
      icon: 'error',
      title: 'Contraseñas no coinciden',
      text: 'Verifique la nueva contraseña ingresada',
      heightAuto: false
    })
  }

  alerta_error_desconocido() {
    Swal.fire({
      icon: 'error',
      title: 'Error desconocido',
      text: 'Intente mas tarde',
      heightAuto: false
    })
  }

}
