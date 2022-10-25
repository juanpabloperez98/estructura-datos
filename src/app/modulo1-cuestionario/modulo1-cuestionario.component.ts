import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo1-cuestionario',
  templateUrl: './modulo1-cuestionario.component.html',
  styleUrls: ['./modulo1-cuestionario.component.css']
})
export class Modulo1CuestionarioComponent implements OnInit {
  fragebogen:any;
  listResp:string[]=['p11','p22','p31','p41','p53','p64'];
  numAnswer = 0;

  constructor() {
    this.fragebogen = {
      pregunt1:'',
      pregunt2:'',
      pregunt3:'',
      pregunt4:'',
      pregunt5:'',
      pregunt6:''
    };
   }

  ngOnInit(): void {
  }

  onsubmit(){
    this.listResp.map( (data) => {
      switch(data){
        case 'p11':{
          this.fragebogen.pregunt1 === 'p11' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p22':{
          this.fragebogen.pregunt2 === 'p22' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p31':{
          this.fragebogen.pregunt3 === 'p31' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p41':{
          this.fragebogen.pregunt4 === 'p41' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p53':{
          this.fragebogen.pregunt5 === 'p53' ? this.numAnswer += 1 : null;
          break;
        }
        case 'p64':{
          this.fragebogen.pregunt6 === 'p64' ? this.numAnswer += 1 : null;
          break;
        }
      };
    })
    if( this.numAnswer == 6){
      console.log("todo correcto");
    }else{
      console.log("incorrecto");
    }

  }
  


}
