import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { EjemplosAbstraccionDatosRoutes } from './ejemplos-concepto-funcion-routing.routing';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    Ejemplo1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosAbstraccionDatosRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosConceptoFuncionModule { }
