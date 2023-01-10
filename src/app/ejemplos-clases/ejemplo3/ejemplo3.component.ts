import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Cuadrado, Circulo, Rectangulo } from './ejemplo3.interface';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})

export class Ejemplo3Component implements OnInit {

  lines_to_input = [43, 48, 53, 56]
  current_line = 1;
  max_line = 63;
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

  cuadrado!: Cuadrado;
  circulo!: Circulo;
  rectangulo!: Rectangulo;

  lados_cuadrado: number = 0;
  area_cuadrado: number = 0;
  radio_circulo: number = 0;
  area_circulo: number = 0;
  ancho_rectangulo: number = 0;
  largo_rectangulo: number = 0;
  area_rectangulo: number = 0;

  code = `
  #include <cstdio>
#include <math.h>
#define PI 3.14159265358979323846
class Cuadrado{
	private:
		float x,area1;
	public:
		Cuadrado(float x){
			this->x = x;
		}
		float area_cuadrado(){
			this->area1 = this->x * this->x;
		}
};
class Circulo{
	private:
		float radio, area2;
	public:
		Circulo(float radio){
			this->radio = radio;
		}		
		float area_circulo(){
			this->area2 = PI * pow(this->radio,2);
		}
}; 
class Rectangulo{
	private:
		float ancho,largo,area3;
	public:
		Rectangulo(float ancho,float largo){
			this->ancho = ancho;
			this->largo = largo;
		}
			float area_rectangulo(){
			this->area3 = this->ancho * this->largo;
		}	
};
int main(){
	float lados_cuadrado, area_cuadrado;
	float radio_circulo, area_circulo;
	float ancho_rectangulo, largo_rectangulo, area_rectangulo;
	printf("Ingrese los lados del cuadrado: ");
	scanf("%f",&lados_cuadrado);
    fflush(stdin);
	Cuadrado cuadrado(lados_cuadrado);
	area_cuadrado = cuadrado.area_cuadrado();
	printf("Ingrese el radio del circulo: ");
	scanf("%f", &radio_circulo);
    fflush(stdin);
	Circulo circulo(radio_circulo);
	area_circulo = circulo.area_circulo();
	printf("Ingrese ancho del rectangulo: ");
	scanf("%f", &ancho_rectangulo);
    fflush(stdin);
	printf("Ingrese largo del rectangulo: ");
	scanf("%f", &largo_rectangulo);
    fflush(stdin);
	Rectangulo rectangulo(ancho_rectangulo,largo_rectangulo);
	area_rectangulo = rectangulo.area_rectangulo();
	printf("El valor area del cuadrado es %f",area_cuadrado);
	printf("El valor area del circulo es %f",area_circulo);
	printf("El valor area del rectangulo es %f",area_rectangulo);
}
`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se incluye la libreria math.h la cual permite manejar funciones matematicas',
    },//2
    {
      'line_explain': 'Se define la constante PI la cual el valor es igual a 3.14159265358979323846',
    },//3
    {
      'line_explain': 'Se define la clase cuadrado',
    },//4
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//5
    {
      'line_explain': 'Se define la variable x la cual hace referencia a los lados del cuadrado y la variable area en la cual se va a guardar el valor del area',
      'var_values': {
        'cuadrado.x': '',
        'cuadrado.area1': '',
      },
    },//6
    {
      'line_explain': 'Se definen los metodos publicos',
    },//7
    {
      'line_explain': 'Se define el constructor de la clase Cuadrado que recibe un parametro x (los lados del cuadrado)',
    },//8
    {
      'line_explain': 'se iguala el valor del atributo x de la clase al valor recibido por parametro',
      'var_values': {
        'cuadrado.x': '',
      },
    },//9
    {
      'line_explain': 'Se cierra el constructor',
    },//10
    {
      'line_explain': 'Se define una función llamada area_cuadrado de la clase esta calcula el area del cuadrado',
    },//11
    {
      'line_explain': 'Se iguala el valor de la variable area al resultado de multiplicar el valor de x dos veces',
      'var_values': {
        'cuadrado.x': '',
        'cuadrado.area1': '',
      },
    },//12
    {
      'line_explain': 'finaliza la función',
    },//13
    {
      'line_explain': 'Se finaliza la clase cuadrado',
    },//14
    {
      'line_explain': 'Se define la clase circulo',
    },//15
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//16
    {
      'line_explain': 'Se define la variable radio la cual hace referencia al radio del circulo y la variable area en la cual se va a guardar el valor del area',
      'var_values': {
        'circulo.radio': '',
        'circulo.area2': '',
      },
    },//17
    {
      'line_explain': 'Definimos los metodos publicos',
    },//18
    {
      'line_explain': 'Se define el constructor de la clase Circulo que recibe un parametro radio (radio del circulo)',
    },//19
    {
      'line_explain': 'Se iguala la variable radio de la clase al valor de la variable radio que entra por parametro',
      'var_values': {
        'circulo.radio': '',
      },
    },//20
    {
      'line_explain': 'Se cierra el constructor',
    },//21
    {
      'line_explain': 'Se define la función area_circulo',
    },//22
    {
      'line_explain': 'El atributo area se iguala a la constante PI (3.14159265358979323846) multiplicada por la función pow() (dicha función sirve para poder exponer un numero x a la y)',
      'var_values': {
        'circulo.area2': '',
        'circulo.radio': '',
      },
    },//23
    {
      'line_explain': 'fin de la función',
    },//24
    {
      'line_explain': 'Se finaliza la clase circulo',
    },//25
    {
      'line_explain': 'Se define la clase Rectangulo',
    },//26
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//27
    {
      'line_explain': 'Se definen las variables ancho,alto,area de tipo float',
      'var_values': {
        'rectangulo.ancho': '',
        'rectangulo.largo': '',
        'rectangulo.area3': '',
      },
    },//28
    {
      'line_explain': 'Definimos los metodos publicos',
    },//29
    {
      'line_explain': 'Se define el constructor de la clase Rectangulo que recibe un parametro el ancho y el largo del rectangulo',
    },//30
    {
      'line_explain': 'El valor de la variable ancho de la clase se iguala al valor de la variable ancho pasado por parametro',
      'var_values': {
        'rectangulo.ancho': '',
      },
    },//31
    {
      'line_explain': 'Se iguala la variable largo de la clase al valor de la variable largo recibido por parametro',
      'var_values': {
        'rectangulo.largo': '',
      },
    },//32
    {
      'line_explain': 'Se cierra el constructor',
    },//33
    {
      'line_explain': 'Se define la función area_rectangulo',
    },//34
    {
      'line_explain': 'Se multiplica los valores de las variables ancho, largo y se de asigna el resultado a la variable area de la clase ',
      'var_values': {
        'rectangulo.area3': '',
        'rectangulo.ancho': '',
        'rectangulo.largo': '',
      },

    },//35
    {
      'line_explain': 'fin de la función',
    },//36
    {
      'line_explain': 'Se finaliza la clase rectangulo',
    },//37
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//38
    {
      'line_explain': 'Se define las variables lados_cuadrado, y area_cuadrado (lados_cuadrado se va utilizar para almacenar el valor ingresado por el usuario w inicializar el constructor de la clase Cuadrado)',
    },//39
    {
      'line_explain': 'Se inicializa dos variables llamadas radio_circulo, area_circulo',
    },//40
    {
      'line_explain': 'Se declara 3 variables de tipo float, ancho, largo, y area_del_rectangulo',
    },//41
    {
      'line_explain': 'Se le pide al usuario que ingrese los lados del cuadrado',
    },//42
    {
      'line_explain': 'Se almacena lo ingresado por el usuario',
      'output': 'Ingrese numero:',
    },//43
    {
      'line_explain': 'Se borra el buffer',
    },//44
    {
      'line_explain': 'Se crea el objeto de la clase Cuadrado',
    },//45
    {
      'line_explain': 'Luego la variable area_cuadrado se iguala a lo que retone el llamado a la función area_cuadrado() de la clase Cuadrado',
      'var_values': {
        'area_cuadrado': '',
        'cuadrado.area_cuadrado()': ''
      },
    },//46
    {
      'line_explain': 'Se le pide al usuario que ingrese el radio del circulo',
      'output': 'Ingrese numero:',
    },//47
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable radio_circulo',
    },//48
    {
      'line_explain': 'Se borra el buffer',
    },//49
    {
      'line_explain': 'Se crea el objeto llamado circulo de la clase CIrculo pasando como parametro la variable radio_circulo',
    },//50
    {
      'line_explain': 'Se hace el llamado al metodo area_circulo del objeto circulo',
      'var_values': {
        'area_circulo': '',
        'circulo.area_circulo()': ''
      },
    },//51
    {
      'line_explain': 'Se le pide al usuario que ingrese el valor del ancho del rectangulo',
    },//52
    {
      'line_explain': 'Se almacena el valor ingresado del usuario en la variable ancho',
      'output': 'Ingrese numero:',
    },//53
    {
      'line_explain': 'Se borra el buffer',
    },//54
    {
      'line_explain': 'Se le pide al usuario que ingrese el valor del ancho del rectangulo',
    },//55
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable largo',
      'output': 'Ingrese numero:',
    },//56
    {
      'line_explain': 'Se borra el buffer',
    },//57
    {
      'line_explain': 'Se crea un objeto de la clase Rectangulo llamado rectangulo y se le envian los parametros (ancho,largo)',
    },//58
    {
      'line_explain': 'Se hace el llamado a la función de la clase area_rectangulo la cual retorna el valor del area del rectangulo',
      'var_values': {
        'area_rectangulo': '',
        'rectangulo.area_rectangulo()': ''
      },
    },//59
    {
      'line_explain': 'Se imprime el valor del area del cuadrado',
    },//60
    {
      'line_explain': 'Se imprime el valor del area del circulo',
    },//61
    {
      'line_explain': 'Se imprime el valor del area del rectangulo',
    },//62
    {
      'line_explain': 'Fin del programa',
    },//63
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
      case 45:
        this.cuadrado = new Cuadrado(this.lados_cuadrado);
        break;
      case 46:
        this.area_cuadrado = this.cuadrado.area_cuadrado();
        break;
      case 50:
        this.circulo = new Circulo(this.radio_circulo);
        break;
      case 51:
        this.area_circulo = this.circulo.area_circulo();
        break;
      case 58:
        this.rectangulo = new Rectangulo(this.ancho_rectangulo, this.largo_rectangulo);
        break;
      case 59:
        this.area_rectangulo = this.rectangulo.area_rectangulo();
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
      case 4:
        this.loop_jump(38, 34);
        break
      case 46:
        this.loop_jump(4, 42, 2)
        break
      case 15:
        this.loop_jump(46, 31);
        break
      case 51:
        this.loop_jump(15, 36, 2)
        break
      case 26:
        this.loop_jump(51, 25);
        break
      case 59:
        this.loop_jump(26, 33, 2);
        break
      case 38:
        this.loop_jump(59, 21);
        break
    }
  }

  validate_input = () => {
    if (this.current_line === 44) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.lados_cuadrado = parseFloat(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 49) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.radio_circulo = parseFloat(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 54) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.ancho_rectangulo = parseFloat(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 57) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.largo_rectangulo = parseFloat(this.inputfield)
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
          case 'lados_cuadrado':
            this.value_vars += `<strong>${key}</strong> = ${this.lados_cuadrado}<br/>`
            break;
          case 'cuadrado.x':
            this.value_vars += `<strong>${key}</strong> = ${this.cuadrado.x}<br/>`
            break;
          case 'cuadrado.area1':
            this.value_vars += `<strong>${key}</strong> = ${this.cuadrado.area1}<br/>`
            break;
          case 'cuadrado.area_cuadrado()':
            this.value_vars += `<strong>${key}</strong> = ${this.cuadrado.area_cuadrado()}<br/>`
            break;
          case 'area_cuadrado':
            this.value_vars += `<strong>${key}</strong> = ${this.area_cuadrado}<br/>`
            break;
          case 'radio_circulo':
            this.value_vars += `<strong>${key}</strong> = ${this.radio_circulo}<br/>`
            break;
          case 'circulo.radio':
            this.value_vars += `<strong>${key}</strong> = ${this.circulo.radio}<br/>`
            break;
          case 'circulo.area2':
            this.value_vars += `<strong>${key}</strong> = ${this.circulo.area_circulo()}<br/>`
            break;
          case 'circulo.area_circulo()':
            this.value_vars += `<strong>${key}</strong> = ${this.circulo.area_circulo()}<br/>`
            break;
          case 'area_circulo':
            this.value_vars += `<strong>${key}</strong> = ${this.area_circulo}<br/>`
            break;

          case 'ancho_rectangulo':
            this.value_vars += `<strong>${key}</strong> = ${this.ancho_rectangulo}<br/>`
            break;
          case 'largo_rectangulo':
            this.value_vars += `<strong>${key}</strong> = ${this.largo_rectangulo}<br/>`
            break;
          case 'rectangulo.ancho':
            this.value_vars += `<strong>${key}</strong> = ${this.rectangulo.ancho}<br/>`
            break;
          case 'rectangulo.largo':
            this.value_vars += `<strong>${key}</strong> = ${this.rectangulo.largo}<br/>`
            break;
          case 'rectangulo.area3':
            this.value_vars += `<strong>${key}</strong> = ${this.rectangulo.area3}<br/>`
            break;
          case 'rectangulo.area_rectangulo()':
            this.value_vars += `<strong>${key}</strong> = ${this.rectangulo.area_rectangulo()}<br/>`
            break;
          case 'area_rectangulo':
            this.value_vars += `<strong>${key}</strong> = ${this.area_rectangulo}<br/>`
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
      if (this.current_line == 60) {
        this.value_out = `El valor area del cuadrado es: ${this.area_cuadrado}`
      }
      if (this.current_line == 61) {
        this.value_out = `El valor area del circulo es: ${this.area_circulo.toFixed(2)}`
      }
      if (this.current_line == 62) {
        this.value_out = `El valor area del rectangulo es: ${this.area_rectangulo}`
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

