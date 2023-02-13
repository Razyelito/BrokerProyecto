import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  login=false;
  usuario='';

  
  constructor(public popoverController: PopoverController, public router: Router,public alertController: AlertController) { }

  ngOnInit(): void {

    let data:any=localStorage.getItem('user');
    data=JSON.parse(data);
    console.log(data)

    if(data!=null){
      this.login=true;
      this.usuario=data['nombreusuario'];
    }
  }

  async alerta_cerrar() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: 'Seguro que desea salir?',
      message: '',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          
        },
      },{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.cerrar_sesion()
        },
      },],
    });
    await alert.present();
  }

  ir_a_login(){
    this.router.navigate(['/login'])
  }

  cerrar_sesion(){
    localStorage.removeItem('user');
    this.router.navigate(['tabs/tab1'])

  }

  nave_to_contacto(){
    this.router.navigate(['/contactanos'])
  }

  nave_to_sugerencias(){
    this.router.navigate(['/sugerencias'])
  }

  nave_to_tarjetaAfilicion(){
    let valor = this.check_login();
    if (valor == -1) {
      this.alertaLogin()

    } else {
      this.router.navigate(['/tarjetas'])
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
