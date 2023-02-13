import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api-service.service';
import {DomSanitizer} from '@angular/platform-browser';

export interface IBroker {
  id: number;
  nombre: string;
  telefono: string;
  horario_atencion: string;
  correo: string;
  ubicacion: string;
  link_facebook: string;
  link_google: string;
  link_instagram: string;
  id_usuario: number;
}

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  lista_brokers:IBroker[]=[];
  constructor(public api_service: ApiService,public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.obtener_brokers();
  }

  async obtener_brokers(){

    let string_user: any = localStorage.getItem('user');
    let object_user = JSON.parse(string_user);

    let resp_objeto_ids:any=await this.api_service.get_obtener_data_usuario(object_user['user'])
    let objeto_ids=resp_objeto_ids['data']
    console.log(objeto_ids)

    this.api_service.get_brokers(objeto_ids['idUsuario']).subscribe(resp=>{
      let respuesta:any=resp;
      console.log(respuesta)
      
      if(respuesta['resp']=='exito'){
        this.lista_brokers=respuesta['data']
        console.log(this.lista_brokers)
        console.log(this.lista_brokers[0]['ubicacion'])
      }
    })

  }

  getUrl(url:string){ 
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
