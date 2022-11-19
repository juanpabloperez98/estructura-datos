import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo1-funcion',
  templateUrl: './modulo1-funcion.component.html',
  styleUrls: ['./modulo1-funcion.component.css']
})
export class Modulo1FuncionComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private highlightService: HighlightService
  ) { 
    this.highlightService.highlightAll();
  }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
  
  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content, { backdrop: false }).result.then((result) => {
    }, (reason) => {
    });
  }

}
