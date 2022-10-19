import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }

}
