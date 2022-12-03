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
  suma: number = 0;
  resta: number = 0;
  mult: number = 1;
  arr_nums: number[] = [];
  aux: number = 0;

  code = `  
  #include <cstdio>
  int main(){
      int arr_nums[5];
      for(int i = 0; i < 5; i++){
          printf("\\nIngrese un numero: ");
          scanf("%d",&arr_nums[i]);
          fflush(stdin);
      } 
      int suma = 0;
      for(int i = 0; i < 5; i++){
          suma += arr_nums[i];
      }
      int resta = 0;
      for(int i = 0; i < 5; i++){
          resta -= arr_nums[i];
      }
      int mult = 1;
      for(int i = 0; i < 5; i++){
          mult *= arr_nums[i];
      }
      printf("La suma de los elementos es: ",suma);
      printf("La resta de los elementos es: ",resta);
      printf("La multiplicacion de los elementos es: ",mult);
  }    
  `;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//2
    {
      'line_explain': 'Se declara un arreglo llamado arr_nums de tipo entero de 5 posiciones',
    },//3
    {
      'line_explain': 'Se de clara un ciclo for que empieza i = 0 hasta 5, para poder pedir los números almacenar en el arreglo',
      'var_values': {
        'i': '',
      },
    },//4
    {
      'line_explain': 'Se le pide al usuario que ingrese un numero en la posición i',
    },//5
    {
      'line_explain': 'Se almacena lo ingresado por el usuario en la posición i del arreglo arr_nums',
      'output': 'Ingrese numero:',
    },//6
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//7
    {
      'line_explain': 'Se cierra el ciclo for',
    },//8
    {
      'line_explain': 'Se define la variable suma la cual se inicializa en 0',
      'var_values': {
        'suma': '',
      },
    },//9
    {
      'line_explain': 'Se de clara un ciclo for que empieza i = 0 hasta 5, para poder sumar los elementos del arreglo',
      'var_values': {
        'i': '',
      },
    },//10
    {
      'line_explain': 'Se aumenta la variable suma en el valor que se encuentre en el arreglo arr_nums en la posicion i',
    },//11
    {
      'line_explain': 'Se cierra el ciclo for',
    },//12
    {
      'line_explain': 'Se define la variable resta la cual se inicializa en 0',
    },//13
    {
      'line_explain': 'Se de clara un ciclo for que empieza i = 0 hasta 5, para poder restar los elementos del arreglo',
    },//14
    {
      'line_explain': 'Se resta la variable resta en el valor que se encuentre en el arreglo arr_nums en la posicion i',
      'var_values': {
        'arr_nums[i]': '',
      },
    },//15
    {
      'line_explain': 'Se cierra el ciclo for',
    },//16
    {
      'line_explain': 'Se define la variable mult la cual se inicializa en 1',
    },//17
    {
      'line_explain': 'Se de clara un ciclo for que empieza i = 0 hasta 5, para poder multiplicar los elementos del arreglo',
    },//18
    {
      'line_explain': 'Se multiplica el valor de la variable mult por el valor que se encuentre en el arreglo arr_nums en la posición i',
    },//19
    {
      'line_explain': 'Se cierra el ciclo for',
    },//20
    {
      'line_explain': 'Se imprime la suma de los elementos, imprimiendo la variable suma',
    },//21
    {
      'line_explain': 'Se imprime la resta de los elementos, imprimiendo la variable resta',
    },//22
    {
      'line_explain': 'Se imprime la multiplicación de los elementos, imprimiendo la variable mult',
    },//23
    {
      'line_explain': 'Fin del programa',
    },//24 
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
        this.suma += this.arr_nums[this.i];
        console.log(this.suma);
        break;
      case 15:
        this.resta -= this.arr_nums[this.i];
        console.log(this.resta);
        break;
      case 19:
        this.mult *= this.arr_nums[this.i];
        console.log(this.mult);
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
      //suma
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
      //resta
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
      //multi
      case 19:
        if (this.i >= 5) {
          this.loop_jump(20, 1);
          this.i = 0;
        }
        break;
      case 20:
        this.loop_jump(18, 2, 2)
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
      this.aux = parseInt(this.inputfield)
      this.arr_nums.push(this.aux);
      console.log(this.arr_nums);
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
          case 'suma':
            this.value_vars += `<strong>${key}</strong> = ${this.suma}<br/>`
            break;
          case 'resta ':
            this.value_vars += `<strong>${key}</strong> = ${this.resta}<br/>`
            break;
          case 'mult':
            this.value_vars += `<strong>${key}</strong> = ${this.mult}<br/>`
            break;
          case 'arr_nums[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr_nums[this.i]}<br/>`
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
      if (this.current_line == 21) {
        this.value_out = `La suma de los elementos es: ${this.suma} `
      }
      if (this.current_line == 22) {
        this.value_out = `La resta de los elementos es: ${this.resta} `
      }
      if (this.current_line == 23) {
        this.value_out = `La multiplicacion de los elementos es:  ${this.mult} `
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
