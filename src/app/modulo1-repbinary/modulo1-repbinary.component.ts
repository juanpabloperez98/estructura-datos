import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';


@Component({
  selector: 'app-modulo1-repbinary',
  templateUrl: './modulo1-repbinary.component.html',
  styleUrls: ['./modulo1-repbinary.component.css']
})
export class Modulo1RepbinaryComponent implements OnInit {

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
