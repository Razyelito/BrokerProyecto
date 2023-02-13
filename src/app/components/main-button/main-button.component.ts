import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent implements OnInit {

  @Input() urlImg:string = '';
  @Input() title:string = '';
  @Input() router_link:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
