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

  lines_to_input = [13, 15]
  current_line = 1;
  max_line = 17;
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
  x:number=0;
  n:number=0;
  init_value :number=0;

  code = `
  #include <cstdio>
  void serie(int x, int n){
      int init_value = x;
      printf("1 ");
      while (init_value <= n){
          printf("%d ",init_value);
          init_value += x;
      }
  }
  int main(){
      int x,n;
      printf("Ingrese el valor de la razon de cambio: ");
      scanf("%d",&x);
      printf("Ingrese el valor maximo de la serie: ");
      scanf("%d",&n);
      serie(x,n);
  }`;

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se define la función serie, la cual recibe por parametro dos valores x, n',
      'var_values':{
        'x ':'',
        'n ':'',
      },
    },//2
    {
      'line_explain':'Se declara una variable llamada init_value la cual va a ser igual al valor de x',
      'var_values':{
        'x ':'',
        'init_value':'',
      },
    },//3
    {
      'line_explain':'Se imprime el número 1 como inicializador de la serie',
    },//4
    {
      'line_explain':'Se hace un ciclo while el cual valida que el valor de la variable init_value sea menor o igual a n esto para asegurar que no se ha llegado al maximo de la serie',
      'var_values':{
        'n ':'',
        'init_value':'',
      },
    },//5
    {
      'line_explain':'Se imprime el valor que hay en la variable init_value',
      'var_values':{
        'init_value':'',
      },
    },//6
    {
      'line_explain':'Luego, el valor de init_value va aumentar a la razón de cambio x',
      'var_values':{
        'x':'',
        'init_value':'',
      },
    },//7
    {
      'line_explain':'Se cierra el ciclo while',
    },//8
    {
      'line_explain':'Se cierra la función',
    },//9
    {
      'line_explain':'Se declara la función principal',
    },//10
    {
      'line_explain':'Se declara x,n',
    },//11
    {
      'line_explain':'Se le pide al usuario que ingrese el valor de la razón de cambio',
      'output':'Ingrese el valor de la razon de cambio:'
    },//12
    {
      'line_explain':'Se almacena en la variable a el valor ingresado',
    },//13
    {
      'line_explain':'Se le pide al usuario ingresar el valor maximo de la serie',
      'output':'Ingrese el valor maximo de la serie:'
    },//14
    {
      'line_explain':'Se almacena en la variable a el valor ingresado',
    },//15
    {
      'line_explain':'Se hace el llamado a la función serie la cual imprime los numeros',
      'var_values':{
        'x':'',
        'n':'',
      },
    },//16
    {
      'line_explain':'Fin del programa',
    },//17
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
    switch (this.current_line) { }
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
      case 2:{
        this.loop_jump(10,8);
        break;
      }
      case 17:{
        this.loop_jump(2,15,2);
        break;
      }
    }
  }

  validate_input = () => {
    if (this.current_line === 14) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.x = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 16) {
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
          case 'x':
            this.value_vars += `<strong>${key}</strong> = ${this.x}<br/>`
            break;
          case 'n':
            this.value_vars += `<strong>${key}</strong> = ${this.n}<br/>`
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
