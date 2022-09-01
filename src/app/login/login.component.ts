import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

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
  }

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
