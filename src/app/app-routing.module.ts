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

export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // Modulos
  {
    path:'modules',
    component:ModulosComponent,
    pathMatch: 'full'
  },
  //Introducción
  {
    path:'introduccion-blank',
    component:IntroBlankComponent,
    pathMatch: 'full'
  },
  {
    path:'datos-blank',
    component:TiposBlankComponent,
    pathMatch: 'full'
  },
  {
    path:'lineales-blank',
    component:LinealesBlankComponent,
    pathMatch: 'full'
  },
  {
    path:'no-lineales-blank',
    component:NoLinealesBlankComponent,
    pathMatch: 'full'
  },
  //Introducción
  {
    path:'module1/introduccion',
    component:Modulo1IntroduccionComponent,
    pathMatch: 'full'
  },
  //Ejemplos
  {
    path: 'module1',
    children: [
      {
        path: 'ejemplos',
        loadChildren: () => import('./ejemplos-intro-tipos-datos/ejemplos-intro-tipos-datos.module').then(x => x.EjemplosIntroTiposDatosModule)
      }
    ]
  },
  {
    path:'modulo1-introduccion',
    component:Modulo1IntroduccionComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-tipo',
    component:Modulo1TipoComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-representacion',
    component:Modulo1RepresentacionComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-abstraccion',
    component:Modulo1AbstraccionComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-funcion',
    component:Modulo1FuncionComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-algoritmos',
    component:Modulo1AlgoritmosComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-arreglos',
    component:Modulo1ArreglosComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-punteros',
    component:Modulo1PunterosComponent,
    pathMatch: 'full'
  },
  {
    path:'modulo1-cuestionario',
    component:Modulo1CuestionarioComponent,
    pathMatch: 'full'
  },
 //datos abstractos
  {
    path:'modulo2-abstraccion',
    component:Modulo2AbstraccionComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];