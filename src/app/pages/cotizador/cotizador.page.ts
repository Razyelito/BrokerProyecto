import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api-service.service';
import Swal from 'sweetalert2';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.page.html',
  styleUrls: ['./cotizador.page.scss'],
})
export class CotizadorPage implements OnInit {

  ver_tabla:boolean = false;
  ver_mensaje:boolean = false;
  loading:any;

  contactoForm = new FormGroup({
    
    nombre: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    correo: new FormControl('',[
      Validators.required,
      Validators.pattern( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)
    ]),
    numero: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(100|[1-9]\d|\d)$/),
    ]),
    genero: new FormControl('', Validators.required),
  });

  lista_planes:any=[

]

  constructor(public api_service: ApiService,private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  registrar_solicitud(){
    console.log(this.contactoForm.invalid)
    this.showLoading();
    console.log(this.contactoForm.value.nombre)
    
    

    this.api_service.post_formulario_cotizar(this.contactoForm.value).subscribe(data => {

      let respuesta:any=data;
      console.log(respuesta)

      let respuesta_filtrada=[]

      if (respuesta["resp"] == 'exito') {
        this.loading.dismiss()

        let edad=this.contactoForm.value['edad']
        console.log(edad)
        console.log(respuesta.length)
        
        
        for(let i=0;i<respuesta['data'].length;i+=1){
          let elemento=respuesta['data'][i]
          let edad_maxima=elemento["edad_maxima"]
          let edad_minima=elemento["edad_minima"]

          console.log(edad_maxima, edad_minima)

          if(edad!=null && edad>=edad_minima && edad<=edad_maxima){
            respuesta_filtrada.push(elemento)
          }
        }

        this.lista_planes=respuesta_filtrada
        console.log(this.lista_planes)

        if(this.lista_planes.length==0){
          this.ver_mensaje=true;
          this.ver_tabla=false;
        }else{
          this.ver_tabla=true;
          this.ver_mensaje=false;
        }
        
        this.alerta_registro()
      }else{
        this.loading.dismiss()
        this.alerta_error()
      }

      this.contactoForm.controls.nombre.setValue('')
      this.contactoForm.controls.correo.setValue('')
      this.contactoForm.controls.numero.setValue('')
      this.contactoForm.controls.edad.setValue('')
      this.contactoForm.controls.genero.setValue('')


    })

  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Realizando solicitud...',
      spinner: 'circles',
    });

    this.loading.present();
  }

  alerta_registro() {

    Swal.fire(
      {title: 'Éxito',
      text: 'Cotización enviada con éxito',
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
