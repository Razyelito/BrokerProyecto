import { HttpClient } from '@angular/common/http';
import { UsersComponent } from './../users/users.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

import { Router } from '@angular/router';
import { first } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loading=false;
  myform: FormGroup|any;
  api_url: string ='http://127.0.0.1:8000';
  constructor(private _http: HttpClient, private router: Router, private _snackBar: MatSnackBar){
    
  } 
   
  
  ngOnInit():void {
    this.myform = new FormGroup({
      'username':  new FormControl(''),
      'password':  new FormControl('')
    });
  }
  
  
  get formulario() {
    return this.myform.controls;
  }

  onSubmit(){
    
    this._http.get<any>(this.api_url+'/crm/api/?format=json').subscribe(
      res=>{
        const user= res.find((a:any)=>{
          return a.nombreusuario === this.myform.value.username && a.claveusuario === this.myform.value.password
        });

        if(user){
          alert('Conexión Exitosa')
          this.myform.reset();
          this.router.navigate(['main/client']);
        }else{
          alert('Usuario no permitido');
          this.router.navigate(['login']);

        }
      }
    )
    
    
  }
/*
  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == "admin" && password == "123"){
      this.temploading(0);
    }else if(usuario == "cliente" && password == "123"){
        this.temploading(1);
    }else{
      this.error();
      this.form.reset();
    }
  }*/

  error(){
    this._snackBar.open("Usuario o Contraseña invalidos",'',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition:"top"
    })
  }

  temploading(n:number){
    this.loading = true;

    setTimeout(() => {
      (n==0)?this.router.navigate(['main']):this.router.navigate(['main/client'])

    }, 1300);
  }

}
