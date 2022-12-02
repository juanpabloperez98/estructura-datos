import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';
import fx from 'fireworks';

@Component({
  selector: 'app-modulo3-cuestionario',
  templateUrl: './modulo3-cuestionario.component.html',
  styleUrls: ['./modulo3-cuestionario.component.css']
})
export class Modulo3CuestionarioComponent implements OnInit {
  fragebogen: any;
  listResp: string[] = ['p11', 'p23', 'p31', 'p42', 'p52'];
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
      pregunt5: ''
    };
  }

  ngOnInit(): void {
  }
  fireworks() {

    for (let index = 0; index < 10; index++) {
      let max_int_x = (window.innerWidth / 2) + 300,
        min_int_x = (window.innerWidth / 2) - 300,
        // max_int_y = (window.scrollY / 2),
        // min_int_y = (window.scrollY / 2),
        x_param = Math.random() * (max_int_x - min_int_x) + min_int_x;
      // y_param = Math.random() * (max_int_y - min_int_y) + min_int_y;

      fx({
        x: x_param,
        y: window.scrollY + 200,
        colors: ['#FFFFFF', '#FF0000', '#FF8104', '#FFF707']
      })
    }
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
        case 'p31': {
          this.fragebogen.pregunt3 === 'p31' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p42': {
          this.fragebogen.pregunt4 === 'p42' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p52': {
          this.fragebogen.pregunt5 === 'p52' ? this.numAnswer += 1 : null;
          break;
        }
      };
    })
    if (this.numAnswer == 5) {
      this.fireworks();
      setTimeout(() => {
        this.modalService.open(this.continueModal, { backdrop: false }).result.then((result) => {
        }, (reason) => {
        });
      }, 500);
    } else if (this.numAnswer == 1 || this.numAnswer == 2 || this.numAnswer == 3 || this.numAnswer == 4) {
      this.modalService.open(this.reloadModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    }

  }

}
