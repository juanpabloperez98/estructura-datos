import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';
import fx from 'fireworks';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modulo1-cuestionario',
  templateUrl: './modulo1-cuestionario.component.html',
  styleUrls: ['./modulo1-cuestionario.component.css']
})
export class Modulo1CuestionarioComponent implements OnInit {
  fragebogen: any;
  listResp: string[] = ['p11', 'p23', 'p34', 'p44', 'p52', 'p62'];
  numAnswer = 0;
  /* form: formulario; */
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

  ngOnInit(): void { }

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
        case 'p11': {
          if( this.fragebogen.pregunt1 === 'p11' && !this.styleP1){
            this.styleP1 = true;
            this.numAnswer += 1;
          }
          break;
        }
        case 'p23': {
          if( this.fragebogen.pregunt2 === 'p23' && !this.styleP2){
            this.styleP2 = true;
            this.numAnswer += 1;
          }
          break;
        }
        case 'p34': {
          if( this.fragebogen.pregunt3 === 'p34' && !this.styleP3){
            this.styleP3 = true;
            this.numAnswer += 1;
          }
          break;
        }
        case 'p44': {
          if( this.fragebogen.pregunt4 === 'p44' && !this.styleP4){
            this.styleP4 = true;
            this.numAnswer += 1;
          }
          break;
        }
        case 'p52': {
          if( this.fragebogen.pregunt5 === 'p52' && !this.styleP5){
            this.styleP5 = true;
            this.numAnswer += 1;
          }
          break;
        }
        case 'p62': {
          if( this.fragebogen.pregunt6 === 'p62' && !this.styleP6){
            this.styleP6 = true;
            this.numAnswer += 1;
          }
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
    console.log(this.numAnswer);
  }
}
