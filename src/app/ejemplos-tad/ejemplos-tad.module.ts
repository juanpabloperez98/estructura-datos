import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { EjemplosTadRoutes } from './ejemplos-tad-routing.routing';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';

@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosTadRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosTadModule { }
