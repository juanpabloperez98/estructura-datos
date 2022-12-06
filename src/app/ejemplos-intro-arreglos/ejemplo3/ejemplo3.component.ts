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

  lines_to_input = [9, 15]
  current_line = 1;
  max_line = 31;
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
  arr_1: number[] = [];
  arr_2: number[] = [];
  arr_3: number[] = [];
  aux_i: number = 0;
  aux1: number = 0;
  aux2: number = 0;

  code = ` 
  #include <cstdio>
  int main(){
      int arr_1[5];
      int arr_2[5];
      int arr_3[10];
      printf("\\nLista # 1");
      for(int i = 0; i < 5; i++){
        printf("\\nIngrese numero en la posicion [%d]: ",i);
        scanf("%d",&arr_1[i]);
        fflush(stdin);
      }
      printf("\\nLista # 2");
      for(int i = 0; i < 5; i++){
        printf("\\nIngrese numero en la posicion [%d]: ",i);
        scanf("%d",&arr_2[i]);
        fflush(stdin);
      }
      int aux_i = 0;
      for(int i = 0; i < 10; i++){
        if(i < 5){
            arr_3[i] = arr_1[i];
        }else{
            arr_3[i] = arr_2[aux_i];
            aux_i += 1;
        }
      }
      printf("\\nLista # 3\\n");
        for(int i = 0; i < 10; i++){
          printf("%d ",arr_3[i]);
        }
}`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//2
    {
      'line_explain': 'Se define el arreglo 1 de enteros de 5 posiciones',
    },//3
    {
      'line_explain': 'Se define el arreglo 2 de enteros de 5 posiciones',
    },//4
    {
      'line_explain': 'Se define el arreglo 3 de enteros de 10 posiciones (este es el arreglo donde se almacenaran los dos arreglos anteriores)',
    },//5
    {
      'line_explain': 'Se imprime lista 1',
    },//6
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 5, para poder pedirle al usuario los números del primer arreglo',
      'var_values': {
        'i': '',
      },
    },//7
    {
      'line_explain': 'Se le pide al usuario que ingrese un número para el arreglo 1 en la posición i',
    },//8
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la en arreglo 1 en la posición i',
      'output': 'Ingrese numero:',
    },//9
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//10
    {
      'line_explain': 'Se cierra el ciclo for',
    },//11
    {
      'line_explain': 'Se imprime la lista 2',
    },//12
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 5, para poder pedirle al usuario los números del segundo arreglo',
      'var_values': {
        'i': '',
      },
    },//13
    {
      'line_explain': 'Se le pide al usuario que ingrese un número para el arreglo 2 en la posición i',
    },//14
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la en arreglo 2 en la posición i',
    },//15
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//16
    {
      'line_explain': 'Se cierra el ciclo for',
    },//17
    {
      'line_explain': 'Se define una variable llamada aux_i que empieza en cero (esta variable nos ayudara a poder definir el indice del arreglo 2)',
      'var_values': {
        'aux_i': '',
      },
    },//18
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 10, para almacenar los valores del arreglo 1 y arreglo 2 en el arreglo 3',
      'var_values': {
        'i': '',
      }
    },//19
    {
      'line_explain': 'Se valida si i  es menor a 5 (esto es porque vamos a utilizar i para definit el índice de arr_1)',
      'var_values': {
        'i': '',
      },
    },//20
    {
      'line_explain': 'Se almacena en el arreglo 3 en la posición i, el valor que haya en arr_1 en posición i',
      'var_values': {
        'arr_3[i]': '',
        'arr_1[i]': '',
      },
    },//21
    {
      'line_explain': 'Si lo anterior no ocurre significa que i es mayor o igual a 5, entonces ya se debe almacenar en el arreglo 3 los valores que se encuentren en el arreglo 2',
    },//22
    {
      'line_explain': 'Se almacena en el arreglo 3 el valor de arr_2 en la posición aux_i (esta variable es la que define el índice de arr_2)',
      'var_values': {
        'arr_2[aux_i]': '',
        'arr_3[i]': '',
      },
    },//23
    {
      'line_explain': 'Se aumenta el valor de aux_i en 1',
      'var_values': {
        'aux_i': '',

      },
    },//24
    {
      'line_explain': 'Se cierra la validación',
    },//25
    {
      'line_explain': 'Se cierra el ciclo for',
    },//26
    {
      'line_explain': 'Se imprime lista #3',
    },//27
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 10, para mostrar los valores del arreglo 3',
      'var_values': {
        'i': '',
      },
    },//28
    {
      'line_explain': 'Se imprime lo que haya en arr_3 en la posición [i]',
    },//29
    {
      'line_explain': 'Se cierra el ciclo for',
    },//30
    {
      'line_explain': 'Fin del programa',
    },//31
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
      case 21:
        this.arr_3[this.i] = this.arr_1[this.i];
        break;
      case 23:
        this.arr_3[this.i] = this.arr_2[this.aux_i];

        break;
      case 24:
        this.aux_i++;
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
      case 8:
        if (this.i >= 5) {
          this.loop_jump(11, 3);
          this.i = 0;
        }
        break;
      case 11:
        this.loop_jump(7, 4, 2)
        this.i++;
        break;
      case 14:
        if (this.i >= 5) {
          this.loop_jump(17, 3);
          this.i = 0;
        }
        break;
      case 17:
        this.loop_jump(13, 4, 2)
        this.i++;
        break;
      case 20:
        if (this.i >= 10) {
          this.loop_jump(26, 6);
          this.i = 0;
        }
        break;
      case 21:
        if (this.i >= 5) {
          this.loop_jump(22, 1);
        }
        break;

      case 22:
        if (this.i < 5) {
          this.loop_jump(25, 3);
        }
        break;

      case 26:
        this.loop_jump(19, 7, 2)
        this.i++;
        break;
      case 29:
        if (this.i >= 10) {
          this.loop_jump(30, 0);
        }
        break;
      case 30:
        this.loop_jump(28, 2, 2)
        this.i++;
        break;

    }
  }

  validate_input = () => {
    if (this.current_line === 10) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }

      this.aux1 = parseInt(this.inputfield);
      this.arr_1.push(this.aux1);
      this.inputfield = '';
    }

    if (this.current_line === 16) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.aux2 = parseInt(this.inputfield);
      this.arr_2.push(this.aux2);

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
          case 'arr_1[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr_1[this.i]}<br/>`
            break;
          case 'arr_2[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr_2[this.i]}<br/>`
            break;
          case 'arr_3[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr_3[this.i]}<br/>`
            break;
          case 'arr_2[aux_i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr_2[this.aux_i]}<br/>`
            break;
          case 'aux_i':
            this.value_vars += `<strong>${key}</strong> = ${this.aux_i}<br/>`
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
      if (this.current_line == 29) {
        this.value_out = `Segundo arreglo multiplicado por 2: ${this.arr_3[this.i]} `
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
