import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modulo1-tipo',
  templateUrl: './modulo1-tipo.component.html',
  styleUrls: ['./modulo1-tipo.component.css']
})
export class Modulo1TipoComponent implements OnInit {

  closeResult: string = '';

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content, { backdrop: false }).result.then((result) => {
    }, (reason) => {
    });
  }

}
