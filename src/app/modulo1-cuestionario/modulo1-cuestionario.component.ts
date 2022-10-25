import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo1-cuestionario',
  templateUrl: './modulo1-cuestionario.component.html',
  styleUrls: ['./modulo1-cuestionario.component.css']
})
export class Modulo1CuestionarioComponent implements OnInit {
public fragebogen:any;
  constructor() {
    this.fragebogen = {
      p1:'',
      p2:'',
      p3:'',
      p4:'',
      p5:'',
      p6:''
    };
   }

  ngOnInit(): void {
  }

  onsubmit(){
    alert("formulario enviado ")
  }


}
