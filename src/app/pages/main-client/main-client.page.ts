import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api-service.service';

@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.page.html',
  styleUrls: ['./main-client.page.scss'],
})
export class MainClientPage implements OnInit {

  constructor(public router: Router,public api_service: ApiService,public alertController: AlertController) { }

  ngOnInit() {
  }

  nave_to_misplanes(){

    let valor = this.check_login();
    if (valor == -1) {
      //this.alertaLogin()
      this.router.navigate(['login'])

    } else {
      this.router.navigate(['/misplanes'])
    }
  }

  nave_to_reembolsos(){
    this.router.navigate(['/reembolsos'])
  }

  nave_to_eventosMedicos(){
    this.router.navigate(['/eventos-medicos'])
  }

  nave_to_centrosMedicos(){

    let valor = this.check_login();
    if (valor == -1) {
      //this.alertaLogin()
      this.router.navigate(['login'])

    } else {
      this.router.navigate(['/centros-medicos'])
    }

    
  }

  nave_to_pagos(){
    this.router.navigate(['/'])
  }

  nave_to_ofertas(){

    let valor = this.check_login();
    if (valor == -1) {
      //this.alertaLogin()
      this.router.navigate(['login'])

    } else {
      this.router.navigate(['/ofertas'])
    }
    

    
  }



  async alertaLogin() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Usted no está logueado',
      message: '',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigate(['login'])
        },
      }],
    });
    await alert.present();
  }

  check_login() {
    let data: any = localStorage.getItem('user');
    data = JSON.parse(data);
    console.log(data)

    if (data == null) {
      return -1
    }

    return 0
  }

  

}
