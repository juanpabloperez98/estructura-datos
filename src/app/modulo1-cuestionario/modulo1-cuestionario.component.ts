import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

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
    private highlightService: HighlightService
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

  ngOnInit(): void {
  }

  onsubmit() {
    this.listResp.map((data) => {
      switch (data) {
        case 'p11': {
          this.fragebogen.pregunt1 === 'p11' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p23': {
          this.fragebogen.pregunt2 === 'p23' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p34': {
          this.fragebogen.pregunt3 === 'p34' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p44': {
          this.fragebogen.pregunt4 === 'p44' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p52': {
          this.fragebogen.pregunt5 === 'p52' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p62': {
          this.fragebogen.pregunt6 === 'p62' ? this.numAnswer += 1 : null;
          break;
        }
      };
    })
    if (this.numAnswer == 6) {
      this.modalService.open(this.continueModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    } else if (this.numAnswer == 1 || this.numAnswer == 2 || this.numAnswer == 3 || this.numAnswer == 4 || this.numAnswer == 5) {
      this.modalService.open(this.reloadModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    }

  }

  /* limpiarFormulario() {
    this.form.patchValue({

    })
  } */

}
/* 
11
23
34
44
52
62 */