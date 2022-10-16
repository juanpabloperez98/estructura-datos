import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modulo1-tipo',
  templateUrl: './modulo1-tipo.component.html',
  styleUrls: ['./modulo1-tipo.component.css']
})
export class Modulo1TipoComponent implements OnInit {


  @ViewChild('exampleModal') exampleModal: any;

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openExampleModal(){
    this.modal.open(this.exampleModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
