import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ='https://medicalbrokers.pythonanywhere.com/movil/api/obtener_centrosMedicos_todos';

  constructor( public http: HttpClient,) { }

  post_formulario_contactenos(formulario_json:object) {
    return this.http.post(`${environment.server}/formulario_contactenos`,formulario_json);
  }

  post_formulario_cotizar(formulario_json:object) {
    return this.http.post(`${environment.server}/formulario_cotizar`,formulario_json);
  }

  post_login(credenciales:any) {
    console.log(credenciales)
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=----' });
    const formData = new FormData();
    formData.append('username', credenciales.user)
    formData.append('password', credenciales.password)
    return this.http.post(`${environment.server2}/login/`,formData,{ headers: headers });
  }

  post_update_password(credenciales:object) {
    return this.http.post(`${environment.server}/actualizar_password`,credenciales);
  }

  post_recuperar_password(credenciales:object) {
    return this.http.post(`${environment.server}/recuperar_password`,credenciales);
  }

  get_ofertas(){
    return this.http.get(`${environment.server}/obtener_ofertas`)
  }

  get_misPlanes(id_usuario:any){
    return this.http.get(`${environment.server}/misPlanes/${id_usuario}`)
  }

  get_misPlanes_v2(id_cliente:any){
    return this.http.get(`${environment.server}/obtener_planes_cliente/${id_cliente}`)
  }

  get_obtener_data_usuario(nombre_usuario:any){

    return new Promise((resolve, reject) => {
      this.http.get(`${environment.server}/obtener_data_usuario/${nombre_usuario}`).subscribe(data=>{
        resolve(data)
      },err => {
        console.log(err)
      })
  })
  }
  


  post_solicitar_nuevo_seguro(solicitud_json:object) {
    return this.http.post(`${environment.server}/solicitar_nuevo_seguro`,solicitud_json);
  }

  get_mis_tarjetas(id_usuario:any){
    return this.http.get(`${environment.server}/obtener_tarjeta_afiliacion/${id_usuario}`)
  }

  get_centros_medicos(id_usuario:any){
    return this.http.get(`${environment.server}/obtener_centrosMedicos_convenios/${id_usuario}`)
  }

  get_brokers(id_usuario:any){
    return this.http.get(`${environment.server}/obtener_brokers/${id_usuario}`)
  }

  obtenerCentrosMedicos(){
    return this.http.get<any>(this.url);
  }

}
