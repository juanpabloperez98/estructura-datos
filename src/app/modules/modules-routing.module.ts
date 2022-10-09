import { Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';


export const ModulesRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'main',
        component: ModulesComponent
      }
    ]
  }
];