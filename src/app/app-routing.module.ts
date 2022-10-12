import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankIntroComponent } from './introduccion/blank-intro/blank-intro.component';
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
    path: 'intro',
    component:BlankIntroComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./introduccion/introduccion.module').then( x => x.IntroduccionModule )
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];