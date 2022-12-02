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

  lines_to_input = [11,13]
  current_line = 1;
  max_line = 16;
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
  a:number=0;
  b:number=1;
  mult:number = 1;

  code = `
  #include <cstdio>
  int suma(int a, int b){
      return a + b;
  }
  int resta(int a, int b){
      return a - b;
  }
  int main(){
      int a,b,mult;
      printf("Ingrese valor para a: ");
      scanf("%d",&a);
      printf("Ingrese valor para b: ");
      scanf("%d",&b);
      mult = suma(a,b) * resta(a,b);
      printf("La multiplicación entre suma y resta es: %d",mult);
  }`;

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se define la función suma que se le pasa por parametro dos variables a y b de tipo entero',
      'var_values':{
        'a':'',
        'b':'',
      },
    },//2
    {
      'line_explain':'Se suman la variables a y b y se retorna',
      'var_values':{
        'a':'',
        'b':'',
      },
    },//3
    {
      'line_explain':'Se cierra la función',
    },//4
    {
      'line_explain':'Se define la función resta que se le pasa por parametro dos variables a y b de tipo entero',
      'var_values':{
        'a':'',
        'b':'',
      },
    },//5
    {
      'line_explain':'Se restan las variables a y b y se retorna',
      'var_values':{
        'a':'',
        'b':'',
      },
    },//6
    {
      'line_explain':'Se cierra la función',
    },//7
    {
      'line_explain':'Se declara la función main',
    },//8
    {
      'line_explain':'Se declaran las variables a,b, mult de tipo entero',
    },//9
    {
      'line_explain':'Se le pide al usuario ingresar el valor de a',
      'output':'Ingrese valor para a:'
    },//10
    {
      'line_explain':'Se almacena en la variable a el valor ingresado',
    },//11
    {
      'line_explain':'Se le pide al usuario ingresar el valor de b',
      'output':'Ingrese valor para b:'
    },//12
    {
      'line_explain':'Se almacena en la variable b el valor ingresado',
    },//13
    {
      'line_explain':'Se hace la multiplicación entre el llamado a la función suma(a,b) multiplicado por el llamado (a,b)',
      'var_values':{
        'a':'',
        'b':'',
      },
    },//14
    {
      'line_explain':'Se imprime el resultado de la operación anterior',
    },//15
    {
      'line_explain':'Fin del programa',
    },//16
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
      case 15:
        this.mult = (this.a + this.b) * (this.a - this.b);
        break
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
        this.loop_jump(8,6);
        break
      case 8:
        this.loop_jump(15,7);
        break
      case 15:
        this.loop_jump(2,13,2);
        break
    }
  }

  validate_input = () => {
    if (this.current_line === 12) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.a = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 14) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.b = parseInt(this.inputfield)
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
          case 'a':
            this.value_vars += `<strong>${key}</strong> = ${this.a}<br/>`
            break;
          case 'b':
            this.value_vars += `<strong>${key}</strong> = ${this.b}<br/>`
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
      let data = this.code_obj[this.current_line - 1]['output'];
      if( this.current_line == 15 ){
        this.value_out = `La multiplicación entre suma y resta es: ${this.mult}`;
      }
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
