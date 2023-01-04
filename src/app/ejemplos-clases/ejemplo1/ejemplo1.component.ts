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


  lines_to_input = [20, 23, 26, 29, 37, 40]
  current_line = 1;
  max_line = 45;
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
  nombre: String = '';
  edad: number = 0;
  estatura: number = 0;
  peso: number = 0;

  code = `
  #include <cstdio>
class Persona{
    public:
        char * nombre;
        int edad;
        float estatura;
        float peso;
    float aumentaEstatura(float metros){
        return estatura += metros;
    };
    float aumentaPeso(float kilogramos){
        return peso += kilogramos;
    };
};
int main(){
    char nombre[50];
    int edad;
    float estatura, peso;
    printf("Ingrese el nombre de una persona: ");
    gets(nombre);
    fflush(stdin);
    printf("Ingrese la edad de una persona: ");
    scanf("%d",&edad);
    fflush(stdin);
    printf("Ingrese el peso de una persona: ");
    scanf("%f",&peso);
    fflush(stdin);
    printf("Ingrese la estatura de una persona: ");
    scanf("%f",&estatura);
    fflush(stdin);
    Persona new_persona;
    new_persona.nombre = nombre;
    new_persona.edad = edad;
    new_persona.estatura = estatura;
    new_persona.peso = peso;
	printf("Ingrese el peso que ha aumentado la persona: ");
    scanf("%f",&peso);
    fflush(stdin);
    printf("Ingrese la estatura que ha aumentado la persona: ");
    scanf("%f",&estatura);
    fflush(stdin);
    new_persona.aumentaPeso(peso);
    new_persona.aumentaEstatura(estatura);
    printf("El nuevo peso de %s es %.1f kg y la nueva estatura es %.1f m",new_persona.nombre,new_persona.peso,new_persona.estatura);
}
  `;

  code_obj = [
    {
      'line_explain': 'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain': 'Se define la clase Persona',
    },//2
    {
      'line_explain': 'Se define los atributos de tipo public (Recordar que los atributos de tipo public permiten ser accedidos desde cualquier punto del software)',
    },//3
    {
      'line_explain': 'Se define una array de caracteres y lo llamamos nombre',
    },//4
    {
      'line_explain': 'Se define una varriable llamada edad de tipo int',
    },//5
    {
      'line_explain': 'Se define la variable de tipo float llamada estatura',
    },//6
    {
      'line_explain': 'Se define la variable de tipo float llamada peso',
    },//7
    {
      'line_explain': 'Se define una función llamada aumentaEstatura la cual recibe un parametro llamado metros',
    },//8
    {
      'line_explain': 'Se retorna el valor de su nueva estatura ',
      'var_values': {
        'estatura': '',
      },
    },//9
    {
      'line_explain': 'Se cierra la primera funcion',
    },//10
    {
      'line_explain': 'Se define una función llamada aumentaPeso la cual recibe un parametro llamado kilogramos',
    },//11
    {
      'line_explain': 'Se retorna el valor de su nuevo peso ',
      'var_values': {
        'peso': '',
      },
    },//12
    {
      'line_explain': 'Se cierra la segunda funcion',
    },//13
    {
      'line_explain': 'Se cierra la clase persona',
    },//14
    {
      'line_explain': 'Se declara la función principal con la que arranca el programa',
    },//15
    {
      'line_explain': 'Se define un arreglo de caracteres de longitud 50',
    },//16
    {
      'line_explain': 'Se define una variable llamada edad de tipo int',
    },//17
    {
      'line_explain': 'Se definen dos variables de tipo float estatura y peso',
    },//18
    {
      'line_explain': 'Se le pide al usuario que ingrese el nombre de la persona',
    },//19
    {
      'line_explain': 'Se almacena lo ingresado por el usuario en la variable nombre',
    },//20
    {
      'line_explain': 'Se borra el buffer',
    },//21
    {
      'line_explain': 'Se le pide al usuario que ingrese la edad de una persona',
    },//22
    {
      'line_explain': ' Se almacena el valor ingresado por el usuario en la variable edad',
      'output': 'Ingrese numero:',
    },//23
    {
      'line_explain': 'Se borra el buffer',
    },//24
    {
      'line_explain': 'Se le pide al usuario que ingrese el peso de una persona',
    },//25
    {
      'line_explain': 'Se almacena el valor ingresado por el usaurio en la variable peso',
    },//26
    {
      'line_explain': 'Se borra el buffer',
    },//27
    {
      'line_explain': 'Se le pide al usuario que ingrese la estatura de una persona',
    },//28
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable estatura',
    },//29
    {
      'line_explain': 'Se borra el buffer',
    },//30
    {
      'line_explain': 'Se instancia un objeto de tipo Persona y se le da el nombre de new_persona',
    },//31
    {
      'line_explain': 'Al objeto instaciado anteriormente se le asigna en el atributo nombre el valor de la variable nombre ingresado por el usuario',
      'var_values': {
        'nombre': '',
      },
    },//32
    {
      'line_explain': 'Al objeto instanciado anteriormente se le asigna en el atributo edad el valor de la edad ingresado por el usuario',
      'var_values': {
        'edad': '',
      },
    },//33
    {
      'line_explain': 'Al objeto instanciado anteriormente se le asigna en el atributo edad el valor de la edad ingresado por el usuario',
      'var_values': {
        'estatura': '',
      },
    },//34
    {
      'line_explain': 'Al objeto instanciado anteriormente se le asigna en el atributo peso el valor del peso ingresado por el usuario',
      'var_values': {
        'peso': '',
      },
    },//35
    {
      'line_explain': 'Se le pide al usuario que ingrese el peso que ha aumentado la persona',
    },//36
    {
      'line_explain': 'Se almacena el valor ingresado por el usuario en la variable peso',
    },//37
    {
      'line_explain': 'Se borra el buffer',
    },//38
    {
      'line_explain': 'Se le pide al usuario que ingrese la estatura que ha aumentado la persona',
    },//39
    {
      'line_explain': 'Se captura el valor ingresador por el usuario en en la variable estaturea',
    },//40
    {
      'line_explain': 'Se borra el buffer',
    },//41
    {
      'line_explain': 'Ahora utilianzando la abstracción de datos utilizamos el metodo aumentaPeso el cual se le pasa por parametro el peso ingresado por el usuario',
    },//42
    {
      'line_explain': 'Ahora utilianzando la abstracción de datos utilizamos el metodo aumentaEstatura el cual se le pasa por parametro la estatura ingresada por el usuario anteriormente',
    },//43
    {
      'line_explain': 'Por ultimo se imprime el peso y la estatura aumentada del usuario',
    },//44
    {
      'line_explain': 'Se cierra el programa',
    },//45
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
        this.loop_jump(15, 13);
        break;
      case 31:
        this.loop_jump(2, 29, 2);
        break;
      case 15:
        this.loop_jump(32, 17);
        break;
    }
  }

  validate_input = () => {
    if (this.current_line === 21) {
      if (this.inputfield === '') {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.nombre = this.inputfield
      this.inputfield = '';
    }
    if (this.current_line === 24) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.edad = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 27) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.estatura = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 30) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.peso = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 38) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.peso = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if (this.current_line === 41) {
      if (this.inputfield === '' || isNaN(parseInt(this.inputfield))) {
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line--;
        this.less_top();
      }
      this.estatura = parseInt(this.inputfield)
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
          case 'nombre':
            this.value_vars += `<strong>${key}</strong> = ${this.nombre}<br/>`
            break;
          case 'edad':
            this.value_vars += `<strong>${key}</strong> = ${this.edad}<br/>`
            break;
          case 'estatura':
            this.value_vars += `<strong>${key}</strong> = ${this.estatura}<br/>`
            break;
          case 'peso':
            this.value_vars += `<strong>${key}</strong> = ${this.peso}<br/>`
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
