import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centro-medico',
  templateUrl: './centro-medico.page.html',
  styleUrls: ['./centro-medico.page.scss'],
})
export class CentroMedicoPage implements OnInit {

  centro_medico:any
  constructor(private router: Router,public sanitizer:DomSanitizer) { }

  ngOnInit() {
    let data:any=this.router.getCurrentNavigation()
    console.log(data)
    let centro_medico=data.extras.state['centro_medico'];
    this.centro_medico=centro_medico;
    console.log(this.centro_medico); // should log out 'bar'
  }

  getUrl(){ 
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.centro_medico.ubicacion)
  }

}
