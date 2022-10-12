import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'modules',
    children:[
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then( x => x.ModulesModule )
      },
    ]
  },

  
  {
    path: '**',
    redirectTo: '/auth'
  }
];