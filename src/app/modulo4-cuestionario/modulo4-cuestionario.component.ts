import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../services/highlight.service';

@Component({
  selector: 'app-modulo4-cuestionario',
  templateUrl: './modulo4-cuestionario.component.html',
  styleUrls: ['./modulo4-cuestionario.component.css']
})
export class Modulo4CuestionarioComponent implements OnInit {
  fragebogen: any;
  listResp: string[] = ['p12', 'p22', 'p31', '41'];
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
      pregun4: ''
    };
  }

  ngOnInit(): void {
  }
  onsubmit() {
    this.listResp.map((data) => {
      switch (data) {
        case 'p12': {
          this.fragebogen.pregunt1 === 'p12' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p22': {
          this.fragebogen.pregunt2 === 'p22' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p31': {
          this.fragebogen.pregunt3 === 'p31' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p41': {
          this.fragebogen.pregunt3 === 'p41' ? this.numAnswer += 1 : null;
          break;
        }

      };
    })
    if (this.numAnswer == 3) {
      this.modalService.open(this.continueModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    } else if (this.numAnswer == 1 || this.numAnswer == 2 || this.numAnswer == 3) {
      this.modalService.open(this.reloadModal, { backdrop: false }).result.then((result) => {
      }, (reason) => {
      });
    }

  }
}
