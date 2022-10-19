import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { RouterModule } from '@angular/router';
import { EjemplosIntroRoutes } from './ejemplos-intro-tipos-datos-routing.routing';
import { EjemplosComponent } from '../components/ejemplos/ejemplos.component';



@NgModule({
  declarations: [
    Ejemplo1Component,
    EjemplosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosIntroRoutes),
  ]
})
export class EjemplosIntroTiposDatosModule { }
