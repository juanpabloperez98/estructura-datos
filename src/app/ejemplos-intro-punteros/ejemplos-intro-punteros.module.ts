import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { EjemplosPunterosDatosRoutes } from './ejemplos-punteros-routing.routing'
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';



@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosPunterosDatosRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosIntroPunterosModule { }
