import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { Modulo1IntroduccionComponent } from './modulo1-introduccion/modulo1-introduccion.component';
import { ModulosComponent } from './modulos/modulos.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';
import { Modulo1RepresentacionComponent } from './modulo1-representacion/modulo1-representacion.component';
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
import { Modulo3ColasComponent } from './modulo3-colas/modulo3-colas.component';
import { Modulo3ColasPrioridadesComponent } from './modulo3-colas-prioridades/modulo3-colas-prioridades.component';
import { Modulo3ListasComponent } from './modulo3-listas/modulo3-listas.component';
import { Modulo3TablasComponent } from './modulo3-tablas/modulo3-tablas.component';
import { Modulo3CuestionarioComponent } from './modulo3-cuestionario/modulo3-cuestionario.component';
import { Modulo4RecursividadComponent } from './modulo4-recursividad/modulo4-recursividad.component';
import { Modulo4BinariosComponent } from './modulo4-binarios/modulo4-binarios.component';
import { Modulo4EquilibradoComponent } from './modulo4-equilibrado/modulo4-equilibrado.component';


export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // Modulos
  {
    path: 'modules',
    component: ModulosComponent,
    pathMatch: 'full'
  },
  //Introducción
  {
    path: 'introduccion-blank',
    component: IntroBlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'datos-blank',
    component: TiposBlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'lineales-blank',
    component: LinealesBlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'no-lineales-blank',
    component: NoLinealesBlankComponent,
    pathMatch: 'full'
  },
  //Introducción
  {
    path: 'module1/introduccion',
    component: Modulo1IntroduccionComponent,
    pathMatch: 'full'
  },
  //Ejemplos
  {
    path: 'module1',
    children: [
      {
        path: '',
        loadChildren: () => import('./ejemplos-intro-tipos-datos/ejemplos-intro-tipos-datos.module').then(x => x.EjemplosIntroTiposDatosModule)
      }
    ]
  },
  {
    path: 'modulo1-introduccion',
    component: Modulo1IntroduccionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-tipo',
    component: Modulo1TipoComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-representacion',
    component: Modulo1RepresentacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-abstraccion',
    component: Modulo1AbstraccionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-funcion',
    component: Modulo1FuncionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-algoritmos',
    component: Modulo1AlgoritmosComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-arreglos',
    component: Modulo1ArreglosComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-punteros',
    component: Modulo1PunterosComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo1-cuestionario',
    component: Modulo1CuestionarioComponent,
    pathMatch: 'full'
  },
  //datos abstractos
  {
    path: 'modulo2-abstraccion',
    component: Modulo2AbstraccionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo2-tipo',
    component: Modulo2TipoComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo2-clases',
    component: Modulo2ClasesComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo2-especificacion',
    component: Modulo2EspecificacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo2-cuestionario',
    component: Modulo2CuestionarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-pilas',
    component: Modulo3PilasComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-colas',
    component: Modulo3ColasComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-colas-prioridad',
    component: Modulo3ColasPrioridadesComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-listas',
    component: Modulo3ListasComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-tablas',
    component: Modulo3TablasComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo3-cuestionario',
    component: Modulo3CuestionarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo4-recursividad',
    component: Modulo4RecursividadComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo4-binarios',
    component: Modulo4BinariosComponent,
    pathMatch: 'full'
  },
  {
    path: 'modulo4-equilibrado',
    component: Modulo4EquilibradoComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth'
  }

];
