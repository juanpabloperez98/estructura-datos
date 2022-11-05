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
  
  lines_to_input = [6]
  lines_to_validate = [7]
  lines_to_modify_vars = [11,12,13];
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

  // Variables del ejemplo
  number = 0;
  size_array = 0;
  binary:string[] = []
  i = 0;
  index = 0;
  inputfield = '';


  code = `
  #include <cstdio>
  #include <math.h>
  int main(){
    int number;
    printf("Ingrese un numero: ");
    scanf("%d",&number);
    int size_array = (int)log2(number)+1;
    char binary[size_array];
    int i = size_array-1;
    while(number != 0){
      binary[i] = (number % 2 == 0 ? '0' : '1');
      number = number/2;
      i--;
    }
    for(int index = 0; index < size_array; index++){
      printf("%c",binary[index]);
    }
  }
  `

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },
    {
      'line_explain':'Se incluye la libreria <math.h> la cual permite manejar funciones matematicas',
    },
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },
    {
      'line_explain':'Definimos la variable number de tipo entero',
    },
    {
      'line_explain':'Pedimos al usuario que ingrese un numero',
      'output':'Ingrese un numero',
    },
    {
      'line_explain':'Se guarda el valor ingresado en la variable number',
    },
    {
      'line_explain':'Obtenemos la cantidad de bits que se necesitan para representar el numero ingresado por el usuario',
      'var_values':{
        'number':""
      },
    },
    {
      'line_explain':'Definimos un arreglo de caracteres con una longitud de la cantidad de bits obtenidos anteriormente',
      'var_values':{
        'size_array':""
      },
    },
    {
      'line_explain':'Definimos el iterador que va a recorrer el arreglo de caracteres',
      'var_values':{
        'size_array':""
      },
    },
    {
      'line_explain':'Iteramos hasta que el valor de number sea diferente de cero',
      'var_values':{
        'number':""
      }
    },
    {
      'line_explain':'validamos con una condición ternaria si el modulo de number entre 2 es igual a cero o no, de ser así entonces se añade al array de caracteres el caracter "0" de lo contario el caracter "1"',
      'var_values':{
        'number':"",
        'i':"",
        'binary[i]':""
      }
    },
    {
      'line_explain':'luego se divide el valor de number entre 2 (de esta manera por cada ciclo se ira disminuyendo el valor)',
      'var_values':{
        'number':"",
      }
    },
    {
      'line_explain':'Se disminuye el valor del iterador',
      'var_values':{
        'i':"",
      }
    },
    {
      'line_explain':'Se finaliza el ciclo anterior',
    },
    {
      'line_explain':'Se define un ciclo for que ira desde 0 hasta el valor de size_array',
      'var_values':{
        'index':"0",
        'size_array':"",
      }
    },
    {
      'line_explain':'Se imprime el caracter en la posición index',
      'var_values':{
        'binary[index]':""
      }
    },
    {
      'line_explain':'Se cierra el ciclo for',
    },
    {
      'line_explain':'Fin del programa',
    }
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

  ngOnInit(): void {
  }

  // Functions to run program
  modify_vars = () => {
    // 11,12,13
    if ( this.lines_to_modify_vars.includes(this.current_line) ){
      switch(this.current_line){
        case 11:
          var value = this.number % 2 === 0 ? '0' : '1';
          this.binary.push(value);
          break;
        case 12:
          this.number = Math.floor(this.number / 2);
          break;
        case 13:
          this.i --;
          break;
      }
    }
  }

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
      case 14:
        if( this.number != 0 ){
          this.loop_jump(10,4,2);
        }        
        break;
      case 16:
        if( this.index >= this.size_array ){
          this.loop_jump(17,1);
        }
        break
      case 17:
        if( this.index < this.size_array ){
          this.loop_jump(15,2,2);
          this.index += 1;
        }
        break
    }
  }

  validate_input = () => {
    if ( this.lines_to_validate.includes(this.current_line) ){      
      if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
        this.toastr.error('Debe ingresar un valor valido para continuar');
        this.current_line --;
        this.less_top();
      }
      this.number = parseInt(this.inputfield)
      this.size_array = Math.round(Math.log2(this.number) + 1);
      this.i = this.size_array - 1;
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
          case 'number':
            this.value_vars += `<strong>${key}</strong> = ${this.number}<br/>`
            break;
          case 'size_array':
            this.value_vars += `<strong>${key}</strong> = ${this.size_array}<br/>`
            break;
          case 'binary[i]':
            var value = this.number % 2 === 0 ? '0' : '1';
            this.value_vars += `<strong>${key}</strong> = ${value}<br/>`
            break;
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
          case 'binary[index]':
            var value = this.binary[this.index];
            this.value_vars += `<strong>${key}</strong> = ${value}<br/>`
            break;
          case 'index':
            this.value_vars += `<strong>${key}</strong> = ${this.index}<br/>`
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
    this.modify_vars();
    this.add_var();
    this.add_output();
    if ( this.current_line >= this.max_line ){
      this.toastr.success('Fin del programa!','Programa finalizado');
      this.reload = true; 
    }
  }

}
