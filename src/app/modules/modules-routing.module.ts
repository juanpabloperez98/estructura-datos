import { Routes } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { ModulesComponent } from './modules/modules.component';


export const ModulesRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'main',
        component: ModulesComponent, 

      },
      {
        path: 'introduccion',
        component: IntroduccionComponent, 

      }
    ]
  }
];