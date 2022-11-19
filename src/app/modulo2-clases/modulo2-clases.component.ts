import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modulo2-clases',
  templateUrl: './modulo2-clases.component.html',
  styleUrls: ['./modulo2-clases.component.css']
})
export class Modulo2ClasesComponent implements OnInit {

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
