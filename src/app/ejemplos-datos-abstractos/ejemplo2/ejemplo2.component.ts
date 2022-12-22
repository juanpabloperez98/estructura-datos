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

  lines_to_input = [10, 19, 22, 25]
  current_line = 1;
  max_line = 49;
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
  num_empleados: number = 0;
  nombre: String[] = [];
  sexo: String[] = [];
  sueldo: number[] = [];


  code = `
  #include <cstdio>
typedef struct Empleado {
    char nombre[50];
    char sexo[50];
    float sueldo;
} empleado;
int main(){
    int num_empleados;
    printf("Introduzca numero de empleados: ");
    scanf("%d",&num_empleados);
    fflush(stdin);
    empleado emp[100];
    if(num_empleados > 100){
        printf("El numero de empleados es mayor al permitido");
    }else{
        printf("DATOS EMPLEADOS");          
        for(int i=0; i < num_empleados; i++){
            printf("Ingrese nombre del empleado [%d]: ",i+1);
            gets(emp[i].nombre);
            fflush(stdin);
            printf("Ingrese sexo del empleado [%d]: ",i+1);
            gets(emp[i].sexo);
            fflush(stdin);
            printf("Ingrese el sueldo del empleado [%d]: ",i+1);
            scanf("%f",&emp[i].sueldo);
            fflush(stdin);
        }
        printf("EMPLEADO CON MAYOR SALARIO");
        float mayor_salario = 0.0;
        int pos_mayor_salario=0;
        for(int i=0; i < num_empleados; i++){
            if(emp[i].sueldo > mayor_salario){
                mayor_salario = emp[i].sueldo;
                pos_mayor_salario = i; 
            }
        }
        printf("El empleado con mayor salario es: %s - con un salario de $%1.'", emp[pos_mayor_salario].nombre,mayor_salario);
        printf("EMPLEADO CON MENOR SALARIO");
        float menor_salario = 0.0;
        int pos_menor_salario=0;
        for(int i=0; i < num_empleados; i++){
            if(emp[i].sueldo  < emp[pos_menor_salario].sueldo){
                menor_salario = emp[i].sueldo;
                pos_menor_salario = i;
            }
        }
        printf("El empleado con menor salario es: %s - con un salario de $%1.f", emp[pos_menor_salario].nombre,menor_salario);
    }
}
`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    }, //1
    {
      'line_explain': 'Se define la TAD (struct) con el nombre de Cancion',
    }, //2
    {
      'line_explain': 'Se define un arreglo de strings con una longitud de 50  y se le da el identificador de nombre',
    }, //3
    {
      'line_explain': 'Se define un arreglo de strings con una longitud de 50 y se le da el identificador de sexo',
    }, //4
    {
      'line_explain': 'Se define el atributo sueldo del struct',
    }, //5
    {
      'line_explain': 'Se define el nombre con el que se identifica el TAD',
    }, //6
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    }, //7
    {
      'line_explain': 'Se declara una variable llamada num_empleados la cual va almacenar el total de empleados que ingrese el usuario',
    }, //8
    {
      'line_explain': 'Se le pide al usuario que introduzca el numero de empleados',
    }, //9
    {
      'line_explain': 'Se almacena los datos ingresdados por el usaurio en la variable',
      'output': 'Ingrese numero:',
    }, //10
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',

    }, //11
    {
      'line_explain': 'se crea un array de tipo empleado emp (es un arreglo del tipo struct)',
    }, //12
    {
      'line_explain': 'Se valida si el valor de num_empleados es mayor a 100',
      'var_values': {
        'num_empleados': '',

      },
    }, //13
    {
      'line_explain': 'Si la condición anterior no se cumple entonces se imprime que el número de empleados es mayor al permitido',
    }, //14
    {
      'line_explain': 'Si no se cumple la condicional',
    }, //15
    {
      'line_explain': 'Se imprime DATOS EMPLEADOS',
    }, //16
    {
      'line_explain': 'Se inicializa el ciclo for donde  i = 0 hasta num_empleados (ingresdado anteriormente por el usuario)',
      'var_values': {
        'i': '',
        'num_empleados': '',

      },
    }, //17
    {
      'line_explain': 'Se le pide al usuario que ingrese el nombre del empleado para almacenar en la posición i',
    }, //18
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario',
    }, //19
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //20
    {
      'line_explain': 'Se le pide al usuario que ingrese el sexo del empleado para almacenar en la posición i',
    }, //21
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en el atributo sexo del array del structs',
    }, //22
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //23
    {
      'line_explain': 'Se le pide al usuario que ingrese el saldo del empleado para almacenar en la posición i',
    }, //24
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en el atributo sueldo del array del structs en la posicion i',
    }, //25
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //26  
    {
      'line_explain': 'Se cierra el for',
    },//27
    {
      'line_explain': 'Se imprimeEMPLEADO CON MAYOR SALARIO',
    }, //28
    {
      'line_explain': 'Se inicializa una variable llamada mayor_salario y se inicializa en cero esta es para determinar cual de los salarios de los empleados es mayor',
    }, //29
    {
      'line_explain': 'Se inicializa el valor de pos_mayor_salario a cero el cual nos va a servir para indentificar el mayor salario de un empleado',
    }, //30
    {
      'line_explain': 'Se inicializa el ciclo for donde  i = 0 hasta num_empleados para reccorrer el arreglo de struct',
    }, //31
    {
      'line_explain': 'Se valida si el sueldo del empleado alamacenaldo en el arreglo emp en la posicion [i] es mayor a la variable mayor_salario',
    }, //32
    {
      'line_explain': 'Si la condición anterior se cumple entonces igualamos el valor de la variable mayor_salario al valor que haya en el atributo arreglo emp en la posición [i]',
    }, //33
    {
      'line_explain': 'Se iguala la variable pos_mayor_salario al valor de i (Nos indica en que posicón del array esta el empleado con mayor salario)',
    }, //34
    {
      'line_explain': 'Se cierra el condicional if',
    }, //35
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //36
    {
      'line_explain': 'Se imprime cual es el empleado con mejor salario, para ello indicamos la posición pos_mayor_salario',
    }, //37
    {
      'line_explain': 'Se imprime EMPLEADOS CON MENOR SALARIO',
    }, //38
    {
      'line_explain': 'Se inicializa una variable llamada menor_salario y se inicializa en cero esta es para determinar cual de los salarios de los empleados es menor',
    }, //39
    {
      'line_explain': 'Se define la variable pos_menor_salario y se iguala a cero, esta variable nos ayuda a determinar  cual es el valor del salario menor del array de empleados',
    }, //40
    {
      'line_explain': 'Se inicializa el ciclo for donde  i = 0 hasta num_empleados para reccorrer el arreglo de struct',
    }, //41
    {
      'line_explain': 'Se valida si el sueldo del empleado almacenado en el arreglo emp en la posicion [i] es mayor a la variable mayor_salario',
    }, //42
    {
      'line_explain': 'Si la condición anterior se cumple entonces igualamos el valor de la variable menor_salario al valor que haya en el atributo arreglo emp en la posición [i]',
    }, //43
    {
      'line_explain': 'Se iguala la variable pos_menor_salario al valor de i (Nos indica en que posicón del array esta el empleado con menor salario)',
    }, //44
    {
      'line_explain': 'Se cierra el condicional',
    }, //45
    {
      'line_explain': 'Se cierra el ciclo for',
    }, //46
    {
      'line_explain': 'Se imprime cual es el empleado con menor salario, para ello indicamos la posición pos_menor salario',
    }, //47
    {
      'line_explain': 'Se cierra el else',
    }, //48
    {
      'line_explain': 'Fin del programa',
    },//49
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
      case 2:
        this.loop_jump(7, 5);
        break
      case 7:
        this.loop_jump(13, 6);
        break
      case 13:
        this.loop_jump(2, 11, 2);
        break
      case 14:
        if (this.num_empleados <= 100) {
          this.loop_jump(15, 1);
        }
        break
      case 15:
        this.loop_jump(48, 33);
        break
      case 18:
        if (this.i >= this.num_empleados) {
          this.loop_jump(27, 9);
        }
        break
      case 27:
        this.loop_jump(17, 10, 2);
        this.i++;
        break

    }
  }

  validate_input = () => {
    if (this.current_line === 11) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.num_empleados = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 20) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar el nombre para continuar');
        this.current_line--;
        this.less_top();
      }
      this.nombre[this.i] = this.inputfield
      console.log(this.nombre[this.i])
      this.inputfield = '';
    }
    if (this.current_line === 23) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar su genero');
        this.current_line--;
        this.less_top();
      }
      this.sexo[this.i] = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 26) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un sueldo para continuar');
        this.current_line--;
        this.less_top();
      }
      this.sueldo[this.i] = parseInt(this.inputfield)
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
          case 'nombre[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.nombre[this.i]}<br/>`
            break;
          case 'sexo[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.sexo[this.i]}<br/>`
            break;
          case 'sueldo[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.sueldo[this.i]}<br/>`
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
