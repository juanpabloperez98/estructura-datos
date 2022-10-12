import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { TiposDatosComponent } from './tipos-datos/tipos-datos.component';
import { RepresentacionBinariaComponent } from './representacion-binaria/representacion-binaria.component';
import { AbstraccionDatosComponent } from './abstraccion-datos/abstraccion-datos.component';
import { ConceptoFuncionComponent } from './concepto-funcion/concepto-funcion.component';
import { AlgoritmosComponent } from './algoritmos/algoritmos.component';
import { ArreglosComponent } from './arreglos/arreglos.component';
import { PunterosComponent } from './punteros/punteros.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { BlankIntroComponent } from './blank-intro/blank-intro.component';



@NgModule({
  declarations: [
    IntroComponent,
    TiposDatosComponent,
    RepresentacionBinariaComponent,
    AbstraccionDatosComponent,
    ConceptoFuncionComponent,
    AlgoritmosComponent,
    ArreglosComponent,
    PunterosComponent,
    CuestionarioComponent,
    BlankIntroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IntroduccionModule { }
