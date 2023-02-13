import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros-card',
  templateUrl: './centros-card.component.html',
  styleUrls: ['./centros-card.component.scss'],
})
export class CentrosCardComponent implements OnInit {

  @Input() nombre:string='';
  @Input() direccion:string='';
  @Input() logo:string='';
  constructor() { }

  ngOnInit() {}

}
