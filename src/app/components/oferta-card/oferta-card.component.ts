import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oferta-card',
  templateUrl: './oferta-card.component.html',
  styleUrls: ['./oferta-card.component.css']
})
export class OfertaCardComponent implements OnInit {

  
  
  constructor() {}

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

  ngOnInit(): void {
  }

}
