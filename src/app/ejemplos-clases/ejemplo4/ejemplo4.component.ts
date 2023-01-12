import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from './ejemplo4.interface';
@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {


  lines_to_input = [12, 17, 20, 23, 26]
  current_line = 1;
  max_line = 39;
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
  sueldo_mayor: number = 0;
  posicion_: number = 0;
  num_empleados: number = 0;
  empleado!: Empleado;
  empleados: Empleado[] = [];

  code = `
  #include <cstdio>
class Empleado{	
	public:
		char nombre[30];
		int edad;
		char area[30];
		float sueldo;
};
int main(){
	int num_empleados;
	printf("Ingrese numero de empleados: ");
	scanf("%d",&num_empleados);
  fflush(stdin);
	Empleado empleado[num_empleados];
	for(int i = 0; i < num_empleados; i++){
		printf("Ingrese el nombre del empleado [%d]: ",i);
		gets(empleado[i].nombre);
		fflush(stdin);
		printf("Ingrese edad del empleado [%d]: ",i);
		scanf("%d",&empleado[i].edad);
		fflush(stdin);
		printf("Ingrese area del empleado [%d]: ",i);
		gets(empleado[i].area);
		fflush(stdin);
		printf("Ingrese sueldo del empleado [%d]: ",i);
		scanf("%f",&empleado[i].sueldo);
		fflush(stdin);
		printf("salto de linea");
	}
	float sueldo_mayor = 0;
	int posicion_ = 0;
	for(int i = 0; i < num_empleados; i++){
		if(empleado[i].sueldo > sueldo_mayor){
			sueldo_mayor = empleado[i].sueldo;
			posicion_ = i;
		}
	}
	printf("El empleado %s es el empleado con mayor sueldo, con un  sueldo de: %f", empleado[posicion_].nombre,empleado[posicion_].sueldo);
}
`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',

    },//1
    {
      'line_explain': 'Se define la clase Empleado',
    },//2
    {
      'line_explain': 'Se definen los atributos publicos',
    },//3
    {
      'line_explain': 'Se declara una variable nombre de tipo array de caracteres',
    },//4
    {
      'line_explain': 'Se declara variable edad de tipo entero',
    },//5
    {
      'line_explain': 'Se declara variable area de tipo array de caracteres',
    },//6
    {
      'line_explain': 'Se declara la variable sueldo de tipo float',
    },//7
    {
      'line_explain': 'Se cierra la clase empleado ',
    },//8
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//9
    {
      'line_explain': 'Se declara variable num_empleados que sirve para saber cuantos empleados se desea agregar',
    },//10
    {
      'line_explain': 'Se le pide al usuario que ingrese el numero de empleados',
      'output': 'Ingrese numero:',
    },//11
    {
      'line_explain': 'Se captura el valor ingresado por el usuario',
    },//12
    {
      'line_explain': 'Se limpia el buffer',
    },//13
    {
      'line_explain': 'Se crea un array de la clase Empleado',
    },//14
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta el valor de num_empleados, para poder pedir los datos de los usuarios',
      'var_values': {
        'i': '',
        'num_empleados': '',
      },
    },//15
    {
      'line_explain': 'Se pide que se ingre el nombre del empleado [i]',
    },//16
    {
      'line_explain': 'Se captura nombre ingresado en la posicion [i] del array empleado',
    },//17
    {
      'line_explain': 'Se limpia el buffer',
    },//18
    {
      'line_explain': 'Se pide la edad del empleado [i]',
    },//19
    {
      'line_explain': 'Se captura la edad ingresda en la posicion [i] del array empleado',
    },//20
    {
      'line_explain': 'Se limpia el buffer',
    },//21
    {
      'line_explain': 'Se pide que se ingrese el area del empleado',
    },//22
    {
      'line_explain': 'Se captura el valor ingresado en la posición [i] del array empleado',
    },//23
    {
      'line_explain': 'Se limpia el buffer',
    },//24
    {
      'line_explain': 'Se pide que se ingrese sueldo del empleado',
    },//25
    {
      'line_explain': 'Se captura el valor ingresado en la posición [i] del array empleado',
    },//26
    {
      'line_explain': 'Se limpia el buffer',
    },//27
    {
      'line_explain': 'Saltos de linea',
    },//28
    {
      'line_explain': 'se cierra el ciclo for ',
    },//29
    {
      'line_explain': 'Se define variable para saber cual es el valor del sueldo mayor de un empleado',
    },//30
    {
      'line_explain': 'Se define variable para saber cual es la posicion en la que se encuentra el empleado con mayor sueldo',
    },//31
    {
      'line_explain': 'Se declara un ciclo for que empieza i = 0 hasta el valor de num_empleados, para recorrer el array de empleado',
      'var_values': {
        'i': '',
        'num_empleados': '',
      },
    },//32
    {
      'line_explain': 'Se valida si el sueldo del empleado en la posicion [i]  es mayor al valor de la variable sueldo_mayor',
      'var_values': {
        'empleados[i].sueldo': '',
        'sueldo_mayor': '',
      },
    },//33
    {
      'line_explain': 'Si la condición anterior se cumple entonces se iguala el valor de sueldo_mayor al valor de la variable sueldo del array empleado en la posicion [i]',
      'var_values': {
        'sueldo_mayor': '',
        'empleados[i].sueldo': '',
      },
    },//34
    {
      'line_explain': 'Y la variable posicion_ se iguala al valor de i',
      'var_values': {
        'posicion_': '',
        'i': ''
      },
    },//35
    {
      'line_explain': 'Cierre condicional',
    },//36
    {
      'line_explain': 'Cierra ciclo',
    },//37
    {
      'line_explain': 'Se imprime cual empleado tiene el mayor sueldo',
    },//38
    {
      'line_explain': 'Se termina el programa',
    },//39
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
      case 16:
        this.empleado = {
          nombre: '',
          edad: 0,
          area: '',
          sueldo: 0,
        }
        break
      case 30:
        this.i = 0;
        break
      case 34:
        this.sueldo_mayor = this.empleados[this.i].sueldo;
        break
      case 35:
        this.posicion_ = this.i;
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
        this.loop_jump(9, 7);
        break;
      case 9:
        this.loop_jump(15, 6);
        break;
      case 15:
        this.loop_jump(2, 13, 2);
        break;
      case 16:
        if (this.i >= this.num_empleados) {
          this.loop_jump(29, 13)
        }
        break
      case 29:
        this.empleados.push(this.empleado);
        this.loop_jump(15, 14, 2);
        this.i++;
        break


      case 33:
        if (this.i >= this.num_empleados) {
          this.loop_jump(37, 4)
        }
        break
      case 34:
        if (this.empleados[this.i].sueldo < this.sueldo_mayor) {
          this.loop_jump(36, 2)
        }
        break


      case 37:
        this.loop_jump(32, 5, 2);
        this.i++;
        break

    }
  }

  validate_input = () => {
    if (this.current_line === 13) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return
      }
      this.num_empleados = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 18) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return
      }
      this.empleado.nombre = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 21) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return
      }
      this.empleado.edad = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 24) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return
      }
      this.empleado.area = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 27) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.empleado.sueldo = parseInt(this.inputfield)
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
          case 'num_empleados':
            this.value_vars += `<strong>${key}</strong> = ${this.num_empleados}<br/>`
            break;
          case 'sueldo_mayor':
            this.value_vars += `<strong>${key}</strong> = ${this.sueldo_mayor}<br/>`
            break;
          case 'posicion_':
            this.value_vars += `<strong>${key}</strong> = ${this.posicion_}<br/>`
            break;
          case 'posicion_':
            this.value_vars += `<strong>${key}</strong> = ${this.posicion_}<br/>`
            break;
          case 'empleados[i].sueldo':
            this.value_vars += `<strong>${key}</strong> = ${this.empleados[this.i].sueldo}<br/>`
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
      if (this.current_line == 38) {
        this.value_out = `El empleado con mayor salario es: ${this.empleados[this.posicion_].nombre} con un salario de: ${this.empleados[this.posicion_].sueldo} `
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
    if (this.current_line == 30) {
      console.log(this.empleados);
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
