import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo1-cuestionario',
  templateUrl: './modulo1-cuestionario.component.html',
  styleUrls: ['./modulo1-cuestionario.component.css']
})
export class Modulo1CuestionarioComponent implements OnInit {
   fragebogen:any;
   listResp:string[]=['p11','p22','p31','p41','p53','p64'];

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
    alert("formulario enviado ");
    console.log(this.fragebogen);
    this.listResp.map( (data) => {
      switch(data){

      };
    })

  }
  


}
