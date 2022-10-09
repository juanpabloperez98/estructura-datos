import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  openSideNav = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidenavOC(){
    this.openSideNav = this.openSideNav == true ?  false : true
  }

}
