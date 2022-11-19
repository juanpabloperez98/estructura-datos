import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { EjemplosDatosAbstractosRoutes } from './ejemplos-datos-abstractos-routing.routing';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';


@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosDatosAbstractosRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosDatosAbstractosModule { }
