import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component implements OnInit {

  lines_to_input = [6]
  current_line = 1;
  max_line = 21;
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
  i: number = 1;
  suma: number = 0;
  n: number = 0;
  index: number = 0;
  arr: number[] = [this.n];

  code = `
  #include <cstdio>
int main(){
    int n;
    int suma=0;
    printf("Ingrese el numero n: ");
    scanf("%d",&n);
    fflush(stdin);
   int* arr = new int[n];
    int index = 0;
    for(int i = 1; i <= n; i++){
        if(i % 2 == 0){
    	    arr[index] = i;
            suma += arr[index];
			index ++;
        }
	}
	for(int i = 0; i < index; i++){
    	printf("%d ",arr[i]);
	}	
printf("%d total de la suma: ",suma);
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
      'line_explain': 'Se define la variable n de tipo entero',
    }, //3
    {
      'line_explain': 'Se define la variable suma para hacer la suma del total del arreglo',
    }, //4
    {
      'line_explain': 'Se le pide al usuario que ingrese el número n',
    }, //5
    {
      'line_explain': 'Se almacena el valor igresado por el usuario',
      'output': 'Ingrese el numero n:'
    }, //6
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //7
    {
      'line_explain': 'Se define el arreglo arr el cual tiene como longitud el valor n que ha ingresado el usuario',
      'var_values': {
        'n': '',
      },
    }, //8
    {
      'line_explain': 'Se define la variable index la cual nos sirve para identificar el indíce del arreglo al cual vamos a almcenar los valores',
      'var_values': {
        'index': '',
      },
    }, //9
    {
      'line_explain': 'Se define un ciclo for que va desde i = 1 hasta n',
      'var_values': {
        'i': '',
        'n': '',
      },
    }, //10
    {
      'line_explain': 'Se valida si el módulo del valor de i entre 2 es igual a cero (Esto con la intención de validar si el valor de i es par)',
      'var_values': {
        'i': '',
      },
    }, //11
    {
      'line_explain': ' Se almacena en el arreglo arr en la posición [index] el valor de i (El cual debe ser un número par)',
      'var_values': {
        'arr[index]': '',
        'i': '',
      },
    }, //12
    {
      'line_explain': 'Se suma en la variable suma lo que tiene la posicion index del arreglo arr',
      'var_values': {
        'suma': '',
      },
    }, //13
    {
      'line_explain': 'Se aumenta en 1 el valor de index',
      'var_values': {
        'index': '',
      },
    }, //14
    {
      'line_explain': 'Se cierra el condicional',
    }, //15
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //16
    {
      'line_explain': 'Se define un ciclo for que va desde i = 1 hasta index esto para mostrar los elementos encontrados en el arreglo',
      'var_values': {
        'i': '',
        'index': '',
      },
    }, //17
    {
      'line_explain': 'Se muestran todos los elementos de la lista',

    }, //18
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //19
    {
      'line_explain': 'Se muestran la suma del arreglo arr',

    },//20
    {
      'line_explain': 'Fin del programa',
    }, //21
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

      case 12:
        this.arr[this.index] = this.i;
        console.log(this.arr[this.index]);
        break;
      case 13:
        this.suma += this.arr[this.index];
        break;
      case 14:
        this.index++;
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


      case 11:
        if (this.i > this.n) {
          this.loop_jump(16, 5);
          this.i = 0;
        }
        break;

      case 12:
        if ((this.i % 2) != 0) {
          this.loop_jump(15, 3)

        }
        console.log(this.i % 2)
        break;

      case 16:
        this.loop_jump(10, 6, 2)
        this.i++;
        break;
      //ultimo for
      case 18:
        if (this.i >= this.index) {
          this.loop_jump(19, 1);
          this.i = 0;
        }
        break;
      case 19:
        this.loop_jump(17, 2, 2)
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

      }
      this.n = parseInt(this.inputfield);
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
          case 'arr':
            break
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
          case 'n':
            this.value_vars += `<strong>${key}</strong> = ${this.n}<br/>`
            break;
          case 'suma':
            this.value_vars += `<strong>${key}</strong> = ${this.suma}<br/>`
            break;
          case 'index':
            this.value_vars += `<strong>${key}</strong> = ${this.index}<br/>`
            break;
          case 'arr[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr[this.i]}<br/>`
            break;
          case 'arr[index]':
            this.value_vars += `<strong>${key}</strong> = ${this.arr[this.index]}<br/>`
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
      if (this.current_line == 18) {
        this.value_out = `El arreglo arr es : ${this.arr[this.i]} `
      }
      if (this.current_line == 20) {
        this.value_out = `La suma del arreglo arr es : ${this.suma} `
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
