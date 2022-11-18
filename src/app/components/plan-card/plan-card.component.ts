import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {

  constructor() { }

  @Input() titulo:string='';
  @Input() descripcion:string='';
  @Input() urlImgBackg:string='';
  
  ngOnInit(): void {
  }

}
