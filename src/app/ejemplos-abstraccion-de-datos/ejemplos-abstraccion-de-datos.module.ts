import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { EjemplosAbstraccionDatosRoutes } from './ejemplos-abstraccion-datos-routing.routing';



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
export class EjemplosAbstraccionDeDatosModule { }
