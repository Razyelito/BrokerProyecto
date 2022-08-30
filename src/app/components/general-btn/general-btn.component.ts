import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-btn',
  templateUrl: './general-btn.component.html',
  styleUrls: ['./general-btn.component.css']
})
export class GeneralBtnComponent implements OnInit {

    @Input() title: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
