import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { EjemplosDatosAbstractosRoutes } from './ejemplos-datos-abstractos-routing.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosDatosAbstractosRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosDatosAbstractosModule { }
