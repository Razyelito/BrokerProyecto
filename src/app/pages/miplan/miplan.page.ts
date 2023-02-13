import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miplan',
  templateUrl: './miplan.page.html',
  styleUrls: ['./miplan.page.scss'],
})
export class MiplanPage implements OnInit {

  miplan:any
  user:any
  constructor(private router: Router) { }

  ngOnInit() {
    let data:any=this.router.getCurrentNavigation()
    let miplan=data.extras.state['miplan'];
    this.miplan=miplan[0];
    console.log(this.miplan); // should log out 'bar'

    let userlocal:any=localStorage.getItem('user');
    let userLocal2:any=JSON.parse(userlocal);
    this.user=userLocal2['user']

  }

}
