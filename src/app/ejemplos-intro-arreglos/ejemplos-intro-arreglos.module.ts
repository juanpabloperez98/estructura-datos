import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { EjemplosAbstraccionDatosRoutes } from './ejemplos-arreglos-routing.routing'
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';

@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EjemplosAbstraccionDatosRoutes),
    FormsModule,
    ComponentsModule
  ]
})
export class EjemplosIntroArreglosModule { }
