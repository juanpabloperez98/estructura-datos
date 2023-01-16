import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {


  lines_to_input = [6,8]
  current_line = 1;
  max_line = 31;
  run_code = false;
  explain_pass = '';
  value_vars = '';
  value_out = '';
  top = 14;
  top_style = this.top + 'px';
  is_form = false;
  submit = false;
  inputFieldVar:string = '';
  list_to_values_input:any[] = [];
  reload = false;
  inputfield = '';

  // Variables del ejemplo
  a:number = 0;
  b:number = 0;
  size_array:number = 0;
  i:number = 0;
  binary:string[] = [];
  lon_new_array:number = 0;
  scrolling_array:string[] = [];
  index = 0;
  aux_iter:number = 0;
  aux_finish:number = 0;

  code = `
  #include <cstdio>
  #include <math.h>
  int main(){
    int a,b;
    printf("Ingrese el numero decimal: ");
    scanf("%d",&a);
    printf("Ingrese el valor de desplazamiento: ");
    scanf("%d",&b);
    int size_array = (int)log2(a)+1;
    char binary[size_array];
    int i = size_array-1;
    while(a != 0){
      binary[i] = (a % 2 == 0 ? '0' : '1');
      a = a/2;
      i--;
    }
    int lon_new_array = size_array + b;
    char scrolling_array[lon_new_array];
    for(int index = 0; index < size_array; index++){ 
      scrolling_array[index] = binary[index];
    }
    int aux_iter = size_array;
    int aux_finish = size_array+b;
    while(aux_iter != aux_finish){
      scrolling_array[aux_iter] = '0';
      aux_iter++;
    }
    for(int index = 0; index < aux_finish; index++){
      printf("%c",scrolling_array[index]);
    }
  }
  `

  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se incluye la libreria <math.h> la cual permite manejar funciones de entrada y salida',
    },//2
    {
      'line_explain':'Se declara la función main',
    },//3
    {
      'line_explain':'Se declaran las variables a utilizar donde a es el decimal y b el numero de bits de desplazamiento',
    },//4
    {
      'line_explain':'Pedimos al usuario que ingrese numero decimal',
      'output':'Ingrese el numero decimal'
    },//5
    {
      'line_explain':'Guardamos el numero ingresado por el usuario en la variable a',
    },//6
    {
      'line_explain':'Se le pide al usuario el valor de desplazamiento',
      'output':'Ingrese el valor de desplazamiento'
    },//7
    {
      'line_explain':'Guardamos el numero ingresado por el usuario en la variable a',
    },//8
    {
      'line_explain':'Se obtiene el numero de bits que se necesita para representar el valor de a en binario',
      'var_values':{
        'a':'',
        'size_array':''
      },
    },//9
    {
      'line_explain':'Se crea un arreglo con el tamaño de numeros de bits definido anteriormente',
      'var_values':{
        'size_array':''
      },
    },//10
    {
      'line_explain':'Luego se crea un iterador i el cual tendra como valor el número de bits - 1 (ejemplo si el número de bits son 3 entonces el valor de i sería 2)',
      'var_values':{
        'i':'',
        'size_array':''
      },
    },//11
    {
      'line_explain':'Declaramos un ciclo while el cual valida que mientras a sea diferente de cero',
      'var_values':{
        'a':'',
      },
    },//12
    {
      'line_explain':'validamos con una condición ternaria si el modulo de a entre 2 es igual a cero o no, de ser así entonces se añade al array de caracteres el caracter "0" de lo contario el caracter "1"',
      'var_values':{
        'a':'',
        'i':'',
        'binary[i]':'',
      },
    },//13
    {
      'line_explain':'luego se divide el valor de a entre 2 (de esta manera por cada ciclo se ira disminuyendo el valor)',
      'var_values':{
        'a':'',
      },
    },//14
    {
      'line_explain':'Se disminuye el valor del iterador',
      'var_values':{
        'i':'',
      },
    },//15
    {
      'line_explain':'Se finaliza el ciclo anterior',
    },//16
    {
      'line_explain':'Se define una nueva variable lon_new_array que sera igual al numero de bits sumado con el desplazamiento que esta almacenado en la variable b',
      'var_values':{
        'lon_new_array':'',
        'size_array':'',
        'b':'',
      },
    },//17
    {
      'line_explain':'Se define un nuevo arreglo llamado scrolling_array el cual tiene como tamaño el valor de lon_new_array',
      'var_values':{
        'lon_new_array':'',
      },
    },//18
    {
      'line_explain':'Se crea un ciclo for para agregar los valores del array binary al nuevo array scrolling_array',
      'var_values':{
        'index':'',
        'size_array':''
      },
    },//19
    {
      'line_explain':'Se asigna el valor que haya en binary en la posición index a scrolling_array en la posición index',
      'var_values':{
        'scrolling_array[index]':'',
        'index':'',
        'binary[index]':''
      },
    },//20
    {
      'line_explain':'Se cierra el ciclo for',
    },//21
    {
      'line_explain':'Se declara una variable auxiliar la cual va a contener el valor de el número de bits que se necesita para representar el valor de a',
      'var_values':{
        'aux_iter':'',
        'size_array':''
      },
    },//22
    {
      'line_explain':'Se declara la variable aux_finish la cual va a tener la longitud maxima necesaria para el desplazamiento (por ejemplo si para el numero 5 se necesitan 3 bits y el valor de b es de 2 entonces el valor de aux_finish sería igual a 5)',
      'var_values':{
        'aux_finish':'',
        'size_array':'',
        'b':'',
      },
    },//23
    {
      'line_explain':'Se declara un ciclo while que itera hasta que aux_iter sea diferente de aux_finish',
      'var_values':{
        'aux_iter':'',
        'aux_finish':''
      },
    },//24
    {
      'line_explain':'Se agrega al arreglo los ceros del desplazamiento',
      'var_values':{
        'aux_iter':'',
        'scrolling_array[aux_iter]':'0'
      },
    },//25
    {
      'line_explain':'Se aumenta el valor de la variable aux_iter',
      'var_values':{
        'aux_iter':'',
      },
    },//26
    {
      'line_explain':'Se cierra el ciclo while',
    },//27
    {
      'line_explain':'Se crea un ciclo for para imprimir el arreglo resultante con el desplazamiento',
      'var_values':{
        'index':'',
        'aux_finish':'',
      },
    },//28
    {
      'line_explain':'Se imprime el valor que haya en la posición index',
      'var_values':{
        'index':'',
        'scrolling_array[index]':'',
      },
    },//29
    {
      'line_explain':'Se cierra el ciclo for',
    },//30
    {
      'line_explain':'Fin del programa',
    },//31
  ]

  constructor(
    private highlightService: HighlightService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngAfterViewChecked(){
    this.highlightService.highlightAll();
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
  }

  // Functions to run program
  modify_vars = () => {
      switch(this.current_line){
        case 9:
          this.size_array = Math.floor(Math.log2(this.a) + 1);
          break;
        case 11:
          for (let i = 0; i < this.size_array; i++) {
            this.binary.push('0');
          }
          var value = this.size_array -1;
          this.i = value;
          break;
        case 13:
          var binary_ = this.a % 2 == 0 ? '0' : '1';
          this.binary[this.i] = binary_;
          break;
        case 14:
          this.a = Math.floor(this.a / 2);
          break;
        case 15:
          this.i --;
          break;
        case 17:
          this.lon_new_array = this.size_array + this.b;
          break;
        case 18:
          this.i --;
          for(let index_ = 0; index_ < this.lon_new_array; index_ ++){
            this.scrolling_array.push('0');
          }
          console.log(this.scrolling_array);
          break;
        case 20:
          this.scrolling_array[this.index] = this.binary[this.index]; 
          break;
        case 22:
          this.aux_iter = this.size_array;
          break;
        case 23:
          this.aux_finish = this.size_array + this.b;
          break;
        case 25:
          this.scrolling_array[this.aux_iter] = '0';
          break;
        case 26:
          this.aux_iter ++;
          break;
        case 27:
          this.index = 0;
          break;
    }
  }

  refresh = () => {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(() => {
      this.router.navigate(['/module2/ejemplo2']).then(()=>{})
    })
  }
  
  loop_jump = (to_jump:number, num_jump:number, direcction:number = 1) => {
    this.current_line = to_jump;
    if( direcction === 1 ){
      for(let i = 0; i < num_jump; i++){
        this.add_top();
      }
    }else{
      for(let i = 0; i < num_jump; i++){
        this.less_top();
      }
    }
  }

  jump = () => {
    switch(this.current_line){
      case 16:
        if( this.a != 0 ){
          this.loop_jump(12,4,2);
        }
        break;
      case 20:
        if(this.index >= this.size_array){
          this.loop_jump(21,1,1);
        }
        break
      case 21:
        if(this.index < this.size_array){
          this.index ++
          this.loop_jump(19,2,2);
        }
        break
      case 25:
        if(this.aux_iter === this.aux_finish){
          this.loop_jump(27,2);
        }
        break
      case 27:
        if(this.aux_iter != this.size_array){
          this.loop_jump(24,3,2);
        }
        break
      case 29:
        if(this.index >= this.aux_finish){
          this.loop_jump(30,1);
        }
        break
      case 30:
        if(this.index < this.aux_finish){
          this.loop_jump(28,2,2);
          this.index ++;
        }
        break
    }
  }

  validate_input = () => {
    if ( this.current_line === 7){
      if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }
      this.a = parseInt(this.inputfield)
      this.inputfield = '';
    }
    if ( this.current_line === 9){
      if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
        this.toastr.error('Debe ingresar un valor para continuar');
        this.current_line --;
        this.less_top();
      }
      this.b = parseInt(this.inputfield)
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
    if ( this.code_obj[this.current_line - 1]['var_values'] ){
      let data = this.code_obj[this.current_line - 1]['var_values'];
      for (const key in data) {
        switch( key ){
          case 'a':
            this.value_vars += `<strong>${key}</strong> = ${this.a}<br/>`
            break;   
          case 'size_array':
            this.value_vars += `<strong>${key}</strong> = ${this.size_array}<br/>`
            break;   
          case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;   
          case 'b':
            this.value_vars += `<strong>${key}</strong> = ${this.b}<br/>`
            break;   
          case 'binary[i]':
            var value = this.a % 2 == 0 ? '0' : '1';
            this.value_vars += `<strong>${key}</strong> = ${value}<br/>`
            break;   
          case 'lon_new_array':
            this.value_vars += `<strong>${key}</strong> = ${this.lon_new_array}<br/>`
            break;   
          case 'scrolling_array[index]':
            this.value_vars += `<strong>${key}</strong> = ${this.scrolling_array[this.index]}<br/>`
            break;   
          case 'index':
            this.value_vars += `<strong>${key}</strong> = ${this.index}<br/>`
            break;   
          case 'binary[index]':
            this.value_vars += `<strong>${key}</strong> = ${this.binary[this.index]}<br/>`
            break;   
          case 'aux_iter':
            this.value_vars += `<strong>${key}</strong> = ${this.aux_iter}<br/>`
            break;   
          case 'aux_finish':
            this.value_vars += `<strong>${key}</strong> = ${this.aux_finish}<br/>`
            break;   
          default:
            this.value_vars += `<strong>${key}</strong> = ${data[key as keyof typeof data]}<br/>`
            break
        }
      }      
      // this.value_vars = this.value_vars.substring(0,this.value_vars.length - 2)
    }
  }

  add_output = () => {
    if ( this.lines_to_input.includes(this.current_line) ){
        this.is_form = true;
        this.list_to_values_input = [];
    }else{
        this.is_form = false;
        let data = this.code_obj[this.current_line - 1]['output'];
        if( data ){
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
    if( this.current_line >= this.max_line ){
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
    if ( this.current_line >= this.max_line ){
      this.toastr.success('Fin del programa!','Programa finalizado');
      this.reload = true; 
    }
  }

}
