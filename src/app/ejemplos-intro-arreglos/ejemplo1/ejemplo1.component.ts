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
  current_line = 1;
  max_line = 24;
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
  i: number = 0;
  j: number = 0;
  numeros: number[] = [];
  n1: number = 0;
  n2: number = 0;

  code = `
#include <cstdio>
  int main(){
   int numeros [5];
    for(int i = 0; i < 5; i++){
        printf("Ingrese numero %d: ",i+1);
        scanf("%d",&numeros[i]);
        fflush(stdin);
    }
    for(int i = 0; i < 5; i ++){
      for(int j = 0; j < 5; j ++){
         if(j != 4 && numeros[j] > numeros[j+1]){
            int n1 = numeros[j];
            int n2 = numeros[j+1];
            numeros[j] = n2;
            numeros[j+1] = n1;
         }
      }
    }
    printf("Numeros ordenados");
    for(int i = 0; i < 5; i++){
        printf("%d ",numeros[i]);
        fflush(stdin);
    }
  }
  `

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//2
    {
      'line_explain': 'Se declara un array de numeros',

    },//3
    {
      'line_explain': 'Se realiza un ciclo for para pedirle al usuario que ingrese los numeros',
      'var_values': {
        'i': '',
      }
    },//4
    {
      'line_explain': 'Se le pide al usuario que ingrese el numero',
      'output': 'Ingrese numero:',
    },//5
    {
      'line_explain': 'Se captura el dato del usuario',
    },//6
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//7
    {
      'line_explain': 'Se cierra el ciclo',
    },//8
    {
      'line_explain': 'Se empieza el primer ciclo for de ordenamiento burbuja',
      'var_values': {
        'i': '',

      }
    },//9
    {
      'line_explain': 'Se empieza el segundo ciclo for de ordenamiento (por cada iteración de i son 5 iteraciones de j)',
      'var_values': {
        'j': '',

      }
    },//10
    {
      'line_explain': 'Se valida si j es diferente de 4 porque si j = 4 entonces [j + 1] cogería un dato basura debido a que las posiciones del arrelgo de [0-4]',
      'var_values': {
        'numeros[j]': '',
        'numeros[j+1]': '',
      }
    },//11
    {
      'line_explain': 'Se almacena en la variable n1 el valor que se encuentra en el arreglo en la posición [j]',
      'var_values': {
        'numeros[j]': '',
        'n1': '',
      }
    },//12  
    {
      'line_explain': 'Se almacena en la variable n2 el valor que se encuentra en el arreglo en la posición [j + 1]',

      'var_values': {
        'numeros[j+1]': '',
        'n2': '',
      }
    },//13
    {
      'line_explain': 'Se actualiza el valor del arreglo numeros en la posición j al valor de la variable n2',
      'var_values': {
        'numeros[j]': '',
      }
    },//14
    {
      'line_explain': 'Se actualiza el valor del arreglo numeros en la posición j+1 al valor de la variable n1',
      'var_values': {
        'numeros[j+1]': '',
      }
    },//15
    {
      'line_explain': 'Se cierra el condicional',
    },//16
    {
      'line_explain': 'Se cierra el segundo ciclo',
    },//17
    {
      'line_explain': 'Se cierra el primer ciclo',
    },//18
    {
      'line_explain': 'Mostrar  los número ordenados',
    },//19
    {
      'line_explain': 'Se empieza un ciclo for de i = 0 hasta 5 para imprimir cada elemento del arreglo de numeros',
      'var_values': {
        'i': '',
      }
    },//20
    {
      'line_explain': 'Se imprime el elemento encontrado en el arrelgo en la posición i',
      'var_values': {
        'numeros[i]': '',
      }
    },//21
    {
      'line_explain': 'Se borra el buffer para que no haya problema en ver los otros datos imprimidos',
    },//22
    {
      'line_explain': 'Se cierra el ciclo for',
    },//23
    {
      'line_explain': 'Fin del programa',
    },//24  

  ]

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
      case 12:
        this.n1 = this.numeros[this.j];
        console.log(this.n1);
        break;
      case 13:
        this.n2 = this.numeros[this.j + 1];
        console.log(this.n2);
        break;
      case 14:
        this.numeros[this.j] = this.n2;
        break;
      case 15:
        this.numeros[this.j + 1] = this.n1;
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
      case 5:
        if (this.i >= 5) {
          this.loop_jump(8, 3);
          this.i = 0;
        }
        break;
      case 8:
        this.loop_jump(4, 4, 2)
        this.i++;
        break;
      case 10:
        if (this.i >= 5) {
          this.loop_jump(18, 8);
          this.i = 0;
        }
        break;
      case 11:
        if (this.j >= 5) {
          this.loop_jump(17, 6);
          this.j = 0;
        }
        break;
      case 12:
        if (this.j != 4 && this.numeros[this.j] < this.numeros[this.j + 1]) {
          this.loop_jump(16, 4);
        }
        break;
      case 17:
        this.loop_jump(10, 7, 2)
        this.j++;
        this.n1 = 0;
        this.n2 = 0;
        break;
      case 18:
        this.loop_jump(9, 9, 2)
        this.i++;
        this.j = 0;
        this.n1 = 0;
        this.n2 = 0;
        break;
      case 21:
        if (this.i >= 5) {
          this.loop_jump(23, 2);
          this.i = 0;
        }
        break;
      case 23:
        this.loop_jump(20, 3, 2)
        this.i++;
        break;
    }
  }

  validate_input = () => {
    if (this.current_line === 7) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.n1 = parseInt(this.inputfield);

      this.numeros.push(this.n1);
      console.log(this.numeros);

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
          case 'j':
            this.value_vars += `<strong>${key}</strong> = ${this.j}<br/>`
            break;
          case 'numeros[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.numeros[this.i]}<br/>`
            break;
          case 'numeros[j]':
            this.value_vars += `<strong>${key}</strong> = ${this.numeros[this.j]}<br/>`
            break;
          case 'numeros[j+1]':
            this.value_vars += `<strong>${key}</strong> = ${this.numeros[this.j + 1]}<br/>`
            break;
          case 'n1':
            this.value_vars += `<strong>${key}</strong> = ${this.n1}<br/>`
            break;
          case 'n2':
            this.value_vars += `<strong>${key}</strong> = ${this.n2}<br/>`
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