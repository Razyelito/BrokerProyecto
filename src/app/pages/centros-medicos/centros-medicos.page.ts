import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api-service.service';


@Component({
  selector: 'app-centros-medicos',
  templateUrl: './centros-medicos.page.html',
  styleUrls: ['./centros-medicos.page.scss'],
})
export class CentrosMedicosPage implements OnInit {

  lista_centros_medicos=[];

  constructor(public api_service: ApiService,public router: Router) { }

  ngOnInit() {
    this.obtener_centros_medicos()
    this.api_service.obtenerCentrosMedicos().subscribe(data=>{
      console.log(data)
    })
  }

  async obtener_centros_medicos(){

    let string_user: any = localStorage.getItem('user');
    let object_user = JSON.parse(string_user);

    let username=object_user['user']
    let objeto_ids:any=await this.api_service.get_obtener_data_usuario(username)
    console.log(objeto_ids)
    
    this.api_service.get_centros_medicos(objeto_ids['data']['idUsuario']).subscribe(resp=>{
      let respuesta:any=resp;
      console.log(respuesta)
      
      if(respuesta['resp']=='exito'){
        this.lista_centros_medicos=respuesta['data']

        console.log(this.lista_centros_medicos)
      }
    })
  }

  nave_to_centroMedico(centro_medico:any){
    this.router.navigate(['/centro-medico'],{ state: { centro_medico: centro_medico }})
  }



}
