import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  lines_to_input = [5]
  lines_to_validate = [6]
  current_line = 1;
  max_line = 11;
  run_code = false;
  explain_pass = '';
  value_vars = '';
  value_out = '';
  top = 14;
  top_style = this.top + 'px';
  is_form = false;
  submit = false;
  inputFieldVar:string = '';
  list_to_values_input:any[] = [];
  reload = false;


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
    },
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },
    {
      'line_explain':'Se definen dos variable de tipo entero la cual la variable max_edad se le da un valor de 18',
      'var_values':{
        'max_edad':18
      },
    },
    {
      'line_explain':'Se le pide al usuario que ingrese la edad',
    },
    {
      'line_explain':'Se captura la edad ingresada por el usuario',
    },
    {
      'line_explain':'Se utiliza un condicional if para validar si el valor de la variable edad es mayor o igual a el valor de la variable max_edad',
      'var_values':{
        'max_edad':18,
        'edad':''
      },
    },
    {
      'line_explain':'Si la condición es correcta entonces, se imprime que es mayor de edad',
      'output':'Eres mayor de edad!!',
    },
    {
      'line_explain':'Si por el contrario la condición no se cumple',
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
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
    this.modalService.dismissAll();
  }

  ngOnInit(): void { }

  // Functions to run program
  refresh = () => {
    window.location.reload();
  }
  
  loop_jump = (to_jump:number, num_jump:number ) => {
    this.current_line = to_jump;
    for(let i = 0; i < num_jump; i++){
      this.add_top();
    }
  }

  jump = () => {
    switch(this.current_line){
      case 7:{
        if( this.list_to_values_input[0] < 18){
          this.loop_jump(8,1);
        }
        break;
      }
      case 8:{
        this.loop_jump(10,2);
      }
    }
  }

  validate_input = () => {
    if ( this.lines_to_validate.includes(this.current_line) ){
      if ( this.inputFieldVar === '' ){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }else{
        this.list_to_values_input.push(this.inputFieldVar);
        this.code_obj[this.current_line - 1]['var_values']!.edad = this.inputFieldVar;
      }
    }
  }

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
    if ( this.lines_to_input.includes(this.current_line) ){
        this.is_form = true;
        this.list_to_values_input = [];
    }else{
        this.is_form = false;
        let data = this.code_obj[this.current_line - 1]['output'];
        if( data ){
          this.value_out = data;
        }
    }
  } 

  start = () => {
    this.add_explain()
    this.run_code = true;
  }

  next = () => {
    this.value_vars = ''
    this.value_out = ''
    if( this.current_line >= this.max_line ){
      return;
    }
    this.current_line += 1;
    this.jump();
    this.validate_input();
    this.add_explain();
    this.add_top();
    this.add_var();
    this.add_output();
    if ( this.current_line >= this.max_line ){
      this.toastr.success('Fin del programa!','Programa finalizado');
      this.reload = true; 
    }
  }

  /* back = () => {
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
  } */

}
