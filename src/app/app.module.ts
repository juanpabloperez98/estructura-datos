import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { Approutes } from './app-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { Modulo1IntroduccionComponent } from './modulo1-introduccion/modulo1-introduccion.component';
import { Modulo1TipoComponent } from './modulo1-tipo/modulo1-tipo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Modulo1AbstraccionComponent } from './modulo1-abstraccion/modulo1-abstraccion.component';
import { Modulo1FuncionComponent } from './modulo1-funcion/modulo1-funcion.component';
import { Modulo1AlgoritmosComponent } from './modulo1-algoritmos/modulo1-algoritmos.component';
import { Modulo1ArreglosComponent } from './modulo1-arreglos/modulo1-arreglos.component';
import { Modulo1PunterosComponent } from './modulo1-punteros/modulo1-punteros.component';
import { Modulo1CuestionarioComponent } from './modulo1-cuestionario/modulo1-cuestionario.component';
import { Modulo2AbstraccionComponent } from './modulo2-abstraccion/modulo2-abstraccion.component';
import { HighlightService } from './services/highlight.service';
import { Modulo2TipoComponent } from './modulo2-tipo/modulo2-tipo.component';
import { Modulo2ClasesComponent } from './modulo2-clases/modulo2-clases.component';
import { Modulo2EspecificacionComponent } from './modulo2-especificacion/modulo2-especificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ModulosComponent,
    IntroBlankComponent,
    TiposBlankComponent,
    LinealesBlankComponent,
    NoLinealesBlankComponent,
    Modulo1IntroduccionComponent,
    Modulo1TipoComponent,
    Modulo1AbstraccionComponent,
    Modulo1FuncionComponent,
    Modulo1AlgoritmosComponent,
    Modulo1ArreglosComponent,
    Modulo1PunterosComponent,
    Modulo1CuestionarioComponent,
    Modulo2AbstraccionComponent,
    Modulo2TipoComponent,
    Modulo2ClasesComponent,
    Modulo2EspecificacionComponent,
  ],
  
  imports: [
    RouterModule.forRoot(Approutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  exports: [
    MatSliderModule,
  ],
  providers: [
    HighlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
