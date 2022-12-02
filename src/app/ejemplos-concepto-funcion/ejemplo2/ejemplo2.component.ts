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

  lines_to_input = [12]
  current_line = 1;
  max_line = 15;
  run_code = false;
  explain_pass = '';
  value_vars = '';
  value_out = '';
  top = 14;
  top_style = this.top + 'px';
  is_form = false;
  submit = false;
  inputFieldVar: string = '';
  list_to_values_input: any[] = [];
  reload = false;
  inputfield = '';

  // Variables del ejemplo
  n:number=0;
  fact:number=1;
  i:number = 1;

  code = `
  #include <cstdio>
  int factorial(int n){
      int fact = 1;
      for (int i = 1; i <= n; i++){
          fact = fact * i;
      }
      return fact;
  }
  int main(){
      int n,fact;
      printf("Ingrese el numero n: ");
      scanf("%d",&n);
      fact = factorial(n);
      printf("El factorial de %d es %d",n,fact);
  }`;

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se declara la función factorial la cual recibe por paramentro un entero n',
      'var_values':{
        'n':'',
      },
    },//2
    {
      'line_explain':'Se define una variable llamada fact que se iguala a 1',
      'var_values':{
        'fact':'',
      },
    },//3
    {
      'line_explain':'Se hace un ciclo que va desde 1 hasta el valor de n',
      'var_values':{
        'i':'',
        'n':'',
      },
    },//4
    {
      'line_explain':'La variable fact se actualiza con el valor resultante de multiplicar (fact * i), de esta forma con el ciclo hasta n encontraremos el facotrial de un numero',
      'var_values':{
        'i':'',
        'fact':'',
      },
    },//5
    {
      'line_explain':'Se cierra el ciclo',
    },//6
    {
      'line_explain':'Retorna fact',
      'var_values':{
        'fact':'',
      },
    },//7
    {
      'line_explain':'Se cierra la función factorial',
    },//8
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },//9
    {
      'line_explain':'Se definen las variables n y fact, n sera el valor a calcular facotrial, fact sera el valor hallado',
    },//10
    {
      'line_explain':'Se pide al usuario que ingrese el numero n',
      'output':'Ingrese el numero n:',
    },//11
    {
      'line_explain':'Se captura el valor ingresado por el usuario',
    },//12
    {
      'line_explain':'Se hace el llamado a la función factorial y se le pasa como parametro la variable n, el resultado de dicha función se almacena en fact',
      'var_values':{
        'n':'',
      },
    },//13
    {
      'line_explain':'Se imprime el factorial',
      'var_values':{
        'n':'',
        'fact':'',
      },
      'output':'',
    },//14
    {
      'line_explain':'Se cierra la función principal',
    },//15
  ];

  constructor(
    private highlightService: HighlightService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
  }

  // Functions to run program
  modify_vars = () => {
    switch (this.current_line) { 
      case 5:
        this.fact = this.fact * this.i;
        break;
    }
  }

  refresh = () => {
    window.location.reload();
  }

  loop_jump = (to_jump: number, num_jump: number, direcction: number = 1) => {
    this.current_line = to_jump;
    if (direcction === 1) {
      for (let i = 0; i < num_jump; i++) {
        this.add_top();
      }
    } else {
      for (let i = 0; i < num_jump; i++) {
        this.less_top();
      }
    }
  }

  jump = () => {
    switch (this.current_line) {
      case 2:
        this.loop_jump(9,7);
        break
      case 5:
        if( this.i > this.n ){
          this.loop_jump(6,1);
        }
        break
      case 6:
        this.loop_jump(4,2,2);
        this.i++;
        break
      case 9:
        this.loop_jump(14,5);
        break
      case 14:
        this.loop_jump(2,12,2);
        break
    }
  }

  validate_input = () => {
    if (this.current_line === 13) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.n = parseInt(this.inputfield)
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
    if (this.code_obj[this.current_line - 1]['var_values']) {
      let data = this.code_obj[this.current_line - 1]['var_values'];
      for (const key in data) {
        switch (key) {
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
          case 'n':
            this.value_vars += `<strong>${key}</strong> = ${this.n}<br/>`
            break;
          case 'fact':
            this.value_vars += `<strong>${key}</strong> = ${this.fact}<br/>`
            break;
          default:
            this.value_vars += `<strong>${key}</strong> = ${data[key as keyof typeof data]}<br/>`
            break
        }
      }
    }
  }

  add_output = () => {
    if (this.lines_to_input.includes(this.current_line)) {
      this.is_form = true;
      this.list_to_values_input = [];
    } else {
      this.is_form = false;
      if( this.current_line == 14 ){
        this.value_out = `El factorial de ${this.n} es ${this.fact}`;
        return
      }
      let data = this.code_obj[this.current_line - 1]['output'];
      if (data) {
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
    if (this.current_line >= this.max_line) {
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
    if (this.current_line >= this.max_line) {
      this.toastr.success('Fin del programa!', 'Programa finalizado');
      this.reload = true;
    }
  }
}
