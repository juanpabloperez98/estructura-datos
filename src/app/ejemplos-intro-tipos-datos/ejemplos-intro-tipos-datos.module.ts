import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { RouterModule } from '@angular/router';
import { EjemplosIntroRoutes } from './ejemplos-intro-tipos-datos-routing.routing';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';


@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosIntroRoutes),
    ComponentsModule,
    FormsModule,
  ]
})
export class EjemplosIntroTiposDatosModule { }
