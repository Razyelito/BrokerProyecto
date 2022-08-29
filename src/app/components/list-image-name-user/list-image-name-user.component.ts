import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-image-name-user',
  templateUrl: './list-image-name-user.component.html',
  styleUrls: ['./list-image-name-user.component.css']
})
export class ListImageNameUserComponent implements OnInit {

    @Input() name: string = 'Nombre Apellido';

  constructor() { }

  ngOnInit(): void {
  }

}
