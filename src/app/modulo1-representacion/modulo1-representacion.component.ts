import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HighlightService } from '../services/highlight.service';
@Component({
  selector: 'app-modulo1-representacion',
  templateUrl: './modulo1-representacion.component.html',
  styleUrls: ['./modulo1-representacion.component.css']
})
export class Modulo1RepresentacionComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
  }

}
