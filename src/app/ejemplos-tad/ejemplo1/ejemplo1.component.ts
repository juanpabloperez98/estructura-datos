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


  lines_to_input = [61, 64, 70, 73]
  current_line = 1;
  max_line = 80;
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
  marca: String = '';
  capacidad: number = 0;


  code = `#include <cstdio>
  #include <iostream>
  class Bateria{
      private:
          int capacidad;
      public:
          int getCapacidad(){
              return this->capacidad;
          }
          void setCapacidad(int capacidad){
              this->capacidad = capacidad;
          }
     int duracionBateria(){
              if(this->capacidad < 3000){
                  return 16;
              }else{
                  return 24;
              }
          }
  };
  class Telefono{
      private:
          char marca[30];
          Bateria bateria;
      public:
        Telefono(int capacidad){
          this->bateria.setCapacidad(capacidad);
      }
          char * getMarca(){
              return this->marca;
          }
          void setMarca(char marca[]){
              strcpy(this->marca,marca);
          }
          int duracionBateria(){
              return this->bateria.duracionBateria();
          }
  };
  class Tablet{
      private:
          char marca[30];
          Bateria bateria;
      public:
        Tablet(int capacidad){
          this->bateria.setCapacidad(capacidad);
      }
          char * getMarca(){
              return this->marca;
          }
          void setMarca(char marca[]){
              strcpy(this->marca,marca);
          }
          int duracionBateria(){
              return this->bateria.duracionBateria();
          }
  };
  int main(){
      char marca[30];
      int capacidad, duracion_telefono, duracion_tablet;
      printf("Ingrese la marca del telefono: ");
      gets(marca);
      fflush(stdin);
      printf("Ingrese la capacidad de la bateria del telefono: ");
      scanf("%d",&capacidad);
      fflush(stdin);
      Telefono telefono(capacidad);
      telefono.setMarca(marca);
      duracion_telefono = telefono.duracionBateria();
      printf("Ingrese la marca de la tablet: ");
      gets(marca);
      fflush(stdin);
      printf("Ingrese la capacidad de la bateria de la tablet: ");
      scanf("%d",&capacidad);
      fflush(stdin);
      Tablet tablet(capacidad);
      tablet.setMarca(marca);
      duracion_tablet = tablet.duracionBateria();
      printf("Porcentaje de la bateria del telefono %s es de %d%\\n\\n",telefono.getMarca(),duracion_telefono);
      printf("Porcentaje de la bateria de la tablet %s es de %d%\\n\\n",tablet.getMarca(),duracion_tablet);
  }`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
      'var_values': {
        'i': '',
      },
      'output': 'Ingrese numero:',
    },//1
    {
      'line_explain': 'Se implementa la libreria iostream para poder implementar librerias de cadenas',
    },//2
    {
      'line_explain': 'Se crea la clase Bateria',
    },//3
    {
      'line_explain': 'Se definen los atributos privados',
    },//4
    {
      'line_explain': 'Se declara una variable llamada capacidad de tipo int',
    },//5
    {
      'line_explain': 'Se definen los metodos publicos para la abstración de datos',
    },//6
    {
      'line_explain': 'Se define la función getCapacidad que retorna un entero',
    },//7
    {
      'line_explain': 'Se retorna el valor del atributo capacidad de la clase',
    },//8
    {
      'line_explain': 'Se cierra la función',
    },//9
    {
      'line_explain': 'Se crea la función setCapacidad, la cual retorna el valor del atributo capacidad de la clase',
    },//10
    {
      'line_explain': 'Se iguala el valor de la variable capacidad de la clase al valor que se recibio por parametro',
    },//11
    {
      'line_explain': 'fin de la funcion',
    },//12
    {
      'line_explain': 'Se declara la función duracionBateria',
    },//13
    {
      'line_explain': 'Se valida si el valor del atributo capacidad es menor a 3000',
    },//14
    {
      'line_explain': 'Si la condicion anterior se cumple entonces se retorna el valor 16',
    },//15
    {
      'line_explain': 'De lo contrario',
    },//16
    {
      'line_explain': 'Se retorna el valor 24',
    },//17
    {
      'line_explain': 'Se cierra el condicional',
    },//18
    {
      'line_explain': 'fin de la funcion',
    },//19
    {
      'line_explain': 'Se cierra la clase bateria',
    },//20
    {
      'line_explain': 'Se crea la clase Telefono',
    },//21
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//22
    {
      'line_explain': 'Se define un array de caracteres llamado marca con longitud de 30',
    },//23
    {
      'line_explain': 'Se define un objeto de la clase Bateria',
    },//24
    {
      'line_explain': 'Se definen los metodos publicos',
    },//25
    {
      'line_explain': 'Se crea el constructor de telefono que recibe como parametro la capacidad',
    },//26
    {
      'line_explain': 'Hacemos el llamado a la función setCapacidad del objeto bateria, el cual le da el valor de capacidad a la bateria del telefono',
    },//27
    {
      'line_explain': 'fin del constructor',
    },//28
    {
      'line_explain': 'Se define una función getMarca la cual va a retornar un array de caracteres',
    },//29
    {
      'line_explain': 'se retorna el valor de la variable marca de la clase',
    },//30
    {
      'line_explain': 'fin de la función',
    },//31
    {
      'line_explain': 'Se define la función setMarca que recibe como parametro un array de caracteres',
    },//32
    {
      'line_explain': 'Usando la función strcpy de la libreria iostream se copia el valor de la variable marca recibida por parametro, en la variable marca de la clase',
    },//33
    {
      'line_explain': 'fin de la función',
    },//34
    {
      'line_explain': 'Se define la función duracionBateria',
    },//35
    {
      'line_explain': 'Se hace el llamado a la función duracionBateria del objeto bateria de la clase Bateria el cual retorna un entero',
    },//36
    {
      'line_explain': 'fin de la función',
    },//37
    {
      'line_explain': 'Se declara la clase Tablet',
    },//38
    {
      'line_explain': 'Se declara la clase Tablet',
    },//39
    {
      'line_explain': 'Se definen los atributos privados de la clase',
    },//40
    {
      'line_explain': 'Se define un array de caracteres llamado marca con longitud de 30',
    },//41
    {
      'line_explain': 'Se define un objeto de la clase Bateria',
    },//42
    {
      'line_explain': 'Se definen los metodos publicos',
    },//43
    {
      'line_explain': 'Se crea el constructor de tablet que recibe como parametro la capacidad',
    },//44
    {
      'line_explain': 'Hacemos el llamado a la función setCapacidad del objeto bateria, el cual le da el valor de capacidad a la bateria de la tablet',
    },//45
    {
      'line_explain': 'fin de la función',
    },//46
    {
      'line_explain': 'Se define una función getMarca la cual va a retornar un array de caracteres',
    },//47
    {
      'line_explain': 'Se retorna el valor de la variable marca de la clase',
    },//48
    {
      'line_explain': 'fin de la función',
    },//49
    {
      'line_explain': 'Se define la función setMarca la cual recibe como parametro un array de caracteres ',
    },//50
    {
      'line_explain': 'Usando la función strcpy de la libreria iostream se copia el valor de la variable marca recibida por parametro, en la variable marca de la clase',
    },//51
    {
      'line_explain': 'fin de la función',
    },//52
    {
      'line_explain': 'Se define la función duracionBateria',
    },//53
    {
      'line_explain': 'Se hace el llamado a la función duracionBateria del objeto bateria de la clase Bateria el cual retorna un entero',
    },//54
    {
      'line_explain': 'fin de la función',
    },//55
    {
      'line_explain': 'Se cierra la clase tablet',
    },//56
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//57
    {
      'line_explain': 'Se declara la variable marca la cual es un array de caracteres con longitud de 30',
    },//58
    {
      'line_explain': 'Se definen las variables de capacidad, y duración tanto del telefono como de la tablet',
    },//59
    {
      'line_explain': 'Se le pide al usuario que ingrese la marca del telefono',
    },//60
    {
      'line_explain': 'Captura la marca',
    },//61
    {
      'line_explain': 'Se borra el buffer',
    },//62
    {
      'line_explain': 'Se le pide al usuario que ingrese la capacidad de la bataeria del telefono',
    },//63
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable capacidad',
    },//64
    {
      'line_explain': 'Se borra el buffer',
    },//65
    {
      'line_explain': 'Se crea un objeto de la clase Telefono y se pasa como parametro la variable capacidad',
    },//66
    {
      'line_explain': 'Luego se hace el llamado a la función setMarca del objeto telefono',
    },//67
    {
      'line_explain': 'Luego a la variable duracion_telefono se le asigna el valor que retorna la función duracionBateria del objeto telefono',
    },//68
    {
      'line_explain': 'Se imprime que se ingrese la marca de la tablet',
    },//69
    {
      'line_explain': 'Se captura el valor ingresado en la variable marca',
    },//70
    {
      'line_explain': 'Se borra el buffer',
    },//71
    {
      'line_explain': 'Se le pide que ingrese la capacidad de la bateria de la tablet al usuario',
    },//72
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable capacidad',
    },//73
    {
      'line_explain': 'Se borra el buffer',
    },//74
    {
      'line_explain': 'Se crea el objeto tablet de la clase Tablet pasando como parametro la variable capacidad',
    },//75
    {
      'line_explain': 'Luego se hace el llamado a la función setMarca del objeto tablet',
    },//76
    {
      'line_explain': 'Luego a la variable duracion_tablet se le asigna el valor que retorna la función duracionBateria del objeto tablet',
    },//77
    {
      'line_explain': 'Se imprime el porocentaje de bateria del telefono',
    },//78
    {
      'line_explain': 'Se imprime el porcentaje de bateria de la tablet',
    },//79
    {
      'line_explain': 'fin del programa',
    },//80
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
      case 3:
        this.loop_jump(57, 54)
        break;
    }
  }

  validate_input = () => {
    if (this.current_line === 62) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.marca = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 65) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.capacidad = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 71) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      // this.b = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 74) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      // this.b = parseInt(this.inputfield)
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
