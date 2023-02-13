import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferta-card',
  templateUrl: './oferta-card.component.html',
  styleUrls: ['./oferta-card.component.scss'],
})
export class OfertaCardComponent implements OnInit {

  @Input() idSeguro:string='';
  @Input() fecha_inicio:string='';
  @Input() fecha_final:string='';
  @Input() tipoSeguro:string='';
  @Input() urlImgBackg:string='';
  @Input() urlImgLogo:string='';
  @Input() precio_pre:string='';
  @Input() precio_pos:string='';
  @Input() cobertura1:string='';
  @Input() cobertura2:string='';
  @Input() cobertura3:string='';

  constructor(public router: Router) { }

  ngOnInit() {}

  nave_to_contactus(){
    this.router.navigate(['/contactus'],{ state: { tipoSeguro: this.tipoSeguro, idSeguro: this.idSeguro }})
  }

}
