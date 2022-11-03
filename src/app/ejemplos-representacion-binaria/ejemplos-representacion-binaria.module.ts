import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { RouterModule } from '@angular/router';
import { EjemplosRepresentacionRoutes } from './ejemplos-representacion-binaria-routing.routing';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    Ejemplo1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosRepresentacionRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosRepresentacionBinariaModule { }
