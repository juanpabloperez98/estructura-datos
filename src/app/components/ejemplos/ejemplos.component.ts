import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';



@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {

  /*  

    #include <cstdio> 
    int main (){
      int edad, max_edad = 18; 
      printf("Ingrese la edad: "); 
      scanf("%d",&edad); 
      if(edad >= max_edad){ 
        printf("Eres mayor de edad!!"); 
      }else{ 
        printf("No eres mayor de edad!!"); 
      } 
    }

  */
  
  // Objeto d codigo
  lines_to_input = [5]
  lines_to_jump = [7]
  lines_to_jump_from = [8]

  code = {
    1:{
      'line_explain':'',
      'var_values':{
        'max_edad':18,
        'edad':null,
      },
      'output':'',
    }
  }

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }

  ngOnInit(): void {
  }

}
