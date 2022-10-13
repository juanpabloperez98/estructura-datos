import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulosComponent } from './modulos/modulos.component';


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
    path: '**',
    redirectTo: '/auth'
  }
];