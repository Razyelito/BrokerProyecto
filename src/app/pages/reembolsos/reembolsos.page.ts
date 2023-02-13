import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reembolsos',
  templateUrl: './reembolsos.page.html',
  styleUrls: ['./reembolsos.page.scss'],
})
export class ReembolsosPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  nave_to_solicitud(){
    this.router.navigate(['/solicitud-reembolso'])
  }

}
