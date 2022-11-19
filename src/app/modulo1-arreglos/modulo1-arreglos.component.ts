import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modulo1-arreglos',
  templateUrl: './modulo1-arreglos.component.html',
  styleUrls: ['./modulo1-arreglos.component.css']
})
export class Modulo1ArreglosComponent implements OnInit {

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
