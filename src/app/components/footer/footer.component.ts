import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  go_to_main(){
    console.log('ir al menu');
    
    let valor = this.check_login();
    if (valor == -1) {
      //this.alertaLogin()
      this.router.navigate(['login'])

    } else {
      this.router.navigate(['/main-client'])
    }
  }

  go_to_cuenta(){
    console.log('ir a cuenta')
    

    let valor = this.check_login();
    if (valor == -1) {
      //this.alertaLogin()
      this.router.navigate(['login'])

    } else {
      this.router.navigate(['/cuenta'])
    }
  }

  go_to_tip(){
    console.log('ir a tips')
    this.router.navigate(['/tips'])
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
