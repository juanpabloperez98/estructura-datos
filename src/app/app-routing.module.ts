import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroBlankComponent } from './intro-blank/intro-blank.component';
import { LinealesBlankComponent } from './lineales-blank/lineales-blank.component';
import { ModulosComponent } from './modulos/modulos.component';
import { NoLinealesBlankComponent } from './no-lineales-blank/no-lineales-blank.component';
import { TiposBlankComponent } from './tipos-blank/tipos-blank.component';


export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'modules',
    component:ModulosComponent,
    pathMatch: 'full'
  },
  {
    path:'introduccion-blank',
    component:IntroBlankComponent,
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
    path: '**',
    redirectTo: '/auth'
  }
];