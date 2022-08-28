import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>();

}
