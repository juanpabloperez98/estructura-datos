import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo2-especificacion',
  templateUrl: './modulo2-especificacion.component.html',
  styleUrls: ['./modulo2-especificacion.component.css']
})
export class Modulo2EspecificacionComponent implements OnInit {


  constructor(
    private modalService: NgbModal,
    private highlightService: HighlightService
  ) {
    this.highlightService.highlightAll();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { backdrop: false }).result.then((result) => {
    }, (reason) => {
    });
  }


}
