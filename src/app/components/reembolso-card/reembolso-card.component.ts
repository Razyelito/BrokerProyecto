import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-reembolso-card',
  templateUrl: './reembolso-card.component.html',
  styleUrls: ['./reembolso-card.component.scss'],
})
export class ReembolsoCardComponent implements OnInit {

  @Input() descripcion:string='';
  @Input() urlImgSeguro:string='';

  constructor() { }

  ngOnInit() {}

}
