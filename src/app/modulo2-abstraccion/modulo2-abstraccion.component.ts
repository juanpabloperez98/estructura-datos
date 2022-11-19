import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modulo2-abstraccion',
  templateUrl: './modulo2-abstraccion.component.html',
  styleUrls: ['./modulo2-abstraccion.component.css']
})
export class Modulo2AbstraccionComponent implements OnInit {

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
