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

  lines_to_input = [7]
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
  i: number = 0;
  arr_1: number[] = [];
  arr_2: number[] = [];
  aux1: number = 0;

  code = `
  #include <cstdio>
  int main(){
      int arr_1[5];
      int arr_2[5];
      for(int i = 0; i < 5; i++){
          printf("\\nIngrese numero en la posicion [%d]: ",i);
          scanf("%d",&arr_1[i]);
          fflush(stdin);
      }
      for(int i = 0; i < 5; i++){
          arr_2[i] = arr_1[i] * 2;
      } 
      printf("\\nLista resultante\\n");
      for(int i = 0; i < 5; i++){
          printf("%d ", arr_2[i]);
      }
  }
`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    }, //1
    {
      'line_explain': 'Se declara la funci�n principal',
    }, //2
    {
      'line_explain': 'Se declara el arrelgo 1 de enteros',
    }, //3
    {
      'line_explain': 'Se declara el arreglo 2 de enteros (en este se van almacenar los otros)',
    }, //4
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 5, para poder pedirle al usuario los números del primer arreglo',
      'var_values': {
        'i': '',
      }

    }, //5
    {
      'line_explain': 'Se le pide al usuario que ingrese un número para el arreglo 1 en la posición i',
    }, //6
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la en arreglo 1 en la posición i',
      'output': 'Ingrese numero:',
    }, //7
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//8
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //9
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 5, para poder meter los valores del arreglo1 en el arreglo 2 multiplicado por 2',
      'var_values': {
        'i': '',
      },
    }, //10
    {
      'line_explain': 'Se alamacena en el arreglo 2 en la posición i, el valor de multiplicar arr_1[i] * 2',
      'var_values': {
        'arr_2[i]': '',
        'arr_1[i]': '',

      },
    }, //11
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //12
    {
      'line_explain': 'Mostrar el arreglo resultante',
    }, //13
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta 5, para poder mostrar los elementos del arr_2',
      'var_values': {
        'i': '',
      },
    }, //14
    {
      'line_explain': 'Se imprime el elemento',
    }, //15
    {
      'line_explain': 'se cierra el ciclo for',
    },//16
    {
      'line_explain': 'Fin del programa',
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
    switch (this.current_line) {
      case 11:
        this.arr_2[this.i] = this.arr_1[this.i] * 2;
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
      case 6:
        if (this.i >= 5) {
          this.loop_jump(9, 3);
          this.i = 0;
        }
        break;
      case 9:
        this.loop_jump(5, 4, 2)
        this.i++;
        break;

      case 11:
        if (this.i >= 5) {
          this.loop_jump(12, 1);
          this.i = 0;
        }
        break;
      case 12:
        this.loop_jump(10, 2, 2)
        this.i++;
        break;

      case 15:
        if (this.i >= 5) {
          this.loop_jump(16, 1);
          this.i = 0;
        }
        break;
      case 16:
        this.loop_jump(14, 2, 2)
        this.i++;
        break;
    }
  }

  validate_input = () => {
    if (this.current_line === 8) {
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
      if (this.current_line == 15) {
        this.value_out = `El arreglo tres es : ${this.arr_2[this.i]} `
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
