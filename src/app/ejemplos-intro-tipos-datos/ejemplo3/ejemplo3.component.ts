import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

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
  list_to_values_input:any[] = [];
  reload = false;

  // Variables del ejemplo
  numero: string = '';

  code = `
  #include <cstdio>
  int main(){
    int numero;
    printf("Ingrese el numero: ");
    scanf("%d",&numero);
    if(numero % 2 == 0){
      printf("El numero %d es par",numero);
    }else{
      printf("El numero %d es impar",numero);
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
      'line_explain':'Se declara una variable llamada numero de tipo de dato entero',
    },
    {
      'line_explain':'Se le pide al usuario que ingrese el numero por pantalla',
      'output':'Ingrese el numero'
    },
    {
      'line_explain':'Se guarda el valor ingresado por el usuario en la variable numero',
    },
    {
      'line_explain':'Se valida si la operacion modulo del valor de la variable numero entre dos es igual a cero',
      'var_values':{
        'numero':''
      }
    },
    {
      'line_explain':'Si la validacion anterior es correcta entonces se imprime que el número es par',
      'output':'El numero es par'
    },
    {
      'line_explain':'De lo contrario',
    },
    {
      'line_explain':'Se imprime que el numero es impar',
      'output':'El numero es impar'
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

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
    this.modalService.dismissAll();
  }

  // Functions to run program
  refresh = () => {
    window.location.reload();
  }
  
  loop_jump = (to_jump:number, num_jump:number, direcction:number = 1) => {
    this.current_line = to_jump;
    if( direcction === 1 ){
      for(let i = 0; i < num_jump; i++){
        this.add_top();
      }
    }else{
      for(let i = 0; i < num_jump; i++){
        this.less_top();
      }
    }
  }

  jump = () => {
    switch(this.current_line){
      case 7:{
        if(+this.numero%2 !== 0){
          this.loop_jump(8,1);
        }
        break;
      }
      case 8:{
        this.loop_jump(10,2);
        break
      }
    }
   
  }

  validate_input = () => {
    if ( this.lines_to_validate.includes(this.current_line) ){      
      let num = +this.numero;
      if ( num === 0 || this.numero === '' || isNaN(parseInt(this.numero))){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
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
        switch( key ){
          case 'numero':
            this.value_vars += `<strong>${key}</strong> = ${this.numero}<br/>`
            break;
          default:
            this.value_vars += `<strong>${key}</strong> = ${data[key as keyof typeof data]}<br/>`
            break
        }
      }      
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
}
