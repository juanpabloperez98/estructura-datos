import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

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
      this.modalService.open(this.continueModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    } else if (this.numAnswer == 1 || this.numAnswer == 2 || this.numAnswer == 3 || this.numAnswer == 4 || this.numAnswer == 5) {
      this.modalService.open(this.reloadModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    }
  }
}
/* 13
22
33
42
54
63 */