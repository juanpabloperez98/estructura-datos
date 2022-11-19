import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modulo1-punteros',
  templateUrl: './modulo1-punteros.component.html',
  styleUrls: ['./modulo1-punteros.component.css']
})
export class Modulo1PunterosComponent implements OnInit {

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
