import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-medicos',
  templateUrl: './eventos-medicos.page.html',
  styleUrls: ['./eventos-medicos.page.scss'],
})
export class EventosMedicosPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  nave_to_event(){
    this.router.navigate(['/evento-medico'])
  }

}
