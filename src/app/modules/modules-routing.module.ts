import { Routes } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';


export const ModulesRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'main',
        component: ModulesComponent, 

      },
      {
        path: 'main',
        component: ModulesComponent, 

      }
    ]
  }
];