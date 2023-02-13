import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from 'src/app/servicios/api-service.service';
import {NgxQrcodeElementTypes,NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode'

export interface ITarjeta {
  id_tarjeta: number;
  codigo_tarjeta: string;
  id_usuario: number;
  id_plan: number;
  fecha_creacion: string;
  fecha_expiracion: string;
  nombre_plan: string;
  tipo_plan: string;
  nombres: string;
  apellidos: string;
}

@Component({
  selector: 'app-afiliacion-card',
  templateUrl: './afiliacion-card.component.html',
  styleUrls: ['./afiliacion-card.component.scss'],
})
export class AfiliacionCardComponent implements OnInit {

  @Input() nombre:string="";
  @Input() apellidos:string="";
  @Input() numero:string="";
  @Input() titulo:string="";

  lista_tarjetas:ITarjeta[]=[]
  respuesta:any

  url='aaa'
  profile='bb'
  elementType=NgxQrcodeElementTypes.URL
  errorCorrectionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
  value=this.url+this.profile

  constructor(public api_service: ApiService ) { 
    this.obtener_mis_tarjetas();
  }

  ngOnInit() {
    console.log(this.lista_tarjetas)
  }


  async obtener_mis_tarjetas(){

    let string_user: any = localStorage.getItem('user');
    let object_user = JSON.parse(string_user);

    let resp_objeto_ids:any=await this.api_service.get_obtener_data_usuario(object_user['user'])
    let objeto_ids=resp_objeto_ids['data']
    console.log(objeto_ids)

    this.api_service.get_mis_tarjetas(objeto_ids['idUsuario']).subscribe(resp=>{
      let respuesta:any=resp;
      this.respuesta=JSON.stringify(resp)
      console.log(resp)
      if(respuesta['resp']=='exito'){
        this.lista_tarjetas=respuesta['data']

        console.log(this.lista_tarjetas)
      }
    })
  }

}
