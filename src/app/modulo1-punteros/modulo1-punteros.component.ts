import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
@Component({
  selector: 'app-modulo1-punteros',
  templateUrl: './modulo1-punteros.component.html',
  styleUrls: ['./modulo1-punteros.component.css']
})
export class Modulo1PunterosComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
  }

}
