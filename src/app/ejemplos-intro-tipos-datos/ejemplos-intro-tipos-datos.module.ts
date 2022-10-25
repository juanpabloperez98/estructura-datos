import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { RouterModule } from '@angular/router';
import { EjemplosIntroRoutes } from './ejemplos-intro-tipos-datos-routing.routing';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Ejemplo1Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosIntroRoutes),
    ComponentsModule,
    FormsModule,
  ]
})
export class EjemplosIntroTiposDatosModule { }
