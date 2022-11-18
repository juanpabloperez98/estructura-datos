import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo1-abstraccion',
  templateUrl: './modulo1-abstraccion.component.html',
  styleUrls: ['./modulo1-abstraccion.component.css']
})
export class Modulo1AbstraccionComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private highlightService: HighlightService
  ) { 
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
