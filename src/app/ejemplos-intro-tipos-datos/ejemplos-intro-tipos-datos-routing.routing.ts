import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';

export const EjemplosIntroRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'ejemplo1',
          component: Ejemplo1Component
        },
        {
          path: 'ejemplo2',
          component: Ejemplo2Component
        },
      ]
    }
  ];