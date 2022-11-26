import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.css']
})
export class CambioContrasenaComponent implements OnInit {


  myform: FormGroup|any;
  api_url: string ='http://127.0.0.1:8000';


  constructor(private _http: HttpClient,private router: Router  ) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      'username': new FormControl(''),
      'password':  new FormControl(''),
      'newpassword':  new FormControl(''),
      'anewpassword':  new FormControl('')
    });

  }

  actualizaContrasena(){
    this._http.get<any>(this.api_url+'/crm/api/?format=json').subscribe(
      res=>{
        const user= res.find((a:any)=>{
          return a.nombreusuario === this.myform.value.username && a.claveusuario === this.myform.value.password
        });               
          
        
        if(user){
          if(this.myform.value.newpassword===this.myform.value.anewpassword){
            const body = { title: 'Contrasena y Seguridad' };
            this._http.put<any>(this.api_url+'/crm/api/?format=json', body)
            .subscribe(data => data.claveusuario= this.myform.value.newpassword);
            
            
            alert('Cambio exitoso')
            
            this.myform.reset();
            this.router.navigate(['main/client']);

          }
          

          
        }else{
          alert('No se pudo cambiar contraseña');
          this.router.navigate(['/cuenta']);

        }
      }
    )
    //Swal.fire("Se ha actualizado su contrasena", "success");
    //this.router.navigate(['/main/client'])
  }
  
  actcont(){
    this._http.put<any>(this.api_url+'/crm/api/?format=json',{title: 'Contrasena y Seguridad'}).subscribe(
      res=>{
        const user= res.find((a:any)=>{
          if(this.myform.value.newpassword !== this.myform.value.anewpassword){
            this.router.navigate(['/cuenta']);
          }
          a.claveusuario=this.myform.value.newpassword;
          return a.claveusuario===this.myform.value.newpassword;
                   
        });
        
        if(user){
          //user.claveusuario=this.myform.value.newpassword;
          alert('Cambio exitoso')
          
          this.myform.reset();
          this.router.navigate(['main/client']);
          
        }else{
          alert('No se pudo cambiar contraseña');
          this.router.navigate(['/cuenta']);

        }
      }
    )
    


  }

  
  

}
