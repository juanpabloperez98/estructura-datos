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

  lines_to_input = [11, 13]
  current_line = 1;
  max_line = 19;
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
  name: string = '';
  edad: number = 0;
  empleado_nombre: string = '';
  empleado_edad: number = 0;


  code = `
  #include <cstdio>
  class Empleado {
    public:
      char* nombre;
      int edad;
  };
  int main(){
    char name [30];
    int edad;
    printf("Ingrese el valor nombre: ");
    gets(name);
    printf("Ingrese la edad: ");
    scanf("%d", &edad);
    Empleado new_empleado;
    new_empleado.nombre = name;
    new_empleado.edad = edad;
    printf("Nombre del empleado es: %s", new_empleado.nombre);
    printf("Edad del empleado es: %d", new_empleado.edad);
}
  `

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se declara la clase Empleado',
    },//2
    {
      'line_explain': 'Se define que sus atributos van a ser publicos',
    },//3
    {
      'line_explain': 'Se declara una variable llamada nombre que es un array de caracteres',
    },//4
    {
      'line_explain': 'Se declara una variable llamada edad',
    },//5
    {
      'line_explain': 'Se cierra la clase definida',
    },//6
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//7
    {
      'line_explain': 'Se define un arreglo de caracteres llamado name',
    },//8
    {
      'line_explain': 'Se declara una variable llamada edad',
    },//9
    {
      'line_explain': 'Se le pide al usuario que ingrese el nombre',
      'output': 'Ingrese el valor nombre:'
    },//10
    {
      'line_explain': 'Se captura el valor ingresado por pantalla con la función gets',
    },//11
    {
      'line_explain': 'Se le pide al usuario que ingrese la edad',
      'output': 'Ingrese la edad: '
    },//12
    {
      'line_explain': 'Se captura la edad',
    },//13
    {
      'line_explain': 'Se crea un objeto de la clase Empleado',
    },//14
    {
      'line_explain': 'Ahora igualamos la variable nombre del objeto empleado al valor ingresado por el usuario y guardado en la variable name',
      'var_values': {
        'name': '',
      },
    },//15
    {
      'line_explain': 'De la misma forma hacemos pero ahora con la variable edad',
      'var_values': {
        'edad': '',
      },
    },//16
    {
      'line_explain': 'Se imprime el nombre del empleado',
      'var_values': {
        'new_empleado.nombre': '',
      },
    },//17
    {
      'line_explain': 'Se imprime la edad del empleado',
      'var_values': {
        'new_empleado.edad': '',
      },
    },//18
    {
      'line_explain': 'Fin del programa',
    },//19
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
      case 15:
        this.empleado_nombre = this.name;
        break;
      case 16:
        this.empleado_edad = this.edad;
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
        this.loop_jump(7, 5);
        break;
      case 7:
        this.loop_jump(15, 8);
        break;
      case 15:
        this.loop_jump(2, 13, 2);
        break;

    }
  }

  validate_input = () => {
    if (this.current_line === 12) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.name = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 14) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.edad = parseInt(this.inputfield);
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
          case 'name':
            this.value_vars += `<strong>${key}</strong> = ${this.name}<br/>`
            break;
          case 'edad':
            this.value_vars += `<strong>${key}</strong> = ${this.edad}<br/>`
            break;
          case 'new_empleado.nombre':
            this.value_vars += `<strong>${key}</strong> = ${this.empleado_nombre}<br/>`
            break;
          case 'new_empleado.edad':
            this.value_vars += `<strong>${key}</strong> = ${this.empleado_edad}<br/>`
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
