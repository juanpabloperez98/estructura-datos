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


  lines_to_input = [14, 17, 20]
  current_line = 1;
  max_line = 23;
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

  artista_var: String = "";
  titulo_var: String = "";
  duracion_var: number = 0;
  artista: String = "";
  titulo: String = "";
  duracion: number = 0;

  code = `
  #include <cstdio>
#include <cstring>
typedef struct Cancion {
    char artista[50];
    char titulo[50];
    float duracion;
} mp3;          
int main(){
    mp3 new_mp3;
    char artista_var[50];
    char titulo_var[50];
    float duracion_var;
    printf("Ingrese el nombre del artista: "); // Se le pide al usuario que ingrese el nombre del artista
    gets(artista_var);
    fflush(stdin);
    printf("Ingrese el titulo de la cancion: ");
    gets(titulo_var);
    fflush(stdin);
    printf("Ingrese la duracion de la cancion (minutos): ");
    scanf("%f",&duracion_var);
    fflush(stdin);
    std::strcpy(new_mp3.artista, artista_var);
    std::strcpy(new_mp3.titulo, titulo_var);
    new_mp3.duracion = duracion_var;
    printf("La cancion guardada es: %s - %s con una duracion de %.1f minutos",new_mp3.titulo,new_mp3.artista,new_mp3.duracion);
}
`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    }, //1
    {
      'line_explain': 'Se incluye la libreria <cstring> la cual permite utilizar metodos para copiar string (cadena de caracteres)',
    }, //2
    {
      'line_explain': 'Se define la TAD (struct) con el nombre de Cancion',
    }, //3
    {
      'line_explain': 'Se define un tipo de dato cadena de caracteres con una longitud de 50 con el nombre de artista',
    }, //4
    {
      'line_explain': 'Se define un tipo de dato cadena de caracteres con una longitud de 50 con el nombre de titulo',
    }, //5
    {
      'line_explain': 'Se define un tipo de dato float con el nombre de duracion, este nos va almacenar el tiempo en minutos de la canción',
    }, //6
    {
      'line_explain': 'Se de fine el nombre con el que se identifica el TAD',
    }, //7
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    }, //8
    {
      'line_explain': 'Se inicializa el TAD mp3 y se nombra en una variable llamada new_mp3',
    }, //9
    {
      'line_explain': 'Se define la variable artista_var que es un arreglo de caracteres',
    }, //10
    {
      'line_explain': 'Se define la variable titulo_var que es un arreglo de caracteres',
    }, //11
    {
      'line_explain': 'Se define la variable duracion_var que es de tipo float',
    }, //12
    {
      'line_explain': 'Se le pide al usuario que ingrese el nombre del artista',
    }, //13
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable',
      'output': 'Ingrese numero:',
    }, //14
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //15
    {
      'line_explain': 'Se le pide al usuario que ingrese el titulo de la canción',
    }, //16
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable titulo_var',
      'output': 'Ingrese numero:',
    }, //17
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //18
    {
      'line_explain': 'Se le pide al usuario que ingrese la duración de la canción',
    }, //19
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable duracion_var',
      'output': 'Ingrese numero:',
    }, //20
    {
      'line_explain': 'Se borra el buffer para que no haya problema al volver a pedir datos',
    }, //21
    {
      'line_explain': 'Se copia el valor de la variable artista_var en el atributo artista del TAD new_mp3',
      'var_values': {
        'artista_var': '',
        'artista': ''
      },
    }, //22
    {
      'line_explain': 'Se copia el valor de la variable titulo_var en el atributo titulo del TAD new_mp3',
      'var_values': {
        'titulo_var': '',
        'titulo': ''
      },
    }, //23
    {
      'line_explain': 'Se iguala el valor del TAD new_mp3 al de la variable duracion_var',
      'var_values': {
        'duracion_var': '',
        'duracion': ''
      },
    }, //24
    {
      'line_explain': 'Se imprime los datos que han sido almacenados en el TAD',
    }, //25
    {
      'line_explain': 'Fin del programa',
    }, //26
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
        this.artista = this.artista_var;
        break;
      case 23:
        this.titulo = this.titulo_var;
        break;
      case 24:
        this.duracion = this.duracion_var;
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

      case 3:
        this.loop_jump(8, 5);
        break
      case 8:
        this.loop_jump(10, 2);
        break
      case 10:
        this.loop_jump(3, 7, 2);
        break
    }
  }

  validate_input = () => {

    if (this.current_line === 15) {
      if (this.inputfield === '') {
        this.toastr.error('Ingresar el nombre del artista');
        this.current_line--;
        this.less_top();
      }
      this.artista_var = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 18) {
      if (this.inputfield === '') {
        this.toastr.error('Ingresar titulo de la cancion');
        this.current_line--;
        this.less_top();
      }
      this.titulo_var = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 21) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Ingresar la duraccion de la cancion (minutos) ');
        this.current_line--;
        this.less_top();
      }
      this.duracion_var = parseInt(this.inputfield)
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
    this.explain_pass = this.code_obj[this.current_line - 1]['line_explain']
  }

  add_var = () => {
    if (this.code_obj[this.current_line - 1]['var_values']) {
      let data = this.code_obj[this.current_line - 1]['var_values'];
      for (const key in data) {
        switch (key) {
          case 'artista':
            this.value_vars += `<strong>${key}</strong> = ${this.artista}<br/>`
            break;
          case 'titulo':
            this.value_vars += `<strong>${key}</strong> = ${this.titulo}<br/>`
            break;
          case 'duracion':
            this.value_vars += `<strong>${key}</strong> = ${this.duracion}<br/>`
            break;
          case 'artista_var':
            this.value_vars += `<strong>${key}</strong> = ${this.artista_var}<br/>`
            break;
          case 'titulo_var':
            this.value_vars += `<strong>${key}</strong> = ${this.titulo_var}<br/>`
            break;
          case 'duracion_var':
            this.value_vars += `<strong>${key}</strong> = ${this.duracion_var}<br/>`
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
      if (this.current_line == 25) {
        this.value_out = `La cancion guardada es: ${this.titulo}  con una duracion de: ${this.duracion} y su artista es: ${this.artista}`
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
