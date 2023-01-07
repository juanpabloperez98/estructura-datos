import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ATSInterface } from './ejemplo3.interface';
@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

  lines_to_input = [12, 16, 19, 22, 25]
  current_line = 1;
  max_line = 37;
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
  num_dep: number = 0;
  ats!: ATSInterface;
  atss: ATSInterface[] = [];
  pos_ats_mayor: number = 0;
  medallas_ats_mayor: number = 0;

  code = `
  #include <cstdio>
typedef struct ATS {
    char nombre[30];
    char pais[30];
    char deporte[30];
    int num_medallas;
} atleta;
int main(){
    int num_dep;
    atleta ats[20];
    printf("Ingrese numero de deportistas: ");
    scanf("%d",&num_dep);
    fflush(stdin);
    for (int i = 0; i < num_dep; i++){
        printf("\\n\\nIngrese nombre del atleta[%d]: ",(i+1));
        gets(ats[i].nombre);
        fflush(stdin);
        printf("\\n\\nIngrese pais del atleta[%d]: ",(i+1));
        gets(ats[i].pais);
        fflush(stdin);
        printf("\\n\\nIngrese deporte del atleta[%d]: ",(i+1));
        gets(ats[i].deporte);
        fflush(stdin);
        printf("\\n\\nIngrese numero medallas del atleta[%d]: ",(i+1));
        scanf("%d",&ats[i].num_medallas);
        fflush(stdin);
    } 
    int pos_ats_mayor = 0;
    int medallas_ats_mayor = 0;
    for (int i = 0; i < num_dep; i++){
        if(ats[i].num_medallas > medallas_ats_mayor){
            medallas_ats_mayor = ats[i].num_medallas;
            pos_ats_mayor = i;
        }
    }
    printf("El atleta con mayo medallas es: %s del pais %s del deporte %s con un total de medallas de %d",ats[pos_ats_mayor].nombre,ats[pos_ats_mayor].pais,ats[pos_ats_mayor].deporte,ats[pos_ats_mayor].num_medallas);
}`;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se define la TAD (struct) con el nombre de ATS',
    },//2
    {
      'line_explain': 'Se define un arreglo de strings con una longitud de 30 y se le da el identificador de nombre',
    },//3
    {
      'line_explain': 'Se define un arreglo de strings con una longitud de 30 y se le da el identificador de pais',
    },//4
    {
      'line_explain': 'Se define un arreglo de strings con una longitud de 30 y se le da el identificador de deporte',
    },//5
    {
      'line_explain': 'Se define un tipo de dato int llamado num_medallas el cual nos sirve para almacenar el número de medallas ganadas por un atleta',
    },//6
    {
      'line_explain': 'Se define el nombre con el que se identifica el TAD',
    },//7
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//8
    {
      'line_explain': 'Se define la variable num_dep la cual tiene como objetivo guardar el número de deportistas a guardar en el arreglo',
    },//9
    {
      'line_explain': 'se crea un array de tipo ateta ats (es un arreglo del tipo struct)',
    },//10
    {
      'line_explain': 'Se le pide al usuario que ingrese el número de deportistas',
      'output': 'Ingrese numero de deportistas:',
    },//11
    {
      'line_explain': 'Se almacena el número de deportistas en la variable num_dep',
    },//12
    {
      'line_explain': 'Se borra el buffer',
    },//13
    {
      'line_explain': 'Se inicializa el ciclo for donde  i = 0 hasta num_dep (ingresdado anteriormente por el usuario)',
      'var_values': {
        'i': '',
        'num_dep': '',
      },
    },//14
    {
      'line_explain': 'Se le pide al usuario que ingrese el nombre del atleta',
    },//15
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable nombre del arreglo de struct ats en la posición i',
    },//16
    {
      'line_explain': 'Se borra el buffer',
    },//17
    {
      'line_explain': 'Se le pide al usuario que ingrese el país del atleta',
    },//18
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable pais del arreglo de struct ats en la posición i',
    },//19
    {
      'line_explain': 'Se borra el buffer',
    },//20
    {
      'line_explain': 'Se le pide al usuario que ingrese el deporte del atleta',
    },//21
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable deporte del arreglo de struct ats en la posición i',
    },//22
    {
      'line_explain': 'Se borra el buffer',
    },//23
    {
      'line_explain': 'Se le pide al usuario que ingrese el numero de medallas del atleta',
    },//24
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable num_medallas del arreglo de struct ats en la posición i',
    },//25
    {
      'line_explain': 'Se borra el buffer',
    },//26
    {
      'line_explain': 'Se cierra el ciclo for',
    },//27
    {
      'line_explain': 'Se declara la variable pos_ats_mayor, esta variable nos sirve para determinar la posicion del arreglo en la que se encuentra el atleta con mayor número de medallas',
      'var_values': {
        'pos_ats_mayor': '',
      },
    },//28
    {
      'line_explain': 'Se declara la variable medallas_ats_mayor la cual nos sirve para identificar el mayor numero de medallas ',
      'var_values': {
        'medallas_ats_mayor': '',
      }
    },//29
    {
      'line_explain': 'Se inicializa el ciclo for donde  i = 0 hasta num_dep',
      'var_values': {
        'i': '',
        'num_dep': '',
      }
    },//30
    {
      'line_explain': 'validamos si el número de medallas del atleta en la posicion i es mayor al valor de la variable medallas_ats_mayor',
      'var_values': {
        'atss[i].num_medallas': '',
        'medallas_ats_mayor': '',
      }
    },//31
    {
      'line_explain': 'Si se cumple la condición anterior entonces igualamos el valor de la variable medallas_ats_mayor al número de medallas que hay en el array de atletas en la posición i',
      'var_values': {

        'medallas_ats_mayor': '',
        'atss[i].num_medallas': '',
      }
    },//32
    {
      'line_explain': 'Luego igualamos pos_ats_mayor en al valor de i',
      'var_values': {
        'pos_ats_mayor': '',
        'i': '',
      }
    },//33
    {
      'line_explain': 'Se cierra el conidicional if',
    },//34
    {
      'line_explain': 'Se cierra el ciclo for',
    },//35
    {
      'line_explain': 'Se imprime la información del atelta con mayor número de medallas',
    },//36
    {
      'line_explain': 'Se termina el programa',
    }//37
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
      case 15:
        this.ats = {
          nombre: '',
          pais: '',
          deporte: '',
          num_medallas: 0,
        }
        break
      case 28:
        this.i = 0;
        break
      case 32:
        this.medallas_ats_mayor = this.atss[this.i].num_medallas;
        break
      case 33:
        this.pos_ats_mayor = this.i;
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
        this.loop_jump(8, 6);
        break
      case 8:
        this.loop_jump(11, 3);
        break
      case 11:
        this.loop_jump(2, 9, 2);
        break
      case 15:
        if (this.i >= this.num_dep) {
          this.loop_jump(27, 12)
        }
        break
      case 27:
        this.atss.push(this.ats);
        this.loop_jump(14, 13, 2);
        this.i++;
        break
      case 31:
        if (this.i >= this.num_dep) {
          this.loop_jump(35, 4)
        }
        break
      case 32:
        if (this.atss[this.i].num_medallas < this.medallas_ats_mayor) {
          this.loop_jump(34, 2)
        }
        break
      case 35:
        this.loop_jump(30, 5, 2);
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
        return;
      }
      this.num_dep = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 17) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.ats.nombre = this.inputfield;
      this.inputfield = '';
    }
    if (this.current_line === 20) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.ats.pais = this.inputfield;
      this.inputfield = '';
    }
    if (this.current_line === 23) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.ats.deporte = this.inputfield;
      this.inputfield = '';
    }
    if (this.current_line === 26) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
        return;
      }
      this.ats.num_medallas = parseInt(this.inputfield)
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
          case 'num_dep':
            this.value_vars += `<strong>${key}</strong> = ${this.num_dep}<br/>`
            break;
          case 'pos_ats_mayor':
            this.value_vars += `<strong>${key}</strong> = ${this.pos_ats_mayor}<br/>`
            break;
          case 'medallas_ats_mayor':
            this.value_vars += `<strong>${key}</strong> = ${this.medallas_ats_mayor}<br/>`
            break;
          case 'atss[i].num_medallas':
            this.value_vars += `<strong>${key}</strong> = ${this.atss[this.i].num_medallas}<br/>`
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
      if (this.current_line == 36) {
        this.value_out = `El atleta con mayor medallas es: ${this.atss[this.pos_ats_mayor].nombre} del pais: ${this.atss[this.pos_ats_mayor].pais} del deporte: ${this.atss[this.pos_ats_mayor].deporte}  con un total de medallas: ${this.atss[this.pos_ats_mayor].num_medallas}`
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
