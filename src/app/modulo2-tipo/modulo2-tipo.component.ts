import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo2-tipo',
  templateUrl: './modulo2-tipo.component.html',
  styleUrls: ['./modulo2-tipo.component.css']
})
export class Modulo2TipoComponent implements OnInit {

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
