import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';


export const EjemplosRepresentacionRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'ejemplo1',
          component: Ejemplo1Component
        },
      ]
    }
  ];