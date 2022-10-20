import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo1-arreglos',
  templateUrl: './modulo1-arreglos.component.html',
  styleUrls: ['./modulo1-arreglos.component.css']
})
export class Modulo1ArreglosComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
}
