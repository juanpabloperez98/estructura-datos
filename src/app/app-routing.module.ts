import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { Modulo1IntroduccionComponent } from './modulo1-introduccion/modulo1-introduccion.component';
import { Modulo1TipoComponent } from './modulo1-tipo/modulo1-tipo.component';
import { ModulosComponent } from './modulos/modulos.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';


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
    path:'module1/introduccion',
    component:Modulo1IntroduccionComponent,
    pathMatch: 'full'
  },
  {
    path:'tipos-blank',
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
    path: '**',
    redirectTo: '/auth'
  }
];