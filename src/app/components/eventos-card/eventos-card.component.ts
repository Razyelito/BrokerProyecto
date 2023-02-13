import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eventos-card',
  templateUrl: './eventos-card.component.html',
  styleUrls: ['./eventos-card.component.scss'],
})
export class EventosCardComponent implements OnInit {
  
  @Input() numero:string="";
  @Input() fecha:string="";
  @Input() titulo:string="";
  @Input() descripcion:string="";

  constructor() { }

  ngOnInit() {}

}
