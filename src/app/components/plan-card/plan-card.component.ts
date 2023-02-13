import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
})
export class PlanCardComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {}

}
