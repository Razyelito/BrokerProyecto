import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-landing-btn',
  templateUrl: './landing-btn.component.html',
  styleUrls: ['./landing-btn.component.scss'],
})
export class LandingBtnComponent implements OnInit {

  @Input() urlImg:string='';
  @Input() title:string='';
  @Input()isContact:boolean=false;
  @Input() router_link:string = '';

  constructor() { }

  ngOnInit() {}

}
