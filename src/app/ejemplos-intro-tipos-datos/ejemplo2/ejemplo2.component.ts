import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  lines_to_input = [8]
  lines_to_validate = [9]
  current_line = 1;
  max_line = 20;
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

  // Variables del ejemplo
  password_user = 'MinuevaClave';
  password = '';
  equal = true;
  i = 0;


  code = `
  #include <cstdio>
  #include <string.h>
  int main (){ 
    char password_user[] = "MinuevaClave";
    int size = strlen(password_user);
    char password[size]; 
    printf("Ingrese contrasena: ");
    gets(password);
    bool equal = true;
    for(int i = 0; i < size; i++){ 
      if(password[i]!=password_user[i]){
        equal=false;
      }
    }
    if(equal == true){
      printf("Claves iguales");
    }else{
      printf("Claves no iguales");
    }
  }
  `

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },
    {
      'line_explain':'Se incluye la libreria <string.h> la cual contiene la definición de macros, constantes, funciones y tipos y algunas operaciones de manipulación de memoria.',
    },
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },
    {
      'line_explain':'Se inicializa un arreglo llamado password_user[] con el valor de "MinuevaClave"',
      'var_values':{
        'password_user':'MinuevaClave'
      },
    },
    {
      'line_explain':'Se declara una variable size y se iguala al valor que devuelva la función strlen',
      'var_values':{
        'size':12
      },
    },
    {
      'line_explain':'Se define un nuevo arreglo con la misma longitud que la variable password_user',
      'var_values':{
        'size':12
      },
    },
    {
      'line_explain':'Se le pide al usuario que ingrese una contraseña',
      'output':'Ingrese contraseña',
    },
    {
      'line_explain':'Se captura lo ingresado por el usuario',
    },
    {
      'line_explain':'Se declara un condicional y se iguala a true, esto con la intensión de validar si todos los caractaeres de las cadenas de caracteres',
      'var_values':{
        'equal':"true"
      },
    },
    {
      'line_explain':'Se define un ciclo for que empieza en i = 0 y va hasta el valor de la variable size',
      'var_values':{
        'i':this.i,
        'size':"12"
      },
    },
    {
      'line_explain':'Se valida si el caracter en la posición i de la cadena password es diferente del caracter i en la cadena password_user',
      'var_values':{
        'i':this.i,
        'password':'',
        'password_user':'',
        'password[i]':'',
        'password_user[i]':''
      }
    },
    {
      'line_explain':'Dado el caso que la condición se cumpla entonces la variable equal se iguala a false',
      'var_values':{
        'equal':'',
      }
    },
    {
      'line_explain':'Se cierra el condicional',
    },
    {
      'line_explain':'Se cierra el ciclo for',
    },
    {
      'line_explain':'Se valida si el valor de la variable equal es igual a true',
      'var_values':{
        'equal':this.equal,
      }
    },
    {
      'line_explain':'Si la condición anterior se cumple entonces se imprime que las claves son iguales',
      'output':'Claves iguales',
    },
    {
      'line_explain':'Si la condición no se cumple',
    },
    {
      'line_explain':'Se imprime que las claves no son iguales',
      'output':'Claves no iguales',
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
      case 12:{
        if( this.password[this.i] === this.password_user[this.i] ){
          this.loop_jump(13,1);
        }else{
          this.equal = false;
        }
        break;
      }
      case 15:{
        if ( this.i < 11 )
        this.loop_jump(10,5,2);
        this.i += 1;
        break;
      }
      case 16:{
        if ( !this.equal )
        this.loop_jump(17,1);
        break
      }
      case 17:{        
        if ( this.equal )
        this.loop_jump(19,2);
        break;
      }
    }
   
  }

  validate_input = () => {
    if ( this.lines_to_validate.includes(this.current_line) ){
      if ( this.password === '' ){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }else if( this.password.length < 12 ){
        this.toastr.error('La longitud de la cadena debe ser del mismo tamaño que la variable password_user');
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
          case 'password':
            this.value_vars += `<strong>${key}</strong> = ${this.password}<br/>`
            break;
          case 'password_user':
            this.value_vars += `<strong>${key}</strong> = ${this.password_user}<br/>`
            break;
          case 'password[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.password[this.i]}<br/>`
            break;
          case 'password_user[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.password_user[this.i]}<br/>`
            break;
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
          case 'equal':
            this.value_vars += `<strong>${key}</strong> = ${this.equal}<br/>`
            break;
          default:
            this.value_vars += `<strong>${key}</strong> = ${data[key as keyof typeof data]}<br/>`
            break
        }
      }      
      // this.value_vars = this.value_vars.substring(0,this.value_vars.length - 2)
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
