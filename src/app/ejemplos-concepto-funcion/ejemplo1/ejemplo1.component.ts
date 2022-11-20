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

  lines_to_input = [13,16]
  current_line = 1;
  max_line = 24;
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
  i:number = 0;
  list_nums1:number [] = [];
  list_nums2:number [] = [];
  list_nums:number [] = [];
  list_sums:number [] = [];
  axu1:number = 0;
  axu2:number = 0;

  code = `
  #include <cstdio>
  void sum_list(int lista1[], int lista2[],int list_sum[]){
      for(int i = 0; i < 3; i++){
          list_sum[i] = lista1[i] + lista2[i];
      }
  };
  int main(){
      int list_nums1[3];
      int list_nums2[3];
      int list_sums[3];
      for(int i = 0; i < 3; i++){
          printf("Ingrese el numero de la lista 1 en la posicion %d: ",i);
          scanf("%d",&list_nums1[i]);
          fflush(stdin);
          printf("Ingrese el numero de la lista 2 en la posicion %d: ",i);
          scanf("%d",&list_nums2[i]);
          fflush(stdin);
      }
      sum_list(list_nums1,list_nums2, list_sums);
      printf("Lista sumada:");
      for(int i = 0; i < 3; i++){
          printf("posicion %d de la lista contiene %d",i,&list_sums[i]);
      }
  }`
  code_obj = [
    {
      'line_explain':'Se incluye la libreria <cstdio> la cual permite manejar funciones de entrada y salida',
    },//1
    {
      'line_explain':'Se define la función sum_list la cual recibe 3 arrays como parametros, las listas que se van a sumar y la lista donde se van almacenar los resultados',
    },//2
    {
      'line_explain':'Se hace un ciclo para recorrer las listas a sumar',
      'var_values':{
        'i':'',
      },
    },//3
    {
      'line_explain':'Se hace la suma de los valores que hayan en la posicion i lista1 con lista2',
      'var_values':{
        'lista1[i]':'',
        'lista2[i]':'',
        'i':'',
      },
    },//4
    {
      'line_explain':'Se cierra el ciclo',
    },//5
    {
      'line_explain':'Se cierra la función sum_list ',
    },//6
    {
      'line_explain':'Se declara la función principal con la que arranca el programa',
    },//7
    {
      'line_explain':'Se declara la lista1 llamada list_nums1 (array de enteros)',
    },//8
    {
      'line_explain':'Se declara la lista2 llamada list_nums2 (array de enteros)',
    },//9
    {
      'line_explain':'Se declara la una tercera lista list_sums (en esta se van almacenar los resultados de las sumas)',
    },//10
    {
      'line_explain':'Se hace un ciclo para recorrer las listas',
      'var_values':{
        'i':'',
      },
    },//11
    {
      'line_explain':'Se le pide al usuario que ingrese el valor almacenar en la posicion i en la lista 1',
      'output':'Ingrese el numero de la lista 1 en la posicion',
    },//12
    {
      'line_explain':'Se almacena el valor ingresado por el usuario en list_nums1 en la posición i',
    },//13
    {
      'line_explain':'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//14
    {
      'line_explain':'Se le pide al usuario que ingrese el valor almacenar en la posicion i en la lista 2',
      'output':'Ingrese el numero de la lista 2 en la posicion',
    },//15
    {
      'line_explain':'Se almacena el valor ingresado por el usuario en list_nums2 en la posicion i',
    },//16
    {
      'line_explain':'Se borra el buffer para que no haya problema al volver a pedir datos',
    },//17
    {
      'line_explain':'Fin del ciclo',
    },//18
    {
      'line_explain':'Se hace el llamado a la función sum_list pasandole los parametros ya explicados anteriormente',
      'var_values':{
        'list_nums1':'',
        'list_nums2':'',
      },
    },//19
    {
      'line_explain':'Se imprime la lista sumada',
    },//20
    {
      'line_explain':'Se hace un ciclo para recorrer la lista resultante con las sumas',
      'var_values':{
        'i':'',
      },
    },//21
    {
      'line_explain':'Se imprime los valores sumados',
    },//22
    {
      'line_explain':'Se cierra el ciclo',
    },//23
    {
      'line_explain':'Fin del programa',
    },//24
  ]

  constructor(
    private highlightService: HighlightService,
    private modalService: NgbModal,
    private toastr: ToastrService
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
      case 14:
        this.list_nums1.push(this.axu1);
        break;
      case 17:
        this.list_nums2.push(this.axu2);
        break;
      case 20:
        for (let index = 0; index < 3; index++) {
          this.list_nums.push(this.list_nums1[index] + this.list_nums2[index]);
        }
        break;
    }
}

refresh = () => {
  window.location.reload();
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
    case 2:
      this.loop_jump(7,5);
      break;
    case 4:
      if( this.i >= 3 ){
        this.loop_jump(5,1);
      }
      break;
    case 5:
      if( this.i < 3 ){
        this.loop_jump(3,2,2);
      }
      this.i ++;
      break;
    case 7:
      this.loop_jump(20,13);
      this.i = 0;
      break;
    case 12:
      if( this.i >= 3 ){
        this.loop_jump(18,6);
      }
      break;
    case 18:
      this.loop_jump(11,7,2)
      this.i ++;
      break;
    case 20:
      this.loop_jump(2,18,2)
      this.i = 0;
      break;
    case 22:
      if ( this.i >= 3 ){
        this.loop_jump(23,1)        
      }
      break;
    case 23:
      if ( this.i < 3 ){
        this.loop_jump(21,2,2)        
      }
      this.i ++;
      break;
  }
}

validate_input = () => {
  if ( this.current_line === 14){
    if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
      this.toastr.error('Debe ingresar un valor para continuar');
      this.current_line --;
      this.less_top();
    }
    this.axu1 = parseInt(this.inputfield);
    this.inputfield = '';
  }
  if ( this.current_line === 17){
    if ( this.inputfield === '' || isNaN(parseInt(this.inputfield))){
      this.toastr.error('Debe ingresar un valor para continuar');
      this.current_line --;
      this.less_top();
    }
    this.axu2 = parseInt(this.inputfield)
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
        case 'i':
            this.value_vars += `<strong>${key}</strong> = ${this.i}<br/>`
            break;
        case 'list_nums1':
            this.value_vars += `<strong>${key}</strong> = ${this.list_nums1}<br/>`
          break;
        case 'list_nums2':
            this.value_vars += `<strong>${key}</strong> = ${this.list_nums2}<br/>`
          break;
        case 'list_sums':
            this.value_vars += `<strong>${key}</strong> = ${this.list_sums}<br/>`
          break;   
        case 'lista1[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.list_nums1[this.i]}<br/>`
          break;   
        case 'lista2[i]':
            this.value_vars += `<strong>${key}</strong> = ${this.list_nums2[this.i]}<br/>`
          break;   
        default:
          this.value_vars += `<strong>${key}</strong> = ${data[key as keyof typeof data]}<br/>`
          break
      }
    }      
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
      if( this.current_line == 22 ){
        this.value_out = `posicion ${this.i} de la lista contiene ${this.list_nums[this.i]}`
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
