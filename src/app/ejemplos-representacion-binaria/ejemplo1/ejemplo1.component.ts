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
      'var_values':{
        'password_user':'MinuevaClave'
      },
    },
    {
      'line_explain':'Pedimos al usuario que ingrese un numero',
      'var_values':{
        'size':12
      },
    },
    {
      'line_explain':'Se guarda el valor ingresado en la variable number',
      'var_values':{
        'size':12
      },
    },
    {
      'line_explain':'Obtenemos la cantidad de bits que se necesitan para representar el numero ingresado por el usuario',
      'output':'Ingrese contraseña',
    },
    {
      'line_explain':'Se captura lo ingresado por el usuario',
    },
    {
      'line_explain':'Definimos un arreglo de caracteres con una longitud de la cantidad de bits obtenidos anteriormente',
      'var_values':{
        'equal':"true"
      },
    },
    {
      'line_explain':'Definimos el iterador que va a recorrer el arreglo de caracteres',
      'var_values':{
        'i':this.i,
        'size':"12"
      },
    },
    {
      'line_explain':'Iteramos hasta que el valor de number sea diferente de cero',
      'var_values':{
        'i':this.i,
        'password':'',
        'password_user':'',
        'password[i]':'',
        'password_user[i]':''
      }
    },
    {
      'line_explain':'validamos con una condición ternaria si el modulo de number entre 2 es igual a cero o no, de ser así entonces se añade al array de caracteres el caracter "0" de lo contario el caracter "1"',
      'var_values':{
        'equal':'',
      }
    },
    {
      'line_explain':'luego se divide el valor de number entre 2 (de esta manera por cada ciclo se ira disminuyendo el valor)',
    },
    {
      'line_explain':'Se disminuye el valor del iterador',
    },
    {
      'line_explain':'Se finaliza el ciclo anterior',
      'var_values':{
        'equal':this.equal,
      }
    },
    {
      'line_explain':'Se define un ciclo for que ira desde 0 hasta el valor de size_array',
      'output':'Claves iguales',
    },
    {
      'line_explain':'Se imprime el caracter en la posición index',
    },
    {
      'line_explain':'Se imprime que las claves no son iguales',
      'output':'Claves no iguales',
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

  jump = () => {}

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

}
