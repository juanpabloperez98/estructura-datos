import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
@Component({
  selector: 'app-modulo3-listas',
  templateUrl: './modulo3-listas.component.html',
  styleUrls: ['./modulo3-listas.component.css']
})
export class Modulo3ListasComponent implements OnInit {

  constructor(
    private highlightService: HighlightService
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
  }

}
