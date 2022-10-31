import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

  lines_to_input = [6,8]
  lines_to_validate = [7,9]
  current_line = 1;
  max_line = 18;
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

  // Variables de ejemplos
  edad = 0;
  ingresos = 0;
  inputfield = '';

  code = `
    #include <cstdio>
    int main(){
      int edad;
      float ingresos;
      printf("Ingrese la edad: ");
      scanf("%d",&edad);
      printf("Cuantos son sus ingresos: ");
      scanf("%f",&ingresos);
      if(edad > 16){
        if (ingresos > 1000){
          printf("El usuario debe tributar");
        }else{
          printf("El usuario no debe tributar");
        }
      }else{
        printf("El usuario no es mayor de 16");
      } 
    }
  `

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },//2
    {
      'line_explain':'Se declara la variable edad de tipo entero',
    },//3
    {
      'line_explain':'Se declara la variable ingresos de tipo float',
    },//4
    {
      'line_explain':'Se le pide la edad a usuario',
      'output':'Ingrese la edad',
    },//5
    {
      'line_explain':'Se captura el valor ingresado por el usuario en la variable edad',
    },//6
    {
      'line_explain':'Se le pide que ingrese sus ingresos',
      'output':'Cuantos son sus ingresos',
    },//7
    {
      'line_explain':'Se guarda el valor ingresado por el usuario en la variable ingresos',
    },//8
    {
      'line_explain':'Se valida si el valor de la variable edad es mayor que 16',
      'var_values':{
        'edad':'',
      },
    },//9
    {
      'line_explain':' Si la validación anterior es correcta entonces se valida si los ingresos son mayores de 1000',
      'var_values':{
        'ingresos':'',
      },
    },//10
    {
      'line_explain':'Se imprime que el usuario debe tributar',
      'output':'El usuario debe tributar',
    },//11
    {
      'line_explain':'Si por el contrario la condición anterior no se cumple',
    },//12
    {
      'line_explain':'Se imprime que el usuario no debe tributar',
      'output':'El usuario no debe tributar',
    },//13
    {
      'line_explain':'Se cierra el condicional',
    },//14
    {
      'line_explain':'Si edad es menor a 16',
    },//15
    {
      'line_explain':'Se imprime que el usuario no es mayor  de 16',
      'output':'El usuario no es mayor de 16',
    },//16
    {
      'line_explain':'Se cierra el condicional',
    },//17
    {
      'line_explain':'Fin del programa',
    },//18
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
      case 10:{
        if( +this.edad < 16 ){
          this.loop_jump(15,5);
        }        
        break;
      }
      case 11:{
        if( +this.ingresos < 1000 ){
          this.loop_jump(12,1);
        }        
        break;
      }
      case 12:{
        if( +this.ingresos > 1000 ){
          this.loop_jump(14,2);
        }        
        break;
      }
      case 15:{
        this.loop_jump(17,2);
        break;
      }
    }
   
  }

  validate_input = () => {
    if ( this.current_line === 7){
      if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }
      this.edad = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if ( this.current_line === 9 ){
      if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }
      this.ingresos = parseInt(this.inputfield)
      this.inputfield = '';
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
          case 'edad':
            this.value_vars += `<strong>${key}</strong> = ${this.edad}<br/>`
            break;
          case 'ingresos':
            this.value_vars += `<strong>${key}</strong> = ${this.ingresos}<br/>`
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
