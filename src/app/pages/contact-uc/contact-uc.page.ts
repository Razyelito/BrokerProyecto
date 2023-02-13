import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { ApiService } from '../../servicios/api-service.service'




@Component({
  selector: 'app-contact-uc',
  templateUrl: './contact-uc.page.html',
  styleUrls: ['./contact-uc.page.scss'],
})
export class ContactUcPage implements OnInit {

  

  contactoForm = new FormGroup({
    nombres: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)
    ]),
    celular: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
      this.nameValidator
    ]),
    nombreSeguro: new FormControl('', [
    ]),
    idSeguro: new FormControl('', [
    ]),
  });

  loading:any;
  nombreSeguro:string='';
  idSeguro:string='';

  constructor(public api_service: ApiService,private loadingCtrl: LoadingController,public router: Router) { }

  ngOnInit() {
    let data:any=this.router.getCurrentNavigation()
    console.log(data)
    try {
      let nombreSeguro=data.extras.state['tipoSeguro'];
      this.nombreSeguro=nombreSeguro;
      this.idSeguro=data.extras.state['idSeguro'];
      console.log(this.nombreSeguro); // should log out 'bar'
    } catch (error) {
      this.nombreSeguro=''
    }
    
  }

  nameValidator(control: FormControl) {
    if (control.value && control.value.length < 10) {
      console.log('bien')
      return { maxLength: true };
    }
    return null;
  }

  
  registrar_solicitud() {
    this.showLoading()
    
    this.contactoForm.controls.nombreSeguro.setValue(this.nombreSeguro);
    this.contactoForm.controls.idSeguro.setValue(this.idSeguro);
    console.log(this.contactoForm)
    this.api_service.post_formulario_contactenos(this.contactoForm.value).subscribe(data => {

      let respuesta:any=data;
      console.log(respuesta)
      if (respuesta["resp"] == 'exito') {
        this.contactoForm.controls.nombres.setValue('')
        this.contactoForm.controls.apellidos.setValue('')
        this.contactoForm.controls.correo.setValue('')
        this.contactoForm.controls.celular.setValue('')
        
        this.loading.dismiss()
        this.alerta_registro()
      }else{
        this.loading.dismiss()
        this.alerta_error()
      }

      { console.log(data) }
    })
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Enviando datos...',
      spinner: 'circles',
    });

    this.loading.present();
  }

  alerta_registro() {

    Swal.fire(
      {title: 'Éxito',
      text: 'Solicitud enviada con éxito',
      icon: 'success',
      heightAuto: false
    }
    )
  }

  alerta_error() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal, intentalo más tarde',
    })
  }

}
