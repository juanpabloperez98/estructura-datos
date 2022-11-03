// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { Approutes } from './app-routing.module';

//My components
import { HomeComponent } from './home/home.component';
import { ModulosComponent } from './modulos/modulos.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { Modulo1IntroduccionComponent } from './modulo1-introduccion/modulo1-introduccion.component';
import { Modulo1TipoComponent } from './modulo1-tipo/modulo1-tipo.component';
import { Modulo1AbstraccionComponent } from './modulo1-abstraccion/modulo1-abstraccion.component';
import { Modulo1FuncionComponent } from './modulo1-funcion/modulo1-funcion.component';
import { Modulo1AlgoritmosComponent } from './modulo1-algoritmos/modulo1-algoritmos.component';
import { Modulo1ArreglosComponent } from './modulo1-arreglos/modulo1-arreglos.component';
import { Modulo1PunterosComponent } from './modulo1-punteros/modulo1-punteros.component';
import { Modulo1CuestionarioComponent } from './modulo1-cuestionario/modulo1-cuestionario.component';
import { Modulo2AbstraccionComponent } from './modulo2-abstraccion/modulo2-abstraccion.component';
import { Modulo2TipoComponent } from './modulo2-tipo/modulo2-tipo.component';
import { Modulo2ClasesComponent } from './modulo2-clases/modulo2-clases.component';
import { Modulo2EspecificacionComponent } from './modulo2-especificacion/modulo2-especificacion.component';
import { Modulo2CuestionarioComponent } from './modulo2-cuestionario/modulo2-cuestionario.component';
import { Modulo3PilasComponent } from './modulo3-pilas/modulo3-pilas.component';
import { Modulo1RepbinaryComponent } from './modulo1-repbinary/modulo1-repbinary.component';

//My modules
import { ComponentsModule } from './components/components.module';

//My service
import { HighlightService } from './services/highlight.service';
import { Modulo3ColasComponent } from './modulo3-colas/modulo3-colas.component';
import { Modulo3ColasPrioridadesComponent } from './modulo3-colas-prioridades/modulo3-colas-prioridades.component';
import { Modulo3ListasComponent } from './modulo3-listas/modulo3-listas.component';
import { Modulo3TablasComponent } from './modulo3-tablas/modulo3-tablas.component';
import { Modulo3CuestionarioComponent } from './modulo3-cuestionario/modulo3-cuestionario.component';


@NgModule({
  declarations: [
    AppComponent,
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
    Modulo2CuestionarioComponent,
    Modulo3PilasComponent,
    Modulo1RepbinaryComponent,
    Modulo3ColasComponent,
    Modulo3ColasPrioridadesComponent,
    Modulo3ListasComponent,
    Modulo3TablasComponent,
    Modulo3CuestionarioComponent,
  ],
  imports: [
    RouterModule.forRoot(Approutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    ToastrModule.forRoot()
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
