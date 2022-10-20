import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
@Component({
  selector: 'app-modulo2-clases',
  templateUrl: './modulo2-clases.component.html',
  styleUrls: ['./modulo2-clases.component.css']
})
export class Modulo2ClasesComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  
  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
  }

}
