import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api-service.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  lista_ofertas=[]
  respuesta:any
  constructor(public api_service: ApiService) { }

  ngOnInit() {
    this.obtener_ofertas()
  }

  obtener_ofertas(){
    this.api_service.get_ofertas().subscribe(resp=>{
      let respuesta:any=resp;
      this.respuesta=JSON.stringify(resp)
      console.log(resp)
      if(respuesta['resp']=='exito'){
        this.lista_ofertas=respuesta['data']

        for(var i=0; i<this.lista_ofertas.length; i+=1){
          let elemento:any=this.lista_ofertas[i]
          let string_cobertura:string =elemento['cobertura_accidentes'];
          let lista_cobertura:string[]=string_cobertura.split('-')
          
          if(lista_cobertura.length==3){
            elemento['cobertura1']=lista_cobertura[0];
            elemento['cobertura2']=lista_cobertura[1];
            elemento['cobertura3']=lista_cobertura[2];
          }else if (lista_cobertura.length==2){
            elemento['cobertura1']=lista_cobertura[0];
            elemento['cobertura2']=lista_cobertura[1];
            elemento['cobertura3']="";

          }else if (lista_cobertura.length==1){
            elemento['cobertura1']=lista_cobertura[0];
            elemento['cobertura2']="";
            elemento['cobertura3']="";

          }




        }

        console.log(this.lista_ofertas)
      }
    })
  }

}
