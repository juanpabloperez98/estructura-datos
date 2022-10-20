import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo1-funcion',
  templateUrl: './modulo1-funcion.component.html',
  styleUrls: ['./modulo1-funcion.component.css']
})
export class Modulo1FuncionComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
  }

}
