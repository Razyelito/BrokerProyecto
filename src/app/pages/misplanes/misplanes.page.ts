import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misplanes',
  templateUrl: './misplanes.page.html',
  styleUrls: ['./misplanes.page.scss'],
})
export class MisplanesPage implements OnInit {


  mis_planes = [];



  constructor(public router: Router, public api_service: ApiService, private alertController: AlertController) {
    this.obtener_misPlanes()

  }

  ngOnInit() {
  }

  nave_to_miplan(plan:any) {
    this.router.navigate(['/miplan'],{ state: { miplan: plan }}) 
  }

  async obtener_misPlanes() {
    let string_user: any = localStorage.getItem('user');
    let object_user = JSON.parse(string_user);

    let username=object_user['user']
    console.log(username)
    let objeto_ids:any=await this.api_service.get_obtener_data_usuario(username)
    console.log(objeto_ids)
    if(objeto_ids['data']['idCliente']!=undefined){
      let id_cliente=objeto_ids['data']['idCliente']
      this.api_service.get_misPlanes_v2(id_cliente).subscribe(resp => {
      let respuesta: any = resp;
      console.log(respuesta);
      this.mis_planes = respuesta['data'];
      console.log(this.mis_planes)
    })

    }

    
  }

  handler_suscribe(suscribe:any){

  }

  async abrir_modal_comentario() {
    console.log('aaaa')

    const alert = await this.alertController.create({
      header: 'Comentario',
      buttons: [{
        text: 'OK', role: 'confirm', handler: async (data) => {
          
          //llamado api
          this.solicitar_nuevo_plan(data[0])
          
        }
      }],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Ingrese alguna especificacion para su seguro',
        },
      ],
    });

    let data = await alert.present();
    console.log('data: ', data)

  }

  async solicitar_nuevo_plan(comentario:string) {
    let string_user: any = localStorage.getItem('user');
    let object_user = JSON.parse(string_user);

    let resp_objeto_ids:any=await this.api_service.get_obtener_data_usuario(object_user['user'])
    let objeto_ids=resp_objeto_ids['data']
    console.log(objeto_ids)

    let objeto_solicitud = { 'id_usuario': objeto_ids['idUsuario'], 'comentario': comentario}
    this.api_service.post_solicitar_nuevo_seguro(objeto_solicitud).subscribe(resp => {
      console.log(resp)
      this.alerta_solicitud();
    })

  }

  alerta_solicitud() {

    Swal.fire(
      {title: 'Éxito',
      text: 'Solicitud enviada con éxito',
      icon: 'success',
      heightAuto: false
    }
    )
  }

}
