import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';
import fx from 'fireworks';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modulo2-cuestionario',
  templateUrl: './modulo2-cuestionario.component.html',
  styleUrls: ['./modulo2-cuestionario.component.css']
})
export class Modulo2CuestionarioComponent implements OnInit {
  fragebogen: any;
  listResp: string[] = ['p13', 'p22', 'p33', 'p42', 'p54', 'p63'];
  numAnswer = 0;

  @ViewChild('continueModal') continueModal: any;
  @ViewChild('reloadModal') reloadModal: any;

  constructor(
    private modalService: NgbModal,
    private highlightService: HighlightService,
    private toastr: ToastrService
  ) {
    this.fragebogen = {
      pregunt1: '',
      pregunt2: '',
      pregunt3: '',
      pregunt4: '',
      pregunt5: '',
      pregunt6: ''
    };
  }

  styleP1 = false;
  styleP2 = false;
  styleP3 = false;
  styleP4 = false;
  styleP5 = false;
  styleP6 = false;

  ngOnInit(): void {
  }


  fireworks() {

    for (let index = 0; index < 10; index++) {
      let max_int_x = (window.innerWidth / 2) + 300,
        min_int_x = (window.innerWidth / 2) - 300,
        x_param = Math.random() * (max_int_x - min_int_x) + min_int_x;

      fx({
         x: x_param,
         y: window.scrollY + 200,
         colors: ['#FFFFFF', '#FF0000', '#FF8104', '#FFF707']
       })
    }
  }

  onsubmit() {
    if( 
      this.fragebogen.pregunt1 == '' ||
      this.fragebogen.pregunt2 == '' ||
      this.fragebogen.pregunt3 == '' ||
      this.fragebogen.pregunt4 == '' ||
      this.fragebogen.pregunt5 == '' ||
      this.fragebogen.pregunt6 == ''
    ){
      this.toastr.error('Debe responder todas las preguntas');
      return
    }

    this.listResp.map((data) => {
      switch (data) {
        case 'p13': {
          this.fragebogen.pregunt1 === 'p13' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p22': {
          this.fragebogen.pregunt2 === 'p22' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p33': {
          this.fragebogen.pregunt3 === 'p33' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p42': {
          this.fragebogen.pregunt4 === 'p42' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p54': {
          this.fragebogen.pregunt5 === 'p54' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p63': {
          this.fragebogen.pregunt6 === 'p63' ? this.numAnswer += 1 : null;
          break;
        }
      };
    })
    if (this.numAnswer == 6) {
      this.fireworks();
      setTimeout(() => {
        this.modalService.open(this.continueModal, { backdrop: false }).result.then((result) => {
        }, (reason) => {
        });
      }, 500);
    } else if (this.numAnswer == 1 || this.numAnswer == 2 || this.numAnswer == 3 || this.numAnswer == 4 || this.numAnswer == 5) {
      this.modalService.open(this.reloadModal, { backdrop: false }).result.then((result) => {
        this.numAnswer = 6- this.numAnswer;
      }, (reason) => {
      });
    }
  }
}