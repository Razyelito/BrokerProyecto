import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-misplanes-card',
  templateUrl: './misplanes-card.component.html',
  styleUrls: ['./misplanes-card.component.scss'],
})
export class MisplanesCardComponent implements OnInit {

  @Input() titulo:string="";
  @Input() detalle:string="";
  @Input() urlImg:string='';

  constructor() { }

  ngOnInit() {
    console.log(this.titulo)
    console.log(this.detalle)
    console.log(this.urlImg)
  }

}
