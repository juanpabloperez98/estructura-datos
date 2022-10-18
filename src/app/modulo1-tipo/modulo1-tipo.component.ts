import { Component, OnInit, AfterViewChecked   } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo1-tipo',
  templateUrl: './modulo1-tipo.component.html',
  styleUrls: ['./modulo1-tipo.component.css']
})
export class Modulo1TipoComponent implements OnInit {

  closeResult: string = '';

  constructor(
    private modalService: NgbModal,
    private highlightService: HighlightService
  ) { }

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
