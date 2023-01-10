import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Matrices } from './ejemplo2.interface';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  lines_to_input = [57]
  current_line = 1;
  max_line = 67;
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
  n: number = 0;
  i: number = 0;
  j: number = 0;
  matrices!: Matrices;
  matriz1: number[] = [];
  matriz2: number[] = [];
  valor1: number = 0;
  valor2: number = 0;

  code = `
  #include <cstdio>
#include <stdlib.h>
class Matrices{
    private:
    	int n;
    	int **matriz1;
    	int **matriz2;
    public:
    	Matrices(int n){
    		this->n = n;
    		this->matriz1 = (int**)malloc(this->n*sizeof(int));
    		this->matriz2 = (int**)malloc(this->n*sizeof(int));
    		for(int i = 0; i < this->n; i++){
    			this->matriz1[i] = (int*)malloc(this->n*sizeof(int));las columnas de la matriz1
    			this->matriz2[i] = (int*)malloc(this->n*sizeof(int));
			}
		}
		void llenar_matrices(){
			int valor1,valor2;
			for(int i = 0; i < this->n; i++){
				for(int j = 0; j < this->n; j++){
					valor1 = rand() % 10;
					valor2 = rand() % 10;
					this->matriz1[i][j] = valor1;
					this->matriz2[i][j] = valor2;
				}
			}
		}
		void mostrar_matrices(){
			printf("Matriz 1");
			for(int i = 0; i < this->n; i++){
				for(int j = 0; j < this->n; j++){
					printf("%d ",this->matriz1[i][j]);
				}
				printf("Salto de linea");
			}
			printf("Matriz 2");
			for(int i = 0; i < this->n; i++){
				for(int j = 0; j < this->n; j++){
					printf("%d ",this->matriz2[i][j]);
				}
        printf("Salto de linea");       
			}
		}
		void liberar_memoria(){
			for(int i = 0; i < this->n; i++){
				free(this->matriz1[i]);
				free(this->matriz2[i]);
			}
			free(this->matriz1);
			free(this->matriz2);
		}
};
int main(){
	int n;
	printf("Ingrese la longitud de las matrices: ");
	scanf("%d",&n);
fflush(stdin);
	if(n != 3){
		printf("El valor de n debe ser de 3");
	}else{
		Matrices _matrices(n);
		_matrices.llenar_matrices();
		_matrices.mostrar_matrices();
		_matrices.liberar_memoria();
	}
}  
  `;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se incluye la libreria stdlib.h la cual nos va a permitir hacer el manejo de la memoria dinamica',
    },//2
    {
      'line_explain': 'Se declara la clase Matrices',
    },//3
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//4
    {
      'line_explain': 'Se define una variable n de tipo int',
    },//5
    {
      'line_explain': 'Se define una variable llamada matriz1 la cual es de tipo (puntero de punteros) esto con la intensión de manejar una matriz de manera dinamica',
    },//6
    {
      'line_explain': 'Se define una variable llamada matriz2 la cual es de tipo (puntero de punteros) esto con la intensión de manejar una matriz de manera dinamica',
    },//7
    {
      'line_explain': 'Se definen los metodos publicos',
    },//8
    {
      'line_explain': 'Se define el constructor de la clase recibe como parametro una variable n',
    },//9
    {
      'line_explain': 'Luego asignamos al atributo de la clase n el valor pasado por parametro al constructor (notese que se usa la notación this, esto es para indicar que hacemos referencia a un atributo de la clase)',
    },//10
    {
      'line_explain': 'Ahora se reserva memoria para las filas a la matriz1 utilizando la función malloc',
    },//11
    {
      'line_explain': 'De la misma manera se reserva memoria para las filas a la matriz2 utilizando la función malloc',
    },//12
    {
      'line_explain': 'Se inicializa un ciclo for que va desde i = 0 hasta el valor del atributo n de la clase',
      'var_values': {
        'i': '',
        'n': '',
      },
    },//13
    {
      'line_explain': 'Ahora se reserva memoria pero para las columnas de la matriz1',
    },//14
    {
      'line_explain': 'Igual se reserva memoria pero para las columnas de la matriz2',
    },//15
    {
      'line_explain': 'Se cierra el ciclo for',
    },//16
    {
      'line_explain': 'Se cierra el constructor',
    },//17
    {
      'line_explain': 'Se declara el metodo llenar_matrices el cual va a llenar las matrices de valores aleatorios',
    },//18
    {
      'line_explain': 'Se definen dos variables de tipo int valor1 y valor2, estas almacenan temporalmente el valor del número aleatorio',
    },//19
    {
      'line_explain': 'Se declara el ciclo for que va desde i = 0 hasta el valor del atributo n aumentando en uno la variable i para recorrer las filas de las matrices',
      'var_values': {
        'i': '',
        'n': '',
      },
    },//20
    {
      'line_explain': 'Se declara un segundo ciclo for el cual va desde j = 0 hasta el valor del atributo n aumentando en uno la variable j para recorrer las columnas de las matrices',
      'var_values': {
        'j': '',
        'n': '',

      },
    },//21
    {
      'line_explain': 'Se decalra la variable valor1 y se iguala a un valor aleatorio gracias a la función rand() el % 10 hace referencia entre que rangos van a estar los numeros aleratorios (en este caso sería entre 0-9)',
    },//22
    {
      'line_explain': 'Se declara la variable valor2 y se iguala a un valor aleatorio gracias a la función rand() el % 10 hace referencia entre que rangos van a estar los numeros aleratorios (en este caso sería entre 0-9)',
    },//23
    {
      'line_explain': 'Se guarda en la matriz1 el valor de valor1 en la posición [i][j]',
    },//24
    {
      'line_explain': 'Se guarda en la matriz2 el valor de valor2 en la posición [i][j]',
    },//25
    {
      'line_explain': 'Se cierra el ciclo for para las columnas',
    },//26
    {
      'line_explain': 'Se cierra el ciclo for para las filas',
    },//27
    {
      'line_explain': 'Fin de la función',
    },//28
    {
      'line_explain': 'Se define la función mostrar_matrices la cual se encarga de mostrar los valores guardados en las matrices de la clase',
    },//29
    {
      'line_explain': 'Se imprime matriz 1',
    },//30
    {
      'line_explain': 'Se declara el ciclo for que va desde i = 0 hasta el valor del atributo n aumentando en uno la variable i para recorrer las filas de las matrices',
    },//31
    {
      'line_explain': 'Se declara un segundo ciclo for el cual va desde j = 0 hasta el valor del atributo n aumentando en uno la variable j para recorrer las columnas de las matrices',
    },//32
    {
      'line_explain': 'Se imprime el valor que haya en la matriz1 en la posición [i][j]',
    },//33
    {
      'line_explain': 'Se cierra el ciclo for para columnas',
    },//34
    {
      'line_explain': 'Salto de linea',
    },//35
    {
      'line_explain': 'Se cierra el ciclo for para filas',
    },//36
    {
      'line_explain': 'Se imprime matriz 2',
    },//37
    {
      'line_explain': 'Se declara el ciclo for que va desde i = 0 hasta el valor del atributo n aumentando en uno la variable i para recorrer las filas de las matrices',
    },//38
    {
      'line_explain': 'Se declara un segundo ciclo for el cual va desde j = 0 hasta el valor del atributo n aumentando en uno la variable j para recorrer las columnas de las matrices',
    },//39
    {
      'line_explain': 'Se imprime el valor que haya en la matrii2 en la posición [i][j]',
    },//40
    {
      'line_explain': 'Se cierra el ciclo for para las columnas',
    },//41
    {
      'line_explain': 'Salto de linea',
    },//42
    {
      'line_explain': 'Se cierra el ciclo for para filas',
    },//43
    {
      'line_explain': 'Fin de la función',
    },//44
    {
      'line_explain': 'Se define la funcion liberar_memoria esta función lo que hace es liberar la memoria reservada de las matrices dinamicas',
    },//45
    {
      'line_explain': 'Se declara un ciclo for que va desde i = 0 hasta n aunmentando i en 1',
    },//46
    {
      'line_explain': 'Se libera el espacio en memoria de la matriz1 en la posición [i] (Se libera la memoria de la columna i)',
    },//47
    {
      'line_explain': 'Se libera el espacio en memoria de la matriz2 en la posición [i] (Se libera la memoria de la columna i)',
    },//48
    {
      'line_explain': 'Se cierra el ciclo for',
    },//49
    {
      'line_explain': 'Se libera ahora el espacio en memoria de la matriz1 (Se libera la memoria para las filas)',
    },//50
    {
      'line_explain': 'Se libera ahora el espacio en memoria de la matriz2 (Se libera la memoria para las filas)',
    },//51
    {
      'line_explain': 'Fin de la función',
    },//52
    {
      'line_explain': 'Fin de la clase',
    },//53
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//54
    {
      'line_explain': 'Se define la varible n de tipo entero para saber el tamaño de las matrices',
    },//55
    {
      'line_explain': 'Se le pide al usuario que ingrese la longitud o tamaño de las matrices',
    },//56
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable n',
      'output': 'Ingrese numero:',
    },//57
    {
      'line_explain': 'Se borra el buffer',
    },//58
    {
      'line_explain': 'Se valida si n es diferente de 3',
    },//59
    {
      'line_explain': 'Se imprime que el valor de n debe ser de 3',
    },//60
    {
      'line_explain': 'Si no se cumple la condicón anterior',
    },//61
    {
      'line_explain': 'Se declara un objeto de la clase Matrices con el nombre _matrices inicializando con el parametro n',
    },//62
    {
      'line_explain': 'Se hace el llamado de la función llenar_matrices de la clase Matrices (Recordar que esta llena las matrices con numeros aleatorios)',
    },//63
    {
      'line_explain': 'Se hace el llamado de la función mostrar_matrices de la clase Matrices  (Recordar que esta muestra las matrices con numeros aleatorios)',
    },//64
    {
      'line_explain': 'Una vez ya se hayan mostrado las matrices se hace el llamado de la función liberar_memoria de la clase Matrices  (Recordar que esta libera la memoria dinamica para las matrices)',
    },//65
    {
      'line_explain': 'se cierra el condicional else',
    },//66
    {
      'line_explain': 'Fin del programa',
    },//67
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
      case 22:
        this.valor1 = Math.random() * 10;
        break
      case 23:
        this.valor2 = Math.random() * 10;
        break
      case 24:
        this.matriz1[this.i] = this.valor1;
        break
      case 25:
        this.matriz2[this.i] = this.valor2;
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
      case 3:
        this.loop_jump(54, 51);
        break;
      case 14:
        if (this.i >= this.n) {
          this.loop_jump(16, 2);
        }
        break;
      case 16:
        this.loop_jump(13, 3, 2);
        this.i++;
        break;
      // llenar_matrices primer  for anidado 
      case 21:
        if (this.i >= this.n) {
          this.loop_jump(27, 6);
        }
        break;
      case 27:
        this.loop_jump(20, 7, 2);
        this.i++;
        break;
      // llenar_matrices segundo for anidado 
      case 22:
        if (this.i >= this.n) {
          this.loop_jump(16, 4);
        }
        break;
      case 26:
        this.loop_jump(21, 5, 2);
        this.i++;
        break;



      // otro 
      case 60:
        if (this.n == 3) {
          this.loop_jump(61, 1);
        }
        break;
      case 61:
        this.loop_jump(66, 5);
        break;
      case 63:
        this.loop_jump(3, 60, 2);
        break;


    }
  }

  validate_input = () => {
    if (this.current_line === 58) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
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
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
          case 'j':
            this.value_vars += `<strong>${key}</strong> = ${this.j}<br/>`
            break;
          case 'n':
            this.value_vars += `<strong>${key}</strong> = ${this.n}<br/>`
            break;
          case 'matriz1[this.i]':
            this.value_vars += `<strong>${key}</strong> = ${this.matriz1[this.i]}<br/>`
            break;
          case 'matriz2[this.i]':
            this.value_vars += `<strong>${key}</strong> = ${this.matriz2[this.i]}<br/>`
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
