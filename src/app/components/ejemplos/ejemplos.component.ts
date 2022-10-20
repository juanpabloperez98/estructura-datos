import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent implements OnInit {
  
  // Variables recibidas componente padre
  lines_to_input = [5]
  lines_to_jump = [7]
  lines_to_jump_from = [8]
  current_line = 1;
  max_line = 11;
  run_code = false;

  // Variables propias component
  explain_pass = '';
  value_vars = '';
  value_out = '';
  top = 14;
  top_style = this.top + 'px';

  
  code = `
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
  `

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
      'output':'',
    },
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
      'output':'',
    },
    {
      'line_explain':'Se definen dos variable de tipo entero la cual la variable max_edad se le da un valor de 18',
      'var_values':{
        'max_edad':18
      },
      'output':'',
    },
    {
      'line_explain':'Se le pide al usuario que ingrese la edad',
      'output':'',
    },
    {
      'line_explain':'Se captura la edad ingresada por el usuario',
      'output':'',
    },
    {
      'line_explain':'Se utiliza un condicional if para validar si el valor de la variable edad es mayor o igual a el valor de la variable max_edad',
      'output':'',
    },
    {
      'line_explain':'Si la condición es correcta entonces, se imprime que es mayor de edad',
      'output':'Eres mayor de edad!!',
    },
    {
      'line_explain':'Si por el contrario la condición no se cumple',
      'output':'',
    },
    {
      'line_explain':'Entonces se imprime que no es mayor de edad',
      'output':'No eres mayor de edad!!',
    },
    {
      'line_explain':'Se cierra el condicional',
    },
    {
      'line_explain':'Fin del programa',
    },
  ]
  

  constructor(
    private highlightService: HighlightService,
    private modalService: NgbModal
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
    this.modalService.dismissAll();
  }

  ngOnInit(): void { }

  // Functions to run program
  add_top = () => {
    this.top += 21
    this.top_style = this.top + 'px';
  }

  less_top = () => {
    this.top -= 21
    this.top_style = this.top + 'px';
  }

  add_explain = () => {
    this.explain_pass = this.code_obj[this.current_line - 1]['line_explain'];
  }

  add_var = () => {
    if ( this.code_obj[this.current_line - 1]['var_values'] ){
      let data = this.code_obj[this.current_line - 1]['var_values'];
      for (const key in data) {
        this.value_vars += `${key}: ${data[key as keyof typeof data]} - ` 
      }
      this.value_vars = this.value_vars.substring(0,this.value_vars.length - 2)
    }
  }

  add_output = () => {
    let data = this.code_obj[this.current_line - 1]['output'];
    if ( data ){
      this.value_out = data;
    }
  }

  start = () => {
    this.add_explain()
    this.run_code = true;
  }

  next = () => {
    this.value_vars = ''
    this.value_out = ''
    if( this.current_line >= this.max_line){
      return;
    }
    this.current_line += 1;
    this.add_explain();
    this.add_top();
    this.add_var();
    this.add_output();
  }

  back = () => {
    this.value_vars = ''
    this.value_out = ''
    if( this.current_line == 1){
      return;
    }
    this.current_line -= 1;
    this.less_top();
    this.add_explain();
    this.add_var();
    this.add_output();
  }
}
