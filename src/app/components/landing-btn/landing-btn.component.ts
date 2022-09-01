import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-landing-btn',
  templateUrl: './landing-btn.component.html',
  styleUrls: ['./landing-btn.component.css']
})
export class LandingBtnComponent implements OnInit {

  constructor() { }
  @Input() urlImg:string='';
  @Input() title:string='';
  @Input()isContact:boolean=false;

  ngOnInit(): void {
  }

}
