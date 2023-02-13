import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.scss'],
})
export class TipCardComponent implements OnInit {

  @Input() fecha_inicio:string='';
  @Input() fecha_final:string='';
  @Input() urlImgBackg:string='';
  @Input() Descripcion:string='';


  constructor() { }

  ngOnInit() {}

}
