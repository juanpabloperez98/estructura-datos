import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { RouterModule } from '@angular/router';
import { EjemplosRepresentacionRoutes } from './ejemplos-representacion-binaria-routing.routing';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';

@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosRepresentacionRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosRepresentacionBinariaModule { }
