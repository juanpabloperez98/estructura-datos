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

    /* children:[
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then( x => x.ModulesModule )
      },
    ] */
  },

  
  {
    path: '**',
    redirectTo: '/auth'
  }
];